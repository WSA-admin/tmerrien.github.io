import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: '/tmerrien.github.io',
  assetPrefix: '/tmerrien.github.io',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
