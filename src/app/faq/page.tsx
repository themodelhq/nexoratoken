import type { Metadata } from "next";
import { pageMeta, siteUrl } from "@/data/nexora";
import { PageHeader } from "@/components/nexora/PageHeader";
import { FAQ } from "@/components/nexora/FAQ";
import { FinalCTA } from "@/components/nexora/FinalCTA";

export const metadata: Metadata = {
  title: pageMeta.faq.title,
  description: pageMeta.faq.description,
  alternates: { canonical: pageMeta.faq.path },
  openGraph: {
    title: pageMeta.faq.title,
    description: pageMeta.faq.description,
    url: `${siteUrl}${pageMeta.faq.path}`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageMeta.faq.title,
    description: pageMeta.faq.description,
  },
};

export default function FaqPage() {
  return (
    <main id="main-content" className="flex-1">
      <PageHeader
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description={pageMeta.faq.description}
      />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
