import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // ...
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
