#!/usr/bin/env node
// Generates data/releases.json from the app's release notes
// (app/src/hooks/useChangelog/changelog.tsx), so they're written once, in the app.
//
//   yarn releases:sync                   update data/releases.json
//   yarn releases:check                  exit 1 if data/releases.json is out of date
//   ... --allow-removed                  allow releases (and their URLs) to disappear
//   CHANGELOG_PATH=/path/to/changelog.tsx yarn releases:sync

import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import vm from 'node:vm'
import { execFileSync, spawnSync } from 'node:child_process'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import { format, isValid, parse } from 'date-fns'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE = path.resolve(
  process.env.CHANGELOG_PATH ?? path.join(ROOT, '../app/src/hooks/useChangelog/changelog.tsx'),
)
const OUTPUT = path.join(ROOT, 'data/releases.json')
const OVERLAYS = path.join(ROOT, 'releases')
const SITE_URL = 'https://www.aftergame.co'

const args = new Set(process.argv.slice(2))
const CHECK = args.has('--check')
const ALLOW_REMOVED = args.has('--allow-removed')

// Change types the site has pill colours for (src/styles/tailwind.css, ReleaseEntry)
const SITE_TYPES = ['feature', 'improvement', 'fix']
// Entry keys in the app's ChangeLog type; anything new must be mapped below or listed here
const KNOWN_KEYS = new Set(['version', 'buildNumber', 'date', 'isMajorRelease', 'skipHomeBanner', 'blurb', 'sections'])
const APP_DATE = 'MMMM d, yyyy'

const fail = (messages: string | string[]): never => {
  console.error(['✗ Release notes sync failed:', ...[messages].flat().map((m) => `  - ${m}`)].join('\n'))
  process.exit(1)
}

// --- Load the app's changelog -------------------------------------------------

if (!fs.existsSync(SOURCE)) {
  fail(`Can't find ${SOURCE}. Check out the app repo next to marketing, or set CHANGELOG_PATH.`)
}

// TypeScript 7 has no in-process transpile API, so its tsc emits CommonJS to a temp dir
const TSC = path.join(path.dirname(createRequire(import.meta.url).resolve('typescript/package.json')), 'bin/tsc')

function transpile(file: string) {
  const outDir = fs.mkdtempSync(path.join(os.tmpdir(), 'releases-sync-'))
  const { status, stdout, stderr } = spawnSync(
    process.execPath,
    [
      TSC,
      file,
      '--outDir',
      outDir,
      '--module',
      'commonjs',
      '--target',
      'es2022',
      '--noCheck',
      '--ignoreConfig',
      '--pretty',
      'false',
    ],
    { encoding: 'utf8' },
  )
  const outputText = status === 0 ? fs.readFileSync(path.join(outDir, `${path.parse(file).name}.js`), 'utf8') : ''
  fs.rmSync(outDir, { recursive: true, force: true })
  if (status !== 0) fail((stdout || stderr).trim().split('\n'))
  return outputText
}

// The app's ChangeLog type. It comes from another repo, so it's validated below.
type AppEntry = {
  version: string
  buildNumber?: number
  date: string
  isMajorRelease?: boolean
  skipHomeBanner?: boolean
  blurb?: string
  sections: { title: string; changes: { type: string; text: string }[] }[]
}

type AppChangelog = {
  ChangelogList: AppEntry[]
  ChangeTypeLabels: Record<string, string>
}

