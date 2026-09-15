"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock, Loader2 } from "lucide-react";
import { roadmap, type RoadmapStatus } from "@/data/nexora";
import { SectionHeading } from "./SectionHeading";

const statusMeta: Record<
  RoadmapStatus,
  { label: string; tone: string; icon: React.ComponentType<{ className?: string }> }
> = {
  complete: { label: "Complete", tone: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5", icon: CheckCircle2 },
  "in-progress": { label: "In Progress", tone: "text-gold border-gold/30 bg-gold/5", icon: Loader2 },
  planned: { label: "Planned", tone: "text-blue-highlight border-blue-highlight/30 bg-blue-highlight/5", icon: Clock },
};

export function Roadmap() {
  return (
    <section
      id="roadmap"
      className="relative py-20 sm:py-28 scroll-mt-20"
      aria-labelledby="roadmap-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Roadmap"
          title="Phased, Transparent Progress"
          description="A professional roadmap with explicit statuses. Nothing is marked complete unless it actually is — and no future dates or exchange listings are promised."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {roadmap.map((phase, idx) => {
            const meta = statusMeta[phase.status];
            const StatusIcon = meta.icon;
            return (
              <motion.article
                key={phase.phase}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: idx * 0.1 }}
                className="relative flex flex-col rounded-2xl glass-panel glass-panel-hover p-6 sm:p-7"
              >
                {/* connector dot for desktop timeline */}
                {idx < roadmap.length - 1 && (
                  <span
                    className="absolute -right-3 top-12 hidden h-px w-6 bg-gradient-to-r from-gold/40 to-transparent lg:block"
                    aria-hidden="true"
                  />
                )}

                <div className="flex items-center justify-between">
                  <span className="font-display text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    {phase.phase}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.65rem] font-semibold ${meta.tone}`}
                  >
                    <StatusIcon className="h-3 w-3" aria-hidden="true" />
                    {meta.label}
                  </span>
                </div>

                <h3 className="mt-3 font-display text-xl font-bold text-bright-white">
                  {phase.title}
                </h3>

                <ul className="mt-5 space-y-2.5">
                  {phase.items.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-start gap-2.5 text-sm"
                    >
                      {item.done ? (
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                      ) : (
                        <Circle className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/50" aria-hidden="true" />
                      )}
                      <span className={item.done ? "text-foreground" : "text-muted-foreground"}>
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground/80">
          Phase 03 initiatives are described as “Planned” or “Under Development”
          and do not promise exchange listings, partnerships, or guaranteed
          outcomes. Roadmap data is centralized in{" "}
          <code className="font-mono text-gold">src/data/nexora.ts</code> and can be
          updated as the project evolves.
        </p>
      </div>
    </section>
  );
}
