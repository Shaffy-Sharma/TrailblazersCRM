import { expect } from '@playwright/test';

class HomePage {

    constructor(page) {
        this.page = page;

        this.accountsMenu = page.locator('a').filter({hasText: /^Accounts$/});

        this.quotesMenu = page.locator('a').filter({hasText: /^Quotes$/});
    }

    async verifyUserIsLoggedIn() {
        await this.accountsMenu.waitFor({state: 'visible'});
    }
}

module.exports = HomePage;