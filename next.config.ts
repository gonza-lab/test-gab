import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      source: "/",
      destination: "/brackets",
      permanent: true,
    },
  ],
};

export default nextConfig;
