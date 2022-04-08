/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== 'production';

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: !debug ? '/peacemain-club.github.io/' : '',
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
