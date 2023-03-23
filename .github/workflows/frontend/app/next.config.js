/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  output: 'standalone',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  
}

const withPWA = require("next-pwa");
module.exports = withPWA({
	pwa: {
		dest: "public",
		register: true,
        disable: process.env.NODE_ENV === 'development',
		skipWaiting: true,
	},
});

module.exports = nextConfig


module.exports = {
  images: {
    domains: ['coursessor.s3.eu-central-1.amazonaws.com'],
  },
}