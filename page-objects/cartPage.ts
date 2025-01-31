import { Page, expect } from "@playwright/test";
import { BasePage } from "./basePage";

export class CartPage extends BasePage {

    constructor(page:Page) {
        const title = "Your Cart";
        const pageType = 'Cart Page';
        super(page, title, pageType);
    }

    async verifyItemDetails(itemDescription:string, itemCount: number, itemPrice: number) {
        this.logger.debug(`on ${this.pageType}, Verfying ${itemDescription} details`);
        const backpackItem = this.page.locator('div.cart_item[data-test="inventory-item"]').filter({ hasText: itemDescription });
        const quantity = await backpackItem.locator('[data-test="item-quantity"]').textContent() ?? "0";
        let price = await backpackItem.locator('[data-test="inventory-item-price"]').textContent() ?? "$0";
        price = price.slice(1);
        this.logger.debug(`on ${this.pageType}, ${itemDescription} - Quantity: ${quantity}, Price: ${price}`);
        expect(itemCount).toEqual(parseFloat(quantity));
        expect(itemPrice).toEqual(parseFloat(price));
    }

    async clickContinueShopingButton() {
        this.logger.debug(`on ${this.pageType}, Clicking Continue Shopping button`);
        await this.page.locator('#continue-shopping').click();
    }

    async clickCheckoutButton() {
        this.logger.debug(`on ${this.pageType}, Clicking Checkout button`);
        await this.page.getByRole('button', {name: 'Checkout'}).click();
    }

} 