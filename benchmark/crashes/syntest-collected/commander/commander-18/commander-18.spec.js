// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let Help;
	let Option;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/commanderjs/lib/help.js")];
		delete require.cache[require.resolve("../instrumented/commanderjs/lib/option.js")];
		({Help} = require("../instrumented/commanderjs/lib/help.js"));
		({Option} = require("../instrumented/commanderjs/lib/option.js"));
	});

	it("Test 1", async () => {
		// Test
		const localHelp = new Help()
		const flags = "|";
		const description = false;
		const argument = new Option(flags, description)
		const anon = -139;
		const argumentDescriptionReturnValue = await localHelp.argumentDescription(argument, anon)
		const localHelp1 = new Help()
		const arrayElement = undefined;
		const arrayElement1 = undefined;
		const anon1 = -139;
		const arrayElement2 = [arrayElement1, anon1]
		const arrayElement3 = false;
		const flags1 = [arrayElement, arrayElement2, arrayElement3]
		const description1 = false;
		const flags2 = "|";
		const cmd = new Option(flags1, description1, flags2)
		const description2 = false;
		const commandDescriptionReturnValue = await localHelp1.commandDescription(cmd, description2)
		const localHelp2 = new Help()
		const cmd1 = null;
		const helper = new Help()
		const longestArgumentTermLengthReturnValue = await localHelp2.longestArgumentTermLength(cmd1, helper)
		
	})
})
