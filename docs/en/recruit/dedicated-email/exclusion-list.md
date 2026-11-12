---
title: Contact exclusion list
description: "How to send a contact exclusion list to the partner brand delivering your campaign: GDPR opt-out contacts or existing customers to exclude from a recruitment campaign."
keywords:
  - exclusion list
  - suppression list
  - GDPR opt-out
  - SHA-256 hashed email
  - SFTP exclusion
---

# Contact exclusion list

Before sending, give the partner brand a list of contacts to remove from the broadcast.

::: tip In short
- Exclude opt-out contacts (mandatory under GDPR) and, if needed, your existing customers. Merge them into a single file.
- CSV file, UTF-8, SHA-256 hashed emails preferred.
- Secure channel only (SFTP, bucket, API), never email or WeTransfer.
:::

:::danger Personal data: secure channel mandatory
These lists contain **personal data** under GDPR. Do not send them by email, getinside messaging, or WeTransfer. Any file containing addresses, even hashed, must go through a secure protocol.
:::

## Sending the file

Recommended method: SFTP upload with **FileZilla** ([download](https://filezilla-project.org/){target="_blank"}, free, Windows / macOS / Linux). The partner brand provides:

| Field | Content |
|-------|---------|
| Host | SFTP server address (e.g. `sftp.theirdomain.com`) |
| Port | Usually `22` |
| Path | Upload directory (e.g. `/suppression/incoming/`) |
| Login | SFTP username |
| Password | Shared outside messaging apps |

**Format:** CSV, UTF-8, header `email_sha256` or `email`, filename `exclusion_YYYYMMDD.csv`. Prefer SHA-256 hashing: the partner brand suppresses addresses without seeing them in plain text.

:::details My infrastructure is different (SSH key, S3, Azure, GCP, API)

- **SFTP with SSH key** (no password): generate a key pair with `ssh-keygen -t ed25519 -C "exclusion-list@yourdomain.com"` and share only the `.pub` file. FileZilla supports this method.
- **S3 bucket (AWS):** endpoint (e.g. `s3.eu-west-1.amazonaws.com`), bucket name, destination prefix (e.g. `exclusion/`), dedicated write-only IAM key (Access Key ID + Secret Access Key, the latter shared outside messaging apps).
- **GCP bucket:** bucket name and a service account JSON file with the `Storage Object Creator` role.
- **Azure Blob Storage:** storage account, container, and a SAS Token restricted to `Write`, valid for 48h.
- **API / Endpoint:** with Eulerian the integration is native, just let the partner brand know. For any other ESP or DMP, share your endpoint documentation and the necessary access.

:::

## Next step

File delivered and confirmed by the partner brand? Move on to [Validation & Broadcast](./3-validation-diffusion).
