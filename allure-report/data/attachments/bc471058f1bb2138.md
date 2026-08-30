# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\features\Calendar.feature.spec.js >> Calendar Event Creation SuiteCRM >> Cross-day drag and drop
- Location: .features-gen\tests\features\Calendar.feature.spec.js:28:7

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

# Test source

```ts
  1  | // Generated from: tests\features\Calendar.feature
  2  | import { test } from "playwright-bdd";
  3  | 
  4  | test.describe('Calendar Event Creation SuiteCRM', () => {
  5  | 
  6  |   test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
  7  |     await Given('the user is logged into the SuiteCRM dashboard', null, { page }); 
  8  |   });
  9  |   
  10 |   test('Schedule a standard business meeting', async ({ Given, When, Then, page }) => { 
  11 |     await Given('the user is on the Calendar view', null, { page }); 
  12 |     await When('the user selects directly a blank grid to enter the Subject Field', null, { page }); 
  13 |     await Then('the calendar grid event appears with an "Event Created" alert', null, { page }); 
  14 |   });
  15 | 
  16 |   test('Cancel meeting deletion', async ({ Given, When, Then, page }) => { 
  17 |     await Given('the user has selected a meeting for deletion', null, { page }); 
  18 |     await When('the user selects the delete action', null, { page }); 
  19 |     await Then('the error appears "Are you sure you want to remove the record?"', null, { page }); 
  20 |   });
  21 | 
  22 |   test('Missing Mandatory Fields', async ({ Given, When, Then, page }) => { 
  23 |     await Given('the user opens a fresh calendar creation form', null, { page }); 
  24 |     await When('the user empty the "Subject Field" the primary save form trigger', null, { page }); 
  25 |     await Then('the form open,shows a validation error highlights the "Missing required field"', null, { page }); 
  26 |   });
  27 | 
  28 |   test('Cross-day drag and drop', async ({ Given, When, Then, page }) => { 
  29 |     await Given('the user holds an event node', null, { page }); 
  30 |     await When('the user drags it to the same time slot on another day', null, { page }); 
  31 |     await Then('the event moves to the new time slot', null, { page }); 
  32 |   });
  33 | 
  34 | });
  35 | 
  36 | // == technical section ==
  37 | 
> 38 | test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
     |      ^ Test timeout of 30000ms exceeded while running "beforeEach" hook.
  39 | 
  40 | test.use({
  41 |   $test: [({}, use) => use(test), { scope: 'test', box: true }],
  42 |   $uri: [({}, use) => use('tests\\features\\Calendar.feature'), { scope: 'test', box: true }],
  43 |   $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
  44 | });
  45 | 
  46 | const bddFileData = [ // bdd-data-start
  47 |   {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuiteCRM dashboard","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given the user is on the Calendar view","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When the user selects directly a blank grid to enter the Subject Field","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then the calendar grid event appears with an \"Event Created\" alert","stepMatchArguments":[]}]},
  48 |   {"pwTestLine":16,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuiteCRM dashboard","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given the user has selected a meeting for deletion","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When the user selects the delete action","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then the error appears \"Are you sure you want to remove the record?\"","stepMatchArguments":[]}]},
  49 |   {"pwTestLine":22,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuiteCRM dashboard","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given the user opens a fresh calendar creation form","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When the user empty the \"Subject Field\" the primary save form trigger","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then the form open,shows a validation error highlights the \"Missing required field\"","stepMatchArguments":[]}]},
  50 |   {"pwTestLine":28,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuiteCRM dashboard","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given the user holds an event node","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When the user drags it to the same time slot on another day","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then the event moves to the new time slot","stepMatchArguments":[]}]},
  51 | ]; // bdd-data-end
```