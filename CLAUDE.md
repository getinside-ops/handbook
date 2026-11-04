# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run docs:dev      # Local dev server with hot-reload
npm run docs:build    # Build static site to .vitepress/dist/ + generate sitemap.xml
npm run docs:preview  # Preview built site locally
```

## Architecture

**VitePress documentation site** for getinside, the parcel and direct mail marketing solution ("Le marketing qui touche"). Deployed to GitHub Pages at `https://getinside-ops.github.io/handbook/` (built in CI by `.github/workflows/deploy.yml`; `.vitepress/dist` is git-ignored and must not be committed).

**Core files:**
- `.vitepress/config.ts` — Site config: sidebar nav, Mermaid plugin, locales, base path `/handbook/`. Includes `transformHead` for SSR-optimized meta tags (OpenGraph, description, AI-specific tags like `citation_title`), MS Clarity, Google Search Console, and Algolia site verification tags.
- `.vitepress/theme/index.ts` — Custom Vue theme: dynamic metadata injection and enhanced Schema.org JSON-LD (WebPage, Organization, BreadcrumbList).
- `.vitepress/theme/style.css` — All brand tokens (`--gi-*`) and custom component styles.
- `assets/` — Public assets (images, `humans.txt`, `security.txt`).
- `scripts/generate-sitemap.js` — Node.js post-build script for `sitemap.xml`.
- `robots.txt` — Optimized for SEO and AI crawlers (GPT, Claude, Perplexity, Applebot, etc.).

## Content Structure

The documentation is bilingual. French markdown files live directly under `docs/`, and English translations mirror the exact structure under `docs/en/`. Both are organized by use case:

- **`recruit/`** — Use case **Recruter** (SaaS section): have your campaigns delivered by other brands. Channels: Insertion colis (`sponsored-mail/`), Échantillonnage (`sampling/`). Other formats (secondary in the sidebar): Dedicated Email, Display Email, Social Ads, Co-branded Contests. Plus Printing services.
- **`retain/`** — Use case **Fidéliser** (separate section, not SaaS): Courrier adressé (`direct-mail/`).
- **`monetize/`** — Use case **Monétiser** (SaaS section): deliver other brands' campaigns. Insertion colis, other formats (Dedicated Email, Display Email, Social Ads, Co-branded Contests), Audiences & Data, Payouts & Wallet, Affiliation.

There is no advertiser/distributor split anymore: one brand can recruit and monetize. Old URLs (`/advertisers/`, `/publishers/`) are redirected by `scripts/generate-redirects.js` using `scripts/redirects.json`; add an entry there whenever a page is moved or deleted.

Supporting sections: `start-here/` (introduction and how it works), `faq/`, `resources/`, `glossary.md`

The homepage (`index.md` at root) uses VitePress `layout: home` with `hero` and `features` YAML blocks — not standard markdown.

**Vocabulary** (source: messaging guide): one actor, "la marque" / "the brand". Do not use "annonceurs", "distributeurs", "marques du réseau" as role labels (nor "advertisers", "distributors", "network brands", "publishers"), and never "retailers" or "e-commerçants". Describe sides by action: "vous faites diffuser votre campagne" (Recruter) / "vous diffusez les campagnes d'autres marques" (Monétiser). Signature "Le marketing qui touche". Do not use "Retail Media" or "asile colis".

**No pricing in the handbook.** Never publish prices, commissions, platform fees, plans, payout tiers or penalty amounts. Campaign results (CAC, CVR, revenue generated) are allowed.

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

Both `config.ts` (via `transformHead` for SSR) and the theme hook in `index.ts` (for runtime updates) use these fields to manage SEO metadata and Schema.org data. Sidebar is manually configured in `.vitepress/config.ts` — add new pages to `themeConfig.sidebar` when creating new files (FR and EN blocks).

**YAML pitfall:** a frontmatter value containing `: ` (colon + space) must be wrapped in double quotes, otherwise the build fails with a YAML error (e.g. `description: "Top CAC : 1,21 €"`).

**Links:** markdown links use site-relative paths without the base (`[text](/recruit/)`); raw HTML `href` attributes and image `src` must include the base (`/handbook/recruit/`, `/handbook/images/...`). VitePress does not check raw HTML links.

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

## Knowledge Base Integration

Content is aligned on four Google Drive sources (as of the 2026-11 repositioning): the **"Guide de messaging - getinside"** (reference for vocabulary, promise and verbatims), and the decks **"getinside | Marketing par le colis et le courrier adressé"**, its **"design system"** version (case studies) and **"getinside | pour le réseau"** (network brands). When sources disagree, the messaging guide wins. Key messages and figures to use:
- **Promise:** "Recruter, fidéliser et monétiser vos clients avec le colis et le courrier adressé" (H2), signature "Le marketing qui touche". 3 verbs (Recruter / Fidéliser / Monétiser), 3 channels (insertion colis, courrier adressé, échantillonnage). Exchange is a way to recruit without media spend, not a fourth use case.
- **Proof points:** 98 % deliverability, 100 % attention, 86 % of purchase decisions made at home, 500+ brands, 300+ aggregated audiences (network side).
- **Records:** TOP CAC 1,21 € (Recruter), TOP CVR 6 % (Fidéliser), top revenue +215 K€/year and 90 % reinvested in acquisition (Monétiser).
- **Compliance:** GDPR on legitimate interest with right to object on every mailing; AGEC law (samples handed over on the consumer's prior request, art. L541-15-10 of the Environmental Code).
- **Do not import** the internal sales content of the guide (ICP, prospecting titles, competitive study) or unconfirmed items (the "Agency" term, free trial, revenue simulator).

`scripts/check-content.sh [files...]` checks FR/EN parity of `docs/` and banned terms in the given files; run it before committing content changes.
