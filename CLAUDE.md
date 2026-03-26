# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run docs:dev      # Local dev server with hot-reload
npm run docs:build    # Build static site to .vitepress/dist/ + generate sitemap.xml
npm run docs:preview  # Preview built site locally
npm run generate:og   # Regenerate OG image (Playwright screenshot)
```

## Asset Generation

Static assets (OG image at 1200×630) are generated via Playwright Node.js ESM scripts in `scripts/`. Pattern:
- Script: `scripts/generate-og-image.js` — Uses `chromium.launch()` to render HTML → PNG
- SVG logos inlined as base64 data URIs for self-contained rendering
- Requires: `npm install --save-dev playwright` + `npx playwright install chromium` (binaries)
- Regenerate if design changes: edit script → `npm run generate:og` → commit both script and PNG output
- Ensure script uses ESM (`import` syntax, not `require`) — project has `"type": "module"`

## Architecture

**VitePress documentation site** for getinside Retail Media platform. Deployed to GitHub Pages at `https://getinside-ops.github.io/handbook/`.

**Core files:**
- `.vitepress/config.ts` — Site config: sidebar nav, Mermaid plugin, locales, base path `/handbook/`. Includes `transformHead` for SSR-optimized meta tags (OpenGraph, description, AI-specific tags like `citation_title`), MS Clarity, Google Search Console, and Algolia site verification tags.
- `.vitepress/theme/index.ts` — Custom Vue theme: dynamic metadata injection and enhanced Schema.org JSON-LD (WebPage, Organization, BreadcrumbList).
- `.vitepress/theme/style.css` — All brand tokens (`--gi-*`) and custom component styles.
- `assets/` — Public assets (images, `humans.txt`, `security.txt`).
- `scripts/generate-sitemap.js` — Node.js post-build script for `sitemap.xml`.
- `robots.txt` — Optimized for SEO and AI crawlers (GPT, Claude, Perplexity, Applebot, etc.).
- `seo-keywords.md` — Keyword research reference; consult when writing titles/descriptions.
- `.vitepress/SEO-GUIDELINES.md` — FR guide for SEO conventions; read before adding new pages.

## Content Structure

The documentation is bilingual. French markdown files live directly under `docs/`, and English translations mirror the exact structure under `docs/en/`. Both feature two main audience branches:

- **`advertisers/`** — Guides for brands: Sponsored Mail, Dedicated Email, Display Email, Social Ads, Bundles & Media Kits, Pricing, Printing Services, Onboarding Quick Start
- **`publishers/`** — Guides for e-retailers: Sponsored Mail, Dedicated Email, Display Email, Social Ads, Bundles & Media Kits, Audiences & Data, Payouts & Wallet, Affiliation, Score Distributeur, Onboarding Process/Quick Start, Pricing

Supporting sections: `start-here/` (homepage), `faq/`, `resources/`, `glossary.md`

The homepage (`index.md` at root) uses VitePress `layout: home` with `hero` and `features` YAML blocks — not standard markdown.

## Frontmatter & SEO

**Every page MUST include YAML frontmatter** with:
```yaml
---
title: Page Title
description: 2-3 sentence summary (used in meta description + OpenGraph)
keywords:
  - keyword1
  - keyword2
  - keyword3
image: /images/og-image.png  # optional, overrides site default
---
```

Both `config.ts` (via `transformHead` for SSR) and the theme hook in `index.ts` (for runtime updates) use these fields to manage SEO metadata and Schema.org data. Sidebar is manually configured in `.vitepress/config.ts` — add new pages to `themeConfig.sidebar` when creating new files.

## Content Conventions

Content spans **French and English**. Ensure language parity across both folders. Use VitePress container directives for callouts:
- `::: tip` — Positive highlight (mint accent)
- `::: info` — Information callout
- `::: warning` — Caution/attention
- `::: danger` — Critical alert

Mermaid diagrams: ` ```mermaid ` blocks (plugin configured in `config.ts`).

**HTML → Markdown conversion rules:**
- Replace `<p class="gi-page-intro">` → standard paragraph
- Replace `<div class="gi-accent-box">` → `::: tip`
- Replace `<div class="gi-danger-box">` → `::: danger`
- Replace `<strong>text</strong>` → `**text**`

**KEEP as raw HTML** (no markdown equivalent — styled by `style.css`):

`gi-step` — Numbered process step:
```html
<div class="gi-step">
  <div class="gi-step-num">1</div>
  <div class="gi-step-body">
    <h3>Step Title</h3>
    <p>Description text.</p>
  </div>
