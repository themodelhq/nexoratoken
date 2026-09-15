"use client";

import { Github, Globe, Instagram, MessageCircle, Send, Youtube } from "lucide-react";
import { socialLinks } from "@/data/nexora";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  variant?: "row" | "grid";
}

type SocialKey = keyof typeof socialLinks;

const iconMap: Record<SocialKey, React.ComponentType<{ className?: string }>> = {
  website: Globe,
  x: XIcon,
  telegram: Send,
  discord: MessageCircle,
  github: Github,
  youtube: Youtube,
  instagram: Instagram,
};

const labelMap: Record<SocialKey, string> = {
  website: "Official Website",
  x: "X (Twitter)",
  telegram: "Telegram",
  discord: "Discord",
  github: "GitHub",
  youtube: "YouTube",
  instagram: "Instagram",
};

/**
 * SocialLinks — renders ONLY configured social links.
 * Empty values are omitted entirely (never fabricate accounts).
 */
export function SocialLinks({ className, iconSize, variant = "row" }: SocialLinksProps) {
  const entries = (Object.keys(socialLinks) as SocialKey[]).filter(
    (key) => socialLinks[key] && socialLinks[key].length > 0,
  );

  if (entries.length === 0) {
    return (
      <p className="text-xs text-muted-foreground italic">
        Official social channels will be published here once available.
      </p>
    );
  }

  if (variant === "grid") {
    return (
      <div className={cn("grid grid-cols-2 gap-2", className)}>
        {entries.map((key) => {
          const Icon = iconMap[key];
          return (
            <a
              key={key}
              href={socialLinks[key]}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={labelMap[key]}
              className="inline-flex items-center gap-2 rounded-md border border-gold/20 bg-white/[0.02] px-3 py-2 text-xs text-muted-foreground transition-colors hover:border-gold/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
            >
              <Icon className="h-4 w-4 text-gold" />
              <span>{labelMap[key]}</span>
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {entries.map((key) => {
        const Icon = iconMap[key];
        return (
          <a
            key={key}
            href={socialLinks[key]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={labelMap[key]}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gold/20 bg-white/[0.02] text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-gold/50 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
          >
            <Icon className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}

// Inline X logo (lucide doesn't ship a brand X icon)
function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
