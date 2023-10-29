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
		const anon = undefined;
		const localHelp = new Help(anon)
		const argument = "--no-";
		const argumentDescriptionReturnValue = await localHelp.argumentDescription(argument)
		const anon1 = undefined;
		const localHelp1 = new Help(anon1)
		const cmd = "{wDBS[^Gomk3rCO6\"BzK\n\\rP#z)-d-0U>CyF>\nxE1i{fC";
		const argument1 = "--no-";
		const anon2 = true;
		const helper = new Help(argument1, anon2)
		const anon3 = true;
		const longestOptionTermLengthReturnValue = await localHelp1.longestOptionTermLength(cmd, helper, anon3)
		const anon4 = undefined;
		const localHelp2 = new Help(anon4)
		const description = () => {};
		const cmd1 = {
			"description": description
		}
		const subcommandDescriptionReturnValue = await localHelp2.subcommandDescription(cmd1)
		
	})
})
