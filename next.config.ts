import { networkInterfaces } from 'node:os'
import type { NextConfig } from 'next'

// `next dev` only serves its client JS (HMR) to localhost by default. Allow this
// machine's own LAN addresses so the "Network" URL (e.g. on a phone) hydrates.
const lanAddresses = Object.values(networkInterfaces())
  .flatMap((nets) => nets ?? [])
  .filter((net) => net.family === 'IPv4' && !net.internal)
  .map((net) => net.address)

const nextConfig: NextConfig = {
  // Static HTML export to `out/` for static hosting (CloudCannon)
  output: 'export',
  reactStrictMode: true,
  allowedDevOrigins: ['127.0.0.1', ...lanAddresses],
  // Images are optimized at build time by next-image-export-optimizer
  // (see src/components/Image.jsx and the `build` script)
  images: {
    loader: 'custom',
    imageSizes: [32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  transpilePackages: ['next-image-export-optimizer'],
  env: {
    nextImageExportOptimizer_imageFolderPath: 'public/images',
    nextImageExportOptimizer_exportFolderPath: 'out',
    nextImageExportOptimizer_quality: '75',
    nextImageExportOptimizer_storePicturesInWEBP: 'true',
    nextImageExportOptimizer_exportFolderName: 'nextImageExportOptimizer',
    nextImageExportOptimizer_generateAndUseBlurImages: 'false',
  },
  experimental: {
    scrollRestoration: true,
  },
}

export default nextConfig
