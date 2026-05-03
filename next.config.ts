import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.freddieburti.com.br",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
