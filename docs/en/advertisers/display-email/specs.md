---
title: Banner Specifications
description: Formats, technical constraints, and design best practices for getinside Display Email banners.
keywords:
  - email banner specifications
  - display email format
  - leaderboard 600x150
  - animated GIF email
---

# Banner Specifications

Standards to meet to ensure optimal display on all email clients (Outlook, Gmail, Apple Mail…).

---

## Standard formats

| Format | Dimensions (W × H) | Typical placement |
| :--- | :--- | :--- |
| **Large Banner** (Leaderboard) | **600 × 150 px** *(sometimes 640 px)* | Header or core of email — most impactful format |
| **Block** (Rectangle) | **300 × 250 px** | Side column or email footer — compact format |

---

## Technical constraints

| Criterion | Specification |
| :--- | :--- |
| **File type** | JPG, PNG, or GIF |
| **Color mode** | RGB |
| **Maximum size** | 150 KB — recommended < **80 KB** for fast loading on mobile |

:::warning Animated GIFs — first frame rule
Animated GIFs are accepted, but **Outlook (desktop versions) only displays the first image**.

The main information and the Call-to-Action must imperatively appear on the **first frame**.
:::

---

## GIF animation best practices

If you go with an animated GIF, keep the animation short and readable:

- **3 to 5 frames maximum** — a simple loop catches the eye without bloating the file.
- **Total duration of 2 to 4 seconds**, then stop on the frame carrying the offer and CTA.
- **Avoid fast flashing**: it hurts readability and bothers some readers.
- **Self-contained first frame**: it must work on its own, since Outlook only reads that one.

### Email client compatibility

| Client | Animated GIF display |
| :--- | :--- |
| Gmail, Apple Mail, Yahoo, iOS/Android mobile | Full animation |
| Outlook (desktop, Windows) | First frame only |

---

## Design best practices

:::tip White background: add a border
If your banner has a white background, add a **1 px gray border** (`#cccccc`) all around to clearly delimit it against the email background.
:::

On mobile, a 600 px banner is reduced to ~350 px wide. Avoid fonts that are too thin or too small — **recommended minimum size: 16 px**.
