import type { NextConfig } from "next";

/**
 * NEXORA — Static-first Next.js configuration.
 *
 * The site is a public informational/Web3 website with no backend,
 * database, auth, or server APIs. We use Next.js static export so the
 * production build emits a plain `out/` directory that can be hosted on
 * Netlify or Render as a static site.
 */
const nextConfig: NextConfig = {
  output: "export",
  // Static export cannot use the Next.js image optimization server.
  // Images are served as-is (already optimized at the asset level).
  images: {
    unoptimized: true,
  },
  // Append trailing slashes so every route resolves to a static
  // index.html on Netlify/Render static hosting (e.g. /about/ -> /about/index.html).
  trailingSlash: true,
  // Keep build resilient; type/lint checks are run separately via `npm run lint`.
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
