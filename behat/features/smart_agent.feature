Feature: Smart agent
  In order to be able to view and get info from smart agent
  As an anonymous user
  We need to be able to have access to the homepage

  @api
  Scenario: Anon User user add smart agent
    Given I am an anonymous user
    When  I visit the homepage
    And   I should select the job option
    Then  I should see "עכשיו כשיש לך סוכן שמעדכן ודואג לך"

  @api
  Scenario: Auth User user add smart agent
    Given I login with user "user1@example.com"
    When  I visit the homepage
    And   I should select the job option
    Then  I should see "עכשיו כשיש לך סוכן שמעדכן ודואג לך"
