import type { Metadata } from "next";
import { pageMeta, siteUrl } from "@/data/nexora";
import { PageHeader } from "@/components/nexora/PageHeader";
import { TokenStats } from "@/components/nexora/TokenStats";
import { TokenSection } from "@/components/nexora/TokenSection";
import { FinalCTA } from "@/components/nexora/FinalCTA";

export const metadata: Metadata = {
  title: pageMeta.token.title,
  description: pageMeta.token.description,
  alternates: { canonical: pageMeta.token.path },
  openGraph: {
    title: pageMeta.token.title,
    description: pageMeta.token.description,
    url: `${siteUrl}${pageMeta.token.path}`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageMeta.token.title,
    description: pageMeta.token.description,
  },
};

export default function TokenPage() {
  return (
    <main id="main-content" className="flex-1">
      <PageHeader
        eyebrow="Token"
        title="NEXORA Token"
        description={pageMeta.token.description}
      />
      <TokenStats />
      <TokenSection />
      <FinalCTA />
    </main>
  );
}