</div>
```
Use `<div class="gi-step-num done">` for completed steps (green circle).

`gi-value-grid` — Metric/comparison cards:
```html
<div class="gi-value-grid">
  <div class="gi-value-card">
    <strong>Label</strong>
    <p>Description.</p>
  </div>
</div>
```

`gi-format-grid` — Format showcase (linkable cards):
```html
<div class="gi-format-grid">
  <a href="relative-link/" class="gi-format-card">
    <span class="gi-format-card-icon">📦</span>
    <span class="gi-format-card-title">Title</span>
    <p class="gi-format-card-desc">Description.</p>
  </a>
</div>
```

## Tables

All markdown tables render full width by default (`.vp-doc table { width: 100% }` in `style.css`). No wrapper class needed. The legacy `gi-table-full` class still works but is unnecessary for new content.

## Design Guide Structure (Advertisers)

The advertiser design guides (e.g., `advertisers/sponsored-mail/design-guide/`) follow this structure:
1. **Offer** — Monetary value vs %, validity period (min 3 months), promo codes (unique per retailer)
2. **Mechanic** — 6 types (Promotion, Drive to Store, Content, Games/Contests, Drive to App, Feedback)
3. **Audience alignment** — "Why is this content for this audience?" test
4. **Copywriting** — Hook (benefit first), Promise, Urgency
5. **Paper UX** — Visual hierarchy (Z-pattern), QR code placement, readability
6. **Post-scan** — Mobile-first landing page (responsive, fast, simple)
7. **FAQ** — Use `::: details` sections for common Q&As (e.g., distributor veto rule, performance tracking)

**Key QR code rules:**
- Minimum **25 × 25 mm**, black on white, with clear instruction text
- **Dynamic** (URL changeable post-print via platform)
- Must be getinside proprietary `.svg` (not user-generated)
- Unaffected by lamination: use machine varnish instead (lamination blocks scanning + reduces recyclability)

## Knowledge Base Integration

Content is enriched from NotebookLM notebook (ID: `9b86dd27-355e-453c-aee2-af40cb58f59c`) via MCP. Key metrics to include:
- **Advertiser performance:** 100% open rate (Sponsored Mail), 1-10% CTR, 10-30% conversion
- **Retailer economics:** 2-20% additional revenue, 65-70% net margins
- **Network scale:** 250+ e-commerçants, 300+ advertisers, 950+ successful campaigns, 40M consumers
- **Fundraising:** 3.2M€ seed (Feb 2026) — La Poste Ventures, Swiss Post Ventures, 50 Partners, Clover, Founders Future
- **Penalties:** Annulation = 550€ HT · Contournement = 2,500€ HT per campaign
- **Contractual (March 2026):** Starter contract folded into CGUC. Framework: CGUC + CGV + CGP + Privacy Policy
- **Affiliation:** 20% commission on platform fees, 30-day control period, 0% fees on reinvestment
- **Quality system:** Score Distributeur (1-5 stars, 7 evaluation criteria)
- **Gamified content CTR:** Up to 20% (games, contests)
- **Promo code rules:** Unique per retailer, short, no special chars, ideally include retailer name
- **Offer validity:** Min 3 months (recipients keep flyers weeks before scanning)

## jdocmunch MCP

jdocmunch indexes the local `docs/` folder and enables section-level search, TOC retrieval, and targeted section reads — more efficient than Grep when navigating content structure across ~80 bilingual files.

**When to use it:**
- Before adding content: check for existing coverage or find the right file to edit
- Bilingual parity checks: compare FR vs EN section structures
- Cross-file content audits (e.g., "all pages mentioning Score Distributeur")
- Getting a structural overview before planning edits

**When NOT to use it** (use Grep/Read instead):
- Exact string/regex searches
- Reading a specific known file

**Workflow — lazy-index pattern:**
```
1. index_local(path="/Users/benoitprentout/handbook/docs", name="handbook-docs")
   → incremental by default; only re-indexes changed files
2. Use search/TOC tools as needed
```

**Tool quick-reference (`repo="handbook-docs"`):**
- `index_local` — Index or refresh the docs folder (run once per session before first search)
- `search_sections(query="...")` — Find sections by topic across FR + EN
- `get_toc` — Full flat TOC (all headings, all files)
- `get_toc_tree` — Hierarchical TOC
- `get_section(...)` — Retrieve a specific section by heading path
- `get_section_context(...)` — Section with surrounding context

<!-- rtk-instructions v2 -->
# RTK (Rust Token Killer) - Token-Optimized Commands

## Golden Rule

**Always prefix commands with `rtk`**. If RTK has a dedicated filter, it uses it. If not, it passes through unchanged. This means RTK is always safe to use.

**Important**: Even in command chains with `&&`, use `rtk`:
```bash
# ❌ Wrong
git add . && git commit -m "msg" && git push

