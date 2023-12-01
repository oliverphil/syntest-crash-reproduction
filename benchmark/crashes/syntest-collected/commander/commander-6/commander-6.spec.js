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
		const anon = 80;
		const localHelp = new Help(anon)
		const cmd = false;
		const helper = new Help()
		const anon1 = 866.3846918285622;
		const longestArgumentTermLengthReturnValue = await localHelp.longestArgumentTermLength(cmd, helper, anon1)
		const helper1 = new Help()
		const cmd1 = false;
		const commandUsageReturnValue = await helper1.commandUsage(cmd1)
		
	})
})
