import { SITE_URL } from '@/utils/site'

// Characters that are invalid in XML 1.0
const INVALID_XML = /[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g

export function escapeXml(value) {
  return String(value)
    .replace(INVALID_XML, '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

// For text placed inside a feed item's HTML (content:encoded)
export function escapeHtml(value) {
  return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

const cdata = (value) => `<![CDATA[${String(value).replace(INVALID_XML, '').replaceAll(']]>', ']]]]><![CDATA[>')}]]>`

// RFC 822 date for an ISO 'yyyy-MM-dd' day, e.g. "Tue, 24 Nov 2026 00:00:00 GMT"
const rfc822 = (isoDay) => new Date(`${isoDay}T00:00:00Z`).toUTCString()

/**
 * RSS 2.0 feed. Items are newest first:
 * { title, path, date: 'yyyy-MM-dd', description (plain text), html?, author?, categories? }
 */
export function buildRssFeed({ title, description, path, selfPath, items }) {
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

export function rssResponse(xml) {
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } })
}
