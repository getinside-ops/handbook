---
title: Managing opt-out suppression lists
description: How to receive and apply an advertiser's opt-out suppression list before sending a Dedicated Email campaign.
keywords:
  - suppression list
  - opt-out
  - GDPR
  - SFTP
  - ESP
  - hashed email SHA-256
---

# Managing opt-out suppression lists

Some advertisers will send you a suppression list before a Dedicated Email campaign: these are addresses of their contacts who have opted out from their brand, and who must not receive the mailing.

This is not systematic — many campaigns don't include one. But when an advertiser sends one, here's how to receive and apply it.

---

## Never exchange email addresses via messaging apps

:::danger Personal data — secure channel required
Suppression lists contain **personal data** under GDPR. Don't request them by email or Slack. Don't send them through those channels either.

Any file containing addresses (even hashed) must go through a secure protocol.
:::

---

## Receiving the file

The recommended method is SFTP file transfer using **FileZilla** on the advertiser's side.

<div class="gi-value-grid">
  <div class="gi-value-card">
    <img src="/handbook/images/filezilla-logo.svg" alt="FileZilla" style="width: 48px; height: 48px; margin-bottom: 12px; display: block;">
    <strong>FileZilla</strong>
    <p>Free, open source, available on Windows, macOS, and Linux. The advertiser uploads the file through a visual interface — no command line, just drag and drop.</p>
    <p><a href="https://filezilla-project.org/" target="_blank">Download FileZilla →</a></p>
  </div>
</div>

Create an SFTP access on your server and share these details with the advertiser:

| Field | What you provide |
|-------|-----------------|
| Host | Your SFTP server address (e.g. `sftp.yourdomain.com`) |
| Port | Usually `22` |
| Path | Deposit directory (e.g. `/suppression/incoming/`) |
| Login | Dedicated SFTP username |
| Password | Generated, shared outside messaging apps |

:::warning Share credentials outside messaging apps
Use a password manager with secure sharing (1Password, Bitwarden…) or a one-time link (One-Time Secret).
:::

:::details My infrastructure is different (S3, Azure, GCP, SSH key, API…)

**SFTP with SSH key**

A more secure option, best suited for recurring work with the same advertiser. The advertiser generates an SSH key pair and sends you their public key — your technical team adds it to the server. FileZilla also supports this method.

| Field | What you provide |
|-------|-----------------|
| Host | Your SFTP server address |
| Port | Usually `22` |
| Path | Deposit directory |
| Public SSH key | The advertiser's `.pub` file, to be added by your technical team |

---

**S3 bucket (AWS)**

| Field | What you provide |
|-------|-----------------|
| Endpoint | e.g. `s3.eu-west-1.amazonaws.com` |
| Bucket | Your bucket name |
| Directory | Destination prefix (e.g. `suppression/`) |
| Access Key ID | Dedicated access key (write permissions only) |
| Secret Access Key | To be shared outside messaging apps |

---

**GCP bucket (Google Cloud Storage)**

| Field | What you provide |
|-------|-----------------|
| Bucket | GCS bucket name |
| Auth token | Service account JSON file with `Storage Object Creator` role |

---

**Azure Blob Storage**

Generate a SAS Token restricted to the `Write` operation, valid for 48 hours. Renew it for each campaign.

| Field | What you provide |
|-------|-----------------|
| Storage account | Your Azure account name |
| Container | Blob container name |
| SAS Token | Signed access token (Write only, 48h) |

---

**API / Endpoint (Eulerian or other)**

If you use Eulerian, the integration with the advertiser is native — no file to manage.

For any other ESP or DMP with an audience API, share your endpoint documentation with the advertiser and create the required access.
:::

---

## Apply suppressions in your ESP

Once you receive the file, import it into your router **before** scheduling the send.

<div class="gi-step">
  <div class="gi-step-num">1</div>
  <div class="gi-step-body">
    <h3>Check the received file</h3>
    <p>Verify the encoding (UTF-8), separator, and header. If the file contains SHA-256 hashed emails, check that your ESP handles this format — most do, but not all.</p>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num">2</div>
  <div class="gi-step-body">
    <h3>Create a dedicated suppression list</h3>
    <p>Don't mix advertiser suppressions with your own unsubscribes. Create a separate list with an explicit name (e.g. <code>SUPPRESSION_ADVERTISER_NAME_YYYYMMDD</code>).</p>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num">3</div>
  <div class="gi-step-body">
    <h3>Apply the suppression at send time</h3>
    <p>In the send settings, activate the suppression list for this campaign. Check that the final send volume reflects the exclusions — if the numbers don't change, the suppression didn't take.</p>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num done">4</div>
  <div class="gi-step-body">
    <h3>Confirm to the advertiser</h3>
    <p>Let the advertiser know it's done. If anything is wrong (incorrect format, unexpected volume), flag it to getinside immediately.</p>
  </div>
</div>

---

## FAQ

:::details The file contains SHA-256 hashed emails — what should I do?
Most modern ESPs (Mailchimp, Brevo, Klaviyo, Mailjet…) accept SHA-256 suppressions — check your router's documentation. If not, ask the advertiser for a plain-text file via a secure channel (SFTP).
:::

:::details The advertiser wants to send the list by email — what do I say?
Decline and point them to this page. Email addresses are personal data: sending them via messaging apps is not GDPR-compliant. Offer one of the secure methods listed here.
:::

:::details Do I need to keep the file after the send?
No. Once the suppressions are imported and the send is confirmed, delete the file from your server. The list in your ESP has no use after the send — archive or delete it.
:::

:::details What if I receive the file on the day of the send?
Apply the suppressions before routing, even if it delays the send slightly. Sending to opted-out contacts risks complaints and damages your sender reputation. If in doubt, call getinside.
:::

---

## Next step

Suppressions applied? Go back to [Tracking & Sending](./2-tracking-sending) to finalize.
