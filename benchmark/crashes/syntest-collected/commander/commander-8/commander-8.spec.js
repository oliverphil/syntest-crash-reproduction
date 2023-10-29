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
		const argsDescription = {}
		const arrayElement = false;
		const arrayElement1 = true;
		const arrayElement2 = {}
		const arrayElement3 = [arrayElement1, arrayElement2]
		const args = [arrayElement, arrayElement3]
		const cmd = {
			"_argsDescription": argsDescription,
			"_args": args
		}
		const visibleArgumentsReturnValue = await localHelp.visibleArguments(cmd)
		
	})
})
