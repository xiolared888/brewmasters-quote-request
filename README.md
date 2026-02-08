# Coffee Company Lead Intake Landing Page

This project is a landing page and automation workflow designed to collect event inquiries for a coffee company, evaluate lead quality based on budget, and automatically route high-value leads for immediate follow-up.

The system uses a webhook-based form submission, data transformation logic, and integrations with email and Google Sheets to streamline lead management for baristas and staff.

---

## Overview

The goal of this project is to:

* Capture structured lead data from a landing page form
* Automatically assess lead priority based on budget
* Notify staff about high-value opportunities
* Log all submissions for tracking and follow-up

This reduces manual review and ensures higher-budget events receive faster attention.

---

## Features

* **Webhook Trigger**

  * Form submissions trigger a webhook event automatically

* **Data Processing**

  * Extracts and structures key details:

    * Name
    * Email address
    * Venue
    * Event date and time
    * Budget
    * Special requests (dietary needs, decaf, etc.)

* **Lead Priority Classification**

  * Budgets over $5,000 are marked as high priority
  * Budgets under $5,000 are marked as low priority

* **Automated Notifications**

  * High-priority leads trigger an email alert for immediate action
  * Low-priority leads are logged for later review

* **Google Sheets Integration**

  * All leads are stored in a Google Sheet for visibility and tracking

---

## Workflow

1. **Form Submission**

   * A user submits the event inquiry form on the landing page

2. **Webhook Trigger**

   * The submission triggers a webhook endpoint

3. **Data Transformation**

   * Incoming data is parsed and normalized

4. **Lead Evaluation**

   * Budget is evaluated to determine lead priority

5. **Routing and Storage**

   * High-priority leads:

     * Email notification is sent
     * Lead is written to Google Sheets
   * Low-priority leads:

     * Lead is logged to Google Sheets for future follow-up

---

## Tech Stack

* Frontend landing page form
* Webhook-based automation
* Email service integration
* Google Sheets API

---

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/coffee-company-landing-page.git
   cd coffee-company-landing-page
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure the webhook endpoint for form submissions

4. Set up data transformation and budget evaluation logic

5. Connect:

   * Email service for notifications
   * Google Sheets for lead storage

For detailed setup steps, see the documentation in `docs/setup-guide.md`.

---

## Use Case

This project is ideal for:

* Small businesses handling event inquiries
* Coffee carts and mobile vendors
* Any service business that needs to prioritize leads by budget automatically

---

## Future Improvements

* Add CRM integration
* Expand lead scoring beyond budget
* Add admin dashboard for lead review

---

## License

MIT

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
