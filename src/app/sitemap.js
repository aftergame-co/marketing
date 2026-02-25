export default async function sitemap() {
  const routes = [
    '',
    '/communities',
    '/conventions',
    '/publishers',
    '/retailers',
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