import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [],
    remotePatterns: [],
    unoptimized: process.env.NODE_ENV === 'production',
  },
  output: 'standalone',
};

export default nextConfig;
