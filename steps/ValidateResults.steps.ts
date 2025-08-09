import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import type { DataTable } from "playwright-bdd"; // Add this import for DataTable type
const { Given, When, Then } = createBdd();

Given("I am on the BBC Sport F1 results page", async ({ page }) => {
  // Step: Given I am on the BBC Sport F1 results page
  // From: features\ValidateResults.feature:4:5
  await page.goto("/sport/formula1/results");
});

When(
  "I look for the {int} Las Vegas Grand Prix results",
  async ({ page }, arg: number) => {
    // Step: When I look for the 2023 Las Vegas Grand Prix results
    await page.getByTestId("datepicker-date-link-2023").click();
    await page
      .getByRole("button", { name: "Las Vegas Grand Prix, Las" })
      .click();
    // From: features\ValidateResults.feature:5:5
  }
);

Then(
  "the top {int} finishers should be",
  async ({ page }, arg: number, dataTable: DataTable) => {
    // Step: Then the top 3 finishers should be
    const table = page.locator(
      '[data-stage-id="urn:bbc:sportsdata:formula1:stage:las-vegas-grand-prix"] [data-testid="sport-table"]'
    );
    const rows = table.locator("tbody tr");
    const rowCount = await rows.count();
    const actualTableData: {
      Position: string;
      Driver: string;
      Team: string;
      Grid: string;
      Pits: string;
      Fastest_Lap: string;
      Race_Time: string;
      Points: string;
    }[] = [];
    for (let i = 0; i < rowCount; i++) {
      const row = rows.nth(i);
      const cells = row.locator("td div span:nth-child(1)");
      const cellTexts = await cells.allTextContents();
      actualTableData.push({
        Position: cellTexts[0].trim(),
        Driver: cellTexts[1].trim(),
        Team: cellTexts[2].trim(),
        Grid: cellTexts[4].trim(),
        Pits: cellTexts[5].trim(),
        Fastest_Lap: cellTexts[6].trim(),
        Race_Time: cellTexts[7].trim(),
        Points: cellTexts[8].trim(),
      });
    }

    const expectedData = dataTable.hashes();
    expect(actualTableData).toEqual(expectedData);
  }
);
