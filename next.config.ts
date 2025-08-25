import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "assets.zyrosite.com", pathname: "/**" },
    ],
  },
  eslint: { ignoreDuringBuilds: true }, // optional, to not fail CI on lint
};

export default nextConfig;
