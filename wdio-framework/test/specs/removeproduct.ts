import productpage from '../pageobjects//product.page';
describe('remove product', () => {
  it('should add a product to cart and then remove it', async () => {

    await productpage.HomePage();
    await productpage.ProductsPage();
    await productpage.removeProduct();

    
  });
});
