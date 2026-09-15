import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/nexora";

// Required for static export — sitemap.xml is generated at build time only.
export const dynamic = "force-static";

/**
 * Generates /sitemap.xml at build time using the configured site URL.
 * Covers every public route in the multi-page architecture.
 * The site URL comes from NEXT_PUBLIC_SITE_URL (see src/data/nexora.ts).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/token",
    "/how-to-buy",
    "/roadmap",
    "/faq",
    "/contact",
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
