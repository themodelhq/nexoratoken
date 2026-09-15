"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, FileText, Sparkles } from "lucide-react";
import { nexora, nexoraLinks } from "@/data/nexora";
import { NexoraMark } from "./NexoraMark";
import { ExternalLink } from "./ExternalLink";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-36"
      aria-labelledby="hero-heading"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 bg-nexora-radial" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 bg-nexora-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_75%)]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Orbital logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative mb-8 h-36 w-36 sm:h-44 sm:w-44 lg:h-52 lg:w-52"
          >
            {/* Orbital rings */}
            {!reduce && (
              <>
                <div className="absolute inset-0 rounded-full border border-gold/15 animate-orbit-slow">
                  <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-gold/80 shadow-[0_0_12px_2px_rgba(208,161,95,0.6)]" />
                </div>
                <div className="absolute inset-2 rounded-full border border-blue-highlight/15 animate-orbit-slow-rev">
                  <span className="absolute top-1/2 -right-1 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-blue-highlight/80 shadow-[0_0_10px_2px_rgba(56,189,248,0.6)]" />
                </div>
                <div className="absolute inset-4 rounded-full border border-gold/10 animate-orbit-slow" />
              </>
            )}
            {/* Soft gold glow behind logo */}
            <div className="absolute inset-6 rounded-full bg-gold/20 blur-2xl animate-pulse-glow" aria-hidden="true" />
            {/* Logo */}
            <motion.div
              animate={reduce ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-full w-full"
            >
              <NexoraMark className="h-full w-full drop-shadow-[0_0_30px_rgba(208,161,95,0.35)]" />
            </motion.div>
          </motion.div>

          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-gold backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Ethereum Mainnet · ERC-20 · Uniswap V2
          </motion.div>

          {/* Headline */}
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-[0.05em] text-gold-gradient text-shadow-gold"
          >
            NEXORA
          </motion.h1>

          {/* Supporting headline */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="mt-5 max-w-2xl text-lg sm:text-xl md:text-2xl font-medium text-silver-gradient"
          >
            An Ethereum Digital Asset Built for a Connected Decentralized Future
          </motion.p>

          {/* Body copy */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.54 }}
            className="mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            {nexora.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.66 }}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
          >
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
              className="group inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gold/30 bg-white/[0.02] px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-gold/60 hover:bg-gold/5 sm:w-auto"
            >
              <FileText className="h-4 w-4 text-gold" aria-hidden="true" />
              View Contract
            </ExternalLink>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#about")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
              }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground sm:w-auto"
            >
              Explore NEXORA
              <span aria-hidden="true">↓</span>
            </a>
          </motion.div>

          {/* Quick stat strip */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.78 }}
            className="mt-12 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {[
              { k: "Network", v: "Ethereum" },
              { k: "Standard", v: "ERC-20" },
              { k: "Supply", v: "1,000,000,000" },
              { k: "DEX", v: "Uniswap V2" },
            ].map((s) => (
              <div
                key={s.k}
                className="rounded-xl glass-panel px-4 py-3 text-center"
              >
                <div className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                  {s.k}
                </div>
                <div className="mt-1 font-display text-sm font-semibold text-gold sm:text-base">
                  {s.v}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" aria-hidden="true" />
    </section>
  );
}
