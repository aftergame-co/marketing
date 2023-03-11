/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'out',
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
