# BBC Website Test Automation

This project contains automated tests for BBC website using Playwright with TypeScript and Cucumber for BDD-style testing.

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)
- A modern web browser (Chrome/Firefox/Safari)

## Project Structure

```
├── features/           # Gherkin feature files
│   ├── Search.feature
│   └── ValidateResults.feature
├── steps/             # Step definitions
│   ├── search.steps.ts
│   └── ValidateResults.steps.ts
├── tests/             # Additional test files
├── playwright.config.ts    # Playwright configuration
└── package.json       # Project dependencies
```

## Installation

1. Clone this repository:
```bash
git clone <repository-url>
cd bbc
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests

To run all tests:
```bash
npm test
```

To run a specific feature file:
```bash
npx playwright test features/Search.feature
```

To run tests with UI mode:
```bash
npx playwright test --ui
```

## Test Reports

After test execution, HTML reports are automatically generated in the `playwright-report` directory. To view the latest report:

```bash
npx playwright show-report
```

## Features

The test suite currently includes:
- Search functionality testing
- Formula 1 results validation

## Writing Tests

Tests are written in Gherkin syntax using feature files located in the `features` directory. Step definitions are implemented in TypeScript under the `steps` directory.

Example feature file:
```gherkin
Feature: Search Functionality
  Scenario: User performs a search
    Given user is on BBC homepage
    When user searches for specific content
    Then relevant results should be displayed
```

## Configuration

The project uses `playwright.config.ts` for configuration settings. Modify this file to adjust:
- Browser settings
- Timeouts
- Test parallelization
- Reporter options
- Other Playwright configurations

## Contributing

1. Create a new branch for your feature/fix
2. Write/update tests as needed
3. Ensure all tests pass
4. Submit a pull request

## Troubleshooting

If you encounter any issues:
1. Ensure all dependencies are installed
2. Check Playwright browser installations
3. Review the error logs in `test-results` directory
4. Verify your Node.js version

## License

[Add your license information here]