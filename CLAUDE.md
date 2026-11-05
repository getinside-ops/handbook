# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run docs:dev      # Local dev server with hot-reload
npm run docs:build    # Build static site to .vitepress/dist/ + sitemap.xml + JSON-LD injection + llms.txt
npm run docs:preview  # Preview built site locally
npm run generate:og   # Regenerate OG image (Playwright screenshot)
npm run generate:icons # Regenerate favicon/PWA icons from the logo (Playwright)
```

## Asset Generation

Static assets (OG image at 1200×630) are generated via Playwright Node.js ESM scripts in `scripts/`. Pattern:
- Script: `scripts/generate-og-image.js` — Uses `chromium.launch()` to render HTML → PNG
- SVG logos inlined as base64 data URIs for self-contained rendering
- Requires: `npm install --save-dev playwright` + `npx playwright install chromium` (binaries)
- Regenerate if design changes: edit script → `npm run generate:og` → commit both script and PNG output
- Ensure script uses ESM (`import` syntax, not `require`) — project has `"type": "module"`

## Architecture

**VitePress documentation site** for getinside, the parcel and direct mail marketing solution ("Le marketing qui touche"). Deployed to GitHub Pages at `https://getinside-ops.github.io/handbook/` (built in CI by `.github/workflows/deploy.yml`; `.vitepress/dist` is git-ignored and must not be committed).

**Deploy:** push to `main` → GitHub Actions builds (`npm run docs:build`) → deploys `.vitepress/dist/` to GitHub Pages. No manual step. CI runs on Node 24.

**Core files:**
- `.vitepress/config.ts` — Site config: sidebar nav, locales, base path `/handbook/`. `transformHead` emits SSR meta tags (OpenGraph, description, AI tags like `citation_title`) AND the per-page `WebPage`/`BreadcrumbList` JSON-LD (via `buildWebPageSchema`). Also wires MS Clarity, Google Search Console verification, and the static `WebSite` schema. Search is VitePress **local** search (no Algolia). No Mermaid plugin is installed.
- `.vitepress/theme/index.ts` — Custom Vue theme: client-side OpenGraph/canonical/hreflang updates on SPA navigation (`updateOpenGraph`). Schema.org is rendered in SSR via `config.ts`, not here.
- `.vitepress/theme/style.css` — All brand tokens (`--gi-*`) and custom component styles. Light-mode text green is `#067a66` (AA); never use the vivid mint `#6AE7C8` or the old `#0aaa8e` for text on white (contrast < 4.5:1).
- `assets/` — Copied verbatim to the dist root (`vite.publicDir`). Holds `images/`, `fonts/` (Garnett woff2+woff), `robots.txt`, `humans.txt`, `security.txt` (+`.well-known/`), `site.webmanifest`, favicons.
- `scripts/generate-sitemap.js` — Post-build `sitemap.xml`.
- `scripts/generate-structured-data.js` — Post-build: injects static `FAQPage` (FAQ pages) + `HowTo` (gi-step guides) JSON-LD into built HTML, single-sourced from the markdown.
- `scripts/generate-llms-txt.js` — Post-build: generates `/llms.txt` (page index) + `/llms-full.txt` (full FR corpus) for AI crawlers.
- `scripts/generate-icons.js` — Generates favicon/apple-touch/PWA PNGs from the logo (Playwright).
- `robots.txt` — Optimized for SEO and AI crawlers (GPT, Claude, Perplexity, Applebot, etc.).
- `seo-keywords.md` — Keyword research reference; consult when writing titles/descriptions.
- `.vitepress/SEO-GUIDELINES.md` — FR guide for SEO conventions; read before adding new pages.

## Content Structure

The documentation is bilingual. French markdown files live directly under `docs/`, and English translations mirror the exact structure under `docs/en/`. Both are organized by use case:

