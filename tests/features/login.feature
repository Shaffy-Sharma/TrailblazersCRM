@auth
Feature: Login

  Background:
    Given user launch browser and enter url

  Scenario Outline: Login with valid username and password
    Given user is on login page
    When user enters username "<username>" and password "<password>"
    Then user should be logged in successfully

    Examples:
      | username | password |
      | will     | will     |