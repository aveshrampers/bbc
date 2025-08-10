Feature: Search for Sport in 2023

  Scenario: Validate search returns at least 4 results
    Given I am on the BBC Sport page
    When I search for "Sport in 2023"
    Then I should see at least 4 relevant search results
