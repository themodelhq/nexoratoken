"use client";

import { motion } from "framer-motion";
import { AlertTriangle, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { howToBuySteps, howToBuyRiskNote, nexora, nexoraLinks } from "@/data/nexora";
import { SectionHeading } from "./SectionHeading";
import { CopyButton } from "./CopyButton";

export function HowToBuy() {
  return (
    <section
      id="how-to-buy"
      className="relative py-20 sm:py-28 scroll-mt-20"
      aria-labelledby="how-to-buy-heading"
    >
      <div className="absolute inset-0 -z-10 bg-nexora-radial opacity-60" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How to Buy"
          title="Acquire NEXORA in 9 Steps"
          description="A clear, general process for acquiring NEXORA through the official Uniswap V2 market. Always verify the contract address before interacting."
        />

        {/* Contract verify banner */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-8 max-w-3xl rounded-2xl border border-gold/25 bg-gold/[0.04] p-5 sm:p-6"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-[0.2em] text-gold">Verify Before You Swap</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Only trust the official NEXORA contract address below.
              </p>
              <code className="mt-2 block font-mono text-xs text-bright-white break-all sm:text-sm">
                {nexora.contract}
              </code>
            </div>
            <div className="flex shrink-0 flex-col gap-2">
              <CopyButton value={nexora.contract} label="Copy Contract" size="md" variant="solid" />
              <a
                href={nexoraLinks.uniswap}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-md border border-gold/40 bg-gold/5 px-4 py-2 text-xs font-semibold text-gold transition-colors hover:bg-gold/10"
              >
                Open Uniswap
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Steps */}
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {howToBuySteps.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              className="group relative flex flex-col rounded-2xl glass-panel glass-panel-hover p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold/10 font-display text-sm font-bold text-gold ring-1 ring-gold/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-base font-bold text-bright-white">
                  {step.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.li>
          ))}
        </ol>

        {/* Risk disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-10 max-w-4xl rounded-2xl border border-red-500/25 bg-red-500/[0.04] p-5 sm:p-6"
          role="note"
        >
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-400" aria-hidden="true" />
            <div>
              <h3 className="font-display text-sm font-bold text-red-300">Risk Disclaimer</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {howToBuyRiskNote}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                NEXORA is a digital asset. Nothing on this website constitutes
                financial, investment, legal, or tax advice. The website never
                requests seed phrases, private keys, or wallet passwords.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Safety reassurance */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-4 flex max-w-4xl flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-2xl border border-white/8 bg-white/[0.02] p-4 text-xs text-muted-foreground"
        >
          {[
            "No wallet connection required",
            "Never requests private keys",
            "No fake price data",
            "Always verify on Etherscan",
          ].map((t) => (
            <span key={t} className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
