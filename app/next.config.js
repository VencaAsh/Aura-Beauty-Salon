const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  compress: true,
  poweredByHeader: false,

  // Image optimization for static export
  images: {
    domains: [],
    remotePatterns: [],
    unoptimized: true, // Required for static export
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year
  },

  // Use export for static site generation
  output: 'export',

  // Server external packages (moved from experimental in Next.js 15.x)
  serverExternalPackages: ['sharp'],

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Enhanced webpack configuration
  webpack: (config, { isServer, dev }) => {
    // External dependencies optimization
    if (isServer) {
      const externalDeps = ['swiper', 'swiper/react', 'swiper/css'];
      config.externals = [...(config.externals || []), ...externalDeps];
    }

    // Production optimizations
    if (!dev) {
      // Enable tree shaking
      config.optimization = {
        ...config.optimization,
        usedExports: true,
        sideEffects: false,
        // Minimize JavaScript
        minimize: true,
      };

      // Enhanced chunk optimization
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        cacheGroups: {
          // Framework chunk (React, Next.js)
          framework: {
            test: /[\\/]node_modules[\\/](react|react-dom|next)[\\/]/,
            name: 'framework',
            chunks: 'all',
            priority: 40,
            enforce: true,
          },
          // Vendor libraries
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 30,
            maxSize: 200000,
          },
          // Common code
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 20,
            enforce: true,
            maxSize: 100000,
          },
          // Large libraries (separate chunks)
          framerMotion: {
            test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
            name: 'framer-motion',
            chunks: 'all',
            priority: 35,
          },
          swiper: {
            test: /[\\/]node_modules[\\/]swiper[\\/]/,
            name: 'swiper',
            chunks: 'all',
            priority: 35,
          },
        },
      };
    }

    return config;
  },

  // Experimental features for performance (Next.js 15.x compatible)
  experimental: {
    // CSS optimization is now stable in Next.js 15.x
    optimizeCss: true,
    // Package import optimization for better tree shaking
    optimizePackageImports: ['lucide-react', 'framer-motion', 'react-icons'],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
