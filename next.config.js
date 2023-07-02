/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ['storage.googleapis.com'],
  },
}

module.exports = nextConfig
