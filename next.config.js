import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

module.exports = nextConfig;