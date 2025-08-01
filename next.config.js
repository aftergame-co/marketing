/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'out',
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = nextConfig
