import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

//const { createBdd } = require('playwright-bdd');
//const { expect } = require('@playwright/test');

const { Given, When, Then } = createBdd();

Given('The user is on the login page', async ({ page }) => {
  await page.goto('https://suite8demo.suiteondemand.com/#/Login');
});

When('The user enters {string} and {string}', async ({ page }, username, password) => {
  //await page.locator('#username').fill(username);

  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.getByRole('button', { name: 'Log In' }).click();
  //await page.locator('#password').fill(password);
  //await page.locator('#login-button').click();
});

Then('The user should see the dashboard', async ({ page }) => {
  //await expect(page.getByRole('a', { name: ' SUITECRM DASHBOARD ' })).toContainText('SUITECRM DASHBOARD');
  await expect(page.getByRole('link', { class: 'home-nav-link' })).toBeVisible();
  //await expect(page.getByLabel('SUITECRM DASHBOARD')).;
  //await expect(page.locator('#dashboard')).toBeVisible();
});