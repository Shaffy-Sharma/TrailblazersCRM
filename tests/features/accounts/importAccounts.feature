Feature: Import Accounts

  Background:
    Given Import Account: the user is logged into SuiteCRM
    When Import Account: user enters "will" and "will" credentials to login
    Given Import Account: the user navigates to the dashboard

  Scenario: Open Import Accounts page
  Given the user clicks the accounts tab
    When the user clicks the Import Accounts button
    Then the Import Accounts page should be displayed