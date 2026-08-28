# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\features\Call.feature.spec.js >> Calls Management in SuiteCRM >> Field Verification
- Location: .features-gen\tests\features\Call.feature.spec.js:28:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('iframe').first().contentFrame().locator('input[name="name"]').first()

```

# Page snapshot

```yaml
- generic [ref=f1e2]:
  - generic [ref=f1e3]:
    - navigation [ref=f1e25]:
      - generic [ref=f1e26]:
        - list [ref=f1e29]:
          - listitem [ref=f1e30]:
            - link [ref=f1e31] [cursor=pointer]:
              - /url: "#/home"
        - list [ref=f1e38]:
          - listitem [ref=f1e39]:
            - generic [ref=f1e40]: Calls
          - listitem [ref=f1e47]:
            - generic [ref=f1e48]: Accounts
          - listitem [ref=f1e55]:
            - generic [ref=f1e56]: Contacts
          - listitem [ref=f1e63]:
            - generic [ref=f1e64]: Opportunities
          - listitem [ref=f1e71]:
            - generic [ref=f1e72]: Leads
          - listitem [ref=f1e79]:
            - generic [ref=f1e80]: Quotes
          - listitem [ref=f1e87]:
            - generic [ref=f1e88]: Calendar
          - listitem [ref=f1e95]:
            - generic [ref=f1e96]: Documents
        - list [ref=f1e105]:
          - listitem [ref=f1e106]:
            - generic [ref=f1e107]: More
      - generic [ref=f1e109]:
        - list [ref=f1e111]:
          - listitem [ref=f1e112]:
            - generic "Quick Create" [ref=f1e113] [cursor=pointer]
        - list [ref=f1e120]:
          - listitem [ref=f1e121]:
            - generic "Recently Viewed" [ref=f1e122] [cursor=pointer]
        - generic [ref=f1e132]:
          - textbox "Search" [ref=f1e133]:
            - /placeholder: Search...
          - button "Search" [ref=f1e135] [cursor=pointer]
      - list [ref=f1e145]:
        - listitem [ref=f1e146]
    - generic [ref=f1e157]:
      - generic [ref=f1e159]:
        - generic [ref=f1e160]:
          - generic [ref=f1e161]: CALLS
          - group [ref=f1e170]:
            - button "Filter" [ref=f1e172] [cursor=pointer]
        - separator [ref=f1e174]
      - generic [ref=f1e180]:
        - generic [ref=f1e183]:
          - generic [ref=f1e184]:
            - generic [ref=f1e186]:
              - button [ref=f1e188] [cursor=pointer]
              - button "Bulk Action" [disabled] [ref=f1e193] [cursor=pointer]
            - button "Columns" [ref=f1e200] [cursor=pointer]:
              - generic "Columns" [ref=f1e202]
          - generic [ref=f1e214]:
            - button "Navigate to first page" [ref=f1e215] [cursor=pointer]
            - button "Previous page" [ref=f1e221] [cursor=pointer]
            - text: (0 - 0 of 0)
            - button "Next page" [ref=f1e227] [cursor=pointer]
            - button "Navigate to last page" [ref=f1e233] [cursor=pointer]
        - table [ref=f1e242]:
          - rowgroup [ref=f1e243]:
            - row [ref=f1e244]:
              - columnheader [ref=f1e245]
              - columnheader "Direction" [ref=f1e246]:
                - generic [ref=f1e249] [cursor=pointer]
              - columnheader "Subject" [ref=f1e256]:
                - generic [ref=f1e259] [cursor=pointer]
              - columnheader "Contact" [ref=f1e266]:
                - generic [ref=f1e269] [cursor=pointer]
              - columnheader "Related to" [ref=f1e276]
              - columnheader "Start Date" [ref=f1e278]:
                - generic [ref=f1e281] [cursor=pointer]
              - columnheader "Assigned to" [ref=f1e288]:
                - generic [ref=f1e291] [cursor=pointer]
              - columnheader "Date Created" [ref=f1e298]:
                - generic [ref=f1e301] [cursor=pointer]
          - rowgroup [ref=f1e308]:
            - row [ref=f1e309]:
              - cell [ref=f1e310]
              - cell [ref=f1e312]
              - cell [ref=f1e314]
              - cell [ref=f1e316]
              - cell [ref=f1e318]
              - cell [ref=f1e320]
              - cell [ref=f1e322]
              - cell [ref=f1e324]
            - row [ref=f1e326]:
              - cell [ref=f1e327]
              - cell [ref=f1e329]
              - cell [ref=f1e331]
              - cell [ref=f1e333]
              - cell [ref=f1e335]
              - cell [ref=f1e337]
              - cell [ref=f1e339]
              - cell [ref=f1e341]
            - row [ref=f1e343]:
              - cell [ref=f1e344]
              - cell [ref=f1e346]
              - cell [ref=f1e348]
              - cell [ref=f1e350]
              - cell [ref=f1e352]
              - cell [ref=f1e354]
              - cell [ref=f1e356]
              - cell [ref=f1e358]
            - row [ref=f1e360]:
              - cell [ref=f1e361]
              - cell [ref=f1e363]
              - cell [ref=f1e365]
              - cell [ref=f1e367]
              - cell [ref=f1e369]
              - cell [ref=f1e371]
              - cell [ref=f1e373]
              - cell [ref=f1e375]
            - row [ref=f1e377]:
              - cell [ref=f1e378]
              - cell [ref=f1e380]
              - cell [ref=f1e382]
              - cell [ref=f1e384]
              - cell [ref=f1e386]
              - cell [ref=f1e388]
              - cell [ref=f1e390]
              - cell [ref=f1e392]
            - row [ref=f1e394]:
              - cell [ref=f1e395]
              - cell [ref=f1e397]
              - cell [ref=f1e399]
              - cell [ref=f1e401]
              - cell [ref=f1e403]
              - cell [ref=f1e405]
              - cell [ref=f1e407]
              - cell [ref=f1e409]
            - row [ref=f1e411]:
              - cell [ref=f1e412]
              - cell [ref=f1e414]
              - cell [ref=f1e416]
              - cell [ref=f1e418]
              - cell [ref=f1e420]
              - cell [ref=f1e422]
              - cell [ref=f1e424]
              - cell [ref=f1e426]
            - row [ref=f1e428]:
              - cell [ref=f1e429]
              - cell [ref=f1e431]
              - cell [ref=f1e433]
              - cell [ref=f1e435]
              - cell [ref=f1e437]
              - cell [ref=f1e439]
              - cell [ref=f1e441]
              - cell [ref=f1e443]
            - row [ref=f1e445]:
              - cell [ref=f1e446]
              - cell [ref=f1e448]
              - cell [ref=f1e450]
              - cell [ref=f1e452]
              - cell [ref=f1e454]
              - cell [ref=f1e456]
              - cell [ref=f1e458]
              - cell [ref=f1e460]
            - row [ref=f1e462]:
              - cell [ref=f1e463]
              - cell [ref=f1e465]
              - cell [ref=f1e467]
              - cell [ref=f1e469]
              - cell [ref=f1e471]
              - cell [ref=f1e473]
              - cell [ref=f1e475]
              - cell [ref=f1e477]
            - row [ref=f1e479]:
              - cell [ref=f1e480]
              - cell [ref=f1e482]
              - cell [ref=f1e484]
              - cell [ref=f1e486]
              - cell [ref=f1e488]
              - cell [ref=f1e490]
              - cell [ref=f1e492]
              - cell [ref=f1e494]
            - row [ref=f1e496]:
              - cell [ref=f1e497]
              - cell [ref=f1e499]
              - cell [ref=f1e501]
              - cell [ref=f1e503]
              - cell [ref=f1e505]
              - cell [ref=f1e507]
              - cell [ref=f1e509]
              - cell [ref=f1e511]
            - row [ref=f1e513]:
              - cell [ref=f1e514]
              - cell [ref=f1e516]
              - cell [ref=f1e518]
              - cell [ref=f1e520]
              - cell [ref=f1e522]
              - cell [ref=f1e524]
              - cell [ref=f1e526]
              - cell [ref=f1e528]
            - row [ref=f1e530]:
              - cell [ref=f1e531]
              - cell [ref=f1e533]
              - cell [ref=f1e535]
              - cell [ref=f1e537]
              - cell [ref=f1e539]
              - cell [ref=f1e541]
              - cell [ref=f1e543]
              - cell [ref=f1e545]
            - row [ref=f1e547]:
              - cell [ref=f1e548]
              - cell [ref=f1e550]
              - cell [ref=f1e552]
              - cell [ref=f1e554]
              - cell [ref=f1e556]
              - cell [ref=f1e558]
              - cell [ref=f1e560]
              - cell [ref=f1e562]
            - row [ref=f1e564]:
              - cell [ref=f1e565]
              - cell [ref=f1e567]
              - cell [ref=f1e569]
              - cell [ref=f1e571]
              - cell [ref=f1e573]
              - cell [ref=f1e575]
              - cell [ref=f1e577]
              - cell [ref=f1e579]
            - row [ref=f1e581]:
              - cell [ref=f1e582]
              - cell [ref=f1e584]
              - cell [ref=f1e586]
              - cell [ref=f1e588]
              - cell [ref=f1e590]
              - cell [ref=f1e592]
              - cell [ref=f1e594]
              - cell [ref=f1e596]
            - row [ref=f1e598]:
              - cell [ref=f1e599]
              - cell [ref=f1e601]
              - cell [ref=f1e603]
              - cell [ref=f1e605]
              - cell [ref=f1e607]
              - cell [ref=f1e609]
              - cell [ref=f1e611]
              - cell [ref=f1e613]
            - row [ref=f1e615]:
              - cell [ref=f1e616]
              - cell [ref=f1e618]
              - cell [ref=f1e620]
              - cell [ref=f1e622]
              - cell [ref=f1e624]
              - cell [ref=f1e626]
              - cell [ref=f1e628]
              - cell [ref=f1e630]
            - row [ref=f1e632]:
              - cell [ref=f1e633]
              - cell [ref=f1e635]
              - cell [ref=f1e637]
              - cell [ref=f1e639]
              - cell [ref=f1e641]
              - cell [ref=f1e643]
              - cell [ref=f1e645]
              - cell [ref=f1e647]
        - generic [ref=f1e651]:
          - generic [ref=f1e652]:
            - generic [ref=f1e654]:
              - button [ref=f1e656] [cursor=pointer]
              - button "Bulk Action" [disabled] [ref=f1e661] [cursor=pointer]
            - button "Columns" [ref=f1e668] [cursor=pointer]:
              - generic "Columns" [ref=f1e670]
          - generic [ref=f1e682]:
            - button "Navigate to first page" [ref=f1e683] [cursor=pointer]
            - button "Previous page" [ref=f1e689] [cursor=pointer]
            - text: (0 - 0 of 0)
            - button "Next page" [ref=f1e695] [cursor=pointer]
            - button "Navigate to last page" [ref=f1e701] [cursor=pointer]
  - generic [ref=f1e708]:
    - generic [ref=f1e709]: © Supercharged by SuiteCRM © Powered By SugarCRM
    - generic [ref=f1e710]: Back To Top
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
> 67 |     await this.subjectField.fill('');
     |                             ^ Error: locator.fill: Test timeout of 30000ms exceeded.
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