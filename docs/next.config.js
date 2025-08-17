/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  // Solo usar basePath en producción para GitHub Pages
  ...(process.env.NODE_ENV === 'production' && process.env.GITHUB_ACTIONS && {
    basePath: '/Tedx-Web',
    assetPrefix: '/Tedx-Web/',
  }),
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
