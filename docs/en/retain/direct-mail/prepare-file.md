---
title: Prepare your churner file
description: Select your churners in your email or e-commerce tool, export the file, check it and send it securely for your direct mail campaign.
keywords:
  - customer file
  - churners
  - CRM export
  - inactive customers
  - direct mail
  - getinside
image: /images/gi-keyvisual.svg
---

# Prepare your churner file

The file is the raw material of your direct mail. It lists the customers to win back, with their postal address.

## What the file contains

An XLSX or CSV spreadsheet, with one row per customer. It must arrive ready to print.

- **Identity:** title, first name, last name.
- **Postal address:** number, street, postal code, town.
- **Campaign fields:** the elements to personalize in the mailing, for example a unique promo code. See the [design guide](/en/retain/direct-mail/design-mailing).

Each file is linked to your mailing by a unique operation code, provided when your campaign starts. The code is also the file name to use.

## Step 1: select your churners

A churner no longer opens your emails and no longer buys. Combine two criteria.

1. **Email inactivity:** no open or click across several consecutive sends. This data is in your email tool.
2. **No purchase:** no purchase for longer than your usual time between two purchases. This data is in your online store or CRM.

If the two pieces of data sit in two tools, match the two exports on the email address.

::: tip Setting the periods
Adapt the durations to your purchase cycle. A consumables brand picks a short period, a durable-goods brand a long one.
:::

**To leave out of the file:**

- customers who bought recently;
- people who objected to postal marketing;
- incomplete addresses.

**Control group.** Before exporting, set aside a random sample of churners who will not receive the mailing. Then compare the purchases of the two groups to measure the real effect.

## Step 2: export from your tool

No automatic connection exists yet: you export a file from your tool. The table shows where to look. The help pages are the vendors' own, in English.

| Tool | How to do it | Official help |
| :--- | :--- | :--- |
| Klaviyo | Create a segment of inactive profiles, then export it to CSV with the address properties. | [Export a list or segment](https://help.klaviyo.com/hc/en-us/articles/115005078687) |
| Shopify | Create a segment on last order date, then export the customers in the segment. Check that the file includes the address columns. | [Import and export customers](https://help.shopify.com/en/manual/customers/import-export-customers) |
| HubSpot | Filter contacts on their last engagement, then export the view, choosing the address properties. | [Export your records](https://knowledge.hubspot.com/import-and-export/export-records) |
| Brevo | Create a segment of contacts who no longer open your emails, then export it to CSV, choosing the attributes. | [Export your contacts](https://help.brevo.com/hc/en-us/articles/5310065850642-Export-your-contacts-from-Brevo) |
| Mailchimp | Create a "has not opened" segment combined with "was sent", then export it to CSV. | [View or export your contacts](https://mailchimp.com/help/view-export-contacts/) |
| WooCommerce | Download the Customers report as CSV, then filter on last order in your spreadsheet. | [Customers report](https://woocommerce.com/document/woocommerce-analytics/customers-report/) |
| Adobe Commerce | Export the "Customers Main File" entity from System, Data Transfer, then filter in your spreadsheet. | [Export data](https://experienceleague.adobe.com/en/docs/commerce-admin/systems/data-transfer/data-export) |

Your tool is not listed? Search for "export a segment" in its help, or ask its support for the export. If the postal address is not in your email tool, complete it with the customer export from your online store.

## Step 3: check the file

Check these points before sending the file. They lighten the cleaning that follows.

- Duplicates are removed: same person, same address.
- Rows without a complete address are set aside.
- Titles and capitalization are consistent.
- The postal code matches the town.
- Each piece of information has its own column.
- The address follows the postal standard: six lines at most, 38 characters per line.

::: tip Spotting duplicates
Your spreadsheet has a function to remove duplicates. Apply it to the full address, not to the name alone.
:::

**Address cleaning, systematic.** Before printing, every file goes through address cleaning. It covers postal standardization (consistency of postal code, town and street), detection of duplicates and detection of people who have moved. Each address is classed as correct, automatically corrected, doubtful or rejected. The goal is to print only mail that can be delivered.

## Step 4: send the file

The file contains personal data. Never send it as an attachment to an unprotected email. getinside gives you the link to a secure web interface and the name to give your file. This name is your unique operation code: it links the file to your mailing. Upload your database from this interface. Once uploaded, the file can be neither viewed nor downloaded, including by getinside. It is deleted after production, usually 48 hours to 15 days after upload.

## Undelivered mail

Undelivered mail comes back to you as a CSV file, with the recipient's identifier and the reason for non-delivery. The first returns arrive a few days after upload, and almost all of it about a month later. Use this file to update your database.

## Respect objections

Leave out of your file the people who objected to postal marketing. The information and objection rules are recalled in the [Compliance](/en/retain/direct-mail/#compliance) section of the Direct mail page.

**Next step:** [design your mailing](/en/retain/direct-mail/design-mailing).
