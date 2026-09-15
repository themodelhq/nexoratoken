"use client";

import { motion } from "framer-motion";
import { FileText, ShieldCheck } from "lucide-react";
import { nexora, nexoraLinks } from "@/data/nexora";
import { shortAddress } from "@/lib/constants";
import { CopyButton } from "./CopyButton";
import { ExternalLink } from "./ExternalLink";

interface ContractAddressProps {
  variant?: "card" | "compact";
  className?: string;
}

/**
 * ContractAddress — premium contract card with copy + Etherscan.
 * Shows full address on desktop, shortened on mobile.
 */
export function ContractAddress({ variant = "card", className }: ContractAddressProps) {
  const addr = nexora.contract;

  if (variant === "compact") {
    return (
      <div
        className={
          "inline-flex items-center gap-2 rounded-md border border-gold/25 bg-white/[0.03] px-3 py-2 " +
          (className ?? "")
        }
      >
        <code className="font-mono text-xs text-gold hidden sm:inline">{addr}</code>
        <code className="font-mono text-xs text-gold sm:hidden">{shortAddress(addr, 8, 6)}</code>
        <CopyButton value={addr} label="Copy" size="icon" variant="ghost" />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={
        "relative overflow-hidden rounded-2xl glass-panel glass-panel-hover p-6 sm:p-8 " +
        (className ?? "")
      }
    >
      {/* top gold accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="flex items-center gap-2 text-gold">
        <ShieldCheck className="h-5 w-5" aria-hidden="true" />
        <h3 className="font-display text-sm uppercase tracking-[0.22em]">NEXORA Contract</h3>
      </div>

      <p className="mt-4 text-sm text-muted-foreground">
        Official publicly verifiable ERC-20 contract address on Ethereum Mainnet.
      </p>

      <div className="mt-4 rounded-lg border border-gold/20 bg-black/40 p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <code className="font-mono text-sm sm:text-base text-bright-white break-all">
            {addr}
          </code>
          <div className="flex shrink-0 items-center gap-2">
            <CopyButton value={addr} label="Copy Address" size="md" variant="solid" />
          </div>
        </div>
        <code className="mt-2 block font-mono text-xs text-gold/80 sm:hidden">
          {shortAddress(addr, 10, 8)}
        </code>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <ExternalLink
          href={nexoraLinks.etherscanToken}
          ariaLabel="View NEXORA contract on Etherscan"
          className="inline-flex items-center gap-2 rounded-md border border-gold/30 bg-gold/5 px-4 py-2 text-sm font-medium text-gold transition-colors hover:border-gold/60 hover:bg-gold/10"
        >
          <FileText className="h-4 w-4" aria-hidden="true" />
          View on Etherscan
        </ExternalLink>
        <ExternalLink
          href={nexoraLinks.cmcDexScan}
          ariaLabel="View NEXORA on CoinMarketCap DexScan"
          className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.02] px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-gold/40 hover:text-foreground"
        >
          CMC DexScan
        </ExternalLink>
      </div>

      <p className="mt-4 text-xs text-muted-foreground/80">
        Always independently verify the contract address before interacting with any token.
      </p>
    </motion.div>
  );
}
