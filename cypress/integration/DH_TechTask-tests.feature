Feature: Test Suite for Technical tasks
  
  Scenario: REQ-UI-01 - The Title should be "UI Testing Site" on every site
    Given Open Home Page
    Then Home page Title should equal to "UI Testing Site"
    Given Open Form Page
    Then Form page Title should equal to "UI Testing Site"
    Given Open Hello Page
    Then Hello page Title should equal to "UI Testing Site"

  Scenario: REQ-UI-02 - The Company Logo should be visible on every site
    Given Open Home Page
    Then The Company Logo should be visible on Home page
    Given Open Form Page
    Then The Company Logo should be visible on Form page
    Given Open Hello Page
    Then The Company Logo should be visible on Hello page
  
  Scenario: REQ-UI-03 - When I click on the Home button, I should get navigated to the Home page
    Given Open Form Page
    When Click on Home button
    Then Check the Home page url

  Scenario: REQ-UI-04 - When I click on the Home button, it should turn to active status
    Given Open Form Page
    Then Check Home button status: Inactive
    When Click on Home button
    Then Check Home button status: Active

  Scenario: REQ-UI-05 - When I click on the Form button, I should get navigated to the Form page
    When Navigate to Form page and check url

  Scenario: REQ-UI-06 - When I click on the Form button, it should turn to active status
    Given Open Home Page
    Then Check Form button status: Inactive
    When Click on Form button
    Then Check Form button status: Active

  Scenario: REQ-UI-07 - When I click on the Error button, I should get a 404 HTTP response code
    Given send GET method with url to the error page and get response with error code 404

  Scenario: REQ-UI-08 - When I click on the UI Testing button, I should get navigated to the Home page
    Given Open Form Page
    When Click on UI Testing button
    Then Check the Home page url

  Scenario: REQ-UI-09 - The following text should be visible on the Home page in <h1> tag: "Welcome to the Docler Holding QA Department"
    Given Open Home Page
    Then Check the text in <h1> tag

  Scenario: REQ-UI-10 - The following text should be visible on the Home page in <p> tag: "This site is dedicated to perform some exercises and demonstrate automated web testing."
    Given Open Home Page
    Then Check the text in <p> tag

  Scenario: REQ-UI-11 - On the Form page, a form should be visible with one input box and one submit button
    Given Open Form Page
    Then Check the input box is visible
    And Check the submit button is visible
  
  Scenario Outline: REQ-UI-12 - On the Form page, if you type <value> the input field and submit the form, you should get redirect to the Hello page, and the following text should appear: <result>
    Given Open Form Page
    When if I type "<value>"
    And submit
    Then redirect to the Hello page
    And the following text should appear: "<result>" 
  Examples:
      | value   | result          |
      | John    | Hello John!     |
      | Sophia  | Hello Sophia!   |
      | Charlie | Hello Charlie!  |
      | Emily   | Hello Emily!    |