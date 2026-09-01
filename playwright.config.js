// @ts-check
import 'dotenv/config';

import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'tests/features/**/*.feature',
  steps: ['tests/step-definitions/**/*.js', 'tests/hooks/**/*.js'],
  outputDir: '.features-gen',
  importTestFrom: 'tests/fixtures/fixtures.js',
});

export default defineConfig({

  testDir,

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: 'html',

 use: {
  headless: false,
  baseURL: process.env.BASE_URL,
  screenshot: 'only-on-failure',
  trace: 'on-first-retry',
},

  projects: [
    {
      name: 'setup',
      testDir: './tests',
      testMatch: /auth\.setup\.js/,
    },
    {
      name: 'login-tests',
      grep: /@auth/,
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'quotes',
      testMatch: /quotes\.feature\.spec\.js/,
      grepInvert: /@auth/,
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },
    {
      name: 'documents',
      testMatch: /documents\.feature\.spec\.js/,
      grepInvert: /@auth/,
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
          importTestFrom: 'tests/fixtures/fixtures.js',
      },
      dependencies: ['setup'],
    },
  ],
});