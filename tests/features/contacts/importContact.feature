Feature: Import Accounts

  Background:
    Given Import Contact: the user is logged into SuiteCRM
    When Import Contact: user enters "will" and "will" credentials to login
    Given Import Contact: the user navigates to the dashboard

  Scenario: Open Import Contacts page
  Given the user clicks the Contacts tab
    When the user clicks the Import Contacts button
    Then the Import Contacts page should be displayed