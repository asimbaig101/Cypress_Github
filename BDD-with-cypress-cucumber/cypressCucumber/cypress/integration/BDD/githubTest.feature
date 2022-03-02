#Owner: Mirza Asim Baig
#Method: Automated
#Date: 28-02-2022

@Github
Feature: Test Github Application

    More information regrading test

    @SMOKE @Positive @Login
    Scenario: Test 1- To Test Github application Login and Logout functionality
        Given User visit Github application
        Then User validate "login" page
        When User enter "asimbaig101" in "Username or email address" field
        And User enter "Turnout@34" in "Password" field
        Then User clicks at "Sign in" button
        And User validate "github" page
        And User clicks at user profile option
        And User validates sign in as "asimbaig101" should appear
        Then User clicks at "Sign out" button on profile options

    @SMOKE @Positive @NewRepo
    Scenario: Test 2- To Test Github application Login and Logout functionality
        Given User visit Github application
        Then User validate "login" page
        When User enter "asimbaig101" in "Username or email address" field
        And User enter "Turnout@34" in "Password" field
        Then User clicks at "Sign in" button
        And User validate "github" page
        And User clicks at New Repository
        Then User validate "new" page
        And User enter "cypress-assignment3" in Repository name
        And User check "public" Repository radiobutton
        And User ceck "Add git" checkbox
        And User select "Node" from gitignore templates
        And User clicks at Create repository button
        Then User validate "cypress-assignment3" page
        And User validates the "cypress-assignment3" repository is Created
        And User validtes the ".gitignore" file in repository