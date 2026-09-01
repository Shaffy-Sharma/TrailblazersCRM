const { createBdd } = require('playwright-bdd');
const { expect } = require('@playwright/test');
const path = require('path');
const logger = require('../utils/logger.js');

const { test } = require('../fixtures/fixtures.js');
const { Given, When, Then } = createBdd(test);
const ExcelReader = require('../utils/excelReader.js');

function getDocumentData(testCaseName) {
  return ExcelReader.getRowByTestCase('DocumentsData.xlsx', testCaseName);
}

function getDocumentFilePath(fileName) {
  return path.resolve(__dirname, '../test-data', String(fileName || '').trim());
}


Given('the user navigates to the Create Document page', async ({ documentsPage }) => {
  logger.step('Navigating to Create Document page');
  await documentsPage.navigateToCreateDocumentPage();
});

When('the page finishes loading', async ({ documentsPage }) => {
  logger.step('Waiting for Create Document page to finish loading');
  await documentsPage.waitForCreateDocumentPageToLoad();
});

Then('the Overview tab and document fields are displayed', async ({ documentsPage }) => {
  logger.step('Checking overview and form fields');
  await documentsPage.verifyOverviewAndFieldsDisplayed();
});

When('the user reviews the form labels', async ({ documentsPage }) => {
  logger.step('Reviewing document form labels');
  await documentsPage.verifyOverviewAndFieldsDisplayed();
});

Then('required field indicators appear beside mandatory fields', async ({ documentsPage }) => {
  logger.step('Checking required field indicators');
  await documentsPage.verifyRequiredFieldIndicators();
});



When('the user fills in the mandatory fields and clicks Save', async ({ documentsPage }) => {
  const row = getDocumentData('mandatory');

  await documentsPage.uploadFile(getDocumentFilePath(row.FileName));
  await documentsPage.fillDocumentName(row.DocumentName);
  await documentsPage.selectDocumentType(row.DocumentType);
  await documentsPage.fillPublishDate(row.PublishDate);
  await documentsPage.fillRevision(row.Revision);
  await documentsPage.fillAssignedTo(row.AssignedTo);
  await documentsPage.clickSave();
});

Then('the document is created successfully', async ({ documentsPage }) => {
  logger.step('Verifying document creation');
  await documentsPage.verifyDocumentCreationSuccess();
});



When('the user fills in all the document fields and clicks Save', async ({ documentsPage }) => {
  const row = getDocumentData('allFields');

  await documentsPage.uploadFile(getDocumentFilePath(row.FileName));
  await documentsPage.fillDocumentName(row.DocumentName);
  await documentsPage.selectDocumentType(row.DocumentType);
  await documentsPage.fillPublishDate(row.PublishDate);
  await documentsPage.fillRevision(row.Revision);
  await documentsPage.fillAssignedTo(row.AssignedTo);
  await documentsPage.selectStatus(row.Status);
  await documentsPage.setTemplateChecked(row.Template === 'true');
  await documentsPage.fillExpirationDate(row.ExpirationDate);
  await documentsPage.selectCategory(row.Category);
  await documentsPage.selectSubCategory(row.SubCategory);
  await documentsPage.clickSave();
});

Then('the document is created with all entered information', async ({ documentsPage }) => {
  logger.step('Verifying document creation with full data');
  await documentsPage.verifyDocumentCreationSuccess();
});

When('the user completes all other required fields except File and clicks Save', async ({ documentsPage }) => {
  logger.step('Leaving File empty and saving');

  await documentsPage.fillDocumentName('Missing File Document');
  await documentsPage.selectDocumentType('PDF');
  await documentsPage.fillPublishDate('2026-08-31');
  await documentsPage.fillAssignedTo('Will Westin');
  await documentsPage.clickSave();
});

Then('the missing required field message is displayed for File', async ({ documentsPage }) => {
  logger.step('Checking missing File validation');
  await documentsPage.verifyMissingFileValidation();
});

Given('the user has entered document information', async ({ documentsPage }) => {
  logger.step('Preparing document data for cancel flow');
  await documentsPage.fillDocumentName('Cancel Document');
  await documentsPage.fillPublishDate('2026-08-31');
});

When('the user clicks Cancel', async ({ documentsPage }) => {
  logger.step('Clicking Cancel on document form');
  await documentsPage.clickCancel();
});

Then('the user is redirected to the Document list view', async ({ documentsPage, page }) => {
  logger.step('Verifying redirect to document list');
  await documentsPage.verifyRedirectToDocumentList();
  await expect(page).toHaveURL(/documents/i);
});

Given('a document is opened in edit view', async ({ documentsPage }) => {
  logger.step('Opening document edit view');
  await documentsPage.navigateToCreateDocumentPage();
});

When('the user edits the Revision field and clicks Save', async ({ documentsPage }) => {
  logger.step('Editing Revision value and saving');
  await documentsPage.fillRevision('2');
  await documentsPage.clickSave();
});

Then('the user sees the updated Revision value', async ({ documentsPage }) => {
  logger.step('Checking updated revision value');
  await expect(documentsPage.revisionField).toHaveValue('2');
});