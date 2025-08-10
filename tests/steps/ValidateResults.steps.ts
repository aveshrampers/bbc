import { createBdd } from "playwright-bdd";
import { DataTable } from "playwright-bdd"; // Add this import for DataTable type
import { test } from "../../fixtures/fixtures";
const { Given, When, Then } = createBdd(test);

Given("I am on the BBC Sport F1 results page", async ({ f1ResultsPage }) => {
  // Step: Given I am on the BBC Sport F1 results page
  await f1ResultsPage.navigateToUrl("/sport/formula1/results");
});

When(
  "I look for the {int} Las Vegas Grand Prix results",
  async ({ f1ResultsPage }) => {
    // Step: When I look for the 2023 Las Vegas Grand Prix results
    await f1ResultsPage.selectRaceResult();
  }
);

Then(
  "the top {int} finishers should be",
  async ({ f1ResultsPage }, count: number, dataTable: DataTable) => {
    // Step: Then the top 3 finishers should be
    await f1ResultsPage.getRaceResults(count, dataTable);
  }
);
