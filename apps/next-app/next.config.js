/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    externalDir: true
  }
}

module.exports = nextConfig

// const withTM = require('next-transpile-modules')(['@3hk/common'])
// module.exports = withTM()

