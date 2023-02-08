/** @type {import('next').NextConfig} */

// change this to "" when in dev mode
const repo = '/TUMenu'

const assetPrefix = `/${repo}`
const basePath = `/${repo}`

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  staticPageGenerationTimeout: 1000,
  assetPrefix,
  basePath,
  images: {
    unoptimized: true,
  },
}
