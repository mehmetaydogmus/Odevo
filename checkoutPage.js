class CheckoutPage {
  enterCheckoutInfo(firstName, lastName, postalCode) {
    cy.get('#first-name').type(firstName);
    cy.get('#last-name').type(lastName);
    cy.get('#postal-code').type(postalCode);
    cy.get('#continue').click();
  }

  verifyProductSummary(productName, productPrice) {
    cy.get('.inventory_item_name').should('contain', productName);
    cy.get('.inventory_item_price').should('contain', productPrice);
  }

  completePurchase() {
    cy.get('#finish').click();
  }

  verifyOrderCompletion() {
    cy.get('.complete-header').should('contain', 'Thank you for your order!');
  }
}

export const checkoutPage = new CheckoutPage();
