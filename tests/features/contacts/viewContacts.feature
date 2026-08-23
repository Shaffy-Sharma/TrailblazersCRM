Feature: View Contacts

    Background:
        Given View Contact: the user loads SuiteCRM
        When View Contact: user enters "will" and "will" credentials to login
        Then View Contact: the user navigates to the dashboard

    Scenario: View the Contact List page
        Given View Contact: the user clicks Contacts tab
        When  View Contact: the user clicks View Contact 
        Then View Contact: the list of existing contacts should be displayed with the page title "Contacts"
