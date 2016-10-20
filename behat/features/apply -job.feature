Feature: Apply Job
  In order to be able to apply job
  As an anonymous user
  We need to be able to have access to the user account

  @api
  Scenario: Auth user apply job
    Given I login with user "user1@example.com"
    When  I visit the homepage
    And   I should select the job option
    Then  I should see "עכשיו כשיש לך סוכן שמעדכן ודואג לך"
