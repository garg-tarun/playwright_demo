import { test, expect } from '@playwright/test';
import {faker} from "@faker-js/faker";
import { PageManager } from '../page-objects/pageMgr';
import logger from '../logger/Logger';

test.describe('checkout feature tests', () => {

  test.only('purchase an item', async ({ page }) => {
    const appUrl = 'https://www.saucedemo.com/'; 

    logger.info(`Navigate to ${appUrl}`);
    await page.goto(appUrl);

    const pageMgr = new PageManager(page);

    logger.info(`Verify, user is on Home Page`);
    await pageMgr.onHomePage().verifyPageTitle();
    logger.info(`Perform user login`);
    await pageMgr.onHomePage().performLogin('standard_user', 'secret_sauce' );

    const item1 = 'Sauce Labs Backpack';
    const item2 = 'Sauce Labs Fleece Jacket';

    logger.info(`Verify, user is on Inventory Page`);
    await pageMgr.onInventoryPage().verifyPageTitle();
    logger.info(`Reset the app state before checkout operation`);
    await pageMgr.onInventoryPage().resetApp();

    logger.info(`Adding '${item1}' to cart`);
    await pageMgr.onInventoryPage().addItemToCart(item1);
    logger.info(`Adding '${item2}' to cart`);
    await pageMgr.onInventoryPage().addItemToCart(item2);

    logger.info(`Evaluate total cart value`);
    const expectedTotalCartValue = pageMgr.onInventoryPage().getTotalCartValue();
    const expectedTotalQuantity = pageMgr.onInventoryPage().getItemCount();
    logger.info(`Fetch '${item1}' & '${item2}' price`);
    const item1_price = pageMgr.onInventoryPage().getPrice(item1);
    const item2_price = pageMgr.onInventoryPage().getPrice(item2);
    logger.info(`Price of '${item1}' : ${item1_price} `);
    logger.info(`Price of '${item2}' : ${item2_price} `);
    logger.info(`Expected Total Cart Value: ${expectedTotalCartValue} `);
  
    const badgeValue = await pageMgr.onInventoryPage().getCartBadgeValue();
    logger.info(`Verify, Item counts matches with badge value shown on Cart icon`)
    expect(badgeValue).toEqual(expectedTotalQuantity);

    logger.info('Perform click on Cart Icon');
    await pageMgr.onInventoryPage().clickOnCartLink();
    await page.waitForTimeout(500);

    const quantity = 1;
    logger.info(`Verify, user is on Cart Page`);
    await pageMgr.onCartPage().verifyPageTitle();
    logger.info(`Verify, '${item1}' item details on Cart Page`);
    pageMgr.onCartPage().verifyItemDetails(item1, quantity, item1_price);
    logger.info(`Verify, '${item2}' item details on Cart Page`);
    pageMgr.onCartPage().verifyItemDetails(item2, quantity, item2_price);

    await page.waitForTimeout(500);
    logger.info('Click on Checkout button on Cart page');
    await pageMgr.onCartPage().clickCheckoutButton();

    logger.info(`Verify, user is on Checkout Step One Page`);
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const postalCode = faker.location.zipCode();
    await pageMgr.onCheckoutStepOnePage().verifyPageTitle();
    logger.info(`Enter user details in form on Checkout Step One Page`);
    await pageMgr.onCheckoutStepOnePage().fillForm(firstName, lastName, postalCode);
    await page.waitForTimeout(500);
    logger.info('Click on Continue button on Checkout Step One Page');
    await pageMgr.onCheckoutStepOnePage().clickOnContinueButton();

    logger.info(`Verify, user is on Checkout Step Two Page`);
    await pageMgr.onCheckoutStepTwoPage().verifyPageTitle();
    logger.info(`Verify, total price on Checkout Step Two Page matches with expected cart value`);
    const totalPrice = await pageMgr.onCheckoutStepTwoPage().getTotalPrice();
    expect(totalPrice).toEqual(expectedTotalCartValue);
    await page.waitForTimeout(500);
    logger.info(`Click on Finish button on Checkout Step Two Page`); 
    await pageMgr.onCheckoutStepTwoPage().clickOnFinish();

    await page.waitForTimeout(500);
    logger.info(`Verify, user is on Checkout Complete Page`);
    await pageMgr.onCheckoutCompletePage().verifyPageTitle();
    logger.info(`User clicks on 'Back Home' button`);
    await pageMgr.onCheckoutCompletePage().clickOnBackHomeButton();
  });

})
