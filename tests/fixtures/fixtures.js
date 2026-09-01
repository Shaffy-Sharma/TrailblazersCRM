const { test : base } = require('playwright-bdd');
const LoginPage = require('../pages/LoginPage.js');
const QuotesPage = require('../pages/QuotesPage.js');
const DocumentsPage = require('../pages/DocumentsPage.js');

const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  quotesPage: async ({ page }, use) => {
    await use(new QuotesPage(page));
  },
  documentsPage: async ({ page }, use) => {
    await use(new DocumentsPage(page));
  },
});

module.exports = { test };