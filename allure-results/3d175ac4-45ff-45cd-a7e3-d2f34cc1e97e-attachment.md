# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\features\login.feature.spec.js >> Login >> Login with valid username and password >> Example #1
- Location: .features-gen\tests\features\login.feature.spec.js:12:9

# Error details

```
Error: expect(page).not.toHaveURL(expected) failed

Expected pattern: not /login/i
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
  - list:
    - listitem: Accounts
    - listitem: Contacts
    - listitem: Opportunities
    - listitem: Leads
    - listitem: Quotes
    - listitem: Calendar
    - listitem: Documents
  - list:
    - listitem: More
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
  1  | const { createBdd } = require('playwright-bdd');
  2  | const { expect } = require('@playwright/test');
  3  | 
  4  | const { Given, When, Then } = createBdd();
  5  | 
  6  | const LoginPage = require('../pages/LoginPage.js');
  7  | 
  8  | 
  9  | Given('user launch browser and enter url', async function ({ page }) {
  10 |   // Browser is already launched and navigated to the base URL
  11 |   // by the Before hook in hooks/hooks.js
  12 |   expect(page).toBeTruthy();
  13 | });
  14 | 
  15 | Given('user is on login page', async function ({ page }) {
  16 |   await expect(page).toHaveURL(/suiteondemand\.com/);
  17 | });
  18 | 
  19 | When('user enters username {string} and password {string}', async function ({ page }, username, password) {
  20 |   const loginPage = new LoginPage(page);
  21 |   await loginPage.login(username, password);
  22 | });
  23 | 
  24 | Then('user should be logged in successfully', async function ({ page }) {
> 25 |   await expect(page).not.toHaveURL(/login/i);
     |                          ^ Error: expect(page).not.toHaveURL(expected) failed
  26 | });
```