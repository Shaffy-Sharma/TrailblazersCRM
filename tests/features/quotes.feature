
Feature: Create New Quote

  Background:
    Given the user is logged in to SuiteCRM
    Given the user navigates to the Create Quote page

@only
  Scenario: Verify Create Quote page is displayed
    Given the Create Quote page is opened
    When the Create Quote page finishes loading
    Then the Create Quote page should be displayed successfully
@only
  Scenario: Verify Quote fields are displayed
    Given the Create Quote page is opened
    When the user views the Overview section
    Then Quote fields should be displayed
@only
  Scenario: Verify mandatory Quote fields
    Given the Create Quote page is opened
    When the user reviews the Create Quote form
    Then mandatory fields should be marked as mandatory
@only
  Scenario: Create a Quote with mandatory information
    Given the Create Quote page is opened
    When the user enters the mandatory information and clicks the Save button
    Then the Quote should be created successfully
@only
  Scenario: Create a Quote with all available information
    Given the Create Quote page is opened
    When the user enters all the information and clicks the Save button
    Then the Quote should be created successfully

  Scenario: Verify Title field validation
    Given the Title field is left empty
    When the user enters valid data in the remaining mandatory fields and clicks the Save button
    Then a validation message should be displayed for the Title field

  Scenario: Verify Cancel Quote creation
    Given the Create Quote page is opened
    When the user enters the mandatory information and clicks the Cancel button
    Then the Quote should not be created
