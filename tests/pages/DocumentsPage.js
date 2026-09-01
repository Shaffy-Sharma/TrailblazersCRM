const { expect } = require('@playwright/test');

class DocumentsPage {
  constructor(page) {
    this.page = page;
this.root = page;

    this.pageHeader = this.root.getByText('Documents', { exact: true }).first();
    this.overviewTab = this.root.getByText('OVERVIEW', { exact: true });
    this.otherTab = this.root.getByText('OTHER', { exact: true }).first();

    this.fileUpload = this.root.locator('input[type="file"]').first();
    this.documentNameField = this.root.locator("//scrm-dynamic-field[@class='dynamic-field dynamic-field-mode-edit dynamic-field-name-document_name dynamic-field-type-varchar ng-star-inserted']//input[@type='text']").first();
    this.documentTypeField = this.root.locator("//scrm-dynamic-field[@class='dynamic-field dynamic-field-mode-edit dynamic-field-name-template_type dynamic-field-type-enum ng-star-inserted']//select[@class='custom-select custom-select-sm ng-untouched ng-pristine ng-valid']");
    this.publishDateField = this.root.locator("//scrm-dynamic-field[@class='dynamic-field dynamic-field-mode-edit dynamic-field-name-active_date dynamic-field-type-date ng-star-inserted']//input[@placeholder='yyyy-mm-dd']");
    this.categoryField = this.root.locator("//scrm-dynamic-field[@class='dynamic-field dynamic-field-mode-edit dynamic-field-name-category_id dynamic-field-type-enum ng-star-inserted']//select[@class='custom-select custom-select-sm ng-untouched ng-pristine ng-valid']");
    this.subCategoryField = this.root.locator("//scrm-dynamic-field[@class='dynamic-field dynamic-field-mode-edit dynamic-field-name-subcategory_id dynamic-field-type-enum ng-star-inserted']//select[@class='custom-select custom-select-sm ng-untouched ng-pristine ng-valid']")
    this.assignedToField = this.root.locator('span.p-element.p-dropdown-label.p-inputtext.ng-star-inserted');
    this.statusField = this.root.locator("//scrm-dynamic-field[@class='dynamic-field dynamic-field-mode-edit dynamic-field-name-status_id dynamic-field-type-enum ng-star-inserted']//select[@class='custom-select custom-select-sm ng-untouched ng-pristine ng-valid']");
    this.revisionField = this.root.locator("//scrm-dynamic-field[@class='dynamic-field dynamic-field-mode-edit dynamic-field-name-revision dynamic-field-type-varchar ng-star-inserted']//input[@type='text']");
    this.templateCheckbox = this.root.locator('.checkmark');
    this.expirationDateField = this.root.locator("//scrm-dynamic-field[@class='dynamic-field dynamic-field-mode-edit dynamic-field-name-exp_date dynamic-field-type-date ng-star-inserted']//input[@placeholder='yyyy-mm-dd']");

    this.saveButton = this.root.getByRole('button', { name: 'Save' }).first();
    this.cancelButton = this.root.getByRole('button', { name: 'Cancel' }).first();

    this.fileRequiredError = this.root.getByText(/file.*required|required.*file|missing required/i).first();
    this.requiredIndicator = this.root.locator('text=*').first();
  }

  async navigateToCreateDocumentPage() {
    await this.page.goto('/#/documents/edit?return_module=Documents&return_action=DetailView');
  }

  async waitForCreateDocumentPageToLoad() {
    //await this.page.pause(5000); // Wait for 5 seconds to ensure the page is fully loaded
    await this.page.waitForLoadState('domcontentloaded');
    await this.pageHeader.waitFor({ state: 'visible' });
  } 
    

  async verifyCreateDocumentPageDisplayed() {
    await expect(this.pageHeader).toBeVisible();
    await expect(this.overviewTab).toBeVisible();
  }

