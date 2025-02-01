# End To End UI Test Automation

This project automates the validation of User Checkout Workflow in typescript using playwright framework.

Author: @Tarun Garg

---

## Table of Contents

- [About the Project](#about-the-project)
- [Prerequisites](#prerequisites)
- [Running Tests](#running-tests)
- [Directory Structure](#directory-structure)
- [Test Documentation](#test-documentation)
- [CI/CD Workflow](#ci-cd-workflow)
- [Example Test Logs ](#test-logs)


---

## About the Project

This project uses following node modules for UI Test automation :

| Module Name      | Description                                                              |
|------------------|--------------------------------------------------------------------------|
| **playwright**   | Core framework setup used to interact with Browser                       |
| **winston**      | Provides custom console/file message logging functionality               |
| **colors**       | Facilitates printing of messages in colors based on message type         |
| **faker-js**     | Helps to generate random data used for testing                           |
| **dotenv**       | Loads information from .env file and import it in test environment       |

---

## Prerequisites

Ensure you have the following installed before proceeding :
- **Node.js** (version >= 22.12.0)
- **npm** (version >= 10.9.0)

Install Node.js and npm from [Node.js](https://nodejs.org/).

---

## Running Tests

UI Test is run successfully on Macbook with apple silicon running os version 15.2.

1. Install node modules:
   ```bash
   npm install

2. Install browsers:
   ```bash
   npx playwright install

3. Run UI Tests on a chromium browser in headed mode:

   ```bash
   npx playwright test --project=chromium --headed

4. Run UI Tests on all browser in headless mode
   ```bash
   npx playwright test

---

## Directory Structure

| Directory Name      | Description                                                              |
|---------------------|--------------------------------------------------------------------------|
| **env**             | This folder contains .env file with test environment variables           |
| **reports**         | This folder contains test report file in json & html format              |
| **logger**          | This folder contains logger utility to log error, debug, info messages   | 
| **page_objects**    | This folder contains page object models                                  |
| **tests**           | This folder contains test specification file                             |

---

## Test Documentation

- Navigate to https://www.saucedemo.com/
- Verify, user is on Home Page
- on Home Page, Verifying page title as 'Swag Labs'
- Perform user login
- Verify, user is on Inventory Page
- on Inventory Page, Verifying page title as 'Products'
- Reset the app state before checkout operation
- Adding 'Sauce Labs Backpack' to cart
- Adding 'Sauce Labs Fleece Jacket' to cart
- Evaluate total cart value
- Fetch 'Sauce Labs Backpack' & 'Sauce Labs Fleece Jacket' price
- Price of 'Sauce Labs Backpack' : 29.99
- Price of 'Sauce Labs Fleece Jacket' : 49.99
- Expected Total Cart Value: 79.98
- Verify, Item counts matches with badge value shown on Cart icon
- Perform click on Cart Icon
- Verify, user is on Cart Page
- on Cart Page, Verifying page title as 'Your Cart'
- Verify, 'Sauce Labs Backpack' item details on Cart Page
- Verify, 'Sauce Labs Fleece Jacket' item details on Cart Page
- Click on Checkout button on Cart page
- Verify, user is on Checkout Step One Page
- on CheckoutStepOne Page, Verifying page title as 'Checkout: Your Information'
- Enter user details in form on Checkout Step One Page
- Click on Continue button on Checkout Step One Page
- Verify, user is on Checkout Step Two Page
- on CheckoutStepTwo Page, Verifying page title as 'Checkout: Overview'
- Verify, total price on Checkout Step Two Page matches with expected cart value
- Click on Finish button on Checkout Step Two Page
- Verify, user is on Checkout Complete Page
- on CheckoutComplete Page, Verifying page title as 'Checkout: Complete!'
- User clicks on 'Back Home' button

---

## CI CD Workflow

CI/CD pipeline is triggered on push or pull request to main branch.

CI/CD File : .github/workflows/playwright.yml

Pipeline Steps :

- Clones the repository

- Setup Node Environment for Test Execution

- Install dependencies

- Install Test Browsers

- Executes playwright tests using command `npx playwright test`

- Saves the Playwright HTML report as an artifact

---

## Test Logs

Following is the example of test execution logs on chrome browsers:

```
$ npx playwright test --project=chromium

Running 1 test using 1 worker
[chromium] › tests/demo.spec.ts:8:7 › checkout feature tests › purchase an item
2025-02-01T03:58:18.777Z info: Navigate to https://www.saucedemo.com/
2025-02-01T03:58:20.550Z info: Verify, user is on Home Page
2025-02-01T03:58:20.550Z info: on Home Page, Verifying page title as 'Swag Labs'
2025-02-01T03:58:20.561Z info: Perform user login
2025-02-01T03:58:20.661Z info: Verify, user is on Inventory Page
2025-02-01T03:58:20.661Z info: on Inventory Page, Verifying page title as 'Products'
2025-02-01T03:58:20.663Z info: Reset the app state before checkout operation
2025-02-01T03:58:21.635Z info: Adding 'Sauce Labs Backpack' to cart
2025-02-01T03:58:21.669Z info: Adding 'Sauce Labs Fleece Jacket' to cart
2025-02-01T03:58:21.701Z info: Evaluate total cart value
2025-02-01T03:58:21.702Z info: Fetch 'Sauce Labs Backpack' & 'Sauce Labs Fleece Jacket' price
2025-02-01T03:58:21.702Z info: Price of 'Sauce Labs Backpack' : 29.99
2025-02-01T03:58:21.702Z info: Price of 'Sauce Labs Fleece Jacket' : 49.99
2025-02-01T03:58:21.702Z info: Expected Total Cart Value: 79.98
2025-02-01T03:58:21.705Z info: Verify, Item counts matches with badge value shown on Cart icon
2025-02-01T03:58:21.705Z info: Perform click on Cart Icon
2025-02-01T03:58:22.241Z info: Verify, user is on Cart Page
2025-02-01T03:58:22.241Z info: on Cart Page, Verifying page title as 'Your Cart'
2025-02-01T03:58:22.248Z info: Verify, 'Sauce Labs Backpack' item details on Cart Page
2025-02-01T03:58:22.250Z info: Verify, 'Sauce Labs Fleece Jacket' item details on Cart Page
2025-02-01T03:58:22.753Z info: Click on Checkout button on Cart page
2025-02-01T03:58:22.775Z info: Verify, user is on Checkout Step One Page
2025-02-01T03:58:22.776Z info: on CheckoutStepOne Page, Verifying page title as 'Checkout: Your Information'
2025-02-01T03:58:22.783Z info: Enter user details in form on Checkout Step One Page
2025-02-01T03:58:23.295Z info: Click on Continue button on Checkout Step One Page
2025-02-01T03:58:23.339Z info: Verify, user is on Checkout Step Two Page
2025-02-01T03:58:23.339Z info: on CheckoutStepTwo Page, Verifying page title as 'Checkout: Overview'
2025-02-01T03:58:23.340Z info: Verify, total price on Checkout Step Two Page matches with expected cart value
2025-02-01T03:58:23.844Z info: Click on Finish button on Checkout Step Two Page
2025-02-01T03:58:24.376Z info: Verify, user is on Checkout Complete Page
2025-02-01T03:58:24.376Z info: on CheckoutComplete Page, Verifying page title as 'Checkout: Complete!'
2025-02-01T03:58:24.382Z info: User clicks on 'Back Home' button
  1 passed (6.1s)

To open last HTML report run:

  npx playwright show-report
```
---
