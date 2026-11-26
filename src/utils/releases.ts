// Release notes: data/releases.json (generated from the app by `yarn releases:sync`)
// merged with optional editorial overlays in releases/<slug>.md (images, headline, story, blog link).

import fs from 'fs'
import path from 'path'
import type { Metadata } from 'next'
import matter from 'gray-matter'
import { imageSize } from 'image-size'
import { format, parseISO } from 'date-fns'
import { getSortedPostsData } from '@/utils/posts'
import { type ClassMap, type MarkdownOptions, markdownToHtml, markdownToText } from '@/utils/markdown'
import { DEFAULT_OG_IMAGE, FEEDS, SITE_URL, pageAlternates } from '@/utils/site'

export type ChangeType = 'feature' | 'improvement' | 'fix'
export type Change = { type: ChangeType; text: string }
export type ReleaseSection = { title: string; changes: Change[] }
export type ChangeLabels = Record<ChangeType, string>

// One release in data/releases.json (written by scripts/sync-releases.ts)
type ReleaseData = {
  slug: string
  version: string
  build: number | null
  /** 'yyyy-MM-dd' */
  date: string
  major: boolean
  blurb: string | null
  sections: ReleaseSection[]
}

export type ImageInfo = { src: string; width: number; height: number }
export type ReleaseImage = ImageInfo & { alt: string; caption: string | null }

// From releases/<slug>.md
type Overlay = {
  title: string | null
  description: string | null
  images: ReleaseImage[]
  ogImage: ImageInfo | null
  blogPost: { id: string; title: string } | null
  story: string | null
}

export type Release = ReleaseData & Overlay & { versionAnchor: boolean }

const DATA_FILE = path.join(process.cwd(), 'data/releases.json')
const OVERLAY_DIR = path.join(process.cwd(), 'releases')
const PUBLIC_DIR = path.join(process.cwd(), 'public')

const OVERLAY_KEYS = new Set(['title', 'description', 'images', 'og_image', 'blog_post'])
const IMAGE_KEYS = new Set(['src', 'alt', 'caption'])
// AVIF isn't supported by next-image-export-optimizer
const IMAGE_PATH = /^\/images\/releases\/[^\s]+\.(png|jpe?g|webp)$/i

// Tailwind classes for blurbs (short, may contain **bold** and line breaks)
const BLURB_CLASSES: ClassMap = {
  p: 'mb-3 last:mb-0',
  strong: 'font-semibold text-gray-900',
  a: 'text-gg-blue font-medium hover:underline',
  ul: 'list-disc list-inside mb-3',
  ol: 'list-decimal list-inside mb-3',
}

function readImage(src: unknown, problems: string[]): ImageInfo | null {
  if (typeof src !== 'string' || !IMAGE_PATH.test(src)) {
    problems.push(`image "${String(src)}" must be a .png, .jpg or .webp under /images/releases/`)
    return null
  }
  const file = path.join(PUBLIC_DIR, src)
  if (!fs.existsSync(file)) {
    problems.push(`image ${src} not found (expected public${src})`)
    return null
  }
  const { width, height } = imageSize(fs.readFileSync(file))
  return { src, width, height }
}

function readOverlay(slug: string, postTitles: Map<string, string>): { problems: string[]; overlay: Overlay } {
  const file = path.join(OVERLAY_DIR, `${slug}.md`)
  const parsed = matter(fs.readFileSync(file, 'utf8'))
  const data: Record<string, unknown> = parsed.data
  const content = parsed.content
  const problems: string[] = []
  // Optional text field: null when missing, a problem when not text
  const text = (key: string) => {
    const value = data[key]
    if (value == null) return null
    if (typeof value === 'string') return value
    problems.push(`${key} should be text`)
    return null
  }

  for (const key of Object.keys(data)) {
    if (!OVERLAY_KEYS.has(key)) problems.push(`unknown field "${key}" (allowed: ${[...OVERLAY_KEYS].join(', ')})`)
  }

  const images = ((data.images ?? []) as unknown[]).flatMap((image, index): ReleaseImage[] => {
    if (!image || typeof image !== 'object') {
      problems.push(`images[${index}] should have src and alt`)
      return []
    }
    for (const key of Object.keys(image)) {
      if (!IMAGE_KEYS.has(key)) problems.push(`images[${index}] has unknown field "${key}"`)
    }
    const { src, alt, caption } = image as {
      src?: unknown
      alt?: string
      caption?: string
    }
    if (!alt?.trim()) problems.push(`images[${index}] needs alt text`)
    const info = readImage(src, problems)
    return info ? [{ ...info, alt: alt ?? '', caption: caption ?? null }] : []
  })

  const ogImage = data.og_image ? readImage(data.og_image, problems) : null

  let blogPost = null
  const blogPostId = text('blog_post')
  if (blogPostId) {
    const title = postTitles.get(blogPostId)
    if (title !== undefined) blogPost = { id: blogPostId, title }
    else problems.push(`blog_post "${blogPostId}" doesn't match a file in posts/`)
  }

  return {
    problems: problems.map((problem) => `releases/${slug}.md: ${problem}`),
    overlay: {
      title: text('title'),
      description: text('description'),
      images,
      ogImage,
      blogPost,
      story: content.trim() || null,
    },
  }
}

let cache: { labels: ChangeLabels; releases: Release[] } | undefined

