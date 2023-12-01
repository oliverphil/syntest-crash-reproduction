// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let Help;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/commanderjs/lib/help.js")];
		({Help} = require("../instrumented/commanderjs/lib/help.js"));
	});

	it("Test 1", async () => {
		// Test
		const anon = null;
		const localHelp = new Help(anon)
		const cmd = false;
		const helper = new Help()
		const formatHelpReturnValue = await localHelp.formatHelp(cmd, helper)
		const helper1 = new Help()
		const arrayElement = 0.4;
		const arrayElement1 = {}
		const arrayElement2 = [arrayElement1]
		const cmd1 = [arrayElement, arrayElement2]
		const visibleOptions = () => {};
		const optionTerm = () => {};
		const helper2 = {
			"visibleOptions": visibleOptions,
			"optionTerm": optionTerm
		}
		const anon1 = null;
		const longestOptionTermLengthReturnValue = await helper1.longestOptionTermLength(cmd1, helper2, anon1)
		const anon2 = null;
		const localHelp1 = new Help(anon2)
		const cmd2 = false;
		const option = {
			"flags": cmd2
		}
		const optionTermReturnValue = await localHelp1.optionTerm(option)
		
	})
})
