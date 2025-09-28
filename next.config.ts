import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    domains: ['localhost'],
    unoptimized: true, // For self-hosted deployment
  },
  serverExternalPackages: ['@prisma/client'],
  // Allow cross-origin requests for mobile testing
  allowedDevOrigins: ['192.168.0.100:3000', 'localhost:3000'],
};

export default nextConfig;
