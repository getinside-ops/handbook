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

The file lists the customers to win back by direct mail, with their postal address.

::: tip In short
- An XLSX or CSV spreadsheet, one row per customer, named with your operation code.
- Select churners, exclude objectors, export from your tool.
- Upload it to the secure getinside interface, never by email.
:::

## What the file contains

- **Identity:** title, first name, last name.
- **Postal address:** number, street, postal code, town.
- **Campaign fields:** elements to personalize, for example a unique promo code. See the [design guide](/en/retain/direct-mail/design-mailing).

The unique operation code, provided when your campaign starts, links the file to your mailing and is the file name to use.

## Step 1: select your churners

A churner no longer opens your emails and no longer buys. Combine two criteria:

1. **Email inactivity:** no open or click across several consecutive sends (data from your email tool).
2. **No purchase:** no purchase for longer than your usual time between two purchases (online store or CRM).

If the data sits in two tools, match the exports on the email address. Adapt the durations to your purchase cycle (short for consumables, long for durable goods).

**To leave out:** customers who bought recently, people who objected to postal marketing (see [Compliance](/en/retain/direct-mail/#compliance)) and incomplete addresses.

**Control group.** Before exporting, set aside a random sample of churners who will not receive the mailing, then compare the purchases of the two groups.

## Step 2: export from your tool

No automatic connection yet: you export a file. Vendor help pages, in English.

- **Klaviyo:** Segment of inactive profiles, CSV export with the address properties ([help](https://help.klaviyo.com/hc/en-us/articles/115005078687)).
- **Shopify:** Segment on last order date, export the customers (check the address columns) ([help](https://help.shopify.com/en/manual/customers/import-export-customers)).
- **HubSpot:** Filter on last engagement, export the view with the address properties ([help](https://knowledge.hubspot.com/import-and-export/export-records)).
- **Brevo:** Segment of contacts who no longer open your emails, CSV export with the attributes ([help](https://help.brevo.com/hc/en-us/articles/5310065850642-Export-your-contacts-from-Brevo)).
- **Mailchimp:** "Has not opened" segment combined with "was sent", CSV export ([help](https://mailchimp.com/help/view-export-contacts/)).
- **WooCommerce:** Customers report as CSV, filter on last order in your spreadsheet ([help](https://woocommerce.com/document/woocommerce-analytics/customers-report/)).
- **Adobe Commerce:** Export "Customers Main File" (System, Data Transfer), filter in your spreadsheet ([help](https://experienceleague.adobe.com/en/docs/commerce-admin/systems/data-transfer/data-export)).

Another tool? Search for "export a segment" in its help. If the postal address is missing from your email tool, complete it with the customer export from your store.

## Step 3: check the file

- Duplicates removed (same full address, not just the same name).
- Rows without a complete address set aside.
- Titles and capitalization consistent, postal code matching the town, one piece of information per column.
- Address following the postal standard: six lines at most, 38 characters per line.

:::details Address cleaning before printing
Every file is cleaned: postal standardization, detection of duplicates and of people who have moved. Each address is classed as correct, automatically corrected, doubtful or rejected.
:::

## Step 4: send the file

The file contains personal data: never send it as an attachment to an unprotected email.

1. getinside gives you the link to a secure web interface and the file name (your operation code).
2. Upload your database from this interface. Once uploaded, the file can be neither viewed nor downloaded, including by getinside.
3. It is deleted after production, usually 48 hours to 15 days after upload.

## Undelivered mail

It comes back as a CSV file, with the recipient's identifier and the reason. First returns arrive a few days after upload, almost all about a month later: update your database.

**Next step:** [design your mailing](/en/retain/direct-mail/design-mailing).
