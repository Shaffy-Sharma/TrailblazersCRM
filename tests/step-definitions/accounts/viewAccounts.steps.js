import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

//const { createBdd } = require('playwright-bdd');
//const { expect } = require('@playwright/test');

const { Given, When, Then } = createBdd();

Given('View Account: the user loads SuiteCRM', async ({ page }) => {
  await page.goto('https://suite8demo.suiteondemand.com/#/Login'); 
});

When('View Account: user enters {string} and {string} credentials to login', async ({ page }, username, password) => {
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.getByRole('button', { name: 'Log In' }).click();  
});

Given('View Account: the user navigates to the dashboard', async ({ page }) => {
  await expect(page.getByRole('link', { class: 'home-nav-link' })).toBeVisible();
});

Given('the user navigates to the Accounts page', async ({ page }) => {
  await page.locator('a').filter({ hasText: /^Accounts$/ }).click();
});

Then('the list of existing accounts should be displayed with the page title "Accounts"', async ({ page }) => {
  await expect(await page.getByText('ACCOUNTS', { exact: true })).toBeVisible();
});