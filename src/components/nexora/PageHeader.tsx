"use client";

import { motion } from "framer-motion";
import { NexoraMark } from "./NexoraMark";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

/**
 * PageHeader — dedicated-page hero band. Renders the page H1 for SEO.
 * Kept compact so each page's section content remains the visual focus.
 */
export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header
      className="relative isolate overflow-hidden pt-32 pb-12 sm:pt-36 sm:pb-16"
      aria-labelledby="page-title"
    >
      <div className="absolute inset-0 -z-10 bg-nexora-radial opacity-70" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 bg-nexora-grid opacity-[0.18] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-6 h-14 w-14 sm:h-16 sm:w-16"
        >
          <NexoraMark className="h-full w-full drop-shadow-[0_0_24px_rgba(208,161,95,0.3)]" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-eyebrow mb-3"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          id="page-title"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-display text-4xl font-bold tracking-[0.04em] text-gold-gradient sm:text-5xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </header>
  );
}
