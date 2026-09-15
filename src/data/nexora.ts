/**
 * NEXORA — Centralized Project Data
 * ------------------------------------------------------------
 * Single source of truth for all NEXORA project information.
 * To update any project value, change it here — not in components.
 *
 * IMPORTANT: Do not invent information. Only factual, on-chain
 * data and clearly-marked configurable placeholders live here.
 */

export const nexora = {
  // ---- Identity ----
  name: "Nexora",
  symbol: "NEXORA",
  tagline: "An Ethereum Digital Asset Built for a Connected Decentralized Future",
  description:
    "Nexora (NEXORA) is an Ethereum ERC-20 digital asset with a publicly verifiable smart contract and a live NEXORA/WETH market on Uniswap V2.",

  // ---- Blockchain ----
  network: "Ethereum Mainnet",
  chainId: 1,
  standard: "ERC-20",
  decimals: 18,
  totalSupply: "1,000,000,000",
  totalSupplyRaw: 1_000_000_000,

  // ---- Addresses (checksum) ----
  contract: "0xdBcC6DacB8c570365309F36D1C29b7ebbd8D3C0c",
  pair: "0x44cB6f05AD4Bde017c126Be6f62e1653A6C647E4",
  router: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
  factory: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
  weth: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",

  // ---- Initial on-chain economics (historical, not "current") ----
  initialLiquidity: "3,000 NEXORA + 0.0003 ETH/WETH",
  openingRatio: "10,000,000 NEXORA = 1 ETH",
  openingPrice: "1 NEXORA = 0.0000001 ETH",

  // ---- Transactions ----
  deployTx: "0xd050b776ec42fdecc1288e0f7038e5af79d59e0b70bcf8f9469371223c180e16",
  liquidityTx: "0xd91f3f076b060319b363e9765f31b0b87195541e94f528c1d9c2d146a0be30d7",

  // ---- Trading pair ----
  tradingPair: "NEXORA / WETH",
  dex: "Uniswap V2",
} as const;

/**
 * Centralized external links — all generated from this config.
 * Never hardcode an explorer / DEX URL in a component.
 */
export const nexoraLinks = {
  // Uniswap token page (uses checksum address)
  uniswap:
    "https://app.uniswap.org/explore/tokens/ethereum/0xdBcC6DacB8c570365309F36D1C29b7ebbd8D3C0c",
  // Etherscan token page
  etherscanToken:
    "https://etherscan.io/token/0xdBcC6DacB8c570365309F36D1C29b7ebbd8D3C0c",
  // Etherscan contract address page
  etherscanContract:
    "https://etherscan.io/address/0xdBcC6DacB8c570365309F36D1C29b7ebbd8D3C0c",
  // Etherscan NEXORA/WETH pair
  etherscanPair:
    "https://etherscan.io/address/0x44cB6f05AD4Bde017c126Be6f62e1653A6C647E4",
  // Etherscan token deployment tx
  etherscanDeployTx:
    "https://etherscan.io/tx/0xd050b776ec42fdecc1288e0f7038e5af79d59e0b70bcf8f9469371223c180e16",
  // Etherscan liquidity tx
  etherscanLiquidityTx:
    "https://etherscan.io/tx/0xd91f3f076b060319b363e9765f31b0b87195541e94f528c1d9c2d146a0be30d7",
  // CoinMarketCap DexScan (NOT a full CMC listing — discovery page only)
  cmcDexScan:
    "https://dex.coinmarketcap.com/token/ethereum/0xdbcc6dacb8c570365309f36d1c29b7ebbd8d3c0c/",
} as const;

/**
 * Social links — configurable. Empty string => the icon is hidden.
 * Populate via NEXT_PUBLIC_* env vars (see .env.example).
 * Do NOT fabricate accounts.
 */
type SocialLinks = {
  website: string;
  x: string;
  telegram: string;
  discord: string;
  github: string;
  youtube: string;
  instagram: string;
};

function readEnv(key: string): string {
  if (typeof process === "undefined") return "";
  const v = process.env?.[key];
  return v && v.trim().length > 0 ? v.trim() : "";
}

