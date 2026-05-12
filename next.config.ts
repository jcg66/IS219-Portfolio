import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/IS219-Portfolio",
  assetPrefix: "/IS219-Portfolio/",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;

