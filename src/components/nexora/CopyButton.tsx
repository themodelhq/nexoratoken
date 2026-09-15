"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
  value: string;
  label?: string;
  className?: string;
  size?: "sm" | "md" | "icon";
  variant?: "ghost" | "outline" | "solid";
}

/**
 * CopyButton — reusable clipboard copy with success state.
 * - Uses the async Clipboard API with a fallback.
 * - Keyboard accessible (it's a real <button>).
 * - Auto-resets to normal state after a short delay.
 * - Respects reduced motion (no fancy transitions).
 */
export function CopyButton({
  value,
  label = "Copy",
  className,
  size = "sm",
  variant = "outline",
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleCopy = useCallback(async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        // Fallback for older / insecure contexts
        const ta = document.createElement("textarea");
        ta.value = value;
        ta.setAttribute("readonly", "");
        ta.style.position = "absolute";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      // Silent failure — don't leak errors to the UI
      setCopied(false);
    }
  }, [value]);

  const sizeCls =
    size === "icon"
      ? "h-9 w-9 p-0"
      : size === "sm"
        ? "h-8 px-3 text-xs"
        : "h-10 px-4 text-sm";

  const variantCls =
    variant === "ghost"
      ? "bg-transparent border border-transparent hover:bg-white/5 text-muted-foreground hover:text-foreground"
      : variant === "solid"
        ? "bg-gold text-near-black border border-gold hover:bg-gold-light"
        : "bg-transparent border border-gold/30 hover:border-gold/60 text-gold hover:bg-gold/5";

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? `${label} copied to clipboard` : `Copy ${label.toLowerCase()} to clipboard`}
      className={cn(
        "inline-flex items-center justify-center gap-1.5 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        sizeCls,
        variantCls,
        className,
      )}
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5" aria-hidden="true" />
          {size !== "icon" && <span>Copied</span>}
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" aria-hidden="true" />
          {size !== "icon" && <span>{label}</span>}
        </>
      )}
    </button>
  );
}