function load() {
  if (cache && process.env.NODE_ENV === 'production') return cache

  // Written by scripts/sync-releases.mts, which validates it
  const { labels, releases } = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8')) as {
    labels: ChangeLabels
    releases: ReleaseData[]
  }
  const slugs = new Set(releases.map((release) => release.slug))
  const overlayFiles = fs.existsSync(OVERLAY_DIR) ? fs.readdirSync(OVERLAY_DIR).filter((f) => f.endsWith('.md')) : []
  const postTitles = new Map(getSortedPostsData().map((post) => [post.id, post.title]))

  const problems: string[] = []
  const overlays = new Map<string, Overlay>()
  for (const fileName of overlayFiles) {
    const slug = fileName.replace(/\.md$/, '')
    if (!slugs.has(slug)) {
      problems.push(`releases/${fileName}: no release with slug "${slug}" in data/releases.json`)
      continue
    }
    const result = readOverlay(slug, postTitles)
    problems.push(...result.problems)
    overlays.set(slug, result.overlay)
  }
  if (problems.length) throw new Error(`Invalid release overlays:\n  - ${problems.join('\n  - ')}`)

  const seenVersions = new Set<string>()
  cache = {
    labels,
    releases: releases.map((release) => {
      // The newest build of each version also answers to the old /releases#<version> links
      const versionAnchor = !seenVersions.has(release.version)
      seenVersions.add(release.version)
      return {
        ...release,
        versionAnchor,
        ...(overlays.get(release.slug) ??
          ({
            title: null,
            description: null,
            images: [],
            ogImage: null,
            blogPost: null,
            story: null,
          } satisfies Overlay)),
      }
    }),
  }
  return cache
}

export const getReleases = () => load().releases
export const getChangeLabels = () => load().labels
export const getReleaseSlugs = () => getReleases().map(({ slug }) => ({ slug }))

export function getReleaseBySlug(slug: string) {
  const releases = getReleases()
  const index = releases.findIndex((release) => release.slug === slug)
  if (index === -1) return null
  return {
    release: releases[index],
    newer: releases[index - 1] ?? null,
    older: releases[index + 1] ?? null,
  }
}

// Markdown → HTML for the parts of a release that are shown (feed: plain HTML with absolute URLs)
export async function renderRelease(release: Release, { feed = false } = {}) {
  const feedOptions: MarkdownOptions = { classes: false, baseUrl: SITE_URL }
  return {
    blurbHtml: release.blurb
      ? await markdownToHtml(release.blurb, {
          breaks: true,
          ...(feed ? feedOptions : { classes: BLURB_CLASSES }),
        })
      : null,
    storyHtml: release.story ? await markdownToHtml(release.story, feed ? feedOptions : {}) : null,
  }
}

export const releaseHeading = (release: Pick<Release, 'version' | 'build'>) =>
  `Version ${release.version}${release.build ? ` · Build ${release.build}` : ''}`

export const releasePageTitle = (release: Pick<Release, 'version' | 'build' | 'title'>) => {
  const version = `Version ${release.version}${release.build ? ` (build ${release.build})` : ''}`
  return release.title ? `${release.title} · ${version}` : version
}

// Dates are 'yyyy-MM-dd'; parseISO keeps the local day (new Date() would read it as UTC)
export const formatReleaseDate = (isoDay: string) => format(parseISO(isoDay), 'MMMM d, yyyy')

function truncate(text: string, max: number) {
  if (text.length <= max) return text
  const cut = text.slice(0, max - 1)
  return `${cut.slice(0, cut.lastIndexOf(' ') > 0 ? cut.lastIndexOf(' ') : cut.length)}…`
}

// Plain text for meta descriptions, archive rows and feeds
export function releaseDescription(release: Release, max = 160) {
  if (release.description) return release.description
  if (release.blurb) return truncate(markdownToText(release.blurb), max)

  const changes = release.sections.flatMap((section) => section.changes)
  const count = (type: ChangeType, one: string, many: string) => {
    const n = changes.filter((change) => change.type === type).length
    return n ? `${n} ${n === 1 ? one : many}` : null
  }
  const parts = [
    count('feature', 'new feature', 'new features'),
    count('improvement', 'improvement', 'improvements'),
    count('fix', 'fix', 'fixes'),
  ].filter(Boolean)
  const list = parts.length > 1 ? `${parts.slice(0, -1).join(', ')} and ${parts.at(-1)}` : parts[0]
  return `${releasePageTitle(release)}, released ${formatReleaseDate(release.date)}: ${list}.`
}

// Full metadata for releases pages (Next merges metadata shallowly, so partial
// alternates/openGraph objects would drop the root layout's feed links and site name)
export function releasesMetadata({
  path,
  title,
  description,
  image,
  publishedTime,
}: {
  path: string
  title: string
  description: string
  image?: ImageInfo & { alt?: string }
  publishedTime?: string
}): Metadata {
  const ogImage = image
    ? {
        url: `${SITE_URL}${image.src}`,
        width: image.width,
        height: image.height,
        alt: image.alt ?? title,
      }
    : DEFAULT_OG_IMAGE
  return {
    title,
    description,
    alternates: pageAlternates(path, [FEEDS.releases]),
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${path}`,
      siteName: 'Aftergame',
      locale: 'en-US',
      type: publishedTime ? 'article' : 'website',
      ...(publishedTime && { publishedTime }),
      images: [ogImage],
    },
  }
}
