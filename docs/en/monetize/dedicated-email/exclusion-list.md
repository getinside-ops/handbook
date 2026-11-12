---
title: Managing contact exclusion lists
description: How to receive and apply a brand's exclusion list before sending a Dedicated Email campaign. These are GDPR opt-out contacts or existing customers to remove from the mailing.
keywords:
  - exclusion list
  - suppression list
  - GDPR opt-out
  - SHA-256 hashed email
  - SFTP exclusion ESP
---


# Managing contact exclusion lists

Before sending, a brand may provide you with an exclusion list. You apply it in your ESP.

::: tip In short
- Not systematic: the list removes opt-out contacts (mandatory under GDPR) and/or the brand's existing customers.
- Personal data: receive it through SFTP or a secure bucket, never by email or getinside messaging.
- Import it into your ESP before scheduling the send, then confirm to the brand.
:::

:::danger Personal data: secure channel required
Any file containing addresses, even hashed, must go through a secure protocol.
:::

## Receiving the file

Recommended method: SFTP transfer using **FileZilla** on the brand's side ([download FileZilla](https://filezilla-project.org/){target="_blank"}, free, Windows / macOS / Linux). Create an SFTP access and share with the brand:

- **Host:** Your SFTP server address (e.g. `sftp.yourdomain.com`)
- **Port:** Usually `22`
- **Path:** Deposit directory (e.g. `/exclusion/incoming/`)
- **Login:** Dedicated SFTP username
- **Password:** Generated, shared outside messaging apps

:::warning Share credentials outside messaging apps
Use a password manager (1Password, Bitwarden…) or a one-time link (One-Time Secret).
:::

:::details My infrastructure is different (S3, Azure, GCP, SSH key, API…)

**SFTP with SSH key.** More secure, for a recurring brand: the brand sends you its public key (`.pub`), which your technical team adds to the server. Provide host, port and path.

**S3 bucket (AWS)**

- **Endpoint:** e.g. `s3.eu-west-1.amazonaws.com`
- **Bucket:** Your bucket name
- **Directory:** Destination prefix (e.g. `exclusion/`)
- **Access Key ID:** Dedicated access key (write permissions only)
- **Secret Access Key:** To be shared outside messaging apps

**GCP bucket (Google Cloud Storage)**

- **Bucket:** GCS bucket name
- **Auth token:** Service account JSON file with `Storage Object Creator` role

**Azure Blob Storage.** Generate a SAS Token restricted to the `Write` operation, valid for 48 hours, renewed for each campaign. Provide the storage account name, the Blob container and the token.

**API / Endpoint.** With Eulerian, the integration is native: no file to manage. For any other ESP or DMP with an audience API, share your endpoint documentation with the brand.
:::

## Apply exclusions in your ESP

Import the file into your router **before** scheduling the send.

<div class="gi-step">
  <div class="gi-step-num">1</div>
  <div class="gi-step-body">
    <h3>Check the received file</h3>
    <p>Verify the encoding (UTF-8), separator and header. Check that your ESP handles SHA-256 hashed emails.</p>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num">2</div>
  <div class="gi-step-body">
    <h3>Create a dedicated exclusion list</h3>
    <p>Do not mix it with your own unsubscribes. Give it an explicit name (e.g. <code>EXCLUSION_BRAND_NAME_YYYYMMDD</code>).</p>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num">3</div>
  <div class="gi-step-body">
    <h3>Apply the exclusion at send time</h3>
    <p>Activate the list in the send settings. If the final volume doesn't change, the exclusion did not take effect.</p>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num done">4</div>
  <div class="gi-step-body">
    <h3>Confirm to the brand</h3>
    <p>If anything is wrong (incorrect format, unexpected volume), flag it to getinside immediately.</p>
  </div>
</div>

## FAQ

:::details The file contains SHA-256 hashed emails: what should I do?
Most ESPs (Mailchimp, Brevo, Klaviyo, Mailjet…) accept them. If not, ask for a plain-text file via SFTP.
:::

:::details The brand wants to send the list by email: what do I say?
Decline and point them to this page: sending addresses via messaging is not GDPR-compliant.
:::

:::details Do I need to keep the file after the send?
No. Once the exclusions are imported and the send is confirmed, delete it from your server.
:::

:::details What if I receive the file on the day of the send?
Apply them before sending, even if it delays the send: writing to opted-out contacts risks complaints. If in doubt, contact getinside.
:::

**Next step:** exclusions applied? Go back to [Tracking & Sending](./2-tracking-sending).
