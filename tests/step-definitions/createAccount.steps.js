import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

//const { createBdd } = require('playwright-bdd');
//const { expect } = require('@playwright/test');

const { Given, When, Then } = createBdd();

Given('Create Account: The user is on the login page', async ({ page }) => {
  await page.goto('https://suite8demo.suiteondemand.com/#/Login');
});

When('Create Account: The user enters {string} and {string}', async ({ page }, username, password) => {
  //await page.locator('#username').fill(username);

  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.getByRole('button', { name: 'Log In' }).click();
  //await page.locator('#password').fill(password);
  //await page.locator('#login-button').click();
});

Then('Create Account: The user should see the dashboard', async ({ page }) => {
  //await expect(page.getByRole('a', { name: ' SUITECRM DASHBOARD ' })).toContainText('SUITECRM DASHBOARD');
  await expect(page.getByRole('link', { class: 'home-nav-link' })).toBeVisible();
  //await expect(page.getByLabel('SUITECRM DASHBOARD')).;
  //await expect(page.locator('#dashboard')).toBeVisible();
});


//Create Account Steps

Then('Create Account: The user is on dashboard page', async ({ page }) => {
  //await expect(page.getByRole('a', { name: ' SUITECRM DASHBOARD ' })).toContainText('SUITECRM DASHBOARD');
  await expect(page.getByRole('link', { class: 'home-nav-link' })).toBeVisible();
  //await expect(page.getByLabel('SUITECRM DASHBOARD')).;
  //await expect(page.locator('#dashboard')).toBeVisible();
});

When('Create Account: user clicks on Accounts and Create Account links', async ({ page }) => {
  
  //await page.locator('a').filter({ class: 'dropdown-toggle', hasText: 'Accounts'}, {exact: true}).click();
  await page.locator('a').filter({ hasText: /^Accounts$/ }).click();
  await page.getByRole('link', { name: 'Create Account' }).click();
  //await page.locator('span').filter({ hasText: 'Create Account' }).click();
  
});

Then('Create Account: The create Account page should be displayed', async ({ page }) => {
  await expect(page.getByLabel('Create')).toBeVisible();
});

When('Create Account: user enter mandetory account details', async ({ page }) => {
  
    //await page.getByLabel('Name').fill('ABC Technologies');
    //await page.locator('div').filter({ hasText: /^\*Name$/ }).getByRole('textbox').fill('ABC Technologies');
    await page.getByRole('textbox').nth(1).fill('ABC Technologies');
    await page.getByRole('button', { name: 'Save' }).click();
  
});

Then('Create Account: The Account should be created successfully', async ({ page }) => {
  await expect(page.locator('scrm-dynamic-label').getByText('ABC Technologies')).toBeVisible();
  //await page.getByText('ABC Technologies', { exact: true }).toBeVisible();
});