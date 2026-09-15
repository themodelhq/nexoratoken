"use client";

import { motion } from "framer-motion";
import { ArrowRight, Eye, Network, Search, ShieldCheck } from "lucide-react";
import { whyNexora, nexoraLinks } from "@/data/nexora";
import { SectionHeading } from "./SectionHeading";
import { ExternalLink } from "./ExternalLink";
import { NexoraMark } from "./NexoraMark";

const iconMap = {
  ethereum: Network,
  shieldCheck: ShieldCheck,
  network: Network,
  search: Search,
} as const;

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 scroll-mt-20"
      aria-labelledby="about-heading"
    >
      <div className="absolute inset-0 -z-10 bg-nexora-grid opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About NEXORA"
          title="A Restrained, Transparent Ethereum Asset"
          description="Nexora is an Ethereum-based digital asset focused on transparent on-chain infrastructure and decentralized market accessibility. No invented utility, no exaggerated claims — only verifiable facts."
        />

        {/* Why NEXORA grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyNexora.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] ?? ShieldCheck;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="group relative flex flex-col rounded-2xl glass-panel glass-panel-hover p-6"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/20 transition-transform group-hover:scale-105">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="font-display text-base font-bold text-bright-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* On-chain transparency + Market access split */}
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {/* Transparency */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-2xl glass-panel p-6 sm:p-8"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-highlight/10 blur-3xl" aria-hidden="true" />
            <div className="flex items-center gap-2 text-blue-highlight">
              <Eye className="h-5 w-5" aria-hidden="true" />
              <h3 className="font-display text-sm uppercase tracking-[0.2em]">On-Chain Transparency</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Every NEXORA transfer, approval, and liquidity event is permanently
              recorded on Ethereum and inspectable by anyone. The contract source,
              holder list, and transaction history are all publicly available.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <ExternalLink
                href={nexoraLinks.etherscanToken}
                ariaLabel="Inspect NEXORA token on Etherscan"
                className="inline-flex items-center gap-1.5 rounded-md border border-gold/30 bg-gold/5 px-3.5 py-2 text-xs font-medium text-gold transition-colors hover:bg-gold/10"
              >
                Etherscan Token
                <ArrowRight className="h-3 w-3" aria-hidden="true" />
              </ExternalLink>
              <ExternalLink
                href={nexoraLinks.etherscanPair}
                ariaLabel="Inspect NEXORA/WETH pair on Etherscan"
                className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.02] px-3.5 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Pair Contract
                <ArrowRight className="h-3 w-3" aria-hidden="true" />
              </ExternalLink>
            </div>
          </motion.div>

          {/* Market access */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="relative overflow-hidden rounded-2xl glass-panel p-6 sm:p-8"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-3xl" aria-hidden="true" />
            <div className="flex items-center gap-2 text-gold">
              <NexoraMark className="h-5 w-5" />
              <h3 className="font-display text-sm uppercase tracking-[0.2em]">Market Access</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              NEXORA trades permissionlessly through its NEXORA/WETH liquidity pair
              on Uniswap V2 — the leading decentralized exchange on Ethereum. No
              account creation, no intermediaries.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <ExternalLink
                href={nexoraLinks.uniswap}
                ariaLabel="Open NEXORA on Uniswap"
                className="inline-flex items-center gap-1.5 rounded-md bg-gold px-3.5 py-2 text-xs font-semibold text-near-black transition-colors hover:bg-gold-light"
              >
                Open on Uniswap
                <ArrowRight className="h-3 w-3" aria-hidden="true" />
              </ExternalLink>
              <ExternalLink
                href={nexoraLinks.cmcDexScan}
                ariaLabel="View NEXORA on CoinMarketCap DexScan"
                className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.02] px-3.5 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                CMC DexScan
                <ArrowRight className="h-3 w-3" aria-hidden="true" />
              </ExternalLink>
            </div>
            <p className="mt-4 text-[0.7rem] leading-relaxed text-muted-foreground/70">
              DexScan is a discovery page, not a full CoinMarketCap listing.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
