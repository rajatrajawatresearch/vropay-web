/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: '.next',
  images: {
    domains: ['images.unsplash.com'],
  },
  experimental: {
    optimizeCss: true,
  },
  env: {
    PORT: '3002',
  },
};

module.exports = nextConfig; 