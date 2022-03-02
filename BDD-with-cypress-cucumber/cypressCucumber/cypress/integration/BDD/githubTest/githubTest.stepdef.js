/// <reference types="Cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"; // have to import these, so that cypress can recognise cucumber keywords


Given("User visit Github application", function () {
    cy.visit("https://github.com/login")
});

When("User validate {string} page", function (login) {
    cy.url().should("include", login)
});

Then("User enter {string} in {string} field", function (username, usernameField) {
    var Elem1 = "(//label[contains(text(),'"
    var Elem2 = "')]/following-sibling::input)[1]"
    cy.xpath(Elem1 + usernameField + Elem2).type(username)
});

Then("User clicks at {string} button", function (buttonname) {
    var Elem1 = "//input[@value='"
    var Elem2 = "']"
    cy.xpath(Elem1 + buttonname + Elem2).trigger('mouseover').click();
})

And("User clicks at user profile option", function () {
    cy.xpath("//summary//img").click()
})

And("User validates sign in as {string} should appear", function (username) {
    cy.xpath("//a//strong").should('have.text', username)
})

Then("User clicks at {string} button on profile options", function (ProfileOption) {
    var Elem1 = "//button[contains(text(),'"
    var Elem2 = "')]"
    cy.xpath(Elem1 + ProfileOption + Elem2).trigger('mouseover').click();
})


And("User clicks at New Repository", function () {
    cy.xpath("(//a[@href='/new'])[2]").click();
})

And("User enter {string} in Repository name", function (Reponame) {
    cy.xpath("//input[@id='repository_name']").type(Reponame);
})

And("User check {string} Repository radiobutton", function(repotype)
{
    var Elem1 = "//input[@value='"
    var Elem2 = "']"
    cy.xpath(Elem1 + repotype + Elem2).click();
})

And("User ceck {string} checkbox", function(checkboxValue){
    cy.xpath("//input[@id='repository_gitignore_template_toggle']").click()
})

And("User select {string} from gitignore templates",function(value){
    var Elem1 = "//span[@class='text-normal select-menu-item-text' and contains(text(),'"
    var Elem2 = "')]"
    cy.xpath("//summary[@class='select-menu-button btn-sm btn']").click()
    cy.xpath("//input[@id='context-ignore-filter-field']").type(value)
    cy.xpath(Elem1 + value + Elem2).click()
})

And("User clicks at Create repository button",function(){
    cy.xpath("//button[contains(text(),'Create repository')]").click()
})

And("User validates the {string} repository is Created", function(repoName){
    cy.xpath("//strong//a").should('have.text',repoName)
})

And("User validtes the {string} file in repository", function(filename){
    cy.xpath("//span//a[@title='.gitignore']").should('be.visible')
})
