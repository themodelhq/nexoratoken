import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/nexora";

// Required for static export — robots.txt is generated at build time only.
export const dynamic = "force-static";

/**
 * Generates /robots.txt at build time using the configured site URL.
 * The site URL comes from NEXT_PUBLIC_SITE_URL (see src/data/nexora.ts).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
