class CartPage {
  goToCheckout() {
    cy.contains('Checkout').click();
  }

  verifyProductInCart(productName) {
    cy.get('.inventory_item_name').should('contain', productName);
  }
}

export const cartPage = new CartPage();
