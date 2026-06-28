import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    qualities: [75, 90, 100],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
