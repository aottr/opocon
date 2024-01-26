/** @type {import('next').NextConfig} */
const { version } = require('./package.json');
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    pocketbase: process.env.POCKETBASE_HOST,
    appVersion: version,
  },
  output: 'standalone',
}

module.exports = nextConfig
