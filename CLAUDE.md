# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run docs:dev      # Local dev server with hot-reload
npm run docs:build    # Build static site to .vitepress/dist/ + generate sitemap.xml
npm run docs:preview  # Preview built site locally
```

## Architecture

**VitePress documentation site** for getinside Retail Media platform. Deployed to GitHub Pages at `https://getinside-ops.github.io/handbook/`.

**Core files:**
- `.vitepress/config.ts` — Site config: sidebar nav, Mermaid plugin, locales, base path `/handbook/`. Includes `transformHead` for SSR-optimized meta tags (OpenGraph, description, AI-specific tags like `citation_title`) and MS Clarity / Google Search Console tags.
- `.vitepress/theme/index.ts` — Custom Vue theme: dynamic metadata injection and enhanced Schema.org JSON-LD (WebPage, Organization, BreadcrumbList).
- `.vitepress/theme/style.css` — All brand tokens (`--gi-*`) and custom component styles.
- `assets/` — Public assets (images, `humans.txt`, `security.txt`).
- `scripts/generate-sitemap.js` — Node.js post-build script for `sitemap.xml`.
- `robots.txt` — Optimized for SEO and AI crawlers (GPT, Claude, Perplexity, Applebot, etc.).

## Content Structure

The documentation is bilingual. French markdown files live directly under `docs/`, and English translations mirror the exact structure under `docs/en/`. Both feature two main audience branches:

- **`advertisers/`** — Guides for brands: Sponsored Mail, Dedicated Email, Display Email, Social Ads, Co-branded Contests, Pricing
- **`publishers/`** — Guides for e-retailers: Sponsored Mail, Dedicated Email, Display Email, Social Ads, Co-branded Contests, Audiences & Data, Payouts & Wallet, Affiliation

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

## Knowledge Base Integration

Content is enriched from NotebookLM notebook (ID: `9b86dd27-355e-453c-aee2-af40cb58f59c`) via MCP. Key metrics to include:
- **Advertiser performance:** 100% open rate (Sponsored Mail), 1-10% CTR, 10-30% conversion
- **Retailer economics:** 2-20% additional revenue, 65-70% net margins
- **Network scale:** 250+ e-commerçants, 300+ advertisers, 950+ successful campaigns
- **Quality system:** Score Distributeur (1-5 stars, 7 evaluation criteria)
