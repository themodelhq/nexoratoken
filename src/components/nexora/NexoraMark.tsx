import { cn } from "@/lib/utils";

interface NexoraMarkProps {
  className?: string;
  /** Adds a subtle gold glow behind the mark — for hero usage */
  withGlow?: boolean;
}

/**
 * NexoraMark — crisp inline SVG brand emblem.
 * Hexagonal frame with a stylized N formed by connected nodes,
 * gold gradient + blue circuit accents. Matches public/brand/nexora-logo.svg.
 */
export function NexoraMark({ className, withGlow = false }: NexoraMarkProps) {
  return (
    <span
      className={cn("relative inline-flex items-center justify-center", className)}
      aria-hidden="true"
    >
      {withGlow && (
        <span className="absolute inset-0 rounded-full bg-gold/20 blur-xl animate-pulse-glow" />
      )}
      <svg
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative h-full w-full"
        role="presentation"
      >
        <defs>
          <linearGradient id="nx-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E8C68A" />
            <stop offset="50%" stopColor="#D0A15F" />
            <stop offset="100%" stopColor="#A87A3D" />
          </linearGradient>
          <linearGradient id="nx-blue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#163EA8" />
          </linearGradient>
        </defs>
        {/* Outer hexagon ring */}
        <path
          d="M256 56 L416 148 L416 364 L256 456 L96 364 L96 148 Z"
          stroke="url(#nx-gold)"
          strokeWidth="6"
          fill="none"
          opacity="0.55"
        />
        {/* Inner hexagon */}
        <path
          d="M256 96 L380 168 L380 344 L256 416 L132 344 L132 168 Z"
          stroke="url(#nx-gold)"
          strokeWidth="4"
          fill="#0B1220"
          opacity="0.9"
        />
        {/* N */}
        <g
          stroke="url(#nx-gold)"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          <line x1="196" y1="340" x2="196" y2="172" />
          <line x1="196" y1="172" x2="316" y2="340" />
          <line x1="316" y1="340" x2="316" y2="172" />
        </g>
        {/* Nodes */}
        <circle cx="196" cy="172" r="13" fill="url(#nx-gold)" />
        <circle cx="316" cy="340" r="13" fill="url(#nx-gold)" />
        <circle cx="316" cy="172" r="13" fill="url(#nx-blue)" />
        <circle cx="196" cy="340" r="13" fill="url(#nx-blue)" />
        {/* Circuit accents */}
        <g stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" opacity="0.7">
          <line x1="96" y1="148" x2="60" y2="120" />
          <line x1="416" y1="148" x2="452" y2="120" />
          <line x1="96" y1="364" x2="60" y2="392" />
          <line x1="416" y1="364" x2="452" y2="392" />
        </g>
        <circle cx="60" cy="120" r="6" fill="#38BDF8" />
        <circle cx="452" cy="120" r="6" fill="#38BDF8" />
        <circle cx="60" cy="392" r="6" fill="#38BDF8" />
        <circle cx="452" cy="392" r="6" fill="#38BDF8" />
      </svg>
    </span>
  );
}
