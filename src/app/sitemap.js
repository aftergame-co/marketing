export default async function sitemap() {
  const routes = [
    '',
    '/communities',
    '/events',
    '/publishers',
    '/plus',
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