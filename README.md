Project Overview
This project is a Cypress test automation framework designed to test the functionality of an e-commerce website, Sauce Demo. It uses Cypress to automate key functionalities such as login, adding products to the cart, and completing the checkout process.
Features
- Page Object Model (POM): The project follows the POM structure to keep the test logic separate from page-specific details.
- Test Data Management: Test data is stored in JSON format and dynamically used in the test cases.
- Automatic Screenshot on Failure: Cypress is configured to automatically take screenshots when a test fails.
Project Structure
```
cypress/
├── e2e/
│   ├── checkout.spec.js        # Test for completing the checkout process
│   └── login.spec.js           # Test for user login
├── fixtures/
│   └── testData.json           # Stores the test data (e.g., username, password)
├── page_objects/               # Page Object Model (POM) structure for page interactions
│   ├── cartPage.js             # Page object for cart-related operations
│   ├── checkoutPage.js         # Page object for checkout process
│   ├── inventoryPage.js        # Page object for product inventory actions
│   └── loginPage.js            # Page object for login actions
├── support/
│   ├── commands.js             # Custom commands (if any)
│   └── e2e.js                  # Global test hooks, including screenshot capture on failure
├── screenshots/                # Folder where screenshots of failed tests are saved
├── cypress.config.js           # Cypress configuration file
└── README.md                   # This file
