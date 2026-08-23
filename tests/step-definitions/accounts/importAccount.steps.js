import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

//const { createBdd } = require('playwright-bdd');
//const { expect } = require('@playwright/test');

const { Given, When, Then } = createBdd();

Given('Import Account: the user is logged into SuiteCRM', async ({ page }) => {
  await page.goto('https://suite8demo.suiteondemand.com/#/Login'); 
});

When('Import Account: user enters {string} and {string} credentials to login', async ({ page }, username, password) => {
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.getByRole('button', { name: 'Log In' }).click();  
});

Given('Import Account: the user navigates to the dashboard', async ({ page }) => {
  await expect(page.getByRole('link', { class: 'home-nav-link' })).toBeVisible();
});

Given('the user clicks the accounts tab', async ({ page }) => {
  await page.locator('a').filter({ hasText: /^Accounts$/ }).click();
});

When('the user clicks the Import Accounts button', async ({ page }) => {
 await page.getByRole('link', { name: 'Import Accounts' }).click();
});

Then('the Import Accounts page should be displayed', async ({ page }) => {
  await expect(page.locator('iframe').contentFrame().getByRole('heading', { name: 'Step 1: Upload Import File' })).toBeVisible();
});