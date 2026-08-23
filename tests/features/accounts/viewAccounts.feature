Feature: View Account

  Background:
    Given View Account: the user loads SuiteCRM
    When View Account: user enters "will" and "will" credentials to login
    Given View Account: the user navigates to the dashboard

  Scenario: View the Account List page
    When the user navigates to the Accounts page
    Then the list of existing accounts should be displayed with the page title "Accounts"