---
layout: default
title: Display Email
parent: Publishers Area
nav_order: 2
---

# Publisher Guide: Display Email 🧩

> **Your Role:** The Editor. You integrate a relevant "ad break" within your usual content.

## 1. Placement & Context
Unlike a dedicated email, here the advertiser is a "guest" in your weekly or transactional newsletter.

* **Position:** The display block must be placed **above the fold** (visible without scrolling) or just after your first editorial block.
    * ❌ **Forbidden:** Never bury the ad at the very bottom in the footer.
* **Separation:** Use a visual separator (`<hr>` or white space) to distinguish partner content from your own.
* **Labeling:** It is recommended to add a small discrete mention above the image (e.g., *"Partner Selection"* or *"Special Offer"*).

## 2. Technical Specs (HTML)
The advertiser typically provides a banner (image only) or a visual + text block.

* **Width:** Adapt the image to your template width (usually **600px** or **100%** of the column).
* **Code Sample:**
```html
<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td align="center" style="padding: 20px 0;">
      <p style="font-size:10px; color:#999; text-transform:uppercase; margin-bottom:5px;">— Partner Selection —</p>
      <a href="GETINSIDE_TRACKING_LINK" target="_blank">
        <img src="ADVERTISER_IMAGE_URL" width="600" style="display:block; max-width:100%; border:0;" alt="Partner Offer">
      </a>
    </td>
  </tr>
</table>
```

## 3. Tracking (CRITICAL 🚨)
This is the only way for us to remunerate the performance of the display campaign.

Unique Link: The image (and the button if present) must point to the redirection link http://gtinsi.de/... provided in the brief.

Target Blank: The link must absolutely open in a new tab (target="_blank") so readers don't leave your newsletter.

## 4. CHECKLIST BEFORE SENDING ✅
Before validating your newsletter, check these 3 points regarding the display ad:

* [ ] **Link works** : Clicking the image redirects to the partner's site via gtinsi.de.
* [ ] **Image loads** : No broken links, the image is hosted on a public server.
* [ ] **Mobile OK** : The ad does not break the newsletter layout on smartphones (image has max-width: 100%).

⬅️ Back to overview