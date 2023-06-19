export default async function sitemap() {

  const routes = ['', '/publishers', '/about', '/privacy', '/terms', '/waitlist'].map((route) => ({
    url: `https://www.aftergame.co${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}