import { loginPage } from '../page_objects/loginPage';  
import {login} from '../fixtures/testData.json';

describe('Login Tests', () => {
  it('should log in with valid credentials', () => {
    
    cy.visit('https://www.saucedemo.com/');

    loginPage.login(login.username, login.password);
    
    cy.url().should('include', '/inventory');
  });
});


