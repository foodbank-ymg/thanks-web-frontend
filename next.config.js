/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    domains: ['storage.googleapis.com'],
    unoptimized: true,
  },
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = nextConfig
