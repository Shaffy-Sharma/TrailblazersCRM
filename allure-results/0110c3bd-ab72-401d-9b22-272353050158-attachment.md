# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\features\Calendar.feature.spec.js >> Calendar Event Creation SuiteCRM >> Cross-day drag and drop
- Location: .features-gen\tests\features\Calendar.feature.spec.js:28:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('iframe').first().contentFrame().getByRole('button', { name: /save/i }).first()
    - locator resolved to <button id="btn-save" type="button" class="button">Save</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - element is outside of the viewport
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - element is outside of the viewport
    - retrying click action
      - waiting 100ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - element is outside of the viewport
    - retrying click action
      - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is not stable
  7 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is not visible
  3 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - element is outside of the viewport
  5 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is not visible
  2 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is not stable
  2 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - element is outside of the viewport
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is not stable
  5 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
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
            - generic [ref=f1e20]: Calendar
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
    - iframe [active] [ref=f1e130]:
      - generic [active] [ref=f6e1]:
        - generic [ref=f6e4]:
          - heading "Calendar" [level=2] [ref=f6e6]
          - generic [ref=f6e7]:
            - button "Day" [ref=f6e8] [cursor=pointer]
            - button "Week" [ref=f6e9] [cursor=pointer]
            - button "Month" [ref=f6e10] [cursor=pointer]
            - button "Shared Month" [ref=f6e11] [cursor=pointer]
            - button "Shared Week" [ref=f6e12] [cursor=pointer]
          - generic [ref=f6e13]:
            - button "" [ref=f6e14] [cursor=pointer]
            - button "Settings" [ref=f6e17] [cursor=pointer]
          - generic [ref=f6e18]:
            - link [ref=f6e20] [cursor=pointer]:
              - /url: ../#/calendar/index?view=agendaWeek&year=2026&month=8&day=23&hour=0
            - heading "2026 August 30 - 2026 September 5" [level=3] [ref=f6e27]
            - link [ref=f6e29] [cursor=pointer]:
              - /url: ../#/calendar/index?view=agendaWeek&year=2026&month=9&day=6&hour=0
          - text: −            − −
          - generic [ref=f6e37]:
            - heading "Will Westin" [level=5] [ref=f6e39]
            - table [ref=f6e41]:
              - rowgroup [ref=f6e42]:
                - row [ref=f6e43]:
                  - cell [ref=f6e44]:
                    - table [ref=f6e46]:
                      - rowgroup [ref=f6e47]:
                        - row [ref=f6e48]:
                          - columnheader [ref=f6e49]
                          - columnheader "Sunday 30" [ref=f6e50]
                          - columnheader "Monday 31" [ref=f6e51]
                          - columnheader "Tuesday 1" [ref=f6e52]
                          - columnheader "Wednesday 2" [ref=f6e53]
                          - columnheader "Thursday 3" [ref=f6e54]
                          - columnheader "Friday 4" [ref=f6e55]
                          - columnheader "Saturday 5" [ref=f6e56]
              - rowgroup [ref=f6e57]:
                - row [ref=f6e58]:
                  - cell "all-day 8am 9am 10am 11am 12pm 1pm 2pm 3pm 4pm 5pm 6pm 6:45 - Get demo feedback Will Westin 11:00 - 7:00 Business Meeting Will Westin 8:00 - 11:30 Business Meeting Will Westin 12:00 - Business Meeting Will Westin 1:45 Assemble catalogs Will Westin" [ref=f6e59]:
                    - generic [ref=f6e61]:
                      - table [ref=f6e63]:
                        - rowgroup [ref=f6e64]:
                          - row [ref=f6e65]:
                            - cell "all-day" [ref=f6e66]
                            - cell [ref=f6e67]
                            - cell [ref=f6e68]
                            - cell [ref=f6e69]
                            - cell [ref=f6e70]
                            - cell [ref=f6e71]
                            - cell [ref=f6e72]
                            - cell [ref=f6e73]
                      - generic [ref=f6e74]:
                        - table:
                          - rowgroup:
                            - row:
                              - cell
                              - cell
                              - cell
                              - cell
                              - cell
                              - cell
                              - cell
                              - cell
                    - separator [ref=f6e75]
                    - generic [ref=f6e77]:
                      - table [ref=f6e79]:
                        - rowgroup [ref=f6e80]:
                          - row [ref=f6e81]:
                            - cell [ref=f6e82]
                            - cell [ref=f6e83]
                            - cell [ref=f6e84]
                            - cell [ref=f6e85]
                            - cell [ref=f6e86]
                            - cell [ref=f6e87]
                            - cell [ref=f6e88]
                            - cell [ref=f6e89]
                      - table [ref=f6e91]:
                        - rowgroup [ref=f6e92]:
                          - row [ref=f6e93]:
                            - cell "8am" [ref=f6e94]
                            - cell [ref=f6e95]
                          - row [ref=f6e96]:
                            - cell [ref=f6e97]
                            - cell [ref=f6e98]
                          - row [ref=f6e99]:
                            - cell "9am" [ref=f6e100]
                            - cell [ref=f6e101]
                          - row [ref=f6e102]:
                            - cell [ref=f6e103]
                            - cell [ref=f6e104]
                          - row [ref=f6e105]:
                            - cell "10am" [ref=f6e106]
                            - cell [ref=f6e107]
                          - row [ref=f6e108]:
                            - cell [ref=f6e109]
                            - cell [ref=f6e110]
                          - row [ref=f6e111]:
                            - cell "11am" [ref=f6e112]
                            - cell [ref=f6e113]
                          - row [ref=f6e114]:
                            - cell [ref=f6e115]
                            - cell [ref=f6e116]
                          - row [ref=f6e117]:
                            - cell "12pm" [ref=f6e118]
                            - cell [ref=f6e119]
                          - row [ref=f6e120]:
                            - cell [ref=f6e121]
                            - cell [ref=f6e122]
                          - row [ref=f6e123]:
                            - cell "1pm" [ref=f6e124]
                            - cell [ref=f6e125]
                          - row [ref=f6e126]:
                            - cell [ref=f6e127]
                            - cell [ref=f6e128]
                          - row [ref=f6e129]:
                            - cell "2pm" [ref=f6e130]
                            - cell [ref=f6e131]
                          - row [ref=f6e132]:
                            - cell [ref=f6e133]
                            - cell [ref=f6e134]
                          - row [ref=f6e135]:
                            - cell "3pm" [ref=f6e136]
                            - cell [ref=f6e137]
                          - row [ref=f6e138]:
                            - cell [ref=f6e139]
                            - cell [ref=f6e140]
                          - row [ref=f6e141]:
                            - cell "4pm" [ref=f6e142]
                            - cell [ref=f6e143]
                          - row [ref=f6e144]:
                            - cell [ref=f6e145]
                            - cell [ref=f6e146]
                          - row [ref=f6e147]:
                            - cell "5pm" [ref=f6e148]
                            - cell [ref=f6e149]
                          - row [ref=f6e150]:
                            - cell [ref=f6e151]
                            - cell [ref=f6e152]
                          - row [ref=f6e153]:
                            - cell "6pm" [ref=f6e154]
                            - cell [ref=f6e155]
                          - row [ref=f6e156]:
                            - cell [ref=f6e157]
                            - cell [ref=f6e158]
                      - generic:
                        - table:
                          - rowgroup:
                            - row "6:45 - Get demo feedback Will Westin 11:00 - 7:00 Business Meeting Will Westin 8:00 - 11:30 Business Meeting Will Westin 12:00 - Business Meeting Will Westin 1:45 Assemble catalogs Will Westin":
                              - cell
                              - cell
                              - cell
                              - cell "6:45 - Get demo feedback Will Westin":
                                - generic [ref=f6e160]:
                                  - generic [ref=f6e161]: 6:45 -
                                  - generic [ref=f6e162]: Get demo feedback Will Westin
                              - cell
                              - cell "11:00 - 7:00 Business Meeting Will Westin":
                                - generic [ref=f6e165] [cursor=pointer]:
                                  - generic [ref=f6e166]: 11:00 - 7:00
                                  - generic [ref=f6e167]: Business Meeting Will Westin
                              - cell "8:00 - 11:30 Business Meeting Will Westin 12:00 - Business Meeting Will Westin 1:45 Assemble catalogs Will Westin":
                                - generic:
                                  - generic:
                                    - generic [ref=f6e170] [cursor=pointer]:
                                      - generic [ref=f6e171]: 8:00 - 11:30
                                      - generic [ref=f6e172]: Business Meeting Will Westin
                                    - generic [ref=f6e175] [cursor=pointer]:
                                      - generic [ref=f6e176]: 12:00 -
                                      - generic [ref=f6e177]: Business Meeting Will Westin
                                    - generic [ref=f6e180]:
                                      - generic [ref=f6e181]: 1:45
                                      - generic [ref=f6e182]: Assemble catalogs Will Westin
                              - cell
        - text:  ✏  ✏  ✏  ✏  ✏  ✏  ✏  ✏
  - generic [ref=f1e132]:
    - generic [ref=f1e133]: © Supercharged by SuiteCRM © Powered By SugarCRM
    - generic [ref=f1e134]: Back To Top
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
  13 |     await expect(this.calendarLink).toBeVisible({ timeout: 15000 });
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
> 61 |     await this.saveButton.click();
     |                           ^ Error: locator.click: Test timeout of 30000ms exceeded.
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