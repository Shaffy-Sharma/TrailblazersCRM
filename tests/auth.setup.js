require('dotenv').config();
const { test: setup, expect } = require('@playwright/test');
const path = require('path');

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('save authenticated state', async ({ page }) => {
  await page.goto(process.env.BASE_URL);

  await page.getByPlaceholder('Username').fill('will');
  await page.getByPlaceholder('Password').fill('will');
  await page.getByRole('button', { name: 'Log In' }).click();

  //await expect(page).not.toHaveURL(/#\/Login/);
  await expect(page).not.toHaveURL(/#\/Login/, { timeout: 15000 });

  await page.context().storageState({ path: authFile });
});