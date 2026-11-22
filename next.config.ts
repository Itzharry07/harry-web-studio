import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `npm run build` writes plain HTML/CSS/JS to the `out/` folder,
  // which any static host (Vercel, Netlify, Cloudflare Pages) can serve.
  output: "export",
  // Images are served as-is (there is no image server in a static export).
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
