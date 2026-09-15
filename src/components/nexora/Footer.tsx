"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import {
  navItems,
  nexora,
  nexoraLinks,
  riskDisclaimer,
  copyright,
} from "@/data/nexora";
import { shortAddress } from "@/lib/constants";
import { NexoraMark } from "./NexoraMark";
import { SocialLinks } from "./SocialLinks";
import { CopyButton } from "./CopyButton";
import { ExternalLink } from "./ExternalLink";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative mt-auto border-t border-gold/12 bg-deep-bg/60"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <NexoraMark className="h-8 w-8" />
              <span className="font-display text-lg font-bold tracking-[0.18em] text-silver-gradient">
                NEXORA
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {nexora.description}
            </p>
            <div className="mt-5">
              <SocialLinks />
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-xs uppercase tracking-[0.2em] text-gold">
              Navigate
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-xs uppercase tracking-[0.2em] text-gold">
              Resources
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <ExternalLink
                  href={nexoraLinks.uniswap}
                  ariaLabel="NEXORA on Uniswap"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Uniswap V2 Market
                </ExternalLink>
              </li>
              <li>
                <ExternalLink
                  href={nexoraLinks.etherscanToken}
                  ariaLabel="NEXORA contract on Etherscan"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Etherscan Token
                </ExternalLink>
              </li>
              <li>
                <ExternalLink
                  href={nexoraLinks.etherscanPair}
                  ariaLabel="NEXORA/WETH pair on Etherscan"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  NEXORA/WETH Pair
                </ExternalLink>
              </li>
              <li>
                <ExternalLink
                  href={nexoraLinks.cmcDexScan}
                  ariaLabel="NEXORA on CoinMarketCap DexScan"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  CMC DexScan
                </ExternalLink>
              </li>
            </ul>
          </div>

          {/* Contract */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-xs uppercase tracking-[0.2em] text-gold">
              Contract
            </h3>
            <p className="mt-4 text-xs text-muted-foreground">
              Ethereum Mainnet · {nexora.standard}
            </p>
            <div className="mt-2 rounded-lg border border-gold/20 bg-black/40 p-3">
              <code className="block font-mono text-[0.7rem] text-bright-white break-all">
                {nexora.contract}
              </code>
              <code className="mt-1 block font-mono text-[0.7rem] text-gold/80 sm:hidden">
                {shortAddress(nexora.contract, 10, 8)}
              </code>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <CopyButton value={nexora.contract} label="Copy" size="sm" variant="outline" />
              <a
                href={nexoraLinks.etherscanToken}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-md border border-gold/30 bg-gold/5 px-2.5 py-1.5 text-xs font-medium text-gold transition-colors hover:bg-gold/10"
                aria-label="View contract on Etherscan"
              >
                Etherscan
                <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Risk disclaimer */}
        <div className="mt-12 rounded-xl border border-white/8 bg-white/[0.02] p-5">
          <h4 className="font-display text-xs uppercase tracking-[0.2em] text-gold">
            Risk Disclaimer
          </h4>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            {riskDisclaimer}
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-gold/8 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            {copyright.replace("2026", String(year))}
          </p>
          <p className="text-xs text-muted-foreground/70">
            {nexora.network} · Chain ID {nexora.chainId} · No wallet connection required
          </p>
        </div>
      </div>
    </footer>
  );
}
