import { createBdd } from "playwright-bdd";
import { test } from "../../fixtures/fixtures"; // Import the test fixture

const { Given, When, Then } = createBdd(test);

Given("I am on the BBC Sport page", async ({ searchPage }) => {
  await searchPage.navigateToUrl("/sport");
});

When("I search for {string}", async ({ searchPage }, arg) => {
  // Step: When I search for "Sport in 2023"
  await searchPage.searchArticle(arg);
});

Then(
  "I should see at least {int} relevant search results",
  async ({ searchPage }, arg) => {
    // Step: Then I should see at least 4 relevant search results
    await searchPage.expectResultsToBeGreaterThanOrEqual(arg);
  }
);
