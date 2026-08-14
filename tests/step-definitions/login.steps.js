const { createBdd } = require('playwright-bdd');
const { expect } = require('@playwright/test');

const { Given, Then } = createBdd();

Given('user launch browser and enter url', async function ({ page }) {
  // Before hook already navigated to BASE_URL
  expect(page).toBeTruthy();
});

Then('user is on login page', async function ({ page }) {
  await expect(page).toHaveURL(/suiteondemand\.com/);
});