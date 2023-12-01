// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let Help;
	let InvalidArgumentError;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/commanderjs/lib/help.js")];
		delete require.cache[require.resolve("../instrumented/commanderjs/lib/error.js")];
		({Help} = require("../instrumented/commanderjs/lib/help.js"));
		({InvalidArgumentError} = require("../instrumented/commanderjs/lib/error.js"));
	});

	it("Test 1", async () => {
		// Test
		const anon = () => {};
		const localHelp = new Help(anon)
		const arrayElement = undefined;
		const options = [arrayElement]
		const hasHelpOption = false;
		const helpShortFlag = false;
		const findOption = () => {};
		const helpLongFlag = false;
		const createOption = () => {};
		const helpDescription = 10;
		const arrayElement1 = {}
		const arrayElement2 = -794;
		const helpFlags = [arrayElement1, arrayElement2]
		const cmd = {
			"options": options,
			"_hasHelpOption": hasHelpOption,
			"_helpShortFlag": helpShortFlag,
			"_findOption": findOption,
			"_helpLongFlag": helpLongFlag,
			"createOption": createOption,
			"_helpDescription": helpDescription,
			"_helpFlags": helpFlags
		}
		const anon1 = null;
		const arrayElement3 = null;
		const arrayElement4 = "--pond";
		const anon2 = [arrayElement3, arrayElement4]
		const visibleOptionsReturnValue = await localHelp.visibleOptions(cmd, anon1, anon2)
		const anon3 = () => {};
		const localHelp1 = new Help(anon3)
		const message = 208.8439766135225;
		const argument = new InvalidArgumentError(message)
		const argumentTermReturnValue = await localHelp1.argumentTerm(argument)
		
	})
})
