"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import { nexora, nexoraLinks } from "@/data/nexora";
import { NexoraMark } from "./NexoraMark";
import { ExternalLink } from "./ExternalLink";

export function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative py-20 sm:py-28"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-gold/25 p-8 sm:p-12 lg:p-16 text-center"
        >
          {/* Background fx */}
          <div className="absolute inset-0 -z-10 bg-nexora-radial" aria-hidden="true" />
          <div
            className="absolute inset-0 -z-10 bg-nexora-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
            aria-hidden="true"
          />
          <div className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-gold/15 blur-3xl animate-pulse-glow" aria-hidden="true" />

          <div className="mx-auto flex max-w-2xl flex-col items-center">
            <NexoraMark className="h-14 w-14 sm:h-16 sm:w-16 animate-float" />
            <h2
              id="cta-heading"
              className="mt-6 font-display text-3xl font-bold text-gold-gradient sm:text-4xl md:text-5xl"
            >
              Start with NEXORA
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground">
              Verify the contract on Etherscan, then access the live NEXORA/WETH
              market on Uniswap V2 — permissionlessly, on Ethereum Mainnet.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
              <a
                href={nexoraLinks.uniswap}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3.5 text-sm font-semibold text-near-black transition-all hover:bg-gold-light hover:shadow-[0_0_30px_-6px_rgba(208,161,95,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
              >
                View on Uniswap
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
              <ExternalLink
                href={nexoraLinks.etherscanToken}
                ariaLabel="View NEXORA contract on Etherscan"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gold/30 bg-white/[0.02] px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-gold/60 hover:bg-gold/5 sm:w-auto"
              >
                <FileText className="h-4 w-4 text-gold" aria-hidden="true" />
                View Contract
              </ExternalLink>
            </div>

            <p className="mt-6 text-xs text-muted-foreground/70">
              {nexora.network} · {nexora.standard} · Chain ID {nexora.chainId}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
