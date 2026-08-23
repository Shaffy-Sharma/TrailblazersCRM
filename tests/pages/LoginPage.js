const { expect } = require('@playwright/test');

/* class LoginPage {
  constructor(page) {
    this.page = page;

    // TODO: update these locators to match the real page structure
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('Button',{name:' Log In '});
    
    this.errorMessage = page.getByText('Login credentials incorrect, please try again.');
  } */

class LoginPage {
  constructor(page) {
    this.page = page;

    this.usernameField = page.getByPlaceholder('Username');
    this.passwordField = page.getByPlaceholder('Password');
    this.loginButton   = page.getByRole('button', { name: 'Log In' });
    this.errorMessage  = page.getByText('Missing required field');
  }

  // --- navigation ---
/*  */
  async goto() {
    await this.page.goto('/#/Login');
  }

  // --- actions ---

  async enterUsername(username) {
    await this.usernameField.fill(username);
  }

  async enterPassword(password) {
    await this.passwordField.fill(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }

  // --- assertions ---

  async verifyLoginPageDisplayed() {
    await expect(this.usernameField).toBeVisible();
    await expect(this.passwordField).toBeVisible();
    await expect(this.loginButton).toBeVisible();
  }

  async verifyErrorMessageDisplayed() {
    await expect(this.errorMessage).toBeVisible();
  }

  async verifyLoginSuccessful() {
    await expect(this.page).not.toHaveURL(/#\/Login/);
  }
}

module.exports = LoginPage;