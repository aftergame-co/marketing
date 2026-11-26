import type { MetadataRoute } from 'next'
import { getSortedPostsData } from '@/utils/posts'
import { getReleases } from '@/utils/releases'
import { SITE_URL, isoDate } from '@/utils/site'

// Pre-rendered to a static file for `output: 'export'`
export const dynamic = 'force-static'

// Pages with no reliable last-modified date: leaving it out beats a made-up one
const STATIC_PAGES = [
  '',
  '/conventions',
  '/publishers',
  '/retailers',
  '/pricing',
  '/about',
  '/privacy',
  '/terms',
  // '/gdpr',
  '/download',
  '/contact',
  '/contact/demo',
  '/contact/organizer',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getSortedPostsData()
  const releases = getReleases()

  return [
    ...STATIC_PAGES.map((page) => ({ url: `${SITE_URL}${page}` })),
    { url: `${SITE_URL}/blog`, lastModified: isoDate(posts[0].date) },
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.id}`,
      lastModified: isoDate(post.date),
    })),
    { url: `${SITE_URL}/releases`, lastModified: releases[0].date },
    ...releases.map((release) => ({
      url: `${SITE_URL}/releases/${release.slug}`,
      lastModified: release.date,
      ...(release.images.length > 0 && {
        images: release.images.map((image) => `${SITE_URL}${image.src}`),
      }),
    })),
  ]
}
