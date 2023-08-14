/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.pexels.com', 'example.com'],
  },
};
module.exports = nextConfig;
