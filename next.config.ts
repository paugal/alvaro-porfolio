import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["fonts.googleapis.com", "fonts.gstatic.com"],
  },
};

export default nextConfig;