- **`recruit/`** — Use case **Recruter** (SaaS section): have your campaigns delivered by other brands. Channels: Insertion colis (`sponsored-mail/`), Échantillonnage (`sampling/`). Other formats (secondary in the sidebar): Dedicated Email, Display Email, Social Ads, Co-branded Contests. Plus Printing services.
- **`retain/`** — Use case **Fidéliser** (separate section, not SaaS): Courrier adressé (`direct-mail/`).
- **`monetize/`** — Use case **Monétiser** (SaaS section): deliver other brands' campaigns. Insertion colis, other formats (Dedicated Email, Display Email, Social Ads, Co-branded Contests), Audiences & Data, Payouts & Wallet, Affiliation.

There is no advertiser/distributor split anymore: one brand can recruit and monetize. Old URLs (`/advertisers/`, `/publishers/`) are redirected by `scripts/generate-redirects.js` using `scripts/redirects.json`; add an entry there whenever a page is moved or deleted.

Supporting sections: `start-here/` (introduction and how it works), `faq/`, `resources/`, `glossary.md`

`docs/superpowers/` — Internal planning directory (plans, specs). Excluded from H1 and content audits intentionally.

The homepage (`index.md` at root) uses VitePress `layout: home` with `hero` and `features` YAML blocks — not standard markdown.

**Vocabulary** (source: messaging guide): one actor, "la marque" / "the brand". Do not use "annonceurs", "distributeurs", "marques du réseau" as role labels (nor "advertisers", "distributors", "network brands", "publishers"), and never "retailers" or "e-commerçants". Describe sides by action: "vous faites diffuser votre campagne" (Recruter) / "vous diffusez les campagnes d'autres marques" (Monétiser). Signature "Le marketing qui touche". Do not use "Retail Media" or "asile colis".

**No pricing in the handbook.** Never publish prices, commissions, platform fees, plans, payout tiers or penalty amounts. Campaign results (CAC, CVR, revenue generated) are allowed.

## Frontmatter & SEO

**Every content page MUST also begin with an H1 heading** (`# Title`) immediately after the frontmatter block. VitePress does NOT auto-render `frontmatter.title` as a visible heading — the H1 must be explicit in the markdown body. Exception: the root `index.md` which uses `layout: home`.

Audit command (covers FR + EN, excludes superpowers): `for f in $(find docs -name "*.md" -not -path "*/superpowers/*"); do if ! grep -q "^# " "$f" && ! grep -q "^layout:" "$f"; then echo "MISSING H1: $f"; fi; done`

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

SEO metadata and Schema.org JSON-LD are generated in SSR by `config.ts` (`transformHead` + `buildWebPageSchema`); `theme/index.ts` only refreshes OpenGraph/canonical/hreflang during SPA navigation. Sidebar is manually configured in `.vitepress/config.ts` — add new pages to `themeConfig.sidebar` when creating new files (FR and EN blocks).

**YAML pitfall:** a frontmatter value containing `: ` (colon + space) must be wrapped in double quotes, otherwise the build fails with a YAML error (e.g. `description: "Top CAC : 1,21 €"`).

**Links:** markdown links use site-relative paths without the base (`[text](/recruit/)`); raw HTML `href` attributes and image `src` must include the base (`/handbook/recruit/`, `/handbook/images/...`). VitePress does not check raw HTML links.

## Content Conventions

Content spans **French and English**. Ensure language parity across both folders. Use VitePress container directives for callouts:
- `::: tip` — Positive highlight (mint accent)
- `::: info` — Information callout
- `::: warning` — Caution/attention
- `::: danger` — Critical alert

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
Use `<div class="gi-step-num done">` for completed steps (green text, no circle).

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

## Design Guide Structure (Recruter)

The design guides (e.g., `recruit/sponsored-mail/design-guide/`) follow this structure:
1. **Offer** — Monetary value vs %, validity period (min 3 months), promo codes (unique per partner brand)
2. **Mechanic** — 6 types (Promotion, Drive to Store, Content, Games/Contests, Drive to App, Feedback)
3. **Audience alignment** — "Why is this content for this audience?" test
4. **Copywriting** — Hook (benefit first), Promise, Urgency
5. **Paper UX** — Visual hierarchy (Z-pattern), QR code placement, readability
6. **Post-scan** — Mobile-first landing page (responsive, fast, simple)
7. **FAQ** — Use `::: details` sections for common Q&As (e.g., partner brand veto rule, performance tracking)

