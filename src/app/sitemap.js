// Pre-rendered to a static file for `output: 'export'`
export const dynamic = 'force-static'

export default async function sitemap() {
  const routes = [
    '',
    '/conventions',
    '/publishers',
    '/retailers',
    '/pricing',
    '/blog',
    '/about',
    '/privacy',
    '/terms',
    '/download',
    '/contact',
    '/releases',
  ].map((route) => ({
    url: `https://www.aftergame.co${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}