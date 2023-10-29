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
		const anon = {}
		const localHelp = new Help(anon)
		const cmd = "Arguments:";
		const anon1 = () => {};
		const helper = new Help(anon1)
		const anon2 = 40;
		const formatHelpReturnValue = await localHelp.formatHelp(cmd, helper, anon2)
		const anon3 = () => {};
		const helper1 = new Help(anon3)
		const flags = "|";
		const description = "";
		const argument = new Option(flags, description)
		const argumentTermReturnValue = await helper1.argumentTerm(argument)
		const anon4 = () => {};
		const helper2 = new Help(anon4)
		const anon5 = {}
		const commandDescriptionReturnValue = await helper2.commandDescription(anon5)
		
	})
})
