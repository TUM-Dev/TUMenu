/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  staticPageGenerationTimeout: 1000,
  images: {
    unoptimized: true,
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/de/mensa-garching',
  //       permanent: false,
  //     },
  //     {
  //       source: '/de',
  //       destination: '/de/mensa-garching',
  //       permanent: false,
  //     },
  //     {
  //       source: '/en',
  //       destination: '/en/mensa-garching',
  //       permanent: false,
  //     },
  //   ]
  // },
}
