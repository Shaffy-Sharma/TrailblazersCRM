import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

//const { createBdd } = require('playwright-bdd');
//const { expect } = require('@playwright/test');

const { Given, When, Then } = createBdd();

Given('Create Account: the user loads SuiteCRM', async ({ page }) => {
  await page.goto('https://suite8demo.suiteondemand.com/#/Login'); 
});

When('Create Account: user enters {string} and {string} credentials to login', async ({ page }, username, password) => {
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page.getByRole('link', { class: 'home-nav-link' })).toBeVisible();
});

Given('Create Account: the user navigates to the Accounts tab', async ({ page }) => {
  await page.locator('a').filter({ hasText: /^Accounts$/ }).click();
});

Given('the user clicks the Create Account button', async ({ page }) => {
  await page.getByRole('link', { name: 'Create Account' }).click();
  await expect(page.getByLabel('Create')).toBeVisible();
});

When('the user clicks Save button after entering valid information in all mandatory fields', async ({ page }) => {
   await page.getByRole('textbox').nth(1).fill('ABC Technologies');
   await page.getByRole('button', { name: 'Save' }).click();
});

Then('the account should be created successfully', async ({ page }) => {
  await expect(page.locator('scrm-dynamic-label').getByText('ABC Technologies')).toBeVisible();
  //await page.getByText('ABC Technologies', { exact: true }).toBeVisible();
});