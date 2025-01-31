import { Page, expect } from "@playwright/test";
import { BasePage } from "./basePage";

export class CheckoutStepOnePage extends BasePage {

    constructor(page:Page) {
        const title = "Checkout: Your Information";
        const pageType = 'CheckoutStepOne Page';
        super(page, title, pageType);
    }  

    async enterFirstName(firstName: string) {
        this.logger.debug(`on ${this.pageType}, Entering firstName as ${firstName} `);
        await this.page.locator('[data-test="firstName"]').fill(firstName);
    }

    async enterLastName(lastName: string) {
        this.logger.debug(`on ${this.pageType}, Entering lastName as ${lastName} `);
        await this.page.locator('[data-test="lastName"]').fill(lastName);
    }

    async enterPostalCode(postalCode: string) {
        this.logger.debug(`on ${this.pageType}, Entering postalCode as ${postalCode} `);
        await this.page.locator('[data-test="postalCode"]').fill(postalCode);
    }

    async clickOnContinueButton() {
        this.logger.debug(`on ${this.pageType}, Clicking on Continue button`);
        await this.page.locator('[data-test="continue"]').click();
    }

    async fillForm(firstName:string, lastName:string, postalCode:string) {
        this.logger.debug(`on ${this.pageType}, Filling user details `);
        await this.enterFirstName(firstName);
        await this.enterLastName(lastName);
        await this.enterPostalCode(postalCode);
    }
} 