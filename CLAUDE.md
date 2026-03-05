# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run docs:dev      # Local dev server
npm run docs:build    # Build static site to .vitepress/dist/
npm run docs:preview  # Preview built site
```

## Architecture

**VitePress documentation site** for getinside Retail Media platform. Deployed to GitHub Pages at `/handbook/`.

- `.vitepress/config.ts` — Main config: sidebar nav, Mermaid plugin, French locale, base path `/handbook/`
- `.vitepress/theme/` — Custom theme (style.css + index.ts)
- `docs/fr/` — All content in French, organized by audience
- `assets/images/` — SVGs, WebP images, case studies
- `.github/workflows/deploy.yml` — CI/CD to GitHub Pages on push to main

## Content Structure

All markdown lives under `docs/fr/` with two main audience branches:

- **`advertisers/`** — Guides for brands: Sponsored Mail, Dedicated Email, Display Email, Social Ads, Co-branded Contests, Pricing
- **`publishers/`** — Guides for e-retailers: Sponsored Mail, Dedicated Email, Display Email, Social Ads, Co-branded Contests, Audiences & Data, Payouts & Wallet, Affiliation

Supporting sections: `start-here/`, `faq/`, `resources/`, `glossary.md`

## Content Conventions

- All content is in **French**
- Mermaid diagrams are supported natively (use ` ```mermaid ` blocks)
- Navigation sidebar is manually configured in `.vitepress/config.ts` — add new pages there when creating new markdown files
- Images go in `assets/images/` and are referenced with relative paths
