"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Droplets, FileText, Link2, Rocket } from "lucide-react";
import { nexora, nexoraLinks } from "@/data/nexora";
import { shortAddress } from "@/lib/constants";
import { SectionHeading } from "./SectionHeading";
import { ContractAddress } from "./ContractAddress";
import { ExternalLink } from "./ExternalLink";
import { CopyButton } from "./CopyButton";

function DataRow({
  label,
  value,
  mono,
  href,
  copyValue,
}: {
  label: string;
  value: string;
  mono?: boolean;
  href?: string;
  copyValue?: string;
}) {
  return (
    <div className="flex flex-col gap-1 border-b border-gold/8 py-3 last:border-0 sm:flex-row sm:items-center sm:justify-between">
      <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</dt>
      <dd className="flex items-center gap-2 text-right">
        {href ? (
          <ExternalLink
            href={href}
            ariaLabel={`${label} on Etherscan`}
            className="font-mono text-sm text-bright-white hover:text-gold"
          >
            <span className={mono ? "font-mono" : ""}>{value}</span>
          </ExternalLink>
        ) : (
          <span className={mono ? "font-mono text-sm text-bright-white break-all" : "text-sm text-bright-white"}>
            {value}
          </span>
        )}
        {copyValue && <CopyButton value={copyValue} size="icon" variant="ghost" />}
      </dd>
    </div>
  );
}

export function TokenSection() {
  return (
    <section
      id="token"
      className="relative py-20 sm:py-28 scroll-mt-20"
      aria-labelledby="token-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Token Profile"
          title="Technical Specification"
          description="The complete technical profile of the NEXORA ERC-20 contract on Ethereum Mainnet."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Left: contract card */}
          <div className="space-y-6">
            <ContractAddress />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55 }}
              className="rounded-2xl glass-panel p-6"
            >
              <div className="flex items-center gap-2 text-blue-highlight">
                <Link2 className="h-5 w-5" aria-hidden="true" />
                <h3 className="font-display text-sm uppercase tracking-[0.2em]">Pair &amp; Routing</h3>
              </div>
              <dl className="mt-4">
                <DataRow label="Trading Pair" value={nexora.tradingPair} />
                <DataRow label="DEX" value={nexora.dex} />
                <DataRow
                  label="Pair Contract"
                  value={shortAddress(nexora.pair, 10, 8)}
                  mono
                  href={nexoraLinks.etherscanPair}
                  copyValue={nexora.pair}
                />
                <DataRow label="Uniswap V2 Router" value={shortAddress(nexora.router, 10, 8)} mono copyValue={nexora.router} />
                <DataRow label="Factory" value={shortAddress(nexora.factory, 10, 8)} mono copyValue={nexora.factory} />
                <DataRow label="WETH" value={shortAddress(nexora.weth, 10, 8)} mono copyValue={nexora.weth} />
              </dl>
            </motion.div>
          </div>

          {/* Right: overview + deployment + liquidity */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55 }}
              className="rounded-2xl glass-panel p-6"
            >
              <div className="flex items-center gap-2 text-gold">
                <FileText className="h-5 w-5" aria-hidden="true" />
                <h3 className="font-display text-sm uppercase tracking-[0.2em]">Token Overview</h3>
              </div>
              <dl className="mt-4">
                <DataRow label="Name" value={nexora.name} />
                <DataRow label="Symbol" value={nexora.symbol} />
                <DataRow label="Network" value={nexora.network} />
                <DataRow label="Standard" value={nexora.standard} />
                <DataRow label="Decimals" value={String(nexora.decimals)} />
                <DataRow label="Total Supply" value={`${nexora.totalSupply} ${nexora.symbol}`} />
                <DataRow label="Chain ID" value={String(nexora.chainId)} />
              </dl>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="rounded-2xl glass-panel p-6"
            >
              <div className="flex items-center gap-2 text-gold">
                <Rocket className="h-5 w-5" aria-hidden="true" />
                <h3 className="font-display text-sm uppercase tracking-[0.2em]">Deployment</h3>
              </div>
              <dl className="mt-4">
                <DataRow
                  label="Deployment Tx"
                  value={shortAddress(nexora.deployTx, 10, 8)}
                  mono
                  href={nexoraLinks.etherscanDeployTx}
                  copyValue={nexora.deployTx}
                />
              </dl>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="rounded-2xl glass-panel p-6"
            >
              <div className="flex items-center gap-2 text-blue-highlight">
                <Droplets className="h-5 w-5" aria-hidden="true" />
                <h3 className="font-display text-sm uppercase tracking-[0.2em]">Initial Liquidity</h3>
              </div>
              <dl className="mt-4">
                <DataRow label="Initial Liquidity" value={nexora.initialLiquidity} />
                <DataRow label="Opening Ratio" value={nexora.openingRatio} />
                <DataRow label="Opening Price" value={nexora.openingPrice} />
                <DataRow
                  label="Liquidity Tx"
                  value={shortAddress(nexora.liquidityTx, 10, 8)}
                  mono
                  href={nexoraLinks.etherscanLiquidityTx}
                  copyValue={nexora.liquidityTx}
                />
              </dl>
              <p className="mt-4 rounded-md border border-white/5 bg-black/30 p-3 text-[0.72rem] leading-relaxed text-muted-foreground/80">
                These figures represent the historical initial state at deployment
                and do not reflect the current market price or current liquidity.
                Live market data is not displayed on this site.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Uniswap trade bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-gold/25 bg-gradient-to-r from-gold/5 via-transparent to-blue-highlight/5 p-6 sm:flex-row"
        >
          <div>
            <h3 className="font-display text-lg font-bold text-bright-white">Trade NEXORA on Uniswap V2</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              The official, permissionless market. Always verify the contract address before swapping.
            </p>
          </div>
          <a
            href={nexoraLinks.uniswap}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-near-black transition-all hover:bg-gold-light hover:shadow-[0_0_24px_-6px_rgba(208,161,95,0.6)]"
          >
            Open Uniswap
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
