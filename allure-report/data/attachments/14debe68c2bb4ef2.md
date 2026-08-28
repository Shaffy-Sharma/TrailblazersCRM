# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ..\tests\auth.setup.js >> save authenticated state
- Location: tests\auth.setup.js:7:1

# Error details

```
Error: expect(page).not.toHaveURL(expected) failed

Expected pattern: not /#\/Login/
Received string: "https://suite8demo.suiteondemand.com/#/Login"
Timeout: 5000ms

Call log:
  - Expect "not toHaveURL" with timeout 5000ms
    14 × locator resolved to <html lang="en" data-critters-container="">…</html>
       - unexpected value "https://suite8demo.suiteondemand.com/#/Login"

```

```yaml
- navigation:
  - list:
    - listitem:
      - link:
        - /url: "#/home"
  - list
  - list:
    - listitem
  - list:
    - listitem
  - textbox "Search":
    - /placeholder: Search...
  - button "Search"
  - list:
    - listitem
- textbox "Username": will
- textbox "Password": will
- button "Log In" [disabled]
- text: © Supercharged by SuiteCRM © Powered By SugarCRM Back To Top
```

# Test source

```ts
  1  | require('dotenv').config();
  2  | const { test: setup, expect } = require('@playwright/test');
  3  | const path = require('path');
  4  | 
  5  | const authFile = path.join(__dirname, '../playwright/.auth/user.json');
  6  | 
  7  | setup('save authenticated state', async ({ page }) => {
  8  |   await page.goto(process.env.BASE_URL);
  9  | 
  10 |   await page.getByPlaceholder('Username').fill('will');
  11 |   await page.getByPlaceholder('Password').fill('will');
  12 |   await page.getByRole('button', { name: 'Log In' }).click();
  13 | 
> 14 |   await expect(page).not.toHaveURL(/#\/Login/);
     |                          ^ Error: expect(page).not.toHaveURL(expected) failed
  15 | 
  16 |   await page.context().storageState({ path: authFile });
  17 | });
```