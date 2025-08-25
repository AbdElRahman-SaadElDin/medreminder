import type { NextConfig } from "next";

const base = "/medreminder"; // <-- your repo name

const nextConfig: NextConfig = {
  output: "export",          // static export => ./out
  basePath: base,
  assetPrefix: base + "/",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/" },
      { protocol: "https", hostname: "assets.zyrosite.com", pathname: "/" },
    ],
  },
  eslint: { ignoreDuringBuilds: true }, // optional, to avoid failing CI on lint
};

export default nextConfig;
