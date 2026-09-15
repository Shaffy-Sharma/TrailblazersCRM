const { expect } = require('@playwright/test');

class QuotesPage {
    constructor(page) {
        this.page = page;

        this.pageHeader = page.frameLocator('[src*="index.php"]').locator(':text("QUOTES")');
        this.createHeader = page.frameLocator('[src*="index.php"]').getByText('CREATE', { exact: true });
        this.overviewTab = page.frameLocator('[src*="index.php"]').getByText('Overview');
        this.titleField = page.frameLocator('[src*="index.php"]').locator('#name')
        this.quoteNumberField = page.frameLocator('[src*="index.php"]').locator('div.col-xs-12.col-sm-6.edit-view-row-item.edit-view-bordered').locator('div').nth(1);
        this.validUntilField = page.frameLocator('[src*="index.php"]').locator('#expiration');
        this.assignedToField = page.frameLocator('[src*="index.php"]').locator('#assigned_user_name')
        this.opportunityField = page.frameLocator('[src*="index.php"]').locator('#opportunity');
        this.quoteStageField = page.frameLocator('[src*="index.php"]').locator('#stage');
        this.invoiceStatusField = page.frameLocator('[src*="index.php"]').locator('#invoice_status');
        this.paymentTermsField = page.frameLocator('[src*="index.php"]').locator('#term');
        this.approvalStatusField = page.frameLocator('[src*="index.php"]').locator('#approval_status');
        this.approvalIssuesField = page.frameLocator('[src*="index.php"]').locator('#approval_issue');
        this.validationMessage=page.frameLocator('[src*="index.php"]').getByText('Missing required field: Title', { exact: true })

        this.saveButton = page.frameLocator('[src*="index.php"]').getByTitle('Save');
        //this.cancelButton = page.frameLocator('[src*="index.php"]').getByTitle('Cancel [Alt+l]', { exact: true });
        this.cancelButton = page.frameLocator('[src*="index.php"]').getByTitle(/^Cancel\b/);

    }

    async navigateToCreateQuotePage() {

        await this.page.goto('#/quotes/edit?return_module=AOS_Quotes&return_action=DetailView');
    }


    async enterTitle(title) {
        await this.titleField.fill(title);
    }

    async enterQuoteNumber(number) {
        await this.quoteNumberField.fill(number);
    }

    async enterValidUntil(date) {
        await this.validUntilField.fill(date);
    }

    async enterAssignedTo(name) {
        await this.assignedToField.fill(name);
    }

    async enterOpportunity(name) {
        await this.opportunityField.fill(name);
    }

    async selectQuoteStage(value) {
        if (!value) return;
        await this.quoteStageField.selectOption({ label: value });
    }

    async selectInvoiceStatus(value) {
        if (!value) return;
        await this.invoiceStatusField.selectOption({ label: value });
    }

    async selectPaymentTerms(value) {
        if (!value) return;
        await this.paymentTermsField.selectOption({ label: value });
    }

    async selectApprovalStatus(value) {
        if (!value) return;
        await this.approvalStatusField.selectOption({ label: value });
    }

    async enterApprovalIssues(text) {
        await this.approvalIssuesField.fill(text);
    }

    async clickSave() {
        await this.saveButton.click();
    }

    async clickCancel() {
        this.page.once('dialog', async dialog => {
            if (dialog.type() === 'beforeunload') {
                await dialog.accept(); // Selects "Leave"
            }
        });

        await this.cancelButton.click(); // First SuiteCRM Cancel button
    }

    async verifyCreateQuotePageDisplayed() {
        await this.pageHeader.waitFor({ state: 'visible' });
        await this.createHeader.waitFor({ state: 'visible' });
        await this.overviewTab.waitFor({ state: 'visible' });
        await expect(this.pageHeader).toBeVisible();
        await expect(this.createHeader).toBeVisible();
        await expect(this.overviewTab).toBeVisible();
    }

    async waitForCreateQuotePageToLoad() {
        await this.overviewTab.waitFor({ state: 'visible' });
    }

    async verifyOverviewSectionDisplayed() {
        await expect(this.overviewTab).toBeVisible();
    }
    async waitForCreateQuotePageToLoad() {
    await this.overviewTab.waitFor({ state: 'visible' });
    await this.titleField.waitFor({ state: 'visible' });
    await this.quoteNumberField.waitFor({ state: 'visible' });
    await this.validUntilField.waitFor({ state: 'visible' });
    await this.assignedToField.waitFor({ state: 'visible' });
    await this.opportunityField.waitFor({ state: 'visible' });
    await this.quoteStageField.waitFor({ state: 'visible' });
    await this.invoiceStatusField.waitFor({ state: 'visible' });
    await this.paymentTermsField.waitFor({ state: 'visible' });
    await this.approvalStatusField.waitFor({ state: 'visible' });
    await this.approvalIssuesField.waitFor({ state: 'visible' });
}

    async verifyQuoteFieldsDisplayed() {
        await this.waitForCreateQuotePageToLoad();
        await expect(this.titleField).toBeVisible();
        await expect(this.quoteNumberField).toBeVisible();
        await expect(this.validUntilField).toBeVisible();
        await expect(this.assignedToField).toBeVisible();
        await expect(this.opportunityField).toBeVisible();
        await expect(this.quoteStageField).toBeVisible();
        await expect(this.invoiceStatusField).toBeVisible();
        await expect(this.paymentTermsField).toBeVisible();
        await expect(this.approvalStatusField).toBeVisible();
        await expect(this.approvalIssuesField).toBeVisible();
    }

    async verifyMandatoryFieldsMarked() {
        const frame = this.page.frameLocator('[src*="index.php"]');
        await expect(frame.locator('div[data-label="LBL_NAME"]')).toContainText('*');
        await expect(frame.locator('div[data-label="LBL_EXPIRATION"]')).toContainText('*');
        await expect(frame.locator('div[data-label="LBL_STAGE"]')).toContainText('*');
    }

    async verifyValidationMessageDisplayed() {
        
        await expect(this.validationMessage).toBeVisible();
    }
}

module.exports = QuotesPage;