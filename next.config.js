/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  experimental: {
    appDir: true,
    scrollRestoration: true,
  },
}

module.exports = nextConfig
