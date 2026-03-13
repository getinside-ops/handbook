---
title: Opt-out suppression list
description: How to send your opt-out suppression list to a getinside partner retailer via FileZilla or other secure protocols.
keywords:
  - suppression list
  - opt-out
  - GDPR
  - hashed email SHA-256
  - SFTP
  - FileZilla
---

# Opt-out suppression list

Some retailers may ask you for a suppression list before sending a Dedicated Email campaign — these are the contacts who have opted out from your brand and should not receive the mailing.

It's not always required. But when a retailer asks for one, here's how to send the file.

---

## Never share addresses via messaging apps

:::danger Personal data — secure channel required
Suppression lists contain **personal data** under GDPR. Do not send them by email, Slack, WhatsApp, or WeTransfer.

Any file containing addresses — even hashed — must go through a secure protocol.
:::

---

## Sending the file

The recommended method is SFTP transfer with **FileZilla**.

<div class="gi-value-grid">
  <div class="gi-value-card">
    <img src="/handbook/images/filezilla-logo.svg" alt="FileZilla" style="width: 48px; height: 48px; margin-bottom: 12px; display: block;">
    <strong>FileZilla</strong>
    <p>Free, open source, available on Windows, macOS, and Linux. Drop your file using a graphical interface — no command line, just drag and drop.</p>
    <p><a href="https://filezilla-project.org/" target="_blank">Download FileZilla →</a></p>
  </div>
</div>

The retailer will provide the SFTP connection details:

| Field | What the retailer provides |
|-------|---------------------------|
| Host | SFTP server address (e.g. `sftp.theirdomain.com`) |
| Port | Usually `22` |
| Path | Upload directory (e.g. `/suppression/incoming/`) |
| Login | SFTP username |
| Password | Shared outside messaging apps |

**File format:** CSV, UTF-8 encoding, header `email_sha256` or `email`, filename `suppression_YYYYMMDD.csv`. Prefer SHA-256 hashed emails — the retailer can suppress addresses without ever seeing them in plain text.

:::details My infrastructure is different (SSH key SFTP, S3, Azure, GCP, API…)

**SFTP with SSH key**

More secure, no password. Generate a key pair and share your public key with the retailer — FileZilla supports this method too.

```bash
ssh-keygen -t ed25519 -C "suppression-list@yourdomain.com"
# Share only the .pub file with the retailer
```

---

**S3 bucket (AWS)**

| Field | What you provide |
|-------|-----------------|
| Endpoint | e.g. `s3.eu-west-1.amazonaws.com` |
| Bucket | Bucket name |
| Directory | Destination prefix (e.g. `suppression/`) |
| Access Key ID | Dedicated IAM key (write only) |
| Secret Access Key | To be shared outside messaging apps |

---

**GCP bucket (Google Cloud Storage)**

| Field | What you provide |
|-------|-----------------|
| Bucket | GCS bucket name |
| Auth token | Service account JSON file with `Storage Object Creator` role |

---

**Azure Blob Storage**

Generate a SAS Token restricted to the `Write` operation, valid for 48h.

| Field | What you provide |
|-------|-----------------|
| Storage account | Your Azure account name |
| Container | Blob container name |
| SAS Token | Signed access token (Write only, 48h) |

---

**API / Endpoint (Eulerian or other)**

If you use Eulerian, let the retailer know — the integration is native, no file transfer needed.

For any other ESP or DMP, share your endpoint documentation and the necessary access credentials.

:::

---

## Next step

File delivered and confirmed by the retailer? Move on to [Validation & Delivery](./3-validation-diffusion).
