const { createBdd } = require('playwright-bdd');
const { expect } = require('@playwright/test');
const logger = require('../utils/logger.js');

const { test } = require('../fixtures/fixtures.js');
const { Given, When, Then } = createBdd(test);
// or however you're importing from your fixtures

Given('the user is logged in to SuiteCRM', async ({ loginPage, page }) => {
  logger.step('Checking SuiteCRM login state');
  await expect(page).toHaveURL(/suiteondemand\.com/i);
});

Given('the user navigates to the {string} module', async ({ page }, moduleName) => {
  // if this is also duplicated
});