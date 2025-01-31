import { Page, expect } from "@playwright/test";
import { BasePage } from "./basePage";

export class CheckoutStepTwoPage extends BasePage {

    constructor(page:Page) {
        const title = "Checkout: Overview";
        const pageType = 'CheckoutStepTwo Page';
        super(page, title, pageType);
    }    

    async getTotalPrice(): Promise<number> {
        this.logger.debug(`on ${this.pageType}, Fetching total price item`);
        const itemTotal = this.page.locator('[data-test="subtotal-label"]');
        let value = await itemTotal.textContent() ?? "Item total: $0";
        value = value.replace("Item total: $", "");
        
        this.logger.debug(`on ${this.pageType}, Total Price: ${value}`);
        return parseFloat(value);
    }

    async clickOnFinish() {
        this.logger.debug(`on ${this.pageType}, Clicking Finish button`);
        await this.page.locator('[data-test="finish"]').click();
    }
} 