import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/alvaro-porfolio",
  assetPrefix: "/alvaro-porfolio/",
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ["fonts.googleapis.com", "fonts.gstatic.com"],
  },
};

export default nextConfig;
