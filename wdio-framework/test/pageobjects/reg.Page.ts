import { $, browser, expect } from '@wdio/globals';
import { clickWithAdFallback } from '../utils/clickWithAdFallback';

class RegPage {


    get CookieAcceptButton() { return $("//p[text()='Consent']"); }
    get homePageImage() { return $("//div[@class='item active']//img[@alt='demo website for practice']"); }
    get loginButton() { return $("//a[normalize-space()='Signup / Login']"); }
    get signUpText() { return $("//h2[normalize-space()='New User Signup!']"); }
    get signupName() { return $("//input[@placeholder='Name']"); }
    get signupEmail() { return $("//input[@data-qa='signup-email']"); }
    get signupButton() { return $("//button[normalize-space()='Signup']"); } 
    get enterAccountInformationText() { return $("//b[normalize-space()='Enter Account Information']"); }
    get MrTitle() { return $("#id_gender1"); }
    get MrsTitle() { return $("#id_gender2"); }
    get regName() { return $("//input[@id='name']"); }
    get regEmail() { return $("//input[@id='email']"); }
    get regPassword() { return $("#password"); }
    get dayDropdown() { return $("#days"); }
    get monthDropdown() { return $("//select[@id='months'] "); }
    get yearDropdown() { return $("#years"); }
    get countryDropdown() { return $("#country"); }
    get newsletterCheckbox() { return $("#newsletter"); }
    get offersCheckbox() { return $("//input[@id='optin']"); }
    get firstName() { return $("//input[@id='first_name']"); }
    get lastName() { return $("//input[@id='last_name']"); }
    get companyName() { return $("//input[@id='company']"); }
    get addressLine1() { return $("//input[@id='address1']"); }
    get addressLine2() { return $("//input[@id='address2']"); }
    get state() { return $("//input[@id='state']"); }
    get city() { return $("//input[@id='city']"); }
    get zipcode() { return $("//input[@id='zipcode']"); }
    get mobileNumber() { return $("//input[@id='mobile_number']"); }
    get createAccountButton() { return $("//button[normalize-space()='Create Account']"); }
    get accountCreatedMessage() { return $("//h2[@data-qa='account-created']"); }
    get continueButton() { return $("//a[@class='btn btn-primary']"); }
    get deleteAccountButton() { return $("//a[normalize-space()='Delete Account']"); }
    get accountDeletedMessage() { return $("//h2[@data-qa='account-deleted']"); }
    get LoggedInAsMessage() { return $("//a[contains(normalize-space(), 'Logged in as')]"); }


// Registration and Login navigation
    async signup(name: string, email: string) {
        await browser.url('https://automationexercise.com/');

        if (await this.CookieAcceptButton.isExisting()) {
            await this.CookieAcceptButton.click();
        }

        await expect(this.homePageImage).toBeDisplayed();

        await clickWithAdFallback(await this.loginButton);
        await this.signUpText.waitForDisplayed();
        await this.signupName.waitForDisplayed();
        await this.signupName.setValue(name);
        await this.signupEmail.waitForDisplayed();
        await this.signupEmail.setValue(email);
        await clickWithAdFallback(await this.signupButton);
    
    }

//complete account information registration
    async FillDetails(password: string, day: string, month: string, year: string) {
        await this.enterAccountInformationText.waitForDisplayed();
        await clickWithAdFallback(await this.MrTitle);
        await this.regName.waitForDisplayed();
        await this.regEmail.waitForDisplayed();
        await this.regPassword.setValue(password);
        await this.dayDropdown.selectByVisibleText(day);
        await this.monthDropdown.selectByVisibleText(month);
        await this.yearDropdown.selectByVisibleText(year);
    }
//checkboxes
    async Checkboxes() {
        await clickWithAdFallback(await this.newsletterCheckbox);
        await clickWithAdFallback(await this.offersCheckbox);
    }


 //complete address details   
    async completedetails(
        firstname: string,
        lastname: string,
        company: string,
        address1: string,
        address2: string,
        country: string,
        states: string,
        city: string,
        zipcode: string,
        mobilenumber: string
    ) {
        await this.firstName.setValue(firstname);
        await this.lastName.setValue(lastname);
        await this.companyName.setValue(company);
        await this.addressLine1.setValue(address1);
        await this.addressLine2.setValue(address2);
        await this.countryDropdown.selectByVisibleText(country);
        await this.state.setValue(states);
        await this.city.setValue(city);
        await this.zipcode.setValue(zipcode);
        await this.mobileNumber.setValue(mobilenumber);
    }

//account creation and deletion
    async completeRegistration() {
        await clickWithAdFallback(await this.createAccountButton);

 if (await this.CookieAcceptButton.isExisting()) {
            await this.CookieAcceptButton.click();
        }

        await expect(this.accountCreatedMessage).toBeDisplayed();

if (await this.CookieAcceptButton.isExisting()) {
            await this.CookieAcceptButton.click();
        }

        await clickWithAdFallback(await this.continueButton);
        await expect(this.LoggedInAsMessage).toBeDisplayed();

    }


    async deleteAccount() {
        await this.deleteAccountButton.waitForDisplayed();
        await clickWithAdFallback(await this.deleteAccountButton);
        await expect(this.accountDeletedMessage).toBeDisplayed();

    }    


}

export default new RegPage();