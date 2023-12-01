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
		const localHelp = new Help()
		const cmd = undefined;
		const anon = 2;
		const helper = new Help(anon)
		const formatHelpReturnValue = await localHelp.formatHelp(cmd, helper)
		const localHelp1 = new Help()
		const localName = () => {};
		const argument = {
			"name": localName
		}
		const anon1 = "[second]";
		const argumentTermReturnValue = await localHelp1.argumentTerm(argument, anon1)
		const localHelp2 = new Help()
		const description = () => {};
		const cmd1 = {
			"description": description
		}
		const anon2 = 24;
		const commandDescriptionReturnValue = await localHelp2.commandDescription(cmd1, anon2)
		
	})
})
