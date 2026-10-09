import regPage from '../pageobjects/reg.Page';

describe('Register User', () => {
  it('should register a new user', async () => {
    const uniqueId = Date.now();
    const now = new Date();
    const birthDate = new Date(now.getFullYear() - 25, now.getMonth(), now.getDate());
    const email = `john.doe.${uniqueId}@example.com`;
    const password = `Test@${uniqueId}!`;
    const birthDay = String(birthDate.getDate());
    const birthMonth = birthDate.toLocaleString('en-US', { month: 'long' });
    const birthYear = String(birthDate.getFullYear());

    await regPage.signup('John Doe', email);
    await regPage.FillDetails(password, birthDay, birthMonth, birthYear);
    await regPage.Checkboxes();
    await regPage.completedetails(
      'John',
      'Doe',
      'Example Company',
      '123 Main St',
      'Apt 4B',
      'United States',
      'California',
      'Los Angeles',
      '90001',
      '555-1234'
    );
    await regPage.completeRegistration();
    
  });
});
