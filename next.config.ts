import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    domains: ['localhost'],
    unoptimized: true, // For self-hosted deployment
  },
  serverExternalPackages: ['@prisma/client'],
};

export default nextConfig;
