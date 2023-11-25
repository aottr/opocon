/** @type {import('next').NextConfig} */
const { version } = require('./package.json');
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    pocketbase: 'http://localhost:8090',
    appVersion: version,
  },
  output: 'standalone',
}

module.exports = nextConfig
