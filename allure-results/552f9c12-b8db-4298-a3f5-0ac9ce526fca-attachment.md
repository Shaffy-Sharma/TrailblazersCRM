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

Locator:  locator('iframe').first().contentFrame().getByText('Duplicate', { exact: true }).first()
Expected: visible
Received: hidden

Call log:
  - Expect "toBeVisible" with timeout 30000ms
  - waiting for locator('iframe').first().contentFrame().getByText('Duplicate', { exact: true }).first()
    2 × locator resolved to <input accesskey="u" type="button" class="button" name="Duplicate" title="Duplicate" value="Duplicate" id="duplicate_button" onclick="window.location.href='index.php?module=Calls&action=EditView&record=21786f9d-5545-4a42-9676-3931da4a47c0&return_module=Calls&return_action=DetailView&return_id=21786f9d-5545-4a42-9676-3931da4a47c0&isDuplicate=true'"/>
      - unexpected value "hidden"
  - Test timeout of 30000ms exceeded.

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
            - generic [ref=f1e20]: Calls
          - listitem [ref=f1e27]:
            - generic [ref=f1e28]: Accounts
          - listitem [ref=f1e35]:
            - generic [ref=f1e36]: Contacts
          - listitem [ref=f1e43]:
            - generic [ref=f1e44]: Opportunities
          - listitem [ref=f1e51]:
            - generic [ref=f1e52]: Leads
          - listitem [ref=f1e59]:
            - generic [ref=f1e60]: Quotes
          - listitem [ref=f1e67]:
            - generic [ref=f1e68]: Calendar
          - listitem [ref=f1e75]:
            - generic [ref=f1e76]: Documents
        - list [ref=f1e85]:
          - listitem [ref=f1e86]:
            - generic [ref=f1e87]: More
      - generic [ref=f1e89]:
        - list [ref=f1e91]:
          - listitem [ref=f1e92]:
            - generic "Quick Create" [ref=f1e93] [cursor=pointer]
        - list [ref=f1e100]:
          - listitem [ref=f1e101]:
            - generic "Recently Viewed" [ref=f1e102] [cursor=pointer]
        - generic [ref=f1e112]:
          - textbox "Search" [ref=f1e113]:
            - /placeholder: Search...
          - button "Search" [ref=f1e115] [cursor=pointer]
      - list [ref=f1e125]:
        - listitem [ref=f1e126]
    - iframe [ref=f1e138]:
      - generic [ref=f7e4]:
        - generic [ref=f7e5]: Calls
        - generic [ref=f7e6]:
          - heading "Left a message" [level=2] [ref=f7e7]
          - generic [ref=f7e8]:
            - generic "Mark as favorite" [ref=f7e9]: 
            - text: 
        - table [ref=f7e12]:
          - rowgroup [ref=f7e13]:
            - row [ref=f7e14]:
              - cell [ref=f7e15]
              - cell [ref=f7e16]
        - generic [ref=f7e17]:
          - text: 
          - list [ref=f7e18]:
            - generic [ref=f7e19] [cursor=pointer]: OVERVIEW
            - generic [ref=f7e20] [cursor=pointer]: Reschedule
            - generic [ref=f7e21] [cursor=pointer]: OTHER
            - listitem [ref=f7e22]:
              - link "ACTIONS" [ref=f7e23] [cursor=pointer]:
                - /url: "#"
                - text: ACTIONS
                - generic [ref=f7e24]: 
            - listitem [ref=f7e25]:
              - table [ref=f7e26]:
                - rowgroup [ref=f7e27]:
                  - row [ref=f7e28]:
                    - cell " Previous (1 of 7) Next" [ref=f7e29]:
                      - generic [ref=f7e30]:
                        - generic "Previous" [ref=f7e31] [cursor=pointer]:  Previous
                        - text: (1 of 7)
                        - link "Next" [ref=f7e32] [cursor=pointer]:
                          - /url: ../#/calls/record/dca6f867-8f3b-49b0-9176-203485562e73?offset=2
          - generic [ref=f7e34]:
            - generic [ref=f7e35]:
              - generic [ref=f7e36]:
                - generic [ref=f7e37]: "Subject:"
                - generic [ref=f7e38] [cursor=pointer]: Left a message
              - generic [ref=f7e49]:
                - generic [ref=f7e50]: "Status:"
                - generic [ref=f7e51] [cursor=pointer]: Outbound Planned
            - generic [ref=f7e62]:
              - generic [ref=f7e63]:
                - generic [ref=f7e64]: "Start Date & Time:"
                - generic [ref=f7e65] [cursor=pointer]: 2027-03-28 09:15
              - generic [ref=f7e76]:
                - generic [ref=f7e77]: Accounts
                - link "5D Investments" [ref=f7e79] [cursor=pointer]:
                  - /url: ../#/accounts/record/fd8b99cf-85d3-4dfa-8a29-4dd3144f8fed
            - generic [ref=f7e89]:
              - generic [ref=f7e90]:
                - generic [ref=f7e91]: "Duration:"
                - generic [ref=f7e92] [cursor=pointer]: 0h 30m
              - generic [ref=f7e103]:
                - generic [ref=f7e104]: "Reminders:"
                - generic [ref=f7e106] [cursor=pointer]:
                  - generic:
                    - list
            - generic [ref=f7e117]:
              - generic [ref=f7e118]: "Description:"
              - generic [ref=f7e119] [cursor=pointer]
            - generic [ref=f7e131]:
              - generic [ref=f7e132]: "Assigned to:"
              - generic [ref=f7e133] [cursor=pointer]: Chris Olliver
        - list [ref=f7e144]:
          - listitem [ref=f7e145]:
            - button "+  Contacts" [ref=f7e148] [cursor=pointer]:
              - text: +
              - generic [ref=f7e150]:
                - generic [ref=f7e151]: 
                - text: Contacts
          - listitem [ref=f7e152]:
            - button "+  Users" [ref=f7e155] [cursor=pointer]:
              - text: +
              - generic [ref=f7e157]:
                - generic [ref=f7e158]: 
                - text: Users
          - listitem [ref=f7e159]:
            - button "+  Leads" [ref=f7e162] [cursor=pointer]:
              - text: +
              - generic [ref=f7e164]:
                - generic [ref=f7e165]: 
                - text: Leads
          - listitem [ref=f7e166]:
            - button "+  Notes" [ref=f7e169] [cursor=pointer]:
              - text: +
              - generic [ref=f7e171]:
                - generic [ref=f7e172]: 
                - text: Notes
          - listitem [ref=f7e173]:
            - button "+  Security Groups" [ref=f7e176] [cursor=pointer]:
              - text: +
              - generic [ref=f7e178]:
                - generic [ref=f7e179]: 
                - text: Security Groups
  - generic [ref=f1e140]:
    - generic [ref=f1e141]: © Supercharged by SuiteCRM © Powered By SugarCRM
    - generic [ref=f1e142]: Back To Top
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
> 86 |   await expect(duplicate).toBeVisible({ timeout: 30000 });
     |                           ^ Error: expect(locator).toBeVisible() failed
  87 |   await duplicate.click();
  88 | }
  89 | async expectDuplicateSaved() {
  90 |   await expect(this.subjectField).toBeVisible({ timeout: 15000 });
  91 |  }
  92 | }
  93 | module.exports = { CallsPage };
```