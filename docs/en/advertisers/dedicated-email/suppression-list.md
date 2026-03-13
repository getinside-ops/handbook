---
title: Opt-out suppression list
description: How to send your opt-out suppression list to a getinside partner retailer. Guide to secure transfer methods (SFTP, S3, GCP, Azure, API) and GDPR best practices.
keywords:
  - suppression list
  - opt-out
  - GDPR
  - hashed email SHA-256
  - SFTP
  - S3
  - secure file transfer
---

# Opt-out suppression list

Before any Dedicated Email campaign is sent, you need to give the retailer the list of addresses to **exclude** — contacts who have opted out from your brand. If you skip this step, the send is not GDPR-compliant.

---

## Never share email addresses via messaging apps

:::danger Personal data — secure channel required
Email address lists are **personal data** under GDPR. Sending them by email, Slack, WhatsApp, or WeTransfer is **prohibited**.

Use only the secure methods listed below. If you don't have the infrastructure, contact your getinside account manager.
:::

---

## File format

Before choosing your transfer method, agree with the retailer on these parameters:

| Parameter | Recommended value |
|-----------|-------------------|
| Encoding | UTF-8 without BOM |
| Separator | `,` (comma) or `;` (semicolon) |
| Header | Yes — `email_sha256` or `email` |
| File name | `suppression_YYYYMMDD.csv` |
| Identifier type | SHA-256 hashed email (recommended) |

### Plain text or hashed?

Use **SHA-256 hashing**: the retailer uses the hash to suppress addresses in their ESP without ever seeing them in plain text. It's a one-way fingerprint.

```bash
# Hash an email address to SHA-256 (Linux/macOS)
echo -n "user@example.com" | sha256sum
# → a1b2c3d4e5f6...
```

If your platform only supports plain-text emails, that's technically acceptable — but depositing on a secure channel (SFTP or encrypted bucket) then becomes non-negotiable.

---

## Frequency and timing

- **One-shot** before the send: deliver the file **at least D-2** before the scheduled send date.
- Specify a preferred delivery time if the retailer requires it (e.g. before 8am on D-2).
- For automated campaigns (post-purchase trigger), a weekly update is possible — to be agreed with the retailer.

---

## Transfer methods

Choose based on your infrastructure or your technical partner's (e.g. FDJ).

:::details SFTP with SSH key (recommended)

Information to provide to the retailer:

| Field | Description |
|-------|-------------|
| Host | Domain name or IP of your SFTP server |
| Port | Usually `22` |
| Path | Deposit directory (e.g. `/suppression/incoming/`) |
| Public SSH key | Your `.pub` file to add to `authorized_keys` on the retailer's side |

No password in circulation — auth relies on a key pair. This is the most secure method.

To generate your key pair:
```bash
ssh-keygen -t ed25519 -C "suppression-list@yourdomain.com"
# Share only the .pub file with the retailer
```
:::

:::details SFTP with login/password

Information to provide:

| Field | Description |
|-------|-------------|
| Host | Domain name or IP |
| Port | Usually `22` |
| Path | Deposit directory |
| Login | SFTP username |
| Password | To be shared outside messaging apps |

:::warning Never send credentials by email or Slack
Use a password manager with secure sharing (1Password, Bitwarden…) or a one-time link (Passbolt, One-Time Secret).
:::
:::

:::details FTP (not recommended)

FTP transmits credentials and data **in plain text** over the network. Reserve this for situations where no other option exists, and only over a private network or VPN.

Information to provide:

| Field | Description |
|-------|-------------|
| Host | Domain name or IP |
| Port | Usually `21` |
| Path | Deposit directory |
| Login / Password | FTP credentials |
| Mode | Active or passive (specify) |
:::

:::details S3 bucket (AWS)

Information to provide:

| Field | Description |
|-------|-------------|
| Endpoint | e.g. `s3.eu-west-1.amazonaws.com` |
| Bucket | Bucket name |
| Directory | Destination prefix (e.g. `suppression/`) |
| Access Key ID | AWS access key |
| Secret Access Key | To be shared outside messaging apps |

Example with AWS CLI:
```bash
aws s3 cp suppression_20260313.csv s3://bucket-name/suppression/ \
  --sse AES256
```

Create a dedicated IAM user with rights scoped to that bucket and directory only. No root keys.
:::

:::details GCP bucket (Google Cloud Storage)

Information to provide:

| Field | Description |
|-------|-------------|
| Project ID | Your GCP project identifier |
| Project name | Human-readable name |
| Bucket | GCS bucket name |
| Auth token | Service account JSON file (outside messaging apps) |

Example with gsutil:
```bash
gsutil cp suppression_20260313.csv gs://bucket-name/suppression/
```

Create a dedicated service account with the `Storage Object Creator` role on this bucket only. No admin account.
:::

:::details Azure Blob Storage

Information to provide:

| Field | Description |
|-------|-------------|
| Storage account | Azure account name |
| Container | Blob container name |
| SAS Token | Signed access token, scoped in time and permissions |
| Directory | Destination prefix |

Example with Azure CLI:
```bash
az storage blob upload \
  --account-name account-name \
  --container-name suppression \
  --name "suppression_20260313.csv" \
  --file suppression_20260313.csv \
  --sas-token "?sv=2022-..."
```

Generate a short-lived SAS Token (24-48h), restricted to the `Write` operation on this container.
:::

:::details API / Endpoint (Eulerian or other)

If you use Eulerian, let the retailer know — the integration is native, no file transfer needed.

For any other ESP or DMP, provide:
- Endpoint documentation (request format, authentication)
- Access credentials for audience creation (API key, OAuth token…)
- Data schema (fields, types)

If your lists change every week, this is by far the best option — no file, no manual upload.
:::

---

## Which method should you choose?

| Situation | Method |
|-----------|--------|
| You have an SFTP server | SFTP + SSH key |
| You're on AWS | S3 with scoped IAM |
| You're on GCP | GCS with dedicated service account |
| You're on Azure | Blob Storage + SAS Token |
| You use Eulerian | Native API |
| No infrastructure available | Contact getinside |

---

## Next step

File delivered and confirmed by the retailer? Move on to [Validation & Delivery](./3-validation-diffusion).
