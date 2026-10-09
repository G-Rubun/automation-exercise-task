import loginPage from '../pageobjects/login.page';
describe('Valid Login', () => {
  it('should login with valid credentials', async () => {

    loginPage.login();
    await loginPage.loginDetails('rubungabriel@gmail.com', '12345678');
    await loginPage.LoggedInAs();
    // loginPage.deleteAccount();

  });
});

