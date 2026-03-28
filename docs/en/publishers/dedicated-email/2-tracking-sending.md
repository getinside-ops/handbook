---
title: "Step 2: Tracking, Validation & Sending"
description: Integrate tracking, submit the Print Proof, and manage the broadcast of your Dedicated Email campaign.
keywords:
  - email tracking
  - BAT validation
  - dedicated email broadcast
  - open pixel
---

Your mockup is ready. Integrate tracking, submit a Print Proof (BAT), and manage the broadcast.

## Sending process

<div class="gi-step">
  <div class="gi-step-num">1</div>
  <div class="gi-step-body">
    <h3>Tracking integration</h3>
    <p>From the <strong>"Configuration"</strong> tab of the campaign, retrieve the two technical elements:</p>
    <ul>
      <li><strong>Open pixel</strong> — Image tag <code>&lt;img…&gt;</code> to insert into the email's HTML (before <code>&lt;/body&gt;</code>). Required to count views.</li>
      <li><strong>Tracked links (gtinsi.de)</strong> — Replace <strong>all</strong> links to the advertiser with the provided <code>gtinsi.de</code> URLs. Required to count clicks.</li>
    </ul>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num">2</div>
  <div class="gi-step-body">
    <h3>Print Proof (BAT) validation</h3>
    <p>Send a real test email from your router:</p>
    <ul>
      <li>Recipient: <code>benoit+news@getinside.fr</code></li>
      <li>Sender: your usual sending address</li>
    </ul>
    <p>After verification by getinside: log in to the platform and click <strong>"Validate the campaign"</strong>. Then wait for the advertiser's validation.</p>
  </div>
</div>

::: danger BAT — Real email required
Never submit a BAT as a screenshot, PDF, or raw HTML file. The email must be received in our inbox to test responsiveness, the pixel, and redirections under real conditions.
:::

<div class="gi-step">
  <div class="gi-step-num">3</div>
  <div class="gi-step-body">
    <h3>Broadcast</h3>
    <p>Before sending, verify that the brief's segmentation criteria are applied (e.g. Active 12 months, Gender, Geography). Route the email to your base according to the defined segment.</p>
  </div>
</div>

::: tip Resend to non-openers (RNTO)
If a resend is included in the order: use **exactly the same email** (same HTML, same <code>gtinsi.de</code> links, same pixel). Do not modify the trackers between the initial send and the resend.
:::

<div class="gi-step">
  <div class="gi-step-num done">✓</div>
  <div class="gi-step-body">
    <h3>Final validation — mandatory action</h3>
    <p>Once the broadcast (and any resend) is complete, return to <a href="https://app.getinside.media/" target="_blank">app.getinside.media</a> and click <strong>"Validate the broadcast"</strong>. Without this action, funds remain escrowed and your revenue is not triggered.</p>
  </div>
</div>

::: warning Blocking action
**"Validate the broadcast"** is required to trigger the credit of your revenue to the Wallet (available 30 days after the campaign ends).
:::
