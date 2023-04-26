/** @type {import('next').NextConfig} */
const withTwin = require('./withTwin.js');

const nextConfig = {
  eslint: {
    dirs: ['src'],
  },
  images: {
    domains: ['tailwindui.com', 'images.unsplash.com', 'images.unsplash.com'],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },

  reactStrictMode: true,
  swcMinify: true,

  // Uncoment to add domain whitelist
  // images: {
  //   domains: [
  //     'res.cloudinary.com',
  //   ],
  // },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};

module.exports = withTwin(nextConfig);
