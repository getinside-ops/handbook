# Content Style Guide — getinside Handbook

This guide applies to all French pages. English pages are adapted from French following the same rules.

---

## Page Types & Word Count Targets

| Type | Purpose | Target |
|---|---|---|
| **Hub/Index** | Navigation only — links to subpages, no detailed content | 80–150 words |
| **Landing/Overview** | Value proposition, platform intro, key stats | 300–450 words |
| **Product Page** | Full format/service explanation with specs and pricing | 400–600 words |
| **Workflow/How-to** | Step-by-step operational guide | 300–500 words |
| **Reference/Specs** | Technical specs, tables, legal requirements | 200–400 words |
| **FAQ entry** | Q&A format, one question per `:::details` block | 50–100 words per entry |

---

## Tone Rules

- **Voice:** 2nd person "vous" throughout — professional, direct, warm. Not salesy, not cold.
- **Lead with benefit:** Start sentences with what the user gains, not what the platform does.
- **No filler phrases:** Never use "Il est important de noter que…", "N'hésitez pas à…", "Dans le cadre de…", or similar padding.
- **Sentence length:** One idea per sentence, max ~20 words. Short sentences build confidence.
- **Avoid repetition:** Don't state the same fact twice on the same page.
- **Canonical stats:** Always use these exact figures — never invent variations:
  - Open rate: 100%
  - CTR réseau moyen: 2.64% (vs 0.90% Meta)
  - Conversion: 10–30%
  - Additional revenue for retailers: 2–20%
  - Net margins: 65–70%
  - Network: 250+ e-commerçants, 300+ annonceurs, 950+ campagnes, 40M consommateurs

---

## Component Usage Rules

Use each component for one purpose only. Never use all four callout types on the same page.

| Component | When to use |
|---|---|
| `::: tip` | Positive highlight, best practice, pro tip |
| `::: info` | Neutral important note, context |
| `::: warning` | Action required, risk, deadline |
| `::: danger` | Critical alert — use sparingly |
| `gi-value-grid` | 2–4 benefit/metric cards — overview and product pages only |
| `gi-step` | Sequential process steps — 3 to 6 steps max per block |
| Tables | Specs, pricing, comparison of 3 or more items |

---

## Frontmatter Standard

Every page must have all three fields:

```yaml
---
title: Page Title
description: One or two sentences maximum. Used in meta description and OpenGraph.
keywords:
  - keyword1
  - keyword2
  - keyword3
---
```

---

## Page Type Templates

### Hub/Index

```markdown
---
title: Section Name
description: One sentence describing what this section covers.
keywords:
  - keyword1
  - keyword2
---

Short intro sentence (1–2 lines max).

<div class="gi-format-grid">
  <a href="./subpage-1/" class="gi-format-card">
    <span class="gi-format-card-icon">📦</span>
    <span class="gi-format-card-title">Subpage Title</span>
    <p class="gi-format-card-desc">One sentence description.</p>
  </a>
</div>
```

### Landing/Overview

```markdown
---
title: Section Overview
description: 1–2 sentence value summary.
keywords:
  - keyword1
  - keyword2
  - keyword3
---

Opening paragraph: what this section is and who it's for. 2–3 sentences.

## Section heading

Content in focused paragraphs. Use `gi-value-grid` for 2–4 key metrics or benefits.

::: tip (optional — one per page max)
Best practice or key takeaway.
:::
```

### Product Page

```markdown
---
title: Product/Format Name
description: 1–2 sentence summary of what this format is.
keywords:
  - keyword1
  - keyword2
  - keyword3
---

Opening paragraph: what it is, who it's for, one key stat. 2–3 sentences.

## Comment ça marche

<div class="gi-step"> ... </div> (3–4 steps)

## Performances

Key metrics. Use a value grid or table.

## Tarification

Pricing table or simple paragraph.

## Démarrer

CTA or link to next step.
```

### Workflow/How-to

```markdown
---
title: Step Title
description: 1 sentence — what this step accomplishes.
keywords:
  - keyword1
  - keyword2
---

One sentence context: where this fits in the overall process.

## Étape N — Name

<div class="gi-step">
  <div class="gi-step-num">1</div>
  <div class="gi-step-body">
    <h3>Action</h3>
    <p>Clear, actionable instruction. One paragraph max.</p>
  </div>
</div>

::: tip (optional)
Practical tip for this step.
:::
```

---

## What NOT to Do

- Don't duplicate information that exists on another page — link instead
- Don't use more than one `gi-value-grid` per page
- Don't nest callout boxes
- Don't use emoji in headings
- Don't add new pages to the sidebar without updating `.vitepress/config.ts`
- Don't change file paths or sidebar links — routing must stay intact
