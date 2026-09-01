Feature: Create New Document

  Background:
    Given the user is logged in to SuiteCRM
    Given the user navigates to the Create Document page
@only
  Scenario: Verify the Create Document page layout and document fields
    When the page finishes loading
    Then the Overview tab and document fields are displayed
@only
  Scenario: Verify required field indicators
    When the user reviews the form labels
    Then required field indicators appear beside mandatory fields
@only
  Scenario: Create a document with only required information
    When the user fills in the mandatory fields and clicks Save
    Then the document is created successfully
@only
  Scenario: Create a document with all available information
     When the user fills in all the document fields and clicks Save
    Then the document is created with all entered information

  Scenario: Verify File is mandatory
    When the user completes all other required fields except File and clicks Save
    Then the missing required field message is displayed for File

  Scenario: Cancel document creation
    Given the user has entered document information
    When the user clicks Cancel
    Then the user is redirected to the Document list view

  Scenario: Edit revision field on the document
    Given a document is opened in edit view
    When the user edits the Revision field and clicks Save
    Then the user sees the updated Revision value


