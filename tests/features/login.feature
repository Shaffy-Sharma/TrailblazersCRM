Feature: Login

  Scenario: Login with valid username and password
    Given The user is on the login page
    When The user enters "will" and "will"
    Then The user should see the dashboard

  
