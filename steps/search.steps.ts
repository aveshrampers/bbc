import { createBdd } from "playwright-bdd";
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

Given("I am on the BBC Sport page", async ({ page }) => {
  await page.goto("/sport");
});

When("I search for {string}", async ({ page }, arg) => {
  // Step: When I search for "Sport in 2023"
  await page.getByRole("link", { name: "Search BBC" }).click();
  await page
    .getByRole("textbox", { name: "Search news, topics and more" })
    .fill(arg);
});

Then("I should see at least {int} relevant search results", async ({ page }, arg) => {
  // Step: Then I should see at least 4 relevant search results
  const results = await page.locator(`[data-testid="newport-card"]`).all();
  console.log(`Number of search results: ${results.length}`);
  console.log(`Expected at least: ${arg}`);
  expect(results.length).toBeGreaterThanOrEqual(arg);
});
