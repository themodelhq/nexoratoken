import Link from "next/link";
import { ArrowRight, FileText, Home } from "lucide-react";
import { nexoraLinks } from "@/data/nexora";
import { NexoraMark } from "@/components/nexora/NexoraMark";

export default function NotFound() {
  return (
    <main id="main-content" className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-4 py-32 text-center">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-nexora-radial" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 bg-nexora-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        aria-hidden="true"
      />

      <NexoraMark className="h-16 w-16 sm:h-20 sm:w-20 animate-float" withGlow />

      <p className="mt-8 font-display text-xs uppercase tracking-[0.3em] text-gold">
        Error 404
      </p>
      <h1 className="mt-3 font-display text-4xl font-bold text-silver-gradient sm:text-5xl">
        NEXORA — Page Not Found
      </h1>
      <p className="mt-4 max-w-md text-sm text-muted-foreground">
        The page you are looking for does not exist or has been moved. Return to
        the official NEXORA homepage or explore the token resources.
      </p>

      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
        <Link
          href="/"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-near-black transition-all hover:bg-gold-light sm:w-auto"
        >
          <Home className="h-4 w-4" aria-hidden="true" />
          Return Home
        </Link>
        <Link
          href="/token"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gold/30 bg-white/[0.02] px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-gold/60 hover:bg-gold/5 sm:w-auto"
        >
          Explore Token
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        <Link
          href="/how-to-buy"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gold/30 bg-white/[0.02] px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-gold/60 hover:bg-gold/5 sm:w-auto"
        >
          <FileText className="h-4 w-4 text-gold" aria-hidden="true" />
          How to Buy
        </Link>
      </div>

      <p className="mt-8 text-xs text-muted-foreground/70">
        Always verify the NEXORA contract on{" "}
        <a
          href={nexoraLinks.etherscanToken}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:underline"
        >
          Etherscan
        </a>{" "}
        before interacting.
      </p>
    </main>
  );
}
