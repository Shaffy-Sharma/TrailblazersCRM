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

    this.saveButton = this.root
      .getByRole('button', { name: 'Save' })

    this.cancelButton = this.root
      .getByRole('button', { name: 'Cancel' })

    this.fileRequiredError = this.root.getByText('Missing required field: File', { exact: true });
    this.requiredIndicator = this.root.locator('text=*').first();
  }

  async navigateToCreateDocumentPage() {
    await this.page.goto('/#/documents/edit?return_module=Documents&return_action=DetailView');
       // await this.page.pause();
  }

  async waitForCreateDocumentPageToLoad() {
    await this.page.waitForURL(/#\/documents\/edit/i);
    await this.pageHeader.waitFor({ state: 'visible' });
    await this.overviewTab.waitFor({ state: 'visible' });
    await this.otherTab.waitFor({ state: 'visible' });
    await this.documentNameField.waitFor({ state: 'visible' });
    await this.documentTypeField.waitFor({ state: 'visible' });
    await this.publishDateField.waitFor({ state: 'visible' });
    await this.assignedToField.waitFor({ state: 'visible' });
  } 
    

  async verifyCreateDocumentPageDisplayed() {
    await expect(this.pageHeader).toBeVisible();
    await expect(this.overviewTab).toBeVisible();
  }

  async verifyOverviewAndFieldsDisplayed() {
    await this.waitForCreateDocumentPageToLoad();
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
   //  await this.page.pause();
     console.log(`Uploading file: ${filePath}`);
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
    const expectedValue = String(name || '').replace(/\s+/g, '');
    if (!expectedValue) return;

    await this.assignedToField.waitFor({ state: 'visible' });

    const currentValue = (
      await this.assignedToField.getAttribute('aria-label') ||
      await this.assignedToField.textContent() ||
      ''
    ).replace(/\s+/g, '');

    // Do not click the dropdown if the requested user is already selected.
    if (currentValue === expectedValue) return;

    await this.assignedToField.scrollIntoViewIfNeeded();
    await expect(this.assignedToField).toBeEnabled();
    await this.assignedToField.click();

    const option = this.page.getByRole('option', {
      name: String(name).trim(),
      exact: true,
    });

    await option.waitFor({ state: 'visible' });
    await option.click();
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
    // await this.page.waitForLoadState('networkidle'); // let any pending Angular requests finish
    await expect(this.saveButton).toBeVisible();
    await expect(this.saveButton).toBeEnabled();
    await this.saveButton.click();
  }

  async clickCancel() {
    this.page.once('dialog', async dialog => {
      await dialog.accept();
    });

    await expect(this.cancelButton).toBeVisible();
    await expect(this.cancelButton).toBeEnabled();
    await this.cancelButton.click();
  }


  async verifyMissingFileValidation() {
    await expect(this.fileRequiredError).toBeVisible();
  }

  async verifyDocumentCreationSuccess() {
    await this.page.waitForURL(/#\/documents\/record\//i, {
      timeout: 15000,
       waitUntil: 'domcontentloaded',
    });

    await expect(
      this.page.getByText('Document Revisions', { exact: true }).first()
    ).toBeVisible();
  }

  async verifyRedirectToDocumentList() {
    await expect(this.page).toHaveURL(/documents/i);
  }
}

module.exports = DocumentsPage;
