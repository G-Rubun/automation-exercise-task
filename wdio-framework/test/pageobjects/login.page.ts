import { $, browser, expect } from '@wdio/globals';
import { clickWithAdFallback } from '../utils/clickWithAdFallback';

class loginPage {

    get CookieAcceptButton() { return $("//p[text()='Consent']"); }
    get homePageImage() { return $("//div[@class='item active']//img[@alt='demo website for practice']"); }
    get loginButton() { return $("//a[normalize-space()='Signup / Login']"); }

    get LoggedInAsMessage() { return $("//a[contains(normalize-space(), 'Logged in as')]"); }
    get deleteAccountButton() { return $("//a[normalize-space()='Delete Account']"); }
    get accountDeletedMessage() { return $("//h2[@data-qa='account-deleted']"); }


//Login navigation
    async login() {
        await browser.url('https://automationexercise.com/');

        if (await this.CookieAcceptButton.isExisting()) {
            await clickWithAdFallback(await this.CookieAcceptButton);
        }

        await expect(this.homePageImage).toBeDisplayed();

        await clickWithAdFallback(await this.loginButton);
    }

    async LoggedInAs() {

    if (await this.CookieAcceptButton.isExisting()) {
                await clickWithAdFallback(await this.CookieAcceptButton);
            }
    
            await expect(this.LoggedInAsMessage).toBeDisplayed();
    
        }
    
        async deleteAccount() {
            await this.deleteAccountButton.waitForDisplayed();
            await clickWithAdFallback(await this.deleteAccountButton);
            await expect(this.accountDeletedMessage).toBeDisplayed();
    
        }
    get LoginText() { return $("//h2[normalize-space()='Login to your account']"); }
    get loginEmail() { return $("//input[@data-qa='login-email']"); }
    get loginPassword() { return $("//input[@data-qa='login-password']"); }
    get validateLoginButton() { return $("//button[normalize-space()='Login']"); }


    async loginDetails(email: string, password: string) {
        await this.LoginText.waitForDisplayed();
        await this.loginEmail.waitForDisplayed();
        await this.loginEmail.setValue(email);
        await this.loginPassword.waitForDisplayed();
        await this.loginPassword.setValue(password);
        await clickWithAdFallback(await this.validateLoginButton);
    }

}

export default new loginPage();
