import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "placehold.co",
        protocol: "https",
      },
      {
        hostname: "maysicurezza.it",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
