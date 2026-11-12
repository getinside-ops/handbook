---
title: Technical Specifications
description: "Print technical specifications for Parcel insert materials: A5 and A6 formats, bleed, CMYK color mode, dynamic getinside QR code, sample formats and proof (BAT) checklist."
keywords:
  - technical specifications
  - parcel inserts
  - bleed
  - CMYK
  - dynamic QR code
  - samples
---

# Technical Specifications

The constraints to respect for quality printing and high-performance tracking.

::: tip In short
- CMYK file (FOGRA39), 300 DPI, **2 mm bleed**, **3 mm safe zone**.
- getinside `.svg` QR code mandatory, **14 × 14 mm minimum**, one per delivering brand.
- 250 to 300 g/m² matte or semi-matte coated paper, no lamination.
:::

## Paper Formats

| Format | Finished (cut) | File (with bleed) | Safe zone |
| :--- | :--- | :--- | :--- |
| **A5** | 148 × 210 mm | **152 × 214 mm** | 3 mm internal |
| **A6** | 105 × 148 mm | **109 × 152 mm** | 3 mm internal |
| **Card** | 105 × 148 mm | **109 × 152 mm** | See template |

- **Bleed: 2 mm mandatory.** Image or colored background extends 2 mm outside the finished format, on all four sides. Without it, a white border appears after cutting.
- **Safe zone: 3 mm.** No text, logo, or important element less than 3 mm from the inner edge, or it risks being cropped.

## Files & Colorimetry

| Criterion | Specification |
| :--- | :--- |
| **File format** | PDF/X vector (PDF/X-4 recommended). JPG or PNG accepted. |
| **Fonts** | Embedded or converted to outlines (a missing font is substituted). |
| **Resolution** | **300 DPI minimum** |
| **Raster dimensions** | A6: 1,287 × 1,795 px min · A5: 1,795 × 2,528 px min |
| **Color mode** | **CMYK mandatory** (no RGB) |
| **ICC Profile** | Coated FOGRA39 |
| **Ink coverage** | **Maximum 300%** |

:::tip Tip: deep black
Solid areas (large black backgrounds): **C30% M30% Y30% K100%**. Fine texts and small characters: **K100% only**, to avoid shifting during printing.
:::

## Paper

- **Weight:** 250 to 300 g/m²
- **Type:** matte coated or semi-matte coated
- **Certification:** FSC or PEFC
- **Lamination:** no, it makes QR codes less readable

:::info Environmental certification
- **getinside handles your printing:** the certification notice and the FSC and Imprim'vert logos appear on the flyer (exact text and logos: [legal notices](./legal#universal-notices)).
- **You manage your own printing:** only the **getinside logo** is required.
:::

## getinside QR Code

:::danger Proprietary QR code mandatory
You **cannot** use a QR code you generated yourself: integrate the **`.svg`** file provided by the getinside platform. It certifies distribution, enables real-time monitoring, and activates your dashboard.
:::

- **Minimum size: 14 × 14 mm** for an A6 (below this, not readable by all smartphones), larger on bigger formats. White background, black modules. Repeated on each face (recommended for an insert, not mandatory), each QR code meets this size.
- **One QR code per delivering brand:** do not mix them. The `.svg` is in your workspace once the brand has approved your proposal.
- **Dynamic:** the URL is not engraved in the pattern. Change the landing page from the platform, even after printing, to correct an error or extend an offer.
- **Tracking:** getinside measures scans. To track **sales** in Google Analytics, add UTMs, for example `mysite.com?utm_source=getinside&utm_medium=sponsored-mail&utm_campaign=spring`, and a **unique promo code** per delivering brand.

## Sample Formats (Sampling)

| Format | Max weight | Max developed (H + W + L) |
| :--- | :--- | :--- |
| **Format S** | 15 g | 15 cm |
| **Format M** | 100 g | 30 cm |
| **Format L** | 450 g | 40 cm |

:::info "Duo" option (Format S)
The sample is glued to an A5 or A6 flyer with a dot of **fugitive glue** (repositionable), detachable without damaging the flyer. Service performed by **Adapted Enterprises (EA)**.
:::

## Proof (BAT) Checklist

To check before each submission:

1. Bleed **+2 mm**, safe zone **-3 mm**.
2. **CMYK (FOGRA39)**, ≥ **300 DPI**, ink coverage ≤ **300%**.
3. getinside `.svg` QR code, **14 × 14 mm** minimum, one per delivering brand.
4. Universal [legal notices](./legal) (brand ID, Triman, getinside logo, T&Cs, FSC/Imprim'vert notice if getinside handles printing) and sector-specific ones if applicable.
5. **Landing page** tested on mobile: loads in < 3 s, a single call to action ([see](./best-practices#the-post-scan-landing-page)).
6. **Unique promo code** per delivering brand, active from the start of delivery.
7. **Redirect URLs** set up on the platform.
