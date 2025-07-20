import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.NODE_ENV === "production" ? "/alvaro-porfolio" : "",
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ["fonts.googleapis.com", "fonts.gstatic.com"],
  },
};

export default nextConfig;
