/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== 'production';

const nextConfig = {
  pageExtensions: ['tsx'],
  reactStrictMode: true,
  assetPrefix: !debug ? '/peacemain-club.github.io/' : '',
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
