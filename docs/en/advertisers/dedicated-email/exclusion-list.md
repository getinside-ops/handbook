---
title: Contact exclusion list
description: How to send a contact exclusion list to a getinside partner retailer — GDPR opt-out contacts or existing customers to exclude from an acquisition campaign.
keywords:
  - exclusion list
  - suppression list
  - GDPR opt-out
  - SHA-256 hashed email
  - SFTP exclusion
---

# Contact exclusion list

Before sending, you can pass an exclusion list to the retailer to remove certain contacts from the broadcast.

| Use case | Description |
| :--- | :--- |
| **Opt-out contacts** | Contacts who have unsubscribed from your communications. Their exclusion is mandatory to remain GDPR-compliant. |
| **Existing customers** | You want to target new prospects only and exclude your current customers. |
| **Both** | Merge both lists into a single file before sending it. |

:::danger Personal data — secure channel mandatory
Exclusion lists contain **personal data** under GDPR. Do not send them by email, getinside messaging, or WeTransfer.

Any file containing addresses — even hashed — must go through a secure protocol.
:::

---

## Sending the file

The recommended method is SFTP transfer with **FileZilla** ([Download FileZilla](https://filezilla-project.org/){target="_blank"} — free, Windows / macOS / Linux).

The retailer will provide the SFTP connection details:

| Field | What the retailer provides |
|-------|---------------------------|
| Host | SFTP server address (e.g. `sftp.theirdomain.com`) |
| Port | Usually `22` |
| Path | Upload directory (e.g. `/suppression/incoming/`) |
| Login | SFTP username |
| Password | Shared outside messaging apps |

**File format:** CSV, UTF-8 encoding, header `email_sha256` or `email`, filename `exclusion_YYYYMMDD.csv`. Prefer SHA-256 hashed emails — the retailer can suppress addresses without ever seeing them in plain text.

:::details My infrastructure is different (SSH key SFTP, S3, Azure, GCP, API…)

**SFTP with SSH key**

More secure, no password. Generate a key pair and share your public key with the retailer — FileZilla supports this method too.

```bash
ssh-keygen -t ed25519 -C "exclusion-list@yourdomain.com"
# Share only the .pub file with the retailer
```

---

**S3 bucket (AWS)**

| Field | What you provide |
|-------|-----------------|
| Endpoint | e.g. `s3.eu-west-1.amazonaws.com` |
| Bucket | Bucket name |
| Directory | Destination prefix (e.g. `exclusion/`) |
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

File delivered and confirmed by the retailer? Move on to [Validation & Broadcast](./3-validation-diffusion).
