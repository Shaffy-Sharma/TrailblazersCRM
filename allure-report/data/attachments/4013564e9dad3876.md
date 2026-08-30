# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\features\Calendar.feature.spec.js >> Calendar Event Creation SuiteCRM >> Schedule a standard business meeting
- Location: .features-gen\tests\features\Calendar.feature.spec.js:10:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Calendar', { exact: true }).first()
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for getByText('Calendar', { exact: true }).first()
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
  3  | class CalendarPage {
  4  |   constructor(page) {
  5  |     this.page = page;
  6  |     this.frame = page.frameLocator('iframe').first();
  7  |     this.calendarLink = page.getByText('Calendar', { exact: true }).first();
  8  |     this.subjectField = this.frame.locator('input[name="name"], input[name="subject"], input[id*="subject" i]').first();
  9  |     this.saveButton = this.frame.getByRole('button', { name: /save/i }).first();
  10 |     this.deleteButton = this.frame.getByRole('button', { name: /delete/i }).last();
  11 | }
  12 | async openCalendar() {
> 13 |     await expect(this.calendarLink).toBeVisible({ timeout: 15000 });
     |                                     ^ Error: expect(locator).toBeVisible() failed
  14 |     await this.calendarLink.click();
  15 |     await expect(this.page.locator('iframe').first()).toBeVisible({timeout: 15000});
  16 |     await expect(this.frame.locator('body')).toBeVisible({timeout: 15000}); 
  17 | }
  18 | async selectBlankGrid() {
  19 |     const calendarCell = this.frame.locator('[data-date], [role="gridcell"], td, .fc-day, .fc-daygrid-day').first();
  20 |     await expect(calendarCell).toBeVisible({ timeout: 15000 });
  21 |     await calendarCell.click(); 
  22 |     await expect(this.subjectField).toBeVisible({ timeout: 15000 });
  23 | }
  24 | async saveEvent(subject = 'Business Meeting') {
  25 |     this.page.eventSubject = subject;
  26 |     await this.subjectField.fill(subject);
  27 |     await expect(this.saveButton).toBeVisible({ timeout: 15000 });
  28 |     await this.saveButton.click();
  29 | }
  30 | async expectEventCreated() {
  31 |     await expect(this.frame.getByText(this.page.eventSubject, { exact: true }).first()).toBeVisible({ timeout: 15000 });
  32 | }
  33 | async selectMeetingForDeletion(subject = 'Business Meeting') {
  34 |     const event = this.frame.getByText(subject, { exact: true }).first();
  35 |     await expect(event).toBeVisible({ timeout: 15000 });
  36 |     await event.click();
  37 | }
  38 | async clickDelete() {
  39 |     await expect(this.deleteButton).toBeVisible({ timeout: 15000 });
  40 |     await Promise.all([this.page.waitForEvent('dialog').then(async dialog => {
  41 |     this.page.deleteConfirmationMessage = dialog.message();
  42 |     await dialog.dismiss();
  43 | }),
  44 |     this.deleteButton.click()]);
  45 | }
  46 | async expectDeleteConfirmation() {
  47 |     expect(this.page.deleteConfirmationMessage).toContain('Are you sure you want to remove the record?');
  48 | }
  49 | async expectFormStillOpen() {
  50 |     await expect(this.subjectField).toBeVisible({ timeout: 15000 });
  51 | }
  52 | async saveEmptyEvent() {
  53 |     await this.saveButton.click();
  54 | }
  55 | async expectRequiredError() {
  56 |     await expect(this.frame.getByText(/Missing required field/i).first()).toBeVisible({ timeout: 15000 });
  57 | }
  58 | async saveEvent(subject = 'Business Meeting') {
  59 |     this.page.eventSubject = subject;
  60 |     await this.subjectField.fill(subject);
  61 |     await this.saveButton.click();
  62 | }
  63 | async holdEvent(subject = 'Business Meeting') {
  64 |     const event = this.frame.getByText(subject, { exact: true }).first();
  65 |     await expect(event).toBeVisible({ timeout: 15000 });
  66 |     await event.hover();
  67 | }
  68 | async dragEventToAnotherDay() {
  69 |     const event = this.frame.getByText(this.page.eventSubject || 'Business Meeting', { exact: true }).first();
  70 |     const targetDay = this.frame.locator('[data-date], [role="gridcell"]').nth(1);
  71 |     await event.dragTo(targetDay);
  72 | }
  73 | async expectEventMoved() {
  74 |     await expect(this.frame.getByText(this.page.eventSubject || 'Business Meeting', {exact: true}).first()).toBeVisible();
  75 |  }
  76 | }   
  77 | module.exports = { CalendarPage };
```