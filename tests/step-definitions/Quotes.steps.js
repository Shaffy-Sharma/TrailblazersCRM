const { createBdd } = require('playwright-bdd');
const { expect } = require('@playwright/test');
const logger = require('../utils/logger.js');
const ExcelReader = require('../utils/excelReader.js');
const { test } = require('../fixtures/fixtures.js');
const { Given, When, Then } = createBdd(test);
const QuotesPage = require('../pages/QuotesPage.js');


function getQuoteData(testCaseName) {
  return ExcelReader.getRowByTestCase('QuotesData.xlsx', testCaseName);
}

Given('the user navigates to the Create Quote page', async ({ page }) => {
  logger.step('Navigating to Create Quote page');
  const quotesPage = new QuotesPage(page);
  await quotesPage.navigateToCreateQuotePage();
});

Given('the Create Quote page is opened', async ({ page }) => {
  logger.step('Opening Create Quote page');
  const quotesPage = new QuotesPage(page);
  await expect(page).toHaveURL(/quotes|create/i);
  await quotesPage.verifyCreateQuotePageDisplayed();
});

When('the Create Quote page finishes loading', async ({ page }) => {
  logger.step('Waiting for Create Quote page to finish loading');
  const quotesPage = new QuotesPage(page);
  await quotesPage.verifyCreateQuotePageDisplayed();
});

Then('the Create Quote page should be displayed successfully', async ({ page }) => {
  logger.step('Verifying Create Quote page renders successfully');
  const quotesPage = new QuotesPage(page);
  await quotesPage.verifyCreateQuotePageDisplayed();
  await quotesPage.verifyOverviewSectionDisplayed();
});

When('the user views the Overview section', async ({ page }) => {
  logger.step('Viewing Overview section');
  const quotesPage = new QuotesPage(page);
  await quotesPage.verifyOverviewSectionDisplayed();
});

Then('Quote fields should be displayed', async ({ page }) => {
  logger.step('Checking Quote form fields visibility');
  const quotesPage = new QuotesPage(page);
  await quotesPage.verifyQuoteFieldsDisplayed();
});

When('the user reviews the Create Quote form', async ({ page }) => {
  logger.step('Reviewing Create Quote form');
  const quotesPage = new QuotesPage(page);
  await quotesPage.verifyQuoteFieldsDisplayed();
});

Then('mandatory fields should be marked as mandatory', async ({ quotesPage }) => {
  logger.step('Validating required Quote fields');
 // const quotesPage = new QuotesPage(page);
  await quotesPage.verifyMandatoryFieldsMarked();
});

When('the user enters the mandatory information and clicks the Save button', async ({ quotesPage, page }) => {
  logger.step('Reading mandatory Quote data from Excel and saving');

  const quoteData = getQuoteData('mandatory');

  await quotesPage.enterTitle(quoteData.Title);
  await quotesPage.selectQuoteStage(quoteData.QuoteStage);
  await quotesPage.enterValidUntil(quoteData.ValidUntil);
  //await page.pause();
  await quotesPage.clickSave();
});
Then('the Quote should be created successfully', async ({ page }) => {
  logger.step('Confirming Quote was created successfully');
  await expect(page).toHaveURL(/quotes/i);
});

When('the user enters all the information and clicks the Save button', async ({ quotesPage, page }) => {
  logger.step('Reading all Quote data from Excel and saving');
  const quoteData = getQuoteData('allFields');

  await quotesPage.enterTitle(quoteData.Title);
   await quotesPage.enterValidUntil(quoteData.ValidUntil);
  await quotesPage.enterAssignedTo(quoteData.AssignedTo);
  await quotesPage.enterOpportunity(quoteData.Opportunity);
  await quotesPage.selectQuoteStage(quoteData.QuoteStage);
  await quotesPage.selectInvoiceStatus(quoteData.InvoiceStatus);
  await quotesPage.selectPaymentTerms(quoteData.PaymentTerms);
  await quotesPage.selectApprovalStatus(quoteData.ApprovalStatus);
  await quotesPage.enterApprovalIssues(quoteData.ApprovalIssues);
  await quotesPage.clickSave();
});

Given('the Title field is left empty', async ({ page }) => {
  logger.step('Leaving Quote Title empty to trigger validation');
  const quotesPage = new QuotesPage(page);
  await quotesPage.enterTitle('');
});

When('the user enters valid data in the remaining mandatory fields and clicks the Save button', async ({ page }) => {
  logger.step('Entering remaining mandatory values and saving');
  const quotesPage = new QuotesPage(page);

  await quotesPage.selectQuoteStage('Draft');
  await quotesPage.enterValidUntil('2026-09-30');
  await quotesPage.clickSave();
});

Then('a validation message should be displayed for the Title field', async ({ page }) => {
  logger.step('Checking validation message for missing Title');
  const quotesPage = new QuotesPage(page);
  await quotesPage.verifyValidationMessageDisplayed();
});

When('the user enters the mandatory information and clicks the Cancel button', async ({ page }) => {
  logger.step('Entering Quote data and canceling creation');
  const quotesPage = new QuotesPage(page);

  await quotesPage.enterTitle('Quote to cancel');
  await quotesPage.selectQuoteStage('Draft');
  await quotesPage.enterValidUntil('2026-09-30');
  await quotesPage.clickCancel();
});

Then('the Quote should not be created', async ({ page }) => {
  logger.step('Confirming Quote creation was canceled');
  await expect(page).toHaveURL(/quotes.*(edit|create)|quotes/i);
});