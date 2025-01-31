import { Page, expect, Locator } from "@playwright/test";
import { BasePage } from "./basePage";

export class InventoryPage extends BasePage {
    totalCartValue: number;
    itemCount: number;
    itemPriceMap: object;
    
    constructor(page:Page) {
        const title = "Products";
        const pageType = 'Inventory Page';
        super(page, title, pageType);
        this.totalCartValue = 0;
        this.itemCount = 0;
        this.itemPriceMap = {};
    }

    private getItemView(itemDescription:string) {
        this.logger.debug(`on ${this.pageType}, Navigating to ${itemDescription} view`);
        return this.page.locator('[data-test="inventory-item"]', {hasText: itemDescription});    
    }

    private getPriceBarLocator(itemView: Locator) {
        this.logger.debug(`on ${this.pageType}, Locating pricebar relative to itemView`);
        return itemView.locator('.pricebar');
    }

    private async getItemPrice(priceBar: Locator) : Promise<number> {
        this.logger.debug(`on ${this.pageType}, Locating item price relative to pricebar`);
        const priceLocator = priceBar.locator('[data-test="inventory-item-price"]');
        let price = await priceLocator.textContent() ?? "$0";
        // remove $ sign from price
        price = price.slice(1);
        this.logger.debug(`on ${this.pageType} item price found: ${price}`);
        return parseFloat(price); 
    }

    async getCartBadgeValue(): Promise<number> {
        this.logger.debug(`on ${this.pageType}, Fetching number of items from Cart badge value`);
        const badge = this.page.locator('div#shopping_cart_container a.shopping_cart_link span.shopping_cart_badge');
        await badge.waitFor({ state: 'visible' });
        const itemCount = await badge.textContent() ?? "0";
        this.logger.debug(`on ${this.pageType}, Badge value: ${itemCount}`);
        return parseInt(itemCount) ;
    }

    async clickOnCartLink(): Promise<void> {
        this.logger.debug(`on ${this.pageType}, Clicking on Cart link`);
        await this.page.locator('#shopping_cart_container').click();
    }

    async clickOnAddToCartButton(priceBar: Locator) {
        this.logger.debug(`on ${this.pageType}, Clicking on 'Add to Cart' button `);
        await priceBar.getByRole('button', {name: 'Add to cart'}).click(); 
    }

    async addItemToCart(itemDescription: string) {
        this.logger.debug(`on ${this.pageType}, Adding ${itemDescription} to cart `);
        const itemView = this.getItemView(itemDescription);
        const priceBar = this.getPriceBarLocator(itemView);
        const price = await this.getItemPrice(priceBar);
        await this.clickOnAddToCartButton(priceBar);
        this.itemCount += 1;
        this.totalCartValue += price;
        this.itemPriceMap[itemDescription] = price; 
    }
    
    getTotalCartValue(): number {
        return this.totalCartValue;
    }

    getItemCount(): number {
        return this.itemCount;
    }

    getPrice(itemDescription:string) : number {
        this.logger.debug(`on ${this.pageType}, Returning ${itemDescription} price`);
        return this.itemPriceMap[itemDescription]; 
    }

    async resetApp() {
        this.logger.debug(`on ${this.pageType}, Performig app reset`);
        await this.page.locator('#react-burger-menu-btn').click();
        await this.page.locator('#reset_sidebar_link').click();
        await this.page.locator('#react-burger-cross-btn').click();
    }
} 