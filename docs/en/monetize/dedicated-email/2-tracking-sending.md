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

Your mockup is ready. Integrate tracking, submit a Proof, and manage the broadcast.

---

<div class="gi-step">
  <div class="gi-step-num">1</div>
  <div class="gi-step-body">
    <h3>Tracking integration</h3>
    <p>From the <strong>"Configuration"</strong> tab of the campaign, retrieve the two technical elements:</p>
    <ul>
      <li><strong>👁️ Open pixel</strong>: image tag <code>&lt;img…&gt;</code> to be inserted into the email's HTML (before <code>&lt;/body&gt;</code>). Required to count views.</li>
      <li><strong>🔗 Tracked links (gtinsi.de)</strong>: replace <strong>all</strong> links to the brand with the provided <code>gtinsi.de</code> URLs. Required to count clicks.</li>
    </ul>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num">2</div>
  <div class="gi-step-body">
    <h3>Proof Validation</h3>
    <p>Send a real test email from your router:</p>
    <ul>
      <li>Recipient: <code>benoit+news@getinside.fr</code></li>
      <li>Sender: your usual sending address</li>
    </ul>
    <p>After verification by getinside: log in to the platform and click on <strong>"Validate the campaign"</strong>. Then wait for the brand's validation.</p>
  </div>
</div>

::: danger Proof: real email mandatory
We **never** validate Proofs in the form of screenshots, PDFs, or raw HTML files. The email must be received in our inbox to test responsiveness, the pixel, and redirections in real conditions.
:::

<div class="gi-step">
  <div class="gi-step-num">3</div>
  <div class="gi-step-body">
    <h3>Broadcast</h3>
    <p>Before sending, check that the brief's segmentation criteria are applied (e.g., Active 12 months, Gender, Geography).</p>
    <p>Route the email to your base according to the defined segment.</p>
  </div>
</div>

::: tip Resend to Non-openers (RGNO)
If a resend is included in the order: use **exactly the same email** (same HTML, same <code>gtinsi.de</code> links, same pixel). Do not modify the trackers between the initial send and the resend.
:::

<div class="gi-step">
  <div class="gi-step-num done">✓</div>
  <div class="gi-step-body">
    <h3>Final validation: mandatory action</h3>
    <p>Once the broadcast (and potential resend) is complete, return to <a href="https://app.getinside.media/" target="_blank">app.getinside.media</a> and click on <strong>"Validate the broadcast"</strong>.</p>
    <p>Without this action, funds remain escrowed and your revenue is not triggered.</p>
  </div>
</div>

::: warning Blocking action
**"Validate the broadcast"** is required to trigger the credit of your revenue to the Wallet (available 30 days after the campaign ends).
:::
