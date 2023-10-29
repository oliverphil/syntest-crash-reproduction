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
		const arrayElement = undefined;
		const args = [arrayElement]
		const localName = 363.636931558495;
		const arrayElement1 = 653.2604660791521;
		const aliases = [arrayElement1]
		const options = "E/P{7:pMLkP'";
		const cmd = {
			"_args": args,
			"_name": localName,
			"_aliases": aliases,
			"options": options
		}
		const subcommandTermReturnValue = await localHelp.subcommandTerm(cmd)
		
	})
})
