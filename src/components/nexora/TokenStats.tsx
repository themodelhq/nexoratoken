"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  Code2,
  Coins,
  Globe2,
  Hash,
  Layers,
  Link2,
  Repeat2,
  Waves,
  type LucideIcon,
} from "lucide-react";
import { tokenStats } from "@/data/nexora";
import { SectionHeading } from "./SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  globe: Globe2,
  coin: Coins,
  fileCode: Code2,
  hash: Hash,
  layers: Layers,
  exchange: Repeat2,
  waves: Waves,
  link: Link2,
};

export function TokenStats() {
  return (
    <section
      id="token-stats"
      className="relative py-20 sm:py-28"
      aria-labelledby="token-stats-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Token Statistics"
          title="Public On-Chain Profile"
          description="Every value below is a fixed, verifiable property of the NEXORA contract on Ethereum Mainnet."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {tokenStats.map((stat, i) => {
            const Icon = iconMap[stat.icon] ?? Boxes;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-xl glass-panel glass-panel-hover p-5"
              >
                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gold/5 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" aria-hidden="true" />
                <div className="flex items-center gap-2 text-gold">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  <span className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
                <div className="mt-3 font-display text-lg font-bold text-bright-white break-words sm:text-xl">
                  {stat.value}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
