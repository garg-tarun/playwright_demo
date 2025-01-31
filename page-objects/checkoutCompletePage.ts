import { Page, expect } from "@playwright/test";
import { BasePage } from "./basePage";

export class CheckoutCompletePage extends BasePage {

    constructor(page:Page) {
        const title = "Checkout: Complete!";
        const pageType = 'CheckoutComplete Page';
        super(page, title, pageType);
    }  

    async clickOnBackHomeButton() {
        this.logger.debug(`on ${this.pageType}, Clicking on 'Back Home' button`);
        await this.page.locator('[data-test="back-to-products"]').click();
    }
} 