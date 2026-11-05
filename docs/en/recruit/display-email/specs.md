---
title: Banner Specifications
description: "Formats, dimensions, file size and technical constraints for Display Email banners, for optimal rendering in Outlook, Gmail and Apple Mail. Includes animated GIF rules and design and mobile readability best practices."
keywords:
  - banner specifications
  - display email
  - 600x150 format
  - animated GIF
  - file size
  - mobile readability
---

# Banner Specifications

Standards to be met to ensure optimal display on all email clients (Outlook, Gmail, Apple Mail...).

---

## Standard Formats

| Format | Dimensions (W × H) | Typical placement |
| :--- | :--- | :--- |
| **Large Banner** (Leaderboard) | **600 × 150 px** *(sometimes 640 px)* | Header or core of email: most impactful format |
| **Block** (Rectangle) | **300 × 250 px** | Side column or footer of email: compact format |

---

## Technical Constraints

| Criterion | Specification |
| :--- | :--- |
| **File Type** | JPG, PNG, or GIF |
| **Color Mode** | RGB |
| **Maximum Weight** | 150 KB, recommended < **80 KB** for fast loading on mobile |

:::warning Animated GIFs: first frame rule
Animated GIFs are accepted, but **Outlook 2007 to 2019 (Windows) only displays the first image**. Outlook 2021, 2024 and Microsoft 365 play the GIF, unless Windows animations are turned off.

The main information and the Call-to-Action must appear on the **first frame**.
:::

---

## GIF animation best practices

If you go with an animated GIF, keep the animation short and readable:

- **3 to 5 frames maximum**: a simple loop catches the eye without bloating the file.
- **Total duration of 2 to 4 seconds**, then stop on the frame carrying the offer and CTA.
- **Avoid fast flashing**: it hurts readability and bothers some readers.
- **Self-contained first frame**: it must work on its own, since some recipients (Outlook 2007 to 2019, animations turned off) only see that one.

### Email client compatibility

| Client | Animated GIF display |
| :--- | :--- |
| Gmail, Apple Mail, Yahoo, iOS/Android mobile, Outlook (web, Mac, mobile, new Outlook) | Full animation |
| Outlook 2021, 2024 and Microsoft 365 (Windows) | Full animation, unless Windows animations are turned off (first frame only) |
| Outlook 2007 to 2019 (Windows) | First frame only |

---

## Design best practices

:::tip White background: add a border
If your banner has a white background, it may blend into the email background and become invisible.

Add a **1 px gray border** (`#cccccc`) all around your visual to clearly delimit it.
:::

:::tip Mobile readability
On mobile, a 600 px banner is reduced to ~350 px wide. Avoid fonts that are too thin or too small: **recommended minimum size: 16 px**.
:::
