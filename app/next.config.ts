import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [],
    remotePatterns: [],
    unoptimized: process.env.NODE_ENV === 'production',
  },
  output: 'standalone',
  eslint: {
    // Ignorovat ESLint chyby během buildu
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignorovat TypeScript chyby během buildu
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
