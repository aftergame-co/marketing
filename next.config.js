/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  distDir: 'out'
}

module.exports = nextConfig
