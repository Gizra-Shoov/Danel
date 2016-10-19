Feature: Login
  In order to be able to login
  As an anonymous user
  We need to be able to have access to the user profile page

  @api
  Scenario: Anon auth user login with Facebook account
    Given I am an anonymous user
    When  I visit the "/user/register"
    And   I should click on "כניסה לאיזור האישי" button
    And   I should click on "התחברות דרך פייסבוק" button
    And   I should type my username and password account
    Then  I should see "איך בא לכם לשלוח קורות חיים?"
