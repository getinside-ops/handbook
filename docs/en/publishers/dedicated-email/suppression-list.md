---
title: Managing opt-out suppression lists
description: How to configure a secure endpoint to receive advertiser opt-out suppression lists, and apply them in your ESP before sending a campaign.
keywords:
  - suppression list
  - opt-out
  - GDPR
  - SFTP
  - S3
  - ESP
  - hashed email SHA-256
---

# Managing opt-out suppression lists

When an advertiser runs a Dedicated Email campaign through getinside, they may send you a suppression list: the email addresses of contacts who have opted out from their brand. These addresses must not receive the campaign, even if they're in your base.

You need to configure a secure receiving endpoint and apply the suppressions in your router before sending.

---

## Never exchange email addresses via messaging apps

:::danger Personal data — secure channel required
Suppression lists contain **personal data** under GDPR. Don't request them by email or Slack. Don't send them through those channels either.

Any file containing addresses (even hashed) must go through one of the protocols below.
:::

---

## What you need to do

Before the campaign send date, the advertiser will give you a CSV file with the addresses to exclude (plain text or SHA-256 hashed). Your role:

1. Provide a secure receiving endpoint (see below)
2. Share connection details with the advertiser **outside messaging apps**
3. Import the suppressions into your ESP before routing

---

## Configure your receiving endpoint

Choose based on your infrastructure.

:::details SFTP with SSH key (recommended)

Information to share with the advertiser:

| Field | What you provide |
|-------|-----------------|
| Host | Your SFTP server address (e.g. `sftp.yourdomain.com`) |
| Port | Usually `22` |
| Path | Deposit directory (e.g. `/suppression/incoming/`) |
| Public SSH key | The advertiser's `.pub` file, to add to your `authorized_keys` |

To authorize the advertiser's SSH key:
```bash
# On your SFTP server, add the key provided by the advertiser
echo "ssh-ed25519 AAAA... suppression-list@advertiser.com" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

Test access with the advertiser before D-2.
:::

:::details SFTP with login/password

Information to share with the advertiser:

| Field | What you provide |
|-------|-----------------|
| Host | Your SFTP server address |
| Port | Usually `22` |
| Path | Deposit directory |
| Login | SFTP username dedicated to suppression |
| Password | Generated preferably, shared outside messaging apps |

:::warning Share credentials outside messaging apps
Use a password manager with secure sharing (1Password, Bitwarden…) or a one-time link (Passbolt, One-Time Secret).
:::
:::

:::details S3 bucket (AWS)

Information to share with the advertiser:

| Field | What you provide |
|-------|-----------------|
| Endpoint | e.g. `s3.eu-west-1.amazonaws.com` |
| Bucket | Your bucket name |
| Directory | Destination prefix (e.g. `suppression/`) |
| Access Key ID | Dedicated access key (`PutObject` rights on this directory only) |
| Secret Access Key | To be shared outside messaging apps |

To create a restricted IAM user:
```bash
aws iam create-user --user-name suppression-advertiser
aws iam put-user-policy --user-name suppression-advertiser \
  --policy-name SuppressionsOnly \
  --policy-document '{
    "Version": "2012-10-17",
    "Statement": [{
      "Effect": "Allow",
      "Action": ["s3:PutObject"],
      "Resource": "arn:aws:s3:::bucket-name/suppression/*"
    }]
  }'
```
:::

:::details GCP bucket (Google Cloud Storage)

Information to share with the advertiser:

| Field | What you provide |
|-------|-----------------|
| Project ID | Your GCP project identifier |
| Project name | Human-readable name |
| Bucket | GCS bucket name |
| Auth token | Service account JSON file with `Storage Object Creator` role |

To create the service account and generate the key:
```bash
gcloud iam service-accounts create suppression-advertiser \
  --display-name "Suppression list upload"

gcloud projects add-iam-policy-binding MY_PROJECT \
  --member="serviceAccount:suppression-advertiser@MY_PROJECT.iam.gserviceaccount.com" \
  --role="roles/storage.objectCreator" \
  --condition="resource.name.startsWith(\"projects/_/buckets/bucket-name/objects/suppression/\")"

gcloud iam service-accounts keys create suppression-key.json \
  --iam-account=suppression-advertiser@MY_PROJECT.iam.gserviceaccount.com
```

Share `suppression-key.json` outside messaging apps.
:::

:::details Azure Blob Storage

Information to share with the advertiser:

| Field | What you provide |
|-------|-----------------|
| Storage account | Your Azure account name |
| Container | Blob container name |
| SAS Token | Signed access token (`Write` only, 48h duration) |
| Directory | Destination prefix |

To generate a restricted SAS Token:
```bash
az storage container generate-sas \
  --account-name account-name \
  --name suppression \
  --permissions w \
  --expiry $(date -u -d "+48 hours" +%Y-%m-%dT%H:%MZ) \
  --output tsv
```

Renew the SAS Token for each campaign. An expired token blocks the upload with no visible error on the advertiser's side.
:::

:::details API / Endpoint (Eulerian or other)

If you use Eulerian, the integration with the advertiser is native — no file to manage.

For any other ESP or DMP with an audience API:
- Share your endpoint documentation with the advertiser
- Create the required access (API key, OAuth token…)
- Specify the expected schema (fields, types, email format)

If you work regularly with the same advertiser, this is the least friction option over time.
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
Most modern ESPs (Mailchimp, Brevo, Klaviyo, Mailjet…) accept SHA-256 suppressions — check your router's documentation. If not, ask the advertiser for a plain-text file via a secure channel (SFTP or encrypted bucket).
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
