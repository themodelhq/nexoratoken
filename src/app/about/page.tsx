import type { Metadata } from "next";
import { pageMeta, siteUrl } from "@/data/nexora";
import { PageHeader } from "@/components/nexora/PageHeader";
import { AboutSection } from "@/components/nexora/AboutSection";
import { FinalCTA } from "@/components/nexora/FinalCTA";

export const metadata: Metadata = {
  title: pageMeta.about.title,
  description: pageMeta.about.description,
  alternates: { canonical: pageMeta.about.path },
  openGraph: {
    title: pageMeta.about.title,
    description: pageMeta.about.description,
    url: `${siteUrl}${pageMeta.about.path}`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageMeta.about.title,
    description: pageMeta.about.description,
  },
};

export default function AboutPage() {
  return (
    <main id="main-content" className="flex-1">
      <PageHeader
        eyebrow="About"
        title="About Nexora"
        description={pageMeta.about.description}
      />
      <AboutSection />
      <FinalCTA />
    </main>
  );
}
