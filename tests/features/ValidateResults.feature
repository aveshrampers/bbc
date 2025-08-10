Feature: Validate Grand Prix Results

  Scenario: Validate top 3 results of 2023 Las Vegas Grand Prix
    Given I am on the BBC Sport F1 results page
    When I look for the 2023 Las Vegas Grand Prix results
    Then the top 3 finishers should be
      | Position | Driver         | Team     | Grid | Pits | Fastest_Lap | Race_Time     | Points |
      | 1        | Max Verstappen | Red Bull | 2    | 2    | 1:35.614    | 1:29:08.289   | 25     |
      | 2        | George Russell | Mercedes | 3    | 2    | 1:36.071    | 23.091 behind | 4      |
      | 3        | Sergio Perez   | Red Bull | 11   | 2    | 1:35.939    | 2.241 behind  | 15     |