# ✅ Correct
rtk git add . && rtk git commit -m "msg" && rtk git push
```

## RTK Commands by Workflow

### Build & Compile (80-90% savings)
```bash
rtk cargo build         # Cargo build output
rtk cargo check         # Cargo check output
rtk cargo clippy        # Clippy warnings grouped by file (80%)
rtk tsc                 # TypeScript errors grouped by file/code (83%)
rtk lint                # ESLint/Biome violations grouped (84%)
rtk prettier --check    # Files needing format only (70%)
rtk next build          # Next.js build with route metrics (87%)
```

### Test (90-99% savings)
```bash
rtk cargo test          # Cargo test failures only (90%)
rtk vitest run          # Vitest failures only (99.5%)
rtk playwright test     # Playwright failures only (94%)
rtk test <cmd>          # Generic test wrapper - failures only
```

### Git (59-80% savings)
```bash
rtk git status          # Compact status
rtk git log             # Compact log (works with all git flags)
rtk git diff            # Compact diff (80%)
rtk git show            # Compact show (80%)
rtk git add             # Ultra-compact confirmations (59%)
rtk git commit          # Ultra-compact confirmations (59%)
rtk git push            # Ultra-compact confirmations
rtk git pull            # Ultra-compact confirmations
rtk git branch          # Compact branch list
rtk git fetch           # Compact fetch
rtk git stash           # Compact stash
rtk git worktree        # Compact worktree
```

Note: Git passthrough works for ALL subcommands, even those not explicitly listed.

### GitHub (26-87% savings)
```bash
rtk gh pr view <num>    # Compact PR view (87%)
rtk gh pr checks        # Compact PR checks (79%)
rtk gh run list         # Compact workflow runs (82%)
rtk gh issue list       # Compact issue list (80%)
rtk gh api              # Compact API responses (26%)
```

### JavaScript/TypeScript Tooling (70-90% savings)
```bash
rtk pnpm list           # Compact dependency tree (70%)
rtk pnpm outdated       # Compact outdated packages (80%)
rtk pnpm install        # Compact install output (90%)
rtk npm run <script>    # Compact npm script output
rtk npx <cmd>           # Compact npx command output
rtk prisma              # Prisma without ASCII art (88%)
```

### Files & Search (60-75% savings)
```bash
rtk ls <path>           # Tree format, compact (65%)
rtk read <file>         # Code reading with filtering (60%)
rtk grep <pattern>      # Search grouped by file (75%)
rtk find <pattern>      # Find grouped by directory (70%)
```

### Analysis & Debug (70-90% savings)
```bash
rtk err <cmd>           # Filter errors only from any command
rtk log <file>          # Deduplicated logs with counts
rtk json <file>         # JSON structure without values
rtk deps                # Dependency overview
rtk env                 # Environment variables compact
rtk summary <cmd>       # Smart summary of command output
rtk diff                # Ultra-compact diffs
```

### Infrastructure (85% savings)
```bash
rtk docker ps           # Compact container list
rtk docker images       # Compact image list
rtk docker logs <c>     # Deduplicated logs
rtk kubectl get         # Compact resource list
rtk kubectl logs        # Deduplicated pod logs
```

### Network (65-70% savings)
```bash
rtk curl <url>          # Compact HTTP responses (70%)
rtk wget <url>          # Compact download output (65%)
```

### Meta Commands
```bash
rtk gain                # View token savings statistics
rtk gain --history      # View command history with savings
rtk discover            # Analyze Claude Code sessions for missed RTK usage
rtk proxy <cmd>         # Run command without filtering (for debugging)
rtk init                # Add RTK instructions to CLAUDE.md
rtk init --global       # Add RTK to ~/.claude/CLAUDE.md
```

## Token Savings Overview

| Category | Commands | Typical Savings |
|----------|----------|-----------------|
| Tests | vitest, playwright, cargo test | 90-99% |
| Build | next, tsc, lint, prettier | 70-87% |
| Git | status, log, diff, add, commit | 59-80% |
| GitHub | gh pr, gh run, gh issue | 26-87% |
| Package Managers | pnpm, npm, npx | 70-90% |
| Files | ls, read, grep, find | 60-75% |
| Infrastructure | docker, kubectl | 85% |
| Network | curl, wget | 65-70% |

Overall average: **60-90% token reduction** on common development operations.
<!-- /rtk-instructions -->