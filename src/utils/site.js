export const SITE_URL = 'https://www.aftergame.co'

export const DEFAULT_OG_IMAGE = {
  url: `${SITE_URL}/images/ag-thumbnail-new.png`,
  alt: 'Aftergame | The social tabletop gaming app',
  width: 1200,
  height: 630,
}

export const FEEDS = {
  blog: { url: `${SITE_URL}/blog/feed.xml`, title: 'Aftergame blog' },
  releases: { url: `${SITE_URL}/releases/feed.xml`, title: 'Aftergame releases' },
}

// A page's `alternates` replaces the root layout's, so pages that set a canonical
// list the RSS feeds they want advertised (<link rel="alternate" type="application/rss+xml">)
export function pageAlternates(path, feeds = []) {
  return {
    canonical: path,
    ...(feeds.length > 0 && { types: { 'application/rss+xml': feeds } }),
  }
}

// 'yyyy-MM-dd' from front matter dates, which gray-matter may parse into a Date
export function isoDate(value) {
  return value instanceof Date ? value.toISOString().slice(0, 10) : String(value)
}
