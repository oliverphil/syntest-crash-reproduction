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
		const anon = () => {};
		const localHelp = new Help(anon)
		const flags = ", ";
		const description = true;
		const argument = new Option(flags, description)
		const argumentTermReturnValue = await localHelp.argumentTerm(argument)
		const anon1 = () => {};
		const localHelp1 = new Help(anon1)
		const match = () => {};
		const substr = () => {};
		const str = {
			"match": match,
			"substr": substr
		}
		const width = 0;
		const indent = -276;
		const assignment = {}
		const wrapReturnValue = await localHelp1.wrap(str, width, indent, assignment)
		const anon2 = () => {};
		const localHelp2 = new Help(anon2)
		const anon3 = () => {};
		const match1 = () => {};
		const substr1 = () => {};
		const str1 = {
			"match": match1,
			"substr": substr1
		}
		const anon4 = null;
		const padWidthReturnValue = await localHelp2.padWidth(anon3, str1, anon4)
		
	})
})
