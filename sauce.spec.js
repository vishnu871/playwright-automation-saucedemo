const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test.describe('SauceDemo Automation Suite', () => {
  let loginPage;

  // This runs BEFORE each test below
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('Successful Login UI Test', async ({ page }) => {
    // We are already logged in thanks to beforeEach!
    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.locator('.title')).toHaveText('Products');
  });

  test('Add Product to Cart Test', async ({ page }) => {
    // We are already logged in!
    await loginPage.addToCartBackpack.click();
    await expect(loginPage.cartBadge).toHaveText('1');
    console.log('Cart Test Passed');
  });

  // Note: API tests usually don't need the UI login, 
  // so you could move the API test to its own file later.
  test('GET User API Test', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users/1');
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.name).toBe('Leanne Graham');
  });
});