**Key QR code rules:**
- Minimum **25 × 25 mm**, black on white, with clear instruction text
- **Dynamic** (URL changeable post-print via platform)
- Must be getinside proprietary `.svg` (not user-generated)
- Unaffected by lamination: use machine varnish instead (lamination blocks scanning + reduces recyclability)

## Prose Quality — Vale

Vale is configured in `.vale.ini` + `.vale/styles/` to enforce prose standards. Run before committing content changes:

```bash
# FR files
find docs -name "*.md" -not -path "*/en/*" | xargs vale --output=JSON

# EN files
find docs/en -name "*.md" | xargs vale --output=JSON

# Quick summary
find docs/en -name "*.md" | xargs vale --output=JSON 2>/dev/null | python3 -c "
import json,sys; d=json.load(sys.stdin)
print(sum(len(v) for v in d.values()), 'issues in', len(d), 'files')
"
```

**Rules enforced:**
- `EmDash` — detects `—` (em dash). Replace with `.` (new sentence), `,` (parenthetical), or `:` (list intro)
- `AIVocabFR` — flags: essentiel, crucial, fondamental, hors normes, véritables, au cœur de, permet de, transforme…en, levier de croissance, directement mesurable
- `AIVocabEN` — flags: essential, showcase, unlock, leverage (verb)
- `SentenceLength` (FR only) — warns on sentences >20 words average

**Protected zones — never modify:**
- YAML frontmatter (`description:`, `title:` on lines 2–3) — these are meta tags, not prose
- VitePress container titles (`:::tip Title`, `:::warning Title`, `:::details Title`) — line starting with `:::`

Remaining Vale flags after a correction pass are expected to be only frontmatter + container titles.

## Knowledge Base Integration

Content is aligned on four Google Drive sources (as of the 2026-11 repositioning): the **"Guide de messaging - getinside"** (reference for vocabulary, promise and verbatims), and the decks **"getinside | Marketing par le colis et le courrier adressé"**, its **"design system"** version (case studies) and **"getinside | pour le réseau"** (network brands). When sources disagree, the messaging guide wins. Key messages and figures to use:
- **Promise:** "Recruter, fidéliser et monétiser vos clients avec le colis et le courrier adressé" (H2), signature "Le marketing qui touche". 3 verbs (Recruter / Fidéliser / Monétiser), 3 channels (insertion colis, courrier adressé, échantillonnage). Exchange is a way to recruit without media spend, not a fourth use case.
- **Proof points:** 98 % deliverability, 100 % attention, 86 % of purchase decisions made at home, 500+ brands, 300+ aggregated audiences (network side).
- **Records:** TOP CAC 1,21 € (Recruter), TOP CVR 6 % (Fidéliser), top revenue +215 K€/year and 90 % reinvested in acquisition (Monétiser).
- **Compliance:** GDPR on legitimate interest with right to object on every mailing; AGEC law (samples handed over on the consumer's prior request, art. L541-15-10 of the Environmental Code).
- **Do not import** the internal sales content of the guide (ICP, prospecting titles, competitive study) or unconfirmed items (the "Agency" term, free trial, revenue simulator).

`scripts/check-content.sh [files...]` checks FR/EN parity of `docs/` and banned terms in the given files; run it before committing content changes.

## jdocmunch MCP

jdocmunch indexes the local `docs/` folder and enables section-level search, TOC retrieval, and targeted section reads — more efficient than Grep when navigating content structure across ~80 bilingual files.

**When to use it:**
- Before adding content: check for existing coverage or find the right file to edit
- Bilingual parity checks: compare FR vs EN section structures
- Cross-file content audits (e.g., "all pages mentioning a given term")
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
