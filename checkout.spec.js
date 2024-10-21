import { loginPage } from '../page_objects/loginPage';
import { inventoryPage } from '../page_objects/inventoryPage';
import { cartPage } from '../page_objects/cartPage';
import { checkoutPage } from '../page_objects/checkoutPage';
import {login} from '../fixtures/testData.json';


describe('Checkout Tests', () => {
  it('should add a product to the cart and complete a purchase', () => {
    
    loginPage.visit();
    loginPage.login(login.username, login.password);

    
    const productName = 'Sauce Labs Backpack';
    inventoryPage.addProductToCart(productName);
    
    inventoryPage.goToCart();
    cartPage.verifyProductInCart(productName);
    cartPage.goToCheckout();

    
    checkoutPage.enterCheckoutInfo('John', 'Doe', '12345');
    
    
    const productPrice = '$29.99';  
    checkoutPage.verifyProductSummary(productName, productPrice);

    
    checkoutPage.completePurchase();
    
    
    checkoutPage.verifyOrderCompletion();
  });
});
