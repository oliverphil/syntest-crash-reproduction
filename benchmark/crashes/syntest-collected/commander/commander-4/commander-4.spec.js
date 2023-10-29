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
		const match = () => {};
		const substr = () => {};
		const str = {
			"match": match,
			"substr": substr
		}
		const width = -4.597553902170799;
		const indent = -942.9009709873609;
		const assignment = {}
		const wrapReturnValue = await localHelp.wrap(str, width, indent, assignment)
		
	})
})
