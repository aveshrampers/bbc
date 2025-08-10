import { expect, type Locator, type Page } from "@playwright/test";

export class SearchPage {
  readonly page: Page;
  readonly search: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly results: Locator;

  constructor(page: Page) {
    this.page = page;
    this.search = this.page.getByRole("link", { name: "Search BBC" });
    this.searchInput = this.page.getByRole("textbox", {
      name: "Search news, topics and more",
    });
    this.searchButton = this.page.getByRole("button", { name: "Search" });
    this.results = this.page.getByTestId(`newport-card`);
  }

  async searchArticle(query: string) {
    await this.search.click();
    await this.searchInput.fill(query);
    await this.searchButton.click();
  }

  async expectResultsToBeGreaterThanOrEqual(arg: number) {
    expect(await this.results.count()).toBeGreaterThanOrEqual(arg);
  }

  async navigateToUrl(url: string) {
    await this.page.goto(url);
  }
}
