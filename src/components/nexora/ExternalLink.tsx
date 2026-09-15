import { ExternalLink as ExternalLinkIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
  ariaLabel?: string;
}

/**
 * ExternalLink — opens in a new tab safely with noopener noreferrer.
 * Renders an external-link indicator icon when appropriate.
 */
export function ExternalLink({
  href,
  children,
  className,
  showIcon = true,
  ariaLabel,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm",
        className,
      )}
    >
      <span>{children}</span>
      {showIcon && (
        <ExternalLinkIcon className="h-3.5 w-3.5 opacity-70" aria-hidden="true" />
      )}
    </a>
  );
}
