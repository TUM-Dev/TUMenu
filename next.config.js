/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  staticPageGenerationTimeout: 1000,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/de/mensa-garching',
        permanent: true,
      },
      {
        source: '/de',
        destination: '/de/mensa-garching',
        permanent: true,
      },
      {
        source: '/en',
        destination: '/en/mensa-garching',
        permanent: true,
      },
    ]
  },
}
