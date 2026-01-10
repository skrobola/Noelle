import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'awhisperfromnoelle.com',
      },
    ],
  },
};

export default nextConfig;
