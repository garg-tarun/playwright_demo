
import winston from 'winston';
import logger from '../logger/Logger';
import { Page, expect } from "@playwright/test";

export class BasePage {

    readonly page: Page;
    readonly title: string;
    readonly pageType: string;
    readonly logger: winston.Logger;

    constructor(page:Page, title:string, pageType:string) {
        this.page = page;
        this.title = title;
        this.pageType = pageType
        this.logger = logger;
    }

    async verifyPageTitle() {
        this.logger.info(`on ${this.pageType}, Verifying page title as '${this.title}' `);
        const pageTitle = await this.page.locator('[data-test="title"]').textContent();
        expect(pageTitle).toEqual(this.title);
    }
}