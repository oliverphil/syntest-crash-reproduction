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
		const anon = 60;
		const localHelp = new Help(anon)
		const cmd = () => {};
		const helper = new Help()
		const padWidthReturnValue = await localHelp.padWidth(cmd, helper)
		const helper1 = new Help()
		const cmd1 = "Command passed to .addCommand() must have a name";
		const visibleOptions = () => {};
		const optionTerm = () => {};
		const helper2 = {
			"visibleOptions": visibleOptions,
			"optionTerm": optionTerm
		}
		const anon1 = null;
		const longestOptionTermLengthReturnValue = await helper1.longestOptionTermLength(cmd1, helper2, anon1)
		const helper3 = new Help()
		const anon2 = null;
		const visibleOptions1 = () => {};
		const optionTerm1 = () => {};
		const helper4 = {
			"visibleOptions": visibleOptions1,
			"optionTerm": optionTerm1
		}
		const visibleOptions2 = () => {};
		const optionTerm2 = () => {};
		const helper5 = {
			"visibleOptions": visibleOptions2,
			"optionTerm": optionTerm2
		}
		const longestSubcommandTermLengthReturnValue = await helper3.longestSubcommandTermLength(anon2, helper4, helper5)
		
	})
})
