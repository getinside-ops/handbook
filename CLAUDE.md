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
- `.vitepress/config.ts` — Site config: sidebar nav, Mermaid plugin, French locale, base path `/handbook/`, meta tags (robots, OpenGraph, Twitter Card, Schema.org)
- `.vitepress/theme/index.ts` — Custom Vue theme: dynamic metadata injection (OG tags + Schema.org JSON-LD per page)
- `.vitepress/theme/style.css` — CSS tokens: Inter font, mint/teal brand colors, custom `--gi-*` aliases
- `docs/fr/` — All content in French, organized by audience
- `assets/images/` — SVGs, WebP images
- `.github/workflows/deploy.yml` — CI/CD: auto-deploy to GitHub Pages on push to main
- `robots.txt` — Crawler access control; explicitly allows GPTBot, Claude-Web, Googlebot
- `scripts/generate-sitemap.js` — Node.js script (runs post-build): generates `sitemap.xml` with 52 URLs, priority weighting, lastmod timestamps

## Content Structure

All markdown lives under `docs/fr/` with two main audience branches:

- **`advertisers/`** — Guides for brands: Sponsored Mail, Dedicated Email, Display Email, Social Ads, Co-branded Contests, Pricing
- **`publishers/`** — Guides for e-retailers: Sponsored Mail, Dedicated Email, Display Email, Social Ads, Co-branded Contests, Audiences & Data, Payouts & Wallet, Affiliation

Supporting sections: `start-here/` (homepage), `faq/`, `resources/`, `glossary.md`

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

All pages are automatically indexed in `sitemap.xml` (priorities: start-here=0.9, advertisers/publishers=0.8, faq=0.7, resources=0.6). The `.vitepress/theme/index.ts` hook dynamically injects OpenGraph and Schema.org metadata per page on mount.

## Content Conventions

**Markdown style:**
- All content is in **French**
- Use VitePress container directives for callouts:
  - `::: tip` — Positive highlight (mint accent)
  - `::: info` — Information callout
  - `::: warning` — Caution/attention
  - `::: danger` — Critical alert
- Mermaid diagrams are supported natively: ` ```mermaid ` blocks

**HTML → Markdown conversion:**
- Replace `<p class="gi-page-intro">` with standard markdown paragraph
- Replace `<div class="gi-accent-box">` with `::: tip` container
- Replace `<div class="gi-danger-box">` with `::: danger` container
- Replace standalone `<p>` tags with markdown paragraphs
- Replace `<strong>text</strong>` with `**text**`
- KEEP these custom div classes (no markdown equivalent):
  - `gi-value-grid` — Multi-card grid for metrics/comparisons
  - `gi-format-grid` — Format showcase grid
  - `gi-step` — Step-by-step process cards

**Images & assets:**
- All images go in `assets/images/` (relative paths: `/images/filename.ext`)
- Prefer SVG for icons/logos, WebP for photographs

**Navigation:**
- Sidebar is manually configured in `.vitepress/config.ts` — add new pages to `themeConfig.sidebar` when creating new markdown files

## Knowledge Base Integration

Content is enriched from NotebookLM notebook (ID: `9b86dd27-355e-453c-aee2-af40cb58f59c`) using MCP. Key metrics to include:
- **Advertiser performance:** 100% open rate (Sponsored Mail), 1-10% CTR, 10-30% conversion
- **Retailer economics:** 2-20% additional revenue, 65-70% net margins
- **Network scale:** 250+ e-commerçants, 300+ advertisers, 950+ successful campaigns
- **Quality system:** Score Distributeur (1-5 stars, 7 evaluation criteria)
