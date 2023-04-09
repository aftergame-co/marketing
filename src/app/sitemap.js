export default async function sitemap() {

  const routes = ['', '/designers', '/about', '/privacy'].map((route) => ({
    url: `https://www.goodgamedata.com${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}