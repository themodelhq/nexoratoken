import type { Metadata } from "next";
import { pageMeta, siteUrl } from "@/data/nexora";
import { PageHeader } from "@/components/nexora/PageHeader";
import { Roadmap } from "@/components/nexora/Roadmap";
import { FinalCTA } from "@/components/nexora/FinalCTA";

export const metadata: Metadata = {
  title: pageMeta.roadmap.title,
  description: pageMeta.roadmap.description,
  alternates: { canonical: pageMeta.roadmap.path },
  openGraph: {
    title: pageMeta.roadmap.title,
    description: pageMeta.roadmap.description,
    url: `${siteUrl}${pageMeta.roadmap.path}`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageMeta.roadmap.title,
    description: pageMeta.roadmap.description,
  },
};

export default function RoadmapPage() {
  return (
    <main id="main-content" className="flex-1">
      <PageHeader
        eyebrow="Roadmap"
        title="NEXORA Roadmap"
        description={pageMeta.roadmap.description}
      />
      <Roadmap />
      <FinalCTA />
    </main>
  );
}
