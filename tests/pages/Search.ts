import { expect, type Locator, type Page } from "@playwright/test";

/**
 * Represents the BBC search functionality.
 * Encapsulates locators and methods for performing searches and validating results.
 */
export class SearchPage {

  readonly page: Page;

  readonly search: Locator;

  readonly searchInput: Locator;

  readonly searchButton: Locator;

  readonly results: Locator;

  /**
   * Initializes a new instance of the SearchPage class.
   * @param page The Playwright Page object to interact with.
   */
  constructor(page: Page) {
    this.page = page;

    // Locators
    this.search = this.page.getByRole("link", { name: "Search BBC" });
    this.searchInput = this.page.getByRole("textbox", {
      name: "Search news, topics and more",
    });
    this.searchButton = this.page.getByRole("button", { name: "Search" });
    // This locator finds all elements with a 'data-testid' of 'newport-card',
    // which represent individual search results.
    this.results = this.page.getByTestId(`newport-card`);
  }

  /**
   * Performs a search for a given query string.
   * @param query The text to search for.
   */
  async searchArticle(query: string) {
    await this.search.click();
    await this.searchInput.fill(query);
    await this.searchButton.click();
  }

  /**
   * Asserts that the number of search results is greater than or equal to a specified minimum.
   * @param minCount The minimum expected number of results.
   */
  async expectResultsToBeGreaterThanOrEqual(minCount: number) {
    // Using expect().toBeGreaterThanOrEqual() waits for the count to be resolved
    // before performing the assertion.
    expect(await this.results.count()).toBeGreaterThanOrEqual(minCount);
  }

  /**
   * Navigates the page to a specific URL path relative to the baseURL.
   * @param url The URL path to navigate to (e.g., "/").
   */
  async navigateToUrl(url: string) {
    await this.page.goto(url);
  }
}
