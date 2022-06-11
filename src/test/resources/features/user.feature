@smoke
Feature: User Verification


  Scenario: verify information about logged user
    Given I logged in Bookit api using "johnnyDept@msu.edu" and "feodorascough"
    When I get the current user information from api
    Then status code should be 200


  Scenario: verify information about logged user from api and database
    Given I logged in Bookit api using "johnnyDept@msu.edu" and "feodorascough"
    When I get the current user information from api
    Then the information about current user from api and database should match

  @db
  Scenario: three point/layer (UI,API,DATABASE)
    Given user logs in using "johnnyDept@msu.edu" "feodorascough"
    And user is on the my self page
    And I logged in Bookit api using "johnnyDept@msu.edu" and "feodorascough"
    When I get the current user information from api
    Then UI,API and Database user information must be match

  @db
  Scenario Outline: three point/layer (UI,API,DATABASE)
    Given user logs in using "<email>" "<password>"
    And user is on the my self page
    And I logged in Bookit api using "<email>" and "<password>"
    When I get the current user information from api
    Then UI,API and Database user information must be match

    Examples:
      | email                 | password      |
      | johnnyDept@msu.edu    | feodorascough |
      | FelonyDaz@yolasite.com| lissiefinnis  |
