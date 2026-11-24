const { networkInterfaces } = require('node:os')

// `next dev` only serves its client JS (HMR) to localhost by default. Allow this
// machine's own LAN addresses so the "Network" URL (e.g. on a phone) hydrates.
const lanAddresses = Object.values(networkInterfaces())
  .flat()
  .filter((net) => net?.family === 'IPv4' && !net.internal)
  .map((net) => net.address)

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'out',
  allowedDevOrigins: ['127.0.0.1', ...lanAddresses],
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = nextConfig
