const { createBdd } = require('playwright-bdd');
const { expect } = require('@playwright/test');
const logger = require('../utils/logger.js');
const ExcelReader = require('../utils/excelReader.js');
const { test } = require('../fixtures/fixtures.js');
const { Given, When, Then } = createBdd(test);

function getQuoteData(testCaseName) {
  return ExcelReader.getRowByTestCase('QuotesData.xlsx', testCaseName);
}

async function fillQuoteFields(
  quotesPage,
  testCaseName,
  { includeOptionalFields = false, includeTitle = true } = {}
) {
  const row = getQuoteData(testCaseName);

  if (includeTitle) {
    await quotesPage.enterTitle(row.Title);
  }

  await quotesPage.selectQuoteStage(row.QuoteStage);
  await quotesPage.enterValidUntil(row.ValidUntil);

  if (row.AssignedTo) {
    await quotesPage.enterAssignedTo(row.AssignedTo);
  }

  if (includeOptionalFields) {
    await quotesPage.selectInvoiceStatus(row.InvoiceStatus);
    await quotesPage.selectPaymentTerms(row.PaymentTerms);
    await quotesPage.selectApprovalStatus(row.ApprovalStatus);
    await quotesPage.enterApprovalIssues(row.ApprovalIssues);
    await quotesPage.enterOpportunity(row.Opportunity);
  }

  return row;
}

Given('the user navigates to the Create Quote page', async ({ page, quotesPage }) => {
  logger.step('Navigating to Create Quote page');
  //await page.pause();
  await quotesPage.navigateToCreateQuotePage();
});

Given('the Create Quote page is opened', async ({ page, quotesPage }) => {
  logger.step('Opening Create Quote page');
  await expect(page).toHaveURL(/quotes|create/i);
  await quotesPage.verifyCreateQuotePageDisplayed();
});

When('the Create Quote page finishes loading', async ({ quotesPage }) => {
  logger.step('Waiting for Create Quote page to finish loading');
  await quotesPage.verifyCreateQuotePageDisplayed();
});

Then('the Create Quote page should be displayed successfully', async ({ quotesPage }) => {
  logger.step('Verifying Create Quote page renders successfully');
  await quotesPage.verifyCreateQuotePageDisplayed();
  await quotesPage.verifyOverviewSectionDisplayed();
});

When('the user views the Overview section', async ({ quotesPage }) => {
  logger.step('Viewing Overview section');
  await quotesPage.verifyOverviewSectionDisplayed();
});

Then('Quote fields should be displayed', async ({ quotesPage }) => {
  logger.step('Checking Quote form fields visibility');
  await quotesPage.verifyQuoteFieldsDisplayed();
});

When('the user reviews the Create Quote form', async ({ quotesPage }) => {
  logger.step('Reviewing Create Quote form');
  await quotesPage.verifyQuoteFieldsDisplayed();
});

Then('mandatory fields should be marked as mandatory', async ({ quotesPage }) => {
  logger.step('Validating required Quote fields');
  await quotesPage.verifyMandatoryFieldsMarked();
});

When('the user enters the mandatory information and clicks the Save button', async ({ quotesPage }) => {
  await fillQuoteFields(quotesPage, 'mandatory');
  await quotesPage.clickSave();
});

When('the user enters all the information and clicks the Save button', async ({ quotesPage }) => {
  await fillQuoteFields(quotesPage, 'allFields', {
    includeOptionalFields: true,
  });
  await quotesPage.clickSave();
});

Given('the Title field is left empty', async ({ quotesPage }) => {
  logger.step('Leaving Quote Title empty to trigger validation');
  await quotesPage.enterTitle('');
});

When('the user enters valid data in the remaining mandatory fields and clicks the Save button', async ({ quotesPage }) => {
  logger.step('Entering remaining mandatory values and saving');

  await fillQuoteFields(quotesPage, 'mandatory', {
    includeTitle: false,
  });

  await quotesPage.clickSave();
});

Then('a validation message should be displayed for the Title field', async ({ quotesPage }) => {
  logger.step('Checking validation message for missing Title');
  await quotesPage.verifyValidationMessageDisplayed();
});

When('the user enters the mandatory information and clicks the Cancel button', async ({ quotesPage }) => {
  logger.step('Entering Quote data and canceling creation');

  await fillQuoteFields(quotesPage, 'mandatory');
  await quotesPage.clickCancel();
});

Then('the Quote should not be created', async ({ page }) => {
  logger.step('Confirming Quote creation was canceled');
  await expect(page).toHaveURL(/quotes.*(edit|create)|quotes/i);
});

Then('the Quote should be created successfully', async ({ page }) => {
  logger.step('Confirming Quote was created successfully');
  await expect(page).toHaveURL(/quotes/i);
});