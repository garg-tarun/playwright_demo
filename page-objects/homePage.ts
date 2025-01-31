import { Page, expect } from "@playwright/test";
import { BasePage } from "./basePage";

export class HomePage extends BasePage {
    constructor(page:Page) {
        const title = "Swag Labs";
        const pageType = 'Home Page';
        super(page, title, pageType);
    }

    async enterUserName(userName: string) {
        this.logger.debug(`on ${this.pageType}, Entering userName as ${userName}`);
        await this.page.locator('[data-test="username"]').fill(userName);
    }

    async enterPassword(password:string) {
        this.logger.debug(`on ${this.pageType}, Entering password as ${password}`);
        await this.page.locator('[data-test="password"]').fill(password);
    }

    async clickLoginButton() {
        this.logger.debug(`on ${this.pageType}, click on Login button `);
        await this.page.locator('[data-test="login-button"]').click();
    }

    async performLogin(userName:string, password: string) {
        this.logger.debug(`on ${this.pageType}, Perform Login operation `);
        await this.enterUserName(userName);
        await this.enterPassword(password);
        await this.clickLoginButton(); 
    }

    async verifyPageTitle() {
        this.logger.info(`on ${this.pageType}, Verifying page title as '${this.title}' `);
        const pageTitle = await this.page.title();
        expect(pageTitle).toEqual(this.title);
    }
} 
