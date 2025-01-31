# End To End UI Test Automation

This project automates the validation of User Checkout Workflow in typescript using playwright framework.

---

## Table of Contents

- [About the Project](#about-the-project)
- [Prerequisites](#prerequisites)
- [Running Tests](#running-tests)
- [Directory Structure](#directory-structure)

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

Ensure you have the following installed before proceeding:
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

## Directory Structure

| Directory Name      | Description                                                              |
|---------------------|--------------------------------------------------------------------------|
| **env**             | This folder contains .env file with test environment variables           |
| **reports**         | This folder contains test report file in json & html format              |
| **logger**         | This folder contains logger utility to log error, debug, info messages   | 
| **page_objects**    | This folder contains page object models                                  |
| **tests**           | This folder contains test specification file                             |

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

