---
title: Integration & Sending
description: How to integrate a Display Email banner into your newsletter and validate the broadcast to trigger payment.
keywords:
  - display email integration
  - tracked link gtinsi.de
  - newsletter broadcast validation
  - publisher email payment
---

# Integration and Broadcast

The process is fast — just make sure you use the correct redirection link to get paid.

---

<div class="gi-step">
  <div class="gi-step-num">1</div>
  <div class="gi-step-body">
    <h3>Receive the visual</h3>
    <p>The advertiser sends you their banner (JPG, PNG, or GIF, max 150 KB).</p>
    <ul>
      <li>Verify that the format matches your placement (e.g. 600 × 150 px for a Leaderboard).</li>
      <li>Check readability on mobile.</li>
    </ul>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num">2</div>
  <div class="gi-step-body">
    <h3>Retrieve the tracked link</h3>
    <p>On <a href="https://app.getinside.media/" target="_blank">app.getinside.media</a>, open the <strong>"Configuration and tracking"</strong> tab of the campaign and copy the <strong>tracked link</strong> (format <code>https://gtinsi.de/…</code>).</p>
    <p><em>Unlike Dedicated Email, there is no open pixel to install. Only clicks are counted for this format.</em></p>
  </div>
</div>

:::danger Tracked link mandatory
**Never** use the advertiser's raw link. Without the <code>gtinsi.de</code> link, clicks are not counted and you will not be paid.
:::

<div class="gi-step">
  <div class="gi-step-num">3</div>
  <div class="gi-step-body">
    <h3>Insert into your router</h3>
    <p>In your emailing tool (Mailchimp, Brevo, Klaviyo…):</p>
    <ol>
      <li>Insert the advertiser's image in the designated slot.</li>
      <li>Add a link to this image.</li>
      <li>Paste the tracked <code>gtinsi.de</code> link as the destination URL.</li>
    </ol>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num">4</div>
  <div class="gi-step-body">
    <h3>Print Proof (BAT) & Validation</h3>
    <p>Send a test email to <code>benoit+news@getinside.fr</code> for validation. On the platform, click <strong>"Validate the campaign"</strong> then wait for the advertiser's validation.</p>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num done">✓</div>
  <div class="gi-step-body">
    <h3>Broadcast & Final validation</h3>
    <p>Route the email to your base. Once sending is complete, return to the platform and click <strong>"Validate the broadcast"</strong>.</p>
  </div>
</div>

:::warning Blocking action — Validate broadcast
Without this click, funds remain escrowed. This action triggers billing and the credit to your Wallet (available 30 days after the campaign ends).
:::
