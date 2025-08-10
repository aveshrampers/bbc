// Generated from: tests\features\Search.feature
import { test } from "playwright-bdd";

test.describe('Search for Sport in 2023', () => {

  test('Validate search returns at least 4 results', async ({ Given, page, When, Then }) => { 
    await Given('I am on the BBC Sport page', null, { page }); 
    await When('I search for "Sport in 2023"', null, { page }); 
    await Then('I should see at least 4 relevant search results', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\Search.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on the BBC Sport page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I search for \"Sport in 2023\"","stepMatchArguments":[{"group":{"start":13,"value":"\"Sport in 2023\"","children":[{"start":14,"value":"Sport in 2023","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I should see at least 4 relevant search results","stepMatchArguments":[{"group":{"start":22,"value":"4","children":[]},"parameterTypeName":"int"}]}]},
]; // bdd-data-end