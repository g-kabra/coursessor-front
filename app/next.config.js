/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/ro/blog',
        permanent: false,
      },
    ]
  },
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
    domains: ['cdn-images.coursessor.com', 'cdn-videos.coursessor.com'],
  },
}