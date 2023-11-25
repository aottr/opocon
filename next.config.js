/** @type {import('next').NextConfig} */
const { version } = require('./package.json');
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    pocketbase: 'https://opocon.gay/pb',
    appVersion: version,
  },
  output: 'standalone',
}

module.exports = nextConfig
