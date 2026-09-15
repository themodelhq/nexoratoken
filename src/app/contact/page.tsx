import type { Metadata } from "next";
import { pageMeta, siteUrl } from "@/data/nexora";
import { PageHeader } from "@/components/nexora/PageHeader";
import { Contact } from "@/components/nexora/Contact";

export const metadata: Metadata = {
  title: pageMeta.contact.title,
  description: pageMeta.contact.description,
  alternates: { canonical: pageMeta.contact.path },
  openGraph: {
    title: pageMeta.contact.title,
    description: pageMeta.contact.description,
    url: `${siteUrl}${pageMeta.contact.path}`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageMeta.contact.title,
    description: pageMeta.contact.description,
  },
};

export default function ContactPage() {
  return (
    <main id="main-content" className="flex-1">
      <PageHeader
        eyebrow="Contact"
        title="Contact Nexora"
        description={pageMeta.contact.description}
      />
      <Contact />
    </main>
  );
}
