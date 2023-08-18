/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: { unoptimized: true, domains: ['images.pexels.com', 'example.com'] },
};
module.exports = nextConfig;