export const socialLinks: SocialLinks = {
  website: readEnv("NEXT_PUBLIC_SITE_URL"),
  x: readEnv("NEXT_PUBLIC_X_URL"),
  telegram: readEnv("NEXT_PUBLIC_TELEGRAM_URL"),
  discord: readEnv("NEXT_PUBLIC_DISCORD_URL"),
  github: readEnv("NEXT_PUBLIC_GITHUB_URL"),
  youtube: readEnv("NEXT_PUBLIC_YOUTUBE_URL"),
  instagram: readEnv("NEXT_PUBLIC_INSTAGRAM_URL"),
};

/** Contact email — configurable. Empty => placeholder copy shown. */
export const contactEmail = readEnv("NEXT_PUBLIC_CONTACT_EMAIL");

/** Optional external form endpoint (e.g. Formspree). Empty => form disabled gracefully. */
export const contactFormEndpoint = readEnv("NEXT_PUBLIC_CONTACT_FORM_ENDPOINT");

/**
 * Canonical site URL — used for SEO metadata, canonical URLs, Open Graph,
 * robots.txt and sitemap.xml. Read from NEXT_PUBLIC_SITE_URL.
 *
 * ⚠️  PRODUCTION REQUIREMENT:
 * Set NEXT_PUBLIC_SITE_URL to the real official domain in your hosting
 * environment (e.g. https://nexora.eth). The fallback below is a local
 * development placeholder only and MUST be overridden before deployment.
 */
export const SITE_URL_PLACEHOLDER = "https://nexora.example";
export const siteUrl =
  readEnv("NEXT_PUBLIC_SITE_URL") || SITE_URL_PLACEHOLDER;

/** Risk disclaimer copy — used in footer + how-to-buy. */
export const riskDisclaimer =
  "NEXORA is a digital asset on Ethereum. Digital assets involve substantial risk and price volatility. Nothing on this website constitutes financial, investment, legal, or tax advice. Users should conduct their own research and independently verify contract addresses and transaction details before interacting with any decentralized application.";

export const howToBuyRiskNote =
  "Digital assets are volatile and involve risk. Always verify contract addresses, transaction details, liquidity conditions, gas costs, and price impact before interacting with a decentralized exchange.";

/** Copyright line — does NOT imply corporate registration. */
export const copyright = "© 2026 Nexora. All rights reserved.";

/**
 * Token statistics cards shown on the homepage.
 */
export const tokenStats = [
  { label: "Network", value: nexora.network, icon: "globe" },
  { label: "Token", value: nexora.symbol, icon: "coin" },
  { label: "Standard", value: nexora.standard, icon: "fileCode" },
  { label: "Decimals", value: String(nexora.decimals), icon: "hash" },
  { label: "Total Supply", value: nexora.totalSupply, icon: "layers" },
  { label: "Trading Pair", value: nexora.tradingPair, icon: "exchange" },
  { label: "DEX", value: nexora.dex, icon: "waves" },
  { label: "Chain ID", value: String(nexora.chainId), icon: "link" },
] as const;

/**
 * "Why NEXORA" — factual, publicly verifiable characteristics only.
 * No invented utility, partnerships, or guarantees.
 */
export const whyNexora = [
  {
    icon: "ethereum",
    title: "Ethereum-Based",
    description:
      "NEXORA is deployed on Ethereum Mainnet using the ERC-20 token standard — the most widely adopted smart-contract standard for digital assets.",
  },
  {
    icon: "shieldCheck",
    title: "On-Chain Transparency",
    description:
      "The token contract and trading infrastructure are publicly verifiable on the Ethereum blockchain. Every transfer, approval, and liquidity event is inspectable.",
  },
  {
    icon: "network",
    title: "Decentralized Market",
    description:
      "NEXORA has a live NEXORA/WETH liquidity pair on Uniswap V2, giving the token a decentralized, permissionless market accessible to anyone.",
  },
  {
    icon: "search",
    title: "Open Verification",
    description:
      "Users can independently inspect the token contract, transaction history, and liquidity pair through public blockchain explorers such as Etherscan.",
  },
] as const;

/**
 * How-to-buy steps — general, factual process.
 */
