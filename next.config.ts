import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'docs',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/sacercode/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/sacercode' : '',
};

export default nextConfig;
