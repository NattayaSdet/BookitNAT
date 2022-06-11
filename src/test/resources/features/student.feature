Feature: Create Student

  Scenario: Create student as a teacher and verify status code is 201
    Given I logged in Bookit api using "zamantha@msu.edu" and "barbabaslyst"
    When I send POST request "/api/students/student" endpoint with following information
      | first-name      | harold                   |
      | last-name       | finch                    |
      | email           | harold534345@natmail.com |
      | password        | abc123                   |
      | role            | student-team-member      |
      | campus-location | CA                       |
      | batch-number    | 8                        |
      | team-name       | Nukes                    |
    Then status code should be 201
    And I delete previously added student

  @wip
  Scenario: Test new properties
    Given I get environment information




