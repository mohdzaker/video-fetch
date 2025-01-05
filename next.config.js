/** @type {import('next').NextConfig} */
const nextConfig = {
  output: '/me',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
