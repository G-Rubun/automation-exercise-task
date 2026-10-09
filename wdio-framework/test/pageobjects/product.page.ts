import { $, browser, expect } from '@wdio/globals';
import { clickWithAdFallback } from '../utils/clickWithAdFallback';

class ProductPage {
    get CookieAcceptButton() { return $("//p[text()='Consent']"); }
    get homePageImage() { return $("//div[@class='item active']//img[@alt='demo website for practice']"); }
    get productsButton() { return $("//a[@href='/products'] "); }
    get allProductsPage() { return $("//h2[normalize-space()='All Products']"); }
    get searchInput() { return $("//input[@id='search_product']"); }
    get searchButton() { return $("//button[@id='submit_search']"); }


    get product1() { return $("//div[@class='overlay-content']//p[contains(text(),'Blue Top')]"); }
    get product2() { return $("//p[normalize-space()='Men Tshirt']"); }
    get product3() { return $("//p[normalize-space()='Sleeveless Dress']"); }
    get product4() { return $("//p[normalize-space()='Stylish Dress']"); }
    get product5() { return $("//p[normalize-space()='Winter Top']"); }

    get addToCartButton() { return $("(//a[contains(text(),'Add to cart')])[1]"); }
    get addedToCartViewCartButton() { return $("//div[contains(@class,'modal-content')]//a[@href='/view_cart']"); }
    get CartPage () { return $("//h2[normalize-space()='Shopping Cart']"); }
    get removeProductButton() { return $("//a[contains(@class,'cart_quantity_delete')]"); }
    get emptyCartMessage() { return $("//b[normalize-space()='Cart is empty!']"); }
    get searchProductsPage() { return $("//h2[normalize-space()='Searched Products']"); }

    get Category() { return $("//h2[normalize-space()='Category']"); }
    get WomenCategory() { return $("//a[normalize-space()='Women']"); }
    get MenCategory() { return $("//a[normalize-space()='Men']"); }
    get KidsCategory() { return $("//a[normalize-space()='Kids']"); }


// Navigate to Home Page

    async HomePage() {

        await browser.url('https://automationexercise.com/');

        if (await this.CookieAcceptButton.isExisting()) {
            await clickWithAdFallback(await this.CookieAcceptButton);
        }

        await expect(this.homePageImage).toBeDisplayed();
    }


// Navigate to Products Page

async ProductsPage() {
    await this.productsButton.waitForDisplayed();
    await clickWithAdFallback(await this.productsButton);
    await expect(this.allProductsPage).toBeDisplayed();
}

// Search for a product

async searchProduct(productName: string) {
    await this.searchInput.waitForDisplayed();
    await this.searchInput.setValue(productName);
    await clickWithAdFallback(await this.searchButton);
    await expect(this.searchProductsPage).toBeDisplayed();
}

async removeProduct() {

    await this.addToCartButton.waitForDisplayed();
    await clickWithAdFallback(await this.addToCartButton);
    await this.addedToCartViewCartButton.waitForDisplayed();
    await clickWithAdFallback(await this.addedToCartViewCartButton);
    await this.removeProductButton.waitForDisplayed();
    await clickWithAdFallback(await this.removeProductButton);
    await expect(this.emptyCartMessage).toBeDisplayed();

}

}

export default new ProductPage();

