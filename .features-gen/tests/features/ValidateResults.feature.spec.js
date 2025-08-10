// Generated from: tests\features\ValidateResults.feature
import { test } from "playwright-bdd";

test.describe('Validate Grand Prix Results', () => {

  test('Validate top 3 results of 2023 Las Vegas Grand Prix', async ({ Given, page, When, Then }) => { 
    await Given('I am on the BBC Sport F1 results page', null, { page }); 
    await When('I look for the 2023 Las Vegas Grand Prix results', null, { page }); 
    await Then('the top 3 finishers should be', {"dataTable":{"rows":[{"cells":[{"value":"Position"},{"value":"Driver"},{"value":"Team"},{"value":"Grid"},{"value":"Pits"},{"value":"Fastest_Lap"},{"value":"Race_Time"},{"value":"Points"}]},{"cells":[{"value":"1"},{"value":"Max Verstappen"},{"value":"Red Bull"},{"value":"2"},{"value":"2"},{"value":"1:35.614"},{"value":"1:29:08.289"},{"value":"25"}]},{"cells":[{"value":"2"},{"value":"George Russell"},{"value":"Mercedes"},{"value":"3"},{"value":"2"},{"value":"1:36.071"},{"value":"23.091 behind"},{"value":"4"}]},{"cells":[{"value":"3"},{"value":"Sergio Perez"},{"value":"Red Bull"},{"value":"11"},{"value":"2"},{"value":"1:35.939"},{"value":"2.241 behind"},{"value":"15"}]}]}}, { page }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\ValidateResults.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on the BBC Sport F1 results page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I look for the 2023 Las Vegas Grand Prix results","stepMatchArguments":[{"group":{"start":15,"value":"2023","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then the top 3 finishers should be","stepMatchArguments":[{"group":{"start":8,"value":"3","children":[]},"parameterTypeName":"int"}]}]},
]; // bdd-data-end