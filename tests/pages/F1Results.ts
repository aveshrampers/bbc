import { expect, type Locator, type Page } from "@playwright/test";
import { DataTable } from "playwright-bdd";

/**
 * Represents the BBC Sport Formula 1 Results page.
 * Encapsulates locators and methods for interacting with this page.
 */
export class F1ResultsPage {

  readonly page: Page;

  readonly datePicker: Locator;

  readonly circuitButton: Locator;

  readonly raceResultsTable: Locator;

  readonly raceResultsRow: Locator;

  readonly raceDetails: Locator;

  /**
   * Initializes a new instance of the F1ResultsPage class.
   * @param page The Playwright Page object to interact with.
   */
  constructor(page: Page) {
    this.page = page;

    // Locators
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

  /**
   * Fetches the race results from the table, validates the count,
   * and compares the data against the expected results from a DataTable.
   * @param count The expected number of rows to validate.
   * @param dataTable The Gherkin DataTable containing the expected race results.
   */
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

    // Assert that the number of rows found matches the number specified in the step.
    expect(actualTableData.length).toBe(count);

    // Assert that the data extracted from the page matches the expected data from the feature file.
    expect(
      actualTableData,
      "Must return the exact race results and summary"
    ).toEqual(expectedData);
  }

  /**
   * Navigates to a specific race's results by selecting the year and then the circuit.
   */
  async selectRaceResult() {
    await this.datePicker.click();
    await this.circuitButton.click();
  }
  /**
   * Navigates the page to a specific URL path relative to the baseURL.
   * @param url The URL path to navigate to (e.g., "/sport/formula1/results").
   */
  async navigateToUrl(url: string) {
    await this.page.goto(url);
  }
}
