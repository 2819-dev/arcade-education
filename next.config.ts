import type { NextConfig } from "next";

/**
 * Cloudflare Pages: static export (Next 16 is outside @cloudflare/next-on-pages
 * peer range ≤15.5.2). Deploy with `wrangler pages deploy out`.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // cacheComponents / PPR are incompatible with `output: "export"` (Pages static).
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
