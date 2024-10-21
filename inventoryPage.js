class InventoryPage {
  addProductToCart(productName) {
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  }

  goToCart() {
    cy.get('.shopping_cart_link').click();
  }

  verifyProductInInventory(productName) {
    cy.get('.inventory_item_name').should('contain', productName);
  }
}

export const inventoryPage = new InventoryPage();