  async verifyOverviewAndFieldsDisplayed() {
    await expect(this.overviewTab).toBeVisible();
    await expect(this.otherTab).toBeVisible();
    await expect(this.documentNameField).toBeVisible();
    await expect(this.documentTypeField).toBeVisible();
    await expect(this.publishDateField).toBeVisible();
    await expect(this.assignedToField).toBeVisible();
    }

  async verifyRequiredFieldIndicators() {
  const requiredFields = ['FILE', 'DOCUMENT NAME', 'PUBLISH DATE', 'REVISION'];

  for (const fieldName of requiredFields) {
    const field = this.page
      .locator('label, strong')
      .filter({ hasText: new RegExp(fieldName, 'i') })
      .first();

    await expect(field).toBeVisible();
    await expect(field).toContainText(fieldName);
    await expect(field).toContainText('*');
  }
}
  

  async uploadFile(filePath) {
    await this.fileUpload.setInputFiles(filePath);
  }

  async fillDocumentName(name) {
    await this.documentNameField.fill(String(name || ''));
  }

  async selectDocumentType(type) {
    if (!type) return;
    await this.documentTypeField.selectOption({ label: String(type) });
  }

  async fillPublishDate(date) {
    await this.publishDateField.fill(this.normalizeDate(date));
  }

  async selectCategory(category) {
    if (!category) return;
    await this.categoryField.selectOption({ label: category });
  }

  async selectSubCategory(subCategory) {
    if (!subCategory) return;
    await this.subCategoryField.selectOption({ label: subCategory });
  }

  async fillAssignedTo(name) {
    const value = String(name || '').replace(/\s+/g, '');
    if (!value) return;

    await this.assignedToField.click();
    await this.page.getByRole('option', { name: value, exact: true }).click();
  }

  async selectStatus(status) {
    if (!status) return;
    await this.statusField.selectOption({ label: String(status) });
  }

  async fillRevision(revision) {
    await this.revisionField.fill(String(revision ?? ''));
  }

  async setTemplateChecked(checked = true) {
    const checkbox = this.templateCheckbox;
    const isChecked = await checkbox.isChecked();
    if (checked !== isChecked) {
      await checkbox.click();
    }
  }

  async fillExpirationDate(date) {
    await this.expirationDateField.fill(this.normalizeDate(date));
  }

  normalizeDate(value) {
    if (typeof value === 'number' || /^\d+(\.\d+)?$/.test(String(value || '').trim())) {
      const serial = Number(value);
      const date = new Date(Date.UTC(1899, 11, 30) + serial * 86400000);
      return date.toISOString().slice(0, 10);
    }

    const text = String(value || '').trim();
    const match = text.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/);
    if (match) {
      return `${match[3]}-${match[1].padStart(2, '0')}-${match[2].padStart(2, '0')}`;
    }

    return text;
  }

  async clickSave() {
    await this.saveButton.click();
  }

  async clickCancel() {
    await this.cancelButton.click();
  }

//   async fillMandatoryFields() {
//     await this.uploadFile('tests/test-data/DocumentData1.txt');
//     await this.fillDocumentName('Test Document');
//     await this.selectDocumentType('PDF');
//     await this.fillPublishDate('2026-08-31');
//     await this.fillRevision('1');
//     await this.fillAssignedTo('Will Westin');
//   }

//   async fillAllFields() {
//     await this.fillMandatoryFields();
//     await this.selectStatus('Active');
//     await this.fillRevision('2');
//     await this.setTemplateChecked(false);
//     await this.fillExpirationDate('2026-12-31');
//     await this.selectCategory('General');
//     await this.selectSubCategory('Other');
//   }

  async verifyMissingFileValidation() {
    await expect(this.fileRequiredError).toBeVisible();
  }

  async verifyDocumentCreationSuccess() {
    //await expect(this.page).toHaveURL(/documents/i);
     await expect(this.page).toHaveURL(/\/documents\/record\//i);
    await expect(this.page.getByText('Document Revisions', { exact: true }).first()).toBeVisible();
  }

  async verifyRedirectToDocumentList() {
    await expect(this.page).toHaveURL(/documents/i);
  }
}

module.exports = DocumentsPage;
