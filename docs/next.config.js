/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  basePath: '/Tedx-Web',
  assetPrefix: '/Tedx-Web/',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
