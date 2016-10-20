Feature: Login
  In order to be able to login
  As an anonymous user
  We need to be able to have access to the user profile page

  @api
  Scenario: Anon auth user login with Facebook account
    Given I am an anonymous user
    When  I register to the site
    Then  I should see on the breadcrumbs "דף הבית?"
