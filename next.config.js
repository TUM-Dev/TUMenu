/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  staticPageGenerationTimeout: 1000,
  eslint: {
    ignoreDuringBuilds: true,
  },
}
