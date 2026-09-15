// @ts-check
import 'dotenv/config';

import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'tests/features/**/*.feature',
  steps: [
    'tests/step-definitions/**/*.js',
    'tests/hooks/**/*.js',
    'tests/fixtures/**/*.js',        // ← fixtures included here now
  ],
  outputDir: '.features-gen',
  // importTestFrom removed 
});

export default defineConfig({

  testDir,

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : 2,


reporter: [
  ['list'],
  ['html', { open: 'never' }],
  ['allure-playwright', {
    resultsDir: 'allure-results',
    detail: true,
    suiteTitle: false,
    clean: true,
  }],
],

 use: {
    headless: !!process.env.CI,
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
      dependencies: ['setup'],
    },
    
    {
      name: 'login-tests-webkit',
      grep: /@auth/,
      use: { ...devices['Desktop Safari'] },
      dependencies: ['setup'],
    },
    {
      name: 'login-tests-edge',
      grep: /@auth/,
      use: { ...devices['Desktop Edge'], channel: 'msedge' },
      dependencies: ['setup'],
    },

    // ---------- quotes: chromium ----------
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
       
       //---------- quotes: webkit ----------
    {
      name: 'quotes-webkit',
      testMatch: /quotes\.feature\.spec\.js/,
      grepInvert: /@auth/,
      use: {
        ...devices['Desktop Safari'],
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },
    // ---------- quotes: edge ----------
    {
      name: 'quotes-edge',
      testMatch: /quotes\.feature\.spec\.js/,
      grepInvert: /@auth/,
      use: {
        ...devices['Desktop Edge'],
        channel: 'msedge',
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },

    // ---------- documents: chromium ----------
    {
      name: 'documents',
      testMatch: /documents\.feature\.spec\.js/i,
      grepInvert: /@auth/,
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
        // importTestFrom removed 
      },
      dependencies: ['setup'],
    },
  
    // ---------- documents: webkit ----------
    {
      name: 'documents-webkit',
      testMatch: /documents\.feature\.spec\.js/i,
      grepInvert: /@auth/,
      use: {
        ...devices['Desktop Safari'],
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },
    // ---------- documents: edge ----------
    {
      name: 'documents-edge',
      testMatch: /documents\.feature\.spec\.js/i,
      grepInvert: /@auth/,
      use: {
        ...devices['Desktop Edge'],
        channel: 'msedge',
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },
  ],
});