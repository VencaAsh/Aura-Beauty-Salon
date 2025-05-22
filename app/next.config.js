/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    remotePatterns: [],
    unoptimized: true, // Always set to true when using export
  },
  // Use export for static site generation
  output: 'export',
  eslint: {
    // Ignorovat ESLint chyby během buildu
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignorovat TypeScript chyby během buildu
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
