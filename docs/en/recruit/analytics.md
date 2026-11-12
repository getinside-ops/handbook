---
title: Campaign Tracking & Measurement
description: Set up your own analytics tracking to measure the impact of your getinside campaigns in Google Analytics or your attribution tool.
keywords:
  - campaign tracking getinside
  - UTM parameters
  - flyer conversion measurement
  - campaign analytics
---

# Campaign Tracking & Measurement

::: tip In short
- getinside measures scans (QR code) and clicks. What happens next on your site is measured with your UTM parameters.
- The parcel insert QR code must point to a dynamic URL that can be changed after printing.
- Test the URL and scan the QR before approving the proof.
:::

getinside attribution is **closed-loop**: the QR scan and the unique promo code per delivering brand tie each sale to its campaign, with no third-party cookies. To follow the buyer once they land on your site (visits, carts, conversions), add your own tracking.

## UTM conventions

Add these parameters to your landing page URL before submitting it:

| Parameter | Value |
|---|---|
| `utm_source` | `getinside` |
| `utm_medium` | Depends on the format (table below) |
| `utm_campaign` | Your campaign name (e.g. `summer-promo-2026`) |
| `utm_content` | Delivering brand (optional) |

| Format | `utm_medium` | getinside measures | You measure |
|---|---|---|---|
| Parcel insert | `sponsored-mail` | QR code scans | Visits, purchases |
| Dedicated email | `dedicated-email` | Link clicks | Visits, conversions |
| Newsletter banner | `display-email` | Banner clicks | Visits, conversions |
| Social Ads | `social-ads` | Boosted post clicks | Visits, conversions |

```
https://mysite.com/summer-offer?utm_source=getinside&utm_medium=sponsored-mail&utm_campaign=summer-promo-2026
```

## Dynamic URL (parcel inserts)

A dynamic URL can be changed after printing: fix a mistake or switch landing page without reprinting.

::: warning Static URL = risk
A URL hard-coded in the QR code cannot change after printing. Use a redirect: the getinside QR service handles it automatically. Confirm with your account manager.
:::

## Check before the proof

<div class="gi-step">
  <div class="gi-step-num">1</div>
  <div class="gi-step-body">
    <h3>Test the URL</h3>
    <p>Paste the URL with its UTM parameters in your browser and check that the page displays.</p>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num">2</div>
  <div class="gi-step-body">
    <h3>Check in GA4</h3>
    <p>In <strong>Reports → Acquisition → Traffic acquisition</strong>, check that the session shows up with the <code>getinside</code> source and the right medium.</p>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num done">3</div>
  <div class="gi-step-body">
    <h3>Scan the QR (parcel inserts)</h3>
    <p>Scan the QR with a phone before the final proof and check the redirect and UTMs in your analytics tool.</p>
  </div>
</div>
