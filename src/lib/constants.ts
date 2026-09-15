/**
 * NEXORA — Constants
 * Re-exports the central data module and provides small helpers.
 */
export {
  nexora,
  nexoraLinks,
  socialLinks,
  contactEmail,
  contactFormEndpoint,
  siteUrl,
  SITE_URL_PLACEHOLDER,
  riskDisclaimer,
  howToBuyRiskNote,
  copyright,
  tokenStats,
  whyNexora,
  howToBuySteps,
  roadmap,
  faqItems,
  navItems,
  homeAnchors,
  pageMeta,
} from "@/data/nexora";

/** Shorten an Ethereum address for mobile display. e.g. 0x1234…abcd */
export function shortAddress(addr: string, head = 6, tail = 4): string {
  if (!addr) return "";
  if (addr.length <= head + tail + 2) return addr;
  return `${addr.slice(0, head)}…${addr.slice(-tail)}`;
}

/** Brand colors (mirrors globals.css tokens). */
export const brandColors = {
  gold: "#D0A15F",
  deepBlue: "#163EA8",
  nearBlack: "#0B1220",
  deepBackground: "#050A14",
  silver: "#E5E7EB",
  brightWhite: "#F8FAFC",
  blueHighlight: "#38BDF8",
} as const;
