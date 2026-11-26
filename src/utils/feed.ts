import { SITE_URL } from '@/utils/site'

// Characters that are invalid in XML 1.0 (matching control characters is the point)
// oxlint-disable-next-line no-control-regex
const INVALID_XML = /[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g

export function escapeXml(value: unknown) {
  return String(value)
    .replace(INVALID_XML, '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

// For text placed inside a feed item's HTML (content:encoded)
export function escapeHtml(value: unknown) {
  return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

const cdata = (value: string) =>
  `<![CDATA[${String(value).replace(INVALID_XML, '').replaceAll(']]>', ']]]]><![CDATA[>')}]]>`

// RFC 822 date for an ISO 'yyyy-MM-dd' day, e.g. "Tue, 24 Nov 2026 00:00:00 GMT"
const rfc822 = (isoDay: string) => new Date(`${isoDay}T00:00:00Z`).toUTCString()

export type FeedItem = {
  title: string
  path: string
  /** 'yyyy-MM-dd' */
  date: string
  /** Plain text */
  description: string
  html?: string | null
  author?: string
  categories?: string[]
}

/** RSS 2.0 feed. Items are newest first. */
export function buildRssFeed({
  title,
  description,
  path,
  selfPath,
  items,
}: {
  title: string
  description: string
  path: string
  selfPath: string
  items: FeedItem[]
}) {
  const entries = items.map((item) => {
    const url = escapeXml(`${SITE_URL}${item.path}`)
    return [
      '    <item>',
      `      <title>${escapeXml(item.title)}</title>`,
      `      <link>${url}</link>`,
      `      <guid isPermaLink="true">${url}</guid>`,
      `      <pubDate>${rfc822(item.date)}</pubDate>`,
      item.author && `      <dc:creator>${escapeXml(item.author)}</dc:creator>`,
      ...(item.categories ?? []).map((category) => `      <category>${escapeXml(category)}</category>`),
      `      <description>${escapeXml(item.description)}</description>`,
      item.html && `      <content:encoded>${cdata(item.html)}</content:encoded>`,
      '    </item>',
    ]
      .filter(Boolean)
      .join('\n')
  })

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/">',
    '  <channel>',
    `    <title>${escapeXml(title)}</title>`,
    `    <link>${escapeXml(`${SITE_URL}${path}`)}</link>`,
    `    <description>${escapeXml(description)}</description>`,
    '    <language>en</language>',
    `    <atom:link href="${escapeXml(`${SITE_URL}${selfPath}`)}" rel="self" type="application/rss+xml" />`,
    // The newest item's date (not the build time), so rebuilding doesn't change the feed
    items.length > 0 && `    <lastBuildDate>${rfc822(items[0].date)}</lastBuildDate>`,
    ...entries,
    '  </channel>',
    '</rss>',
    '',
  ]
    .filter(Boolean)
    .join('\n')
}

export function rssResponse(xml: string) {
  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  })
}
