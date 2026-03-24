// This class stores the elements and actions for the Login Screen

class LoginPage {
  constructor(page) {
    this.page = page;
    // Locators: Finding the elements on the screen
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    // NEW LOCATORS FOR THE CART CHALLENGE
    this.addToCartBackpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.removeButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(user, pass) {
    await this.usernameInput.fill(user);
    await this.passwordInput.fill(pass);
    await this.loginButton.click();
  }
}
module.exports = { LoginPage };