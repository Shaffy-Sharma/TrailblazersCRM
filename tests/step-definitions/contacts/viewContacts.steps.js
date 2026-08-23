import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

//const { createBdd } = require('playwright-bdd');
//const { expect } = require('@playwright/test');

const { Given, When, Then } = createBdd();

Given('View Contact: the user loads SuiteCRM', async ({ page }) => {
  await page.goto('https://suite8demo.suiteondemand.com/#/Login'); 
});

When('View Contact: user enters {string} and {string} credentials to login', async ({ page }, username, password) => {
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.getByRole('button', { name: 'Log In' }).click();  
});

Then('View Contact: the user navigates to the dashboard', async ({ page }) => {
  await expect(page.getByRole('link', { class: 'home-nav-link' })).toBeVisible();
});

Given('View Contact: the user clicks Contacts tab', async ({ page }) => {
  await page.locator('a').filter({ hasText: /^Contacts$/ }).click(); 
});

When('View Contact: the user clicks View Contact', async ({ page }) => {
  await page.getByRole('link', { name: 'View Contacts' }).click();
});

Then('View Contact: the list of existing contacts should be displayed with the page title "Contacts"', async ({ page }) => {
  await expect(await page.getByText('CONTACTS', { exact: true })).toBeVisible();
});