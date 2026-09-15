import { Hero } from "@/components/nexora/Hero";
import { TokenStats } from "@/components/nexora/TokenStats";
import { AboutSection } from "@/components/nexora/AboutSection";
import { TokenSection } from "@/components/nexora/TokenSection";
import { HowToBuy } from "@/components/nexora/HowToBuy";
import { Roadmap } from "@/components/nexora/Roadmap";
import { FAQ } from "@/components/nexora/FAQ";
import { Contact } from "@/components/nexora/Contact";
import { FinalCTA } from "@/components/nexora/FinalCTA";

export default function Home() {
  return (
    <main id="main-content" className="flex-1">
      <Hero />
      <TokenStats />
      <AboutSection />
      <TokenSection />
      <HowToBuy />
      <Roadmap />
      <FAQ />
      <Contact />
      <FinalCTA />
    </main>
  );
}
