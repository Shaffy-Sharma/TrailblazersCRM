# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\features\Call.feature.spec.js >> Calls Management in SuiteCRM >> Launch structural Import Wizard - Import Calls
- Location: .features-gen\tests\features\Call.feature.spec.js:22:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText('Calls', { exact: true }).first()
    - locator resolved to <span class="ng-star-inserted">Calls</span>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
  - element was detached from the DOM, retrying
    - locator resolved to <span class="ng-star-inserted">Calls</span>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    4 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=f1e2]:
  - generic [ref=f1e3]:
    - navigation [ref=f1e5]:
      - generic [ref=f1e6]:
        - list [ref=f1e9]:
          - listitem [ref=f1e10]:
            - link [ref=f1e11] [cursor=pointer]:
              - /url: "#/home"
        - list [ref=f1e18]:
          - listitem [ref=f1e19]:
            - generic [ref=f1e20]: Accounts
          - listitem [ref=f1e27]:
            - generic [ref=f1e28]: Contacts
          - listitem [ref=f1e35]:
            - generic [ref=f1e36]: Opportunities
          - listitem [ref=f1e43]:
            - generic [ref=f1e44]: Leads
          - listitem [ref=f1e51]:
            - generic [ref=f1e52]: Quotes
          - listitem [ref=f1e59]:
            - generic [ref=f1e60]: Calendar
          - listitem [ref=f1e67]:
            - generic [ref=f1e68]: Documents
        - list [ref=f1e77]:
          - listitem [ref=f1e78]:
            - generic [ref=f1e79]: More
      - generic [ref=f1e81]:
        - list [ref=f1e83]:
          - listitem [ref=f1e84]:
            - generic "Quick Create" [ref=f1e85] [cursor=pointer]
        - list [ref=f1e92]:
          - listitem [ref=f1e93]:
            - generic "Recently Viewed" [ref=f1e94] [cursor=pointer]
        - generic [ref=f1e104]:
          - textbox "Search" [ref=f1e105]:
            - /placeholder: Search...
          - button "Search" [ref=f1e107] [cursor=pointer]
      - list [ref=f1e117]:
        - listitem [ref=f1e118]
    - iframe [ref=f1e130]:
      
  - generic [ref=f1e132]:
    - generic [ref=f1e133]: © Supercharged by SuiteCRM © Powered By SugarCRM
    - generic [ref=f1e134]: Back To Top
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
  21 |   await expect(callsMenu).toBeVisible({ timeout: 30000 });
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
> 54 |   await this.page.getByText('Calls', { exact: true }).first().click();
     |                                                               ^ Error: locator.click: Test timeout of 30000ms exceeded.
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