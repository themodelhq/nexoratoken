# NEXORA — Official Website

The official website for **Nexora (NEXORA)**, an Ethereum ERC-20 digital asset with a publicly verifiable smart contract and a live NEXORA/WETH market on Uniswap V2.

> An Ethereum Digital Asset Built for a Connected Decentralized Future.

---

## Project

A premium, responsive, SEO-friendly **static** Next.js website. Production-ready, deployable to **Netlify** and **Render** from the same source — no backend required.

### Architecture

```text
Next.js (App Router, TypeScript)
   ↓
Static Export (output: "export")
   ↓
out/   (plain HTML, CSS, JS, images)
   ↓
Netlify Static Hosting  +  Render Static Site
```

The site has **no database, no Prisma, no authentication, no server APIs, no server actions, and no background workers**. It remains fully functional if all external services (CoinGecko, CoinMarketCap, Etherscan API, Uniswap API) are unavailable.

### Tech Stack

- **Next.js 16** (App Router, static export)
- **React 19** + **TypeScript 5**
- **Tailwind CSS 4** + **shadcn/ui** (accordion only — lean dependency tree)
- **Framer Motion** (animations, reduced-motion aware)
- **Lucide React** icons
- **Orbitron** (display) + **Inter** (body)

---

## Requirements

- **Node.js 20.9 or later**
- **Node.js 22 LTS recommended**
- **npm** (a `package-lock.json` is committed for reproducible installs)

---

## Installation

```bash
npm ci
```

> Use `npm ci` for reproducible production installs (reads `package-lock.json`).
> Use `npm install` only if you intentionally want to update the lockfile.

---

## Development

```bash
npm run dev
```

The site runs on `http://localhost:3000`.

---

## Production Build

```bash
npm run build
```

This runs `next build` with `output: "export"` and generates a fully static site in:

```text
out/
```

The `out/` directory contains:

- `index.html` (homepage)
- `about/index.html`, `token/index.html`, `how-to-buy/index.html`, `roadmap/index.html`, `faq/index.html`, `contact/index.html`
- `404.html`
- `robots.txt`, `sitemap.xml` (generated from `NEXT_PUBLIC_SITE_URL`)
- `_next/static/*` (fingerprinted, long-cacheable JS/CSS)
- `brand/*`, `og/*` (brand assets)

---

## Local Production Test

Because the build is a static export, preview it with any static file server:

```bash
npm run build
npx serve out
```

Then open the printed local URL (e.g. `http://localhost:3000`).

> `npm run start` is not used for static export — there is no Node server to start.

---

## Routes

| Route | Page |
|---|---|
| `/` | Homepage (full single-page experience with all sections) |
| `/about` | About Nexora |
| `/token` | NEXORA token technical profile + contract |
| `/how-to-buy` | Step-by-step acquisition guide |
| `/roadmap` | Phased roadmap with explicit statuses |
| `/faq` | Frequently asked questions |
| `/contact` | Official contact channels |

Every route has its own `<title>`, meta description, canonical URL, Open Graph, and Twitter card metadata (see `src/data/nexora.ts` → `pageMeta`).

---

## Environment Variables

Copy `.env.example` to `.env.local` and configure as needed. Set the same variables in your hosting provider for production.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | ⚠️ **Required for production.** Canonical URL for SEO, canonical, OG, JSON-LD, robots.txt, sitemap.xml |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Official contact email (empty → placeholder shown) |
| `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` | External form endpoint (e.g. Formspree). Empty → form gracefully disabled |
| `NEXT_PUBLIC_X_URL` | Official X/Twitter (empty → hidden) |
| `NEXT_PUBLIC_TELEGRAM_URL` | Official Telegram (empty → hidden) |
| `NEXT_PUBLIC_DISCORD_URL` | Official Discord (empty → hidden) |
| `NEXT_PUBLIC_GITHUB_URL` | Official GitHub (empty → hidden) |
| `NEXT_PUBLIC_YOUTUBE_URL` | Official YouTube (empty → hidden) |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Official Instagram (empty → hidden) |

**Never** put private secrets in `NEXT_PUBLIC_*` variables — they are exposed to the browser.

---

## Deployment — Netlify

1. Push this project to a GitHub repository (include `package-lock.json`).
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project**.
3. Select your GitHub repository.
4. Build settings are auto-detected from `netlify.toml`:
   - **Build command:** `npm ci && npm run build`
   - **Publish directory:** `out`
   - **Node version:** `22`
5. Under **Site settings → Environment variables**, set at minimum:
   - `NEXT_PUBLIC_SITE_URL` = your official domain (e.g. `https://nexora.eth`)
   - Any configured social / contact variables.