export const howToBuySteps = [
  {
    title: "Set up an Ethereum-compatible wallet",
    description:
      "Install a reputable Ethereum wallet such as MetaMask, Rabby, or a hardware wallet. Securely back up your recovery phrase offline and never share it with anyone.",
  },
  {
    title: "Acquire ETH",
    description:
      "Fund your wallet with Ethereum (ETH) from a trusted exchange or on-ramp. You will need ETH to swap for NEXORA and to pay for network gas.",
  },
  {
    title: "Connect the wallet to Uniswap",
    description:
      "Visit the official Uniswap interface at app.uniswap.org and connect your wallet. Always confirm you are on the legitimate, official Uniswap domain.",
  },
  {
    title: "Select Ethereum Mainnet",
    description:
      "Ensure your wallet is connected to Ethereum Mainnet (Chain ID 1). NEXORA is not deployed on any other network.",
  },
  {
    title: "Import NEXORA using the official contract address",
    description:
      "Import the NEXORA token using the official contract address shown on this page. Never trust a token name or symbol alone — always verify the contract independently.",
  },
  {
    title: "Enter the amount to swap",
    description:
      "Choose the amount of ETH you wish to exchange for NEXORA. Uniswap will display the expected output and current route.",
  },
  {
    title: "Review price impact, gas, and slippage",
    description:
      "Carefully review the price impact, slippage tolerance, gas cost, and minimum received before confirming. Small liquidity pools can produce large price impact.",
  },
  {
    title: "Confirm the transaction",
    description:
      "Approve and sign the swap transaction in your wallet. Wait for the transaction to be confirmed on Ethereum Mainnet.",
  },
  {
    title: "Verify your NEXORA balance",
    description:
      "After confirmation, verify the received NEXORA balance in your wallet. You can also cross-check the transaction on Etherscan.",
  },
] as const;

/**
 * Roadmap — phases with explicit statuses.
 * Nothing is marked complete unless it actually is.
 */
export type RoadmapStatus = "complete" | "in-progress" | "planned";

export const roadmap: {
  phase: string;
  title: string;
  status: RoadmapStatus;
  items: { label: string; done: boolean }[];
}[] = [
  {
    phase: "Phase 01",
    title: "Foundation",
    status: "complete",
    items: [
      { label: "Ethereum token deployment", done: true },
      { label: "Contract publication", done: true },
      { label: "Initial decentralized liquidity", done: true },
      { label: "Official project identity", done: true },
      { label: "Official website", done: true },
    ],
  },
  {
    phase: "Phase 02",
    title: "Discoverability",
    status: "in-progress",
    items: [
      { label: "Public project documentation", done: true },
      { label: "Blockchain explorer visibility", done: true },
      { label: "DEX discovery", done: true },
      { label: "CoinGecko submission", done: false },
      { label: "CoinMarketCap submission", done: false },
      { label: "Additional ecosystem directories", done: false },
    ],
  },
  {
    phase: "Phase 03",
    title: "Ecosystem Development",
    status: "planned",
    items: [
      { label: "Expanded developer documentation", done: false },
      { label: "Community tooling and analytics", done: false },
      { label: "Ecosystem partnership exploration", done: false },
      { label: "Long-term ecosystem direction", done: false },
    ],
  },
];

/**
 * FAQ — factual answers only. No promises of listings or appreciation.
 */
