import { test as base } from "playwright-bdd";
import { F1ResultsPage } from "../tests/pages/F1Results";
import { SearchPage } from "../tests/pages/Search";

export const test = base.extend<{ f1ResultsPage: F1ResultsPage, searchPage: SearchPage }>({
  f1ResultsPage: async ({ page }, use) => {
    await use(new F1ResultsPage(page));
  },
  searchPage: async ({ page }, use) => {
    await use(new SearchPage(page));
  },
});
