import productpage from '../pageobjects//product.page';

describe('search product', () => {
  it('should search for a product ', async () => {

    await productpage.HomePage();
    await productpage.ProductsPage();
    await productpage.searchProduct('Blue Top');
    
  });
});
