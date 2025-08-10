import { expect, type Locator, type Page } from "@playwright/test";
import { DataTable } from "playwright-bdd";

export class F1ResultsPage {
  readonly page: Page;
  readonly datePicker: Locator;
  readonly circuitButton: Locator;
  readonly raceResultsTable: Locator;
  readonly raceResultsRow: Locator;
  readonly raceDetails: Locator;

  constructor(page: Page) {
    this.page = page;
    this.datePicker = this.page.getByTestId("datepicker-date-link-2023");
    this.circuitButton = this.page.getByRole("button", {
      name: "Las Vegas Grand Prix, Las",
    });
    this.raceResultsTable = this.page.locator(
      '[data-stage-id="urn:bbc:sportsdata:formula1:stage:las-vegas-grand-prix"] [data-testid="sport-table"]'
    );
    this.raceResultsRow = this.page.locator("tbody tr");
    this.raceDetails = this.page.locator("td div span:nth-child(1)");
  }

  async getRaceResults(count: number, dataTable: DataTable) {
    const table = this.raceResultsTable;
    const rows = table.locator(this.raceResultsRow);
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
      const cells = row.locator(this.raceDetails);
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
    expect(actualTableData.length).toBe(count);
    expect(
      actualTableData,
      "Must return the exact race results and summary"
    ).toEqual(expectedData);
  }

  async selectRaceResult() {
    await this.datePicker.click();
    await this.circuitButton.click();
  }
  async navigateToUrl(url: string) {
    await this.page.goto(url);
  }
}