export const faqItems = [
  {
    question: "What is NEXORA?",
    answer:
      "Nexora (NEXORA) is an Ethereum ERC-20 digital asset with a publicly verifiable smart contract and a live NEXORA/WETH market on Uniswap V2.",
  },
  {
    question: "What blockchain is NEXORA on?",
    answer:
      "NEXORA is deployed on Ethereum Mainnet (Chain ID 1). It is not deployed on any other network.",
  },
  {
    question: "What is the NEXORA contract address?",
    answer:
      "The official NEXORA contract address is 0xdBcC6DacB8c570365309F36D1C29b7ebbd8D3C0c. Always verify this address independently on Etherscan before interacting.",
  },
  {
    question: "What is the total supply?",
    answer: "The total supply is 1,000,000,000 NEXORA (1 billion).",
  },
  {
    question: "What are NEXORA's decimals?",
    answer:
      "NEXORA uses 18 decimals, the standard for ERC-20 tokens on Ethereum.",
  },
  {
    question: "Where can NEXORA be traded?",
    answer:
      "NEXORA can be traded through the NEXORA/WETH liquidity pair on Uniswap V2. Always use the official Uniswap interface and verify the contract address.",
  },
  {
    question: "What is the NEXORA/WETH pair?",
    answer:
      "The NEXORA/WETH pair is the Uniswap V2 liquidity pool contract at 0x44cB6f05AD4Bde017c126Be6f62e1653A6C647E4 that holds NEXORA and WETH reserves.",
  },
  {
    question: "How do I buy NEXORA?",
    answer:
      "You can acquire NEXORA by swapping ETH for NEXORA on Uniswap V2 using the official contract address. See the How to Buy section for the full step-by-step process.",
  },
  {
    question: "How can I verify the contract?",
    answer:
      "You can inspect the NEXORA contract, transaction history, holders, and liquidity pair directly on Etherscan using the links provided on this site.",
  },
  {
    question: "What wallet can I use?",
    answer:
      "Any Ethereum-compatible wallet works, including MetaMask, Rabby, Frame, and hardware wallets such as Ledger or Trezor. The website itself never requests wallet credentials.",
  },
  {
    question: "What risks should I consider?",
    answer:
      "Digital assets are volatile and illiquid markets can produce large price swings. Always verify contract addresses, review price impact, gas, and slippage, and never invest more than you can afford to lose. Nothing on this site is financial advice.",
  },
  {
    question: "What is the official NEXORA website?",
    answer:
      "The official NEXORA website is this site. Always confirm you are visiting the correct, official domain before interacting with any digital asset.",
  },
] as const;

/**
 * Primary navigation — links to dedicated pages (multi-page architecture).
 * The homepage keeps its full single-page scroll experience; these links
 * route to canonical pages for SEO.
 */
export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Token", href: "/token" },
  { label: "How to Buy", href: "/how-to-buy" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

/**
 * Homepage anchor links — used by the homepage hero / CTA "Explore" button
 * and the homepage section ids. Kept here so the anchor targets stay in sync
 * with the section components.
 */
export const homeAnchors = {
  home: "#home",
  about: "#about",
  token: "#token",
  howToBuy: "#how-to-buy",
  roadmap: "#roadmap",
  faq: "#faq",
  contact: "#contact",
} as const;

/**
 * Per-page SEO metadata. Titles, descriptions, and canonical paths for each
 * dedicated route. The homepage uses its own title (no suffix).
 */
export const pageMeta = {
  home: {
    title: "Nexora (NEXORA) | Ethereum ERC-20 Digital Asset",
    description: nexora.description,
    path: "/",
  },
  about: {
    title: "About Nexora (NEXORA) | Ethereum Digital Asset",
    description:
      "Nexora is an Ethereum-based digital asset focused on transparent on-chain infrastructure and decentralized market accessibility.",
    path: "/about",
  },
  token: {
    title: "NEXORA Token | Contract & Ethereum Details",
    description:
      "The complete technical profile of the NEXORA ERC-20 contract on Ethereum Mainnet — contract address, decimals, total supply, pair, and deployment details.",
    path: "/token",
  },
  howToBuy: {
    title: "How to Buy NEXORA | Ethereum & Uniswap",
    description:
      "A clear, step-by-step guide to acquiring NEXORA through the official Uniswap V2 market on Ethereum Mainnet. Always verify the contract address before interacting.",
    path: "/how-to-buy",
  },
  roadmap: {
    title: "NEXORA Roadmap",
    description:
      "A phased, transparent NEXORA roadmap with explicit statuses — Completed, In Progress, and Planned. No fabricated milestones or promised listings.",
    path: "/roadmap",
  },
  faq: {
    title: "NEXORA FAQ",
    description:
      "Factual answers about NEXORA — what it is, where it trades, how to verify the contract, and the risks to consider.",
    path: "/faq",
  },
  contact: {
    title: "Contact Nexora",
    description:
      "Official NEXORA contact channels. Official contact details are published here once available — the website never requests wallet credentials.",
    path: "/contact",
  },
  notFound: {
    title: "Page Not Found | Nexora (NEXORA)",
    description: "The page you are looking for does not exist.",
    path: "/404",
  },
} as const;
