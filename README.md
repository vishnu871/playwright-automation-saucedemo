# playwright-automation-saucedemo
Playwright Automation Suite: SauceDemo & API Testing 🎭

This repository contains a professional end-to-end automation framework built with JavaScript and Playwright. It was developed to demonstrate core QA automation skills including UI interaction, API validation, and the Page Object Model (POM).

 🚀 Key Features
- UI Automation: Complete login and "Add to Cart" workflow for the SauceDemo e-commerce platform.
- REST API Testing: Automated GET request validation using Playwright's built-in Request context (validating status codes and JSON data).
- Page Object Model (POM): Organized locators and actions into modular classes for high maintainability.
- Professional Hooks: Utilized `beforeEach` hooks to streamline test execution and reduce code redundancy.
- Reporting: Integrated HTML reporting for detailed test execution analysis.

 🛠️ Tech Stack
- Language: JavaScript (ES6+)
- Framework: Playwright
- Architecture Page Object Model (POM)
- Tools: Node.js, VS Code

 🏃 How to Run Locally
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
Install Playwright browsers:
bash
npx playwright install
   
Run all tests:
bash
npx playwright test --headed

View the test report:
bash
npx playwright show-report
