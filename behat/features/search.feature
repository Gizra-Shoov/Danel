Feature: Search
  In order to be able to search
  As an anonymous user
  We need to be able to have access to the search module

  @api
  Scenario: Search job
    Given I am an anonymous user
    When  I visit the homepage
    And   I should type a job subject
    Then  I should click on "מצאו עבודה!" button
    And   I should see the title "מחשבים וחומרה"
