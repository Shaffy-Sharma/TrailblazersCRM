const { createBdd } = require('playwright-bdd');
const { expect } = require('@playwright/test');

const { Given, When, Then } = createBdd();

const LoginPage = require('../pages/LoginPage.js');


Given('user launch browser and enter url', async function ({ page }) {
  // Browser is already launched and navigated to the base URL
  // by the Before hook in hooks/hooks.js
  expect(page).toBeTruthy();
});

Given('user is on login page', async function ({ page }) {
  await expect(page).toHaveURL(/suiteondemand\.com/);
});

When('user enters username {string} and password {string}', async function ({ page }, username, password) {
  const loginPage = new LoginPage(page);
  await loginPage.login(username, password);
});

Then('user should be logged in successfully', async function ({ page }) {
  await expect(page).not.toHaveURL(/login/i);
});