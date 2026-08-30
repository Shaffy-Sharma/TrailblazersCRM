# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\features\Call.feature.spec.js >> Calls Management in SuiteCRM >> Create a Duplicate Call Entry
- Location: .features-gen\tests\features\Call.feature.spec.js:34:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Calls', { exact: true }).first()
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 30000ms
  - waiting for getByText('Calls', { exact: true }).first()
  - Test timeout of 30000ms exceeded.

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
    - /placeholder: ...
  - button "Search"
  - list:
    - listitem
- text: © Supercharged by SuiteCRM © Powered By SugarCRM Back To Top
```

# Test source

```ts
  1  | const { expect } = require('@playwright/test');
  2  | 
  3  | class CallsPage {
  4  |  constructor(page) {
  5  |   this.page = page;
  6  | 
  7  | this.frame = page.frameLocator('iframe').first();
  8  | 
  9  | this.subjectField = this.frame.locator('input[name="name"]').first();
  10 | 
  11 | this.saveButton = this.frame.locator('button[name="Save"], ' +'button[title="Save"], ' +'input[type="submit"][value="Save"], ' +
  12 |   'input[type="button"][value="Save"], ' +'[data-action="save"]').first();
  13 | 
  14 | this.callRecord = this.page.locator('table tbody tr, [data-testid*="call" i], .list-row').first();
  15 | 
  16 | this.requiredError = this.frame.getByText(/Missing required field/i).first();
  17 | }
  18 | 
  19 | async openCallsMenu() {
  20 |   const callsMenu = this.page.getByText('Calls', { exact: true }).first();
> 21 |   await expect(callsMenu).toBeVisible({ timeout: 30000 });
     |                           ^ Error: expect(locator).toBeVisible() failed
  22 |   await callsMenu.hover();
  23 | }
  24 |   
  25 | // SCENARIO 1 - Create a new Call record
  26 | 
  27 | async openLogCall() {
  28 |   await this.openCallsMenu();
  29 |   const createCall = this.page.locator('button, a, [role="button"]').filter({ hasText: /create|new call|log call/i }).first();
  30 |   await expect(createCall).toBeVisible({ timeout: 15000 });
  31 |   await createCall.click();
  32 | }
  33 | async expectEditView() {
  34 |   const editForm = this.page.locator('form, [role="dialog"], input[name="name"], input[name="subject"]').first();
  35 |   await expect(editForm).toBeVisible({ timeout: 30000 });
  36 | }
  37 | 
  38 | // SCENARIO 2 - VIEW CALLS
  39 |  
  40 | async openViewCalls() {
  41 |   await this.openCallsMenu();
  42 |   const viewCalls = this.page.getByText('View Calls', { exact: true }).first();
  43 |   await expect(viewCalls).toBeVisible({ timeout: 30000 });
  44 |   await viewCalls.click();
  45 | }
  46 | async expectListView() {
  47 |   await expect(this.page).toHaveURL(/#\/calls/i);
  48 |   await expect(this.page.locator('table').first()).toBeVisible({timeout: 30000});
  49 | }
  50 | 
  51 | // SCENARIO 3 - IMPORT CALLS
  52 | 
  53 | async openImportCalls() {
  54 |   await this.page.getByText('Calls', { exact: true }).first().click();
  55 |   const importCalls = this.page.getByText('Import Calls', { exact: true }).first();
  56 |   await expect(importCalls).toBeVisible({timeout: 30000});
  57 |   await importCalls.click();
  58 | }
  59 | async expectImportCalls() {
  60 |   const importCalls = this.page.locator('form, [role="dialog"], .call, .import-calls').first();
  61 |   await expect(importCalls).toBeVisible({timeout: 30000});
  62 | }
  63 |   
  64 | // SCENARIO 4 - Field Verification
  65 | 
  66 | async clearSubject() {
  67 |     await this.subjectField.fill('');
  68 | }
  69 | async saveCall() {
  70 |   await expect(this.saveButton).toBeVisible({ timeout: 15000 });
  71 |   await this.saveButton.click();
  72 | }
  73 | async expectRequiredError() {
  74 |   await expect(this.requiredError).toBeVisible({ timeout: 15000 });
  75 | }
  76 | 
  77 | // SCENARIO 5 - Create a Duplicate Call Entry
  78 |   
  79 | async openExistingCall() {
  80 |   const callLink = this.callRecord.locator('a').first();
  81 |   await expect(callLink).toBeVisible({ timeout: 30000 });
  82 |   await callLink.click();
  83 | }
  84 | async clickDuplicate() {
  85 |   const duplicate = this.frame.getByText('Duplicate', {exact: true}).first();
  86 |   await expect(duplicate).toBeVisible({ timeout: 30000 });
  87 |   await duplicate.click();
  88 | }
  89 | async expectDuplicateSaved() {
  90 |   await expect(this.subjectField).toBeVisible({ timeout: 15000 });
  91 |  }
  92 | }
  93 | module.exports = { CallsPage };
```