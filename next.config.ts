import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode
  reactStrictMode: true,

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compression
  compress: true,

  // Trailing slash for SEO
  trailingSlash: true,

  // Headers for security and caching
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ]
  },

  // Redirects: 301 old 2026 slugs -> 2027 (SEO-preserving after year rename)
  async redirects() {
    const renamed = [
      'entradas-roland-garros',
      'calendario-roland-garros',
      'jugadores-favoritos',
      'premios-roland-garros',
      'paquetes-roland-garros',
      'final-roland-garros',
    ]
    return renamed.flatMap((slug) => [
      { source: `/${slug}-2026`, destination: `/${slug}-2027`, permanent: true },
      { source: `/${slug}-2026/:path*`, destination: `/${slug}-2027/:path*`, permanent: true },
    ])
  },
};

export default nextConfig;
