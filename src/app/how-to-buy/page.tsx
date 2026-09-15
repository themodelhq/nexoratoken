import type { Metadata } from "next";
import { pageMeta, siteUrl } from "@/data/nexora";
import { PageHeader } from "@/components/nexora/PageHeader";
import { HowToBuy } from "@/components/nexora/HowToBuy";
import { FinalCTA } from "@/components/nexora/FinalCTA";

export const metadata: Metadata = {
  title: pageMeta.howToBuy.title,
  description: pageMeta.howToBuy.description,
  alternates: { canonical: pageMeta.howToBuy.path },
  openGraph: {
    title: pageMeta.howToBuy.title,
    description: pageMeta.howToBuy.description,
    url: `${siteUrl}${pageMeta.howToBuy.path}`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageMeta.howToBuy.title,
    description: pageMeta.howToBuy.description,
  },
};

export default function HowToBuyPage() {
  return (
    <main id="main-content" className="flex-1">
      <PageHeader
        eyebrow="How to Buy"
        title="How to Buy NEXORA"
        description={pageMeta.howToBuy.description}
      />
      <HowToBuy />
      <FinalCTA />
    </main>
  );
}
