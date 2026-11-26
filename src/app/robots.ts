import type { MetadataRoute } from 'next'

// Pre-rendered to a static file for `output: 'export'`
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://www.aftergame.co/sitemap.xml',
  }
}
