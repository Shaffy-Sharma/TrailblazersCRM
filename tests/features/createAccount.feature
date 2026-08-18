Feature: Crate Account

    Scenario: Create a new Account with valid information
        Given Create Account: The user is on the login page
        When Create Account: The user enters "will" and "will"
        Then Create Account: The user should see the dashboard
        When Create Account: user clicks on Accounts and Create Account links
        Then Create Account: The create Account page should be displayed
        When Create Account: user enter mandetory account details
        Then Create Account: The Account should be created successfully
        