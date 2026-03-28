---
title: Campaign Tracking & Measurement
description: Set up your own analytics tracking to measure the impact of your getinside campaigns in Google Analytics or your attribution tool.
keywords:
  - campaign tracking getinside
  - utm parameters retail media
  - flyer conversion measurement
  - advertiser analytics
---

# Campaign Tracking & Measurement

The getinside platform counts clicks and scans. To measure what happens **after** — visits, add-to-carts, conversions — you need to set up your own tracking layer.

## Why your own tracking is essential

getinside tracks scan volume (QR code) and clicks (email, banner). These figures are available in your dashboard. But they stop at the entry point to your site. To measure the rest, you need UTM parameters in your destination URLs.

## getinside UTM conventions

Add these parameters to your landing page URL before submitting it:

| Parameter | Recommended value |
|---|---|
| `utm_source` | `getinside` |
| `utm_medium` | See table below |
| `utm_campaign` | Your campaign name (e.g. `summer-promo-2026`) |
| `utm_content` | Retailer name (optional) |

**`utm_medium` values by format:**

| Format | `utm_medium` value |
|---|---|
| Parcel Insert | `sponsored-mail` |
| Dedicated Email | `dedicated-email` |
| Display Email | `display-email` |
| Social Ads | `social-ads` |

**Full URL example:**

```
https://mysite.com/summer-offer?utm_source=getinside&utm_medium=sponsored-mail&utm_campaign=summer-promo-2026
```

## What a "conversion" means per format

| Format | What getinside measures | What you measure on your side |
|---|---|---|
| Parcel Insert | QR code scans | Landing page visits → purchases |
| Dedicated Email | Clicks on email links | Visits → conversions |
| Display Email | Clicks on the banner | Visits → conversions |
| Social Ads | Clicks on the boosted post | Visits → conversions |

## Requirement for Parcel Inserts: dynamic URL

The QR code on your flyer must point to a **dynamic URL** (changeable after printing). This lets you fix a URL error or update the landing page without reprinting.

::: warning Static URL = risk
A URL hard-coded in the QR code cannot be changed after printing. Always use a redirect system — getinside's QR service handles this automatically. Confirm with your account manager.
:::

## Verify your tracking is working

Before validating your proof (BAT) or submitting your brief:

<div class="gi-step">
  <div class="gi-step-num">1</div>
  <div class="gi-step-body">
    <h3>Test the URL</h3>
    <p>Copy your URL with UTM parameters and paste it into your browser. Check that the page loads correctly.</p>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num">2</div>
  <div class="gi-step-body">
    <h3>Check in GA4</h3>
    <p>In Google Analytics 4, go to <strong>Reports → Acquisition → Traffic acquisition</strong> and verify the session appears with the correct source (<code>getinside</code>) and medium.</p>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num done">3</div>
  <div class="gi-step-body">
    <h3>Scan the QR code (Parcel Insert)</h3>
    <p>For print campaigns, scan your QR code with a phone before approving the final proof. Verify the redirect and UTM parameters in your analytics tool.</p>
  </div>
</div>