6. Click **Deploy site**.
7. Configure a custom domain under **Domain settings**.
8. Verify HTTPS (Netlify provisions automatically via Let's Encrypt).
9. Test all routes: `/`, `/about`, `/token`, `/how-to-buy`, `/roadmap`, `/faq`, `/contact`.

No paid Netlify features are required. No plugins are used.

---

## Deployment — Render

1. Push this project to a GitHub repository (include `package-lock.json`).
2. Go to [dashboard.render.com](https://dashboard.render.com) → **New +** → **Blueprint**.
3. Select your repository. Render auto-detects `render.yaml`.
4. The blueprint creates a **Static Site**:
   - **Build command:** `npm ci && npm run build`
   - **Publish directory:** `out`
   - **Node version:** `22`
5. Under the service's **Environment** tab, set at minimum:
   - `NEXT_PUBLIC_SITE_URL` = your official domain
   - Any configured social / contact variables.
6. Click **Apply** / **Create Static Site**.
7. Configure a custom domain under **Settings → Custom Domains**.
8. Verify HTTPS (Render provisions automatically).
9. Test all routes.

No database, background worker, Redis, or cron job is required.

---

## Centralized Project Data — `src/data/nexora.ts`

**This is the single source of truth for every NEXORA value.** It contains:

- project name, symbol, tagline, description
- network, chain ID, standard, decimals, total supply
- contract, pair, router, factory, WETH addresses (checksum)
- deployment & liquidity transaction hashes
- initial liquidity, opening ratio, opening price (historical)
- all external links (Uniswap, Etherscan, CMC DexScan)
- social links (configurable via env, empty = hidden)
- contact email + form endpoint (configurable)
- site URL (configurable via `NEXT_PUBLIC_SITE_URL`)
- risk disclaimer copy
- token stats, "why NEXORA", how-to-buy steps
- roadmap phases (with explicit statuses)
- FAQ entries
- per-page SEO metadata (`pageMeta`)

**If a value ever changes, update it here — never in components.**

---

## Updating NEXORA Information

1. Open `src/data/nexora.ts`.
2. Edit the relevant value in the `nexora` object (or `nexoraLinks`, `pageMeta`, etc.).
3. All components reference this file — no other changes needed.

All external links (Uniswap, Etherscan, CMC DexScan) are centralized in the `nexoraLinks` object.

---

## Updating Social Links

1. Open `.env.local` (or your hosting environment variables).
2. Set the relevant `NEXT_PUBLIC_*_URL` variables.
3. Restart the dev server / redeploy.

The `SocialLinks` component automatically renders only configured links. Empty values are omitted entirely — no fake accounts are ever shown.

---

## Verified Blockchain Information

| Field | Value |
|---|---|
| Network | Ethereum Mainnet |
| Chain ID | 1 |
| Standard | ERC-20 |
| Contract | `0xdBcC6DacB8c570365309F36D1C29b7ebbd8D3C0c` |
| Decimals | 18 |
| Total Supply | 1,000,000,000 NEXORA |
| NEXORA/WETH Pair | `0x44cB6f05AD4Bde017c126Be6f62e1653A6C647E4` |
| Uniswap V2 Router | `0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D` |
| Uniswap V2 Factory | `0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f` |
| WETH | `0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2` |

---

## Content Accuracy

This website represents a real blockchain project. The following are **never** fabricated:

- partnerships, investors, team members
- audits, certifications
- exchange listings, CoinGecko / CoinMarketCap verification
- staking, governance, DAO, burns, reflections
- guaranteed returns, market cap, volume, holders
- live USD price (not hardcoded anywhere)
- social media URLs (empty until officially provided)

Initial liquidity / opening price figures are clearly labeled as **historical** deployment values — never as the current market state. The CMC DexScan page is described only as a discovery page, not a verified CoinMarketCap listing.

---

## Web3 Safety

- The website **never** requests seed phrases, private keys, or wallet passwords.
- Wallet connection is **not required** — the site is fully functional without it.
- All trading is routed to the **official Uniswap interface** via external links.
- No fake trading interface is built into the site.

---

## Project Structure

```text
nexora-website/
├── public/
│   ├── brand/                 # Logo, favicon, SVG mark
│   └── og/                    # Open Graph social image
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout, SEO metadata, JSON-LD, fonts, shell
│   │   ├── page.tsx           # Homepage (all sections)
│   │   ├── not-found.tsx      # Custom 404
│   │   ├── robots.ts          # → /robots.txt (build-time)
│   │   ├── sitemap.ts         # → /sitemap.xml (build-time)
│   │   ├── about/page.tsx
│   │   ├── token/page.tsx
│   │   ├── how-to-buy/page.tsx
│   │   ├── roadmap/page.tsx
│   │   ├── faq/page.tsx
│   │   └── contact/page.tsx
│   ├── components/
│   │   ├── ui/accordion.tsx   # Only the shadcn primitive we use
│   │   └── nexora/            # NEXORA feature components
│   ├── data/
│   │   └── nexora.ts          # ⭐ Single source of truth
│   ├── lib/
│   │   ├── constants.ts       # Re-exports + helpers
│   │   └── utils.ts
│   └── app/globals.css        # NEXORA design tokens + Tailwind v4
├── .env.example
├── .gitignore
├── netlify.toml
├── render.yaml
├── next.config.ts             # output: "export"
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── LICENSE
└── README.md
```

---

## Risk Disclaimer

NEXORA is a digital asset on Ethereum. Digital assets involve substantial risk and price volatility. Nothing on this website constitutes financial, investment, legal, or tax advice. Users should conduct their own research and independently verify contract addresses and transaction details before interacting with any decentralized application.

---

## License

© 2026 Nexora. All rights reserved. See `LICENSE`.
