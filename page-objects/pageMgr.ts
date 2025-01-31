
import { Page, expect } from "@playwright/test";
import { HomePage } from './homePage';
import { InventoryPage } from './inventoryPage';
import { CartPage } from './cartPage';
import { CheckoutStepOnePage } from './checkoutStepOnePage';
import { CheckoutStepTwoPage } from './checkoutStepTwoPage';
import { CheckoutCompletePage } from "./checkoutCompletePage";

export class PageManager {

    private readonly page: Page;

    private readonly homePage: HomePage;
    private readonly inventoryPage: InventoryPage;
    private readonly cartPage: CartPage;
    private readonly checkoutStepOnePage: CheckoutStepOnePage;
    private readonly checkoutStepTwoPage: CheckoutStepTwoPage;
    private readonly checkoutCompletePage: CheckoutCompletePage;

    constructor(page: Page) {
        this.page = page;
        this.homePage = new HomePage(this.page);
        this.inventoryPage = new InventoryPage(this.page);
        this.cartPage = new CartPage(this.page);
        this.checkoutStepOnePage = new CheckoutStepOnePage(this.page);
        this.checkoutStepTwoPage = new CheckoutStepTwoPage(this.page);
        this.checkoutCompletePage = new CheckoutCompletePage(this.page);
    }

    onHomePage() {
        return this.homePage;
    }

    onInventoryPage() {
        return this.inventoryPage;
    }

    onCartPage() {
        return this.cartPage;
    }

    onCheckoutStepOnePage() {
        return this.checkoutStepOnePage;
    }

    onCheckoutStepTwoPage() {
        return this.checkoutStepTwoPage;
    }

    onCheckoutCompletePage() {
        return this.checkoutCompletePage;
    }
}