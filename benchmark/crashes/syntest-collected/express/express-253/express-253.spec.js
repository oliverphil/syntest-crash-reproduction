// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let View;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/view.js")];
		(View = require("../instrumented/express/lib/view.js"));
	});

	it("Test 1", async () => {
		// Test
		const localName = -418;
		const defaultEngine = null;
		const root = 62;
		const engines = {}
		const options = {
			"defaultEngine": defaultEngine,
			"root": root,
			"engines": engines
		}
		const view = new View(localName, options)
		const arrayElement = "safe-buffer";
		const arrayElement1 = true;
		const options1 = [arrayElement, arrayElement1]
		const callback = 420;
		const renderReturnValue = await view.render(options1, callback)
		
	})
})
