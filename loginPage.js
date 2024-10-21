class LoginPage {
  visit() {
    cy.visit('https://www.saucedemo.com/');
  }

  enterUsername(username) {
    cy.get('#user-name').should('be.visible').type(username);
  }

  enterPassword(password) {
    cy.get('#password').type(password);
  }

  clickLoginButton() {
    cy.get('#login-button').click();
  }

  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLoginButton();
  }
}

export const loginPage = new LoginPage();
