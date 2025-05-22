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
  // Add external dependencies for Rollup
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Mark swiper as external dependency
      const externalDeps = ['swiper', 'swiper/react', 'swiper/css'];

      // Add any existing externals
      config.externals = [...(config.externals || []), ...externalDeps];
    }

    return config;
  },
};

module.exports = nextConfig;
