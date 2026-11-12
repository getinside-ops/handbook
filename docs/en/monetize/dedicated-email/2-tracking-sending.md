---
title: 2. Tracking & Sending
description: "Step 2 of dedicated email: integrate the open pixel and the gtinsi.de tracked links, validate the proof with a real test email, then send to your base. Reminds you that \"Validate delivery\" is mandatory to trigger the crediting of your revenue to the Wallet."
keywords:
  - Dedicated email
  - Open pixel
  - gtinsi.de tracked links
  - Proof approval
  - Validate delivery
  - Wallet
---

# Step 2: Tracking, Validation and Sending

Integrate tracking, get a proof approved, then send.

<div class="gi-step">
  <div class="gi-step-num">1</div>
  <div class="gi-step-body">
    <h3>Tracking integration</h3>
    <p>In the campaign's <strong>"Configuration"</strong> tab:</p>
    <ul>
      <li><strong>Open pixel</strong>: <code>&lt;img…&gt;</code> tag to insert in the HTML before <code>&lt;/body&gt;</code>. It counts views.</li>
      <li><strong>Tracked links</strong>: replace <strong>all</strong> links to the brand with the provided <code>gtinsi.de</code> URLs. They count clicks.</li>
    </ul>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num">2</div>
  <div class="gi-step-body">
    <h3>Proof validation</h3>
    <p>Send a real test email from your router to <code>benoit+news@getinside.fr</code>, using your usual sending address. After getinside's check, click <strong>"Validate the campaign"</strong> on the platform, then wait for the brand's validation.</p>
  </div>
</div>

::: danger Proof: real email mandatory
No proof is approved from a screenshot, PDF or raw HTML. Only a received email lets us test responsiveness, the pixel and redirections.
:::

<div class="gi-step">
  <div class="gi-step-num">3</div>
  <div class="gi-step-body">
    <h3>Broadcast</h3>
    <p>Check that the brief's segmentation is applied (e.g. active 12 months, gender, geography), then route the email to your base.</p>
  </div>
</div>

::: tip Resend to non-openers (RGNO)
If the order includes a resend, use **exactly the same email**: same HTML, same <code>gtinsi.de</code> links, same pixel.
:::

<div class="gi-step">
  <div class="gi-step-num done">✓</div>
  <div class="gi-step-body">
    <h3>Final validation</h3>
    <p>Once the broadcast (and any resend) is complete, click <strong>"Validate the broadcast"</strong> on <a href="https://app.getinside.media/" target="_blank">app.getinside.media</a>.</p>
  </div>
</div>

::: warning Blocking action
Without **"Validate the broadcast"**, funds remain escrowed and your revenue is not credited to the Wallet (available 30 days after the campaign ends).
:::
