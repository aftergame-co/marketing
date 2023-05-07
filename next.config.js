/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'out',
  experimental: {
    appDir: true,
    scrollRestoration: true,
  },
  async redirects() {
    return [
      {
        source: '/designers',
        destination: '/publishers',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
