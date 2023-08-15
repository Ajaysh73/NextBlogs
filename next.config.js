/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  trailingSlash: true,
  images: { unoptimized: true, domains: ['images.pexels.com', 'example.com'] },
};
module.exports = nextConfig;