function loadChangelog(file: string): AppChangelog {
  const outputText = transpile(file)
  // Type-only imports are erased; a real import would need the app's modules
  if (/\brequire\(["'`]/.test(outputText)) {
    fail(`${path.basename(file)} must not import anything (the website reads it on its own).`)
  }

  const sandboxModule = { exports: {} }
  const context = vm.createContext(
    { module: sandboxModule, exports: sandboxModule.exports },
    { codeGeneration: { strings: false, wasm: false } },
  )
  vm.runInContext(outputText, context, { filename: file, timeout: 1000 })
  // Copy out of the sandbox as plain JSON values
  return JSON.parse(JSON.stringify(sandboxModule.exports)) as AppChangelog
}

const { ChangelogList, ChangeTypeLabels } = loadChangelog(SOURCE)

// --- Validate -------------------------------------------------------------------

const slugFor = (entry: AppEntry) =>
  `v${entry.version.replaceAll('.', '-')}${entry.buildNumber ? `-build-${entry.buildNumber}` : ''}`
const labelFor = (entry: AppEntry) => `${entry.version}${entry.buildNumber ? ` (build ${entry.buildNumber})` : ''}`

const errors: string[] = []
if (!Array.isArray(ChangelogList) || ChangelogList.length === 0) fail('ChangelogList is missing or empty.')
if (!ChangeTypeLabels || typeof ChangeTypeLabels !== 'object') fail('ChangeTypeLabels is missing.')

for (const type of Object.keys(ChangeTypeLabels)) {
  if (!SITE_TYPES.includes(type))
    errors.push(
      `Change type "${type}" has no pill colour on the website yet (add it to ReleaseEntry and tailwind.css).`,
    )
}

const seenSlugs = new Set<string>()
let previous: AppEntry | undefined
for (const [index, entry] of ChangelogList.entries()) {
  const label = typeof entry?.version === 'string' ? labelFor(entry) : `entry #${index + 1}`
  const err = (message: string) => errors.push(`${label}: ${message}`)

  for (const key of Object.keys(entry)) {
    if (!KNOWN_KEYS.has(key))
      err(`unknown field "${key}". Map it in scripts/sync-releases.mts, or add it to KNOWN_KEYS to ignore it.`)
  }
  if (typeof entry.version !== 'string' || !/^\d+(\.\d+){1,2}$/.test(entry.version))
    err(`version "${entry.version}" should look like "3.5" or "2.8.3"`)
  if (entry.buildNumber !== undefined && !(Number.isInteger(entry.buildNumber) && entry.buildNumber > 0))
    err(`buildNumber "${entry.buildNumber}" should be a positive whole number`)

  const date = parse(String(entry.date), APP_DATE, new Date())
  if (!isValid(date) || format(date, APP_DATE) !== entry.date)
    err(`date "${entry.date}" should be written like "November 24, 2026"`)

  if (!Array.isArray(entry.sections) || entry.sections.length === 0) err('has no sections')
  for (const section of entry.sections ?? []) {
    if (!section?.title?.trim()) err('has a section without a title')
    if (!Array.isArray(section?.changes) || section.changes.length === 0)
      err(`section "${section?.title}" has no changes`)
    for (const change of section?.changes ?? []) {
      if (!(change?.type in ChangeTypeLabels)) err(`unknown change type "${change?.type}" in "${section.title}"`)
      if (!change?.text?.trim()) err(`empty change in "${section.title}"`)
    }
  }

  if (typeof entry.version === 'string') {
    const slug = slugFor(entry)
    if (seenSlugs.has(slug)) err(`is listed twice (${slug})`)
    seenSlugs.add(slug)
  }

  if (previous) {
    if (entry.buildNumber && !previous.buildNumber) err('has a build number but comes after releases without one')
    if (entry.buildNumber && previous.buildNumber && entry.buildNumber >= previous.buildNumber)
      err(`build should be lower than the release above it (${labelFor(previous)}); newest first`)
    const previousDate = parse(String(previous.date), APP_DATE, new Date())
    if (isValid(date) && isValid(previousDate) && date > previousDate)
      err(`is dated after the release above it (${labelFor(previous)}); newest first`)
  }
  previous = entry
}
if (errors.length) fail(errors)

// --- Map to the website's format -----------------------------------------------------

const clean = (text: unknown) => (typeof text === 'string' && text.trim() ? text.trim() : null)

const releases = ChangelogList.map((entry) => ({
  slug: slugFor(entry),
  version: entry.version,
  build: entry.buildNumber ?? null,
  date: format(parse(entry.date, APP_DATE, new Date()), 'yyyy-MM-dd'),
  major: Boolean(entry.isMajorRelease),
  blurb: clean(entry.blurb),
  sections: entry.sections.map((section) => ({
    title: section.title.trim(),
    changes: section.changes.map((change) => ({
      type: change.type,
      text: change.text.trim(),
    })),
  })),
}))

const output = {
  _generated:
    'Generated by `yarn releases:sync` from app/src/hooks/useChangelog/changelog.tsx. Do not edit: change the app, then re-sync.',
  labels: Object.fromEntries(
    SITE_TYPES.filter((type) => type in ChangeTypeLabels).map((type) => [type, ChangeTypeLabels[type]]),
  ),
  releases,
}
const json = `${JSON.stringify(output, null, 2)}\n`

// --- Compare with the current data ------------------------------------------------------

type SiteRelease = (typeof releases)[number]
const current = fs.existsSync(OUTPUT)
  ? (JSON.parse(fs.readFileSync(OUTPUT, 'utf8')) as { releases: SiteRelease[] })
  : { releases: [] }
const before = new Map(current.releases.map((r) => [r.slug, r]))
const after = new Map(releases.map((r) => [r.slug, r]))

const added = releases.filter((r) => !before.has(r.slug))
const removed = current.releases.filter((r) => !after.has(r.slug))
const changed = releases
  .filter((r) => before.has(r.slug) && JSON.stringify(before.get(r.slug)) !== JSON.stringify(r))
  .map((r) => ({
    release: r,
    fields: (Object.keys(r) as (keyof SiteRelease)[]).filter(
      (k) => JSON.stringify(before.get(r.slug)?.[k]) !== JSON.stringify(r[k]),
    ),
  }))

const heading = (r: SiteRelease) => `Version ${r.version}${r.build ? ` · Build ${r.build}` : ''}`
const counts = (r: SiteRelease) => {
  const changes = r.sections.flatMap((s) => s.changes)
  const by = (type: string) => changes.filter((c) => c.type === type).length
  return `${r.sections.length} section${r.sections.length === 1 ? '' : 's'}, ${changes.length} changes (${by('feature')} new, ${by('improvement')} improved, ${by('fix')} fixed)`
}

const lines: string[] = []
added
  .slice(0, 5)
  .forEach((r) =>
    lines.push(`  + ${r.slug}  ${heading(r)} · ${r.date} · ${counts(r)}\n      ${SITE_URL}/releases/${r.slug}`),
  )
if (added.length > 5) lines.push(`  + …and ${added.length - 5} more`)
changed.forEach(({ release, fields }) => lines.push(`  ~ ${release.slug}  changed: ${fields.join(', ')}`))
removed.forEach((r) => lines.push(`  - ${r.slug}  REMOVED`))

const warnings: string[] = []
const overlaySlugs = fs.existsSync(OVERLAYS)
  ? fs
      .readdirSync(OVERLAYS)
      .filter((f) => f.endsWith('.md'))
      .map((f) => f.replace(/\.md$/, ''))
  : []
for (const slug of overlaySlugs) {
  if (!after.has(slug)) warnings.push(`releases/${slug}.md doesn't match any release (the site build will fail)`)
}
try {
  const status = execFileSync(
    'git',
    ['-C', path.dirname(SOURCE), 'status', '--porcelain', '--', path.basename(SOURCE)],
    {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    },
  )
  if (status.trim()) warnings.push(`${path.basename(SOURCE)} has uncommitted changes in the app repo`)
} catch {
  // Not a git checkout; nothing to warn about
}

const upToDate = fs.existsSync(OUTPUT) && fs.readFileSync(OUTPUT, 'utf8') === json

if (removed.length && !ALLOW_REMOVED) {
  fail([
    ...removed.map(
      (r) => `${heading(r)} (${r.slug}) is no longer in the app's changelog, so its page would disappear.`,
    ),
    'If it was renamed, add a redirect from /releases/<old-slug> in .cloudcannon/routing.json and vercel.json,',
    'then re-run with --allow-removed.',
  ])
}

if (upToDate) {
  console.log(`✓ data/releases.json is up to date (${releases.length} releases, newest ${heading(releases[0])}).`)
} else if (CHECK) {
  console.error(['✗ data/releases.json is out of date. Run `yarn releases:sync`.', ...lines].join('\n'))
  process.exitCode = 1
} else {
  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true })
  const temp = `${OUTPUT}.tmp`
  fs.writeFileSync(temp, json)
  fs.renameSync(temp, OUTPUT)
  console.log([`✓ Updated data/releases.json (${releases.length} releases).`, ...lines].join('\n'))
  if (added.length && added.length <= 5) {
    console.log(`\n  To add images or a headline, create releases/<slug>.md (see "Releases" in CLAUDE.md).`)
  }
}
warnings.forEach((w) => console.warn(`  ! ${w}`))
