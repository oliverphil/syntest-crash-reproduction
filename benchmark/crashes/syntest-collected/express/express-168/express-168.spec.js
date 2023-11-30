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
		const localName = -546;
		const defaultEngine = null;
		const root = "://";
		const engines = {}
		const options = {
			"defaultEngine": defaultEngine,
			"root": root,
			"engines": engines
		}
		const anon = () => {};
		const view = new View(localName, options, anon)
		const options1 = 0;
		const callback = true;
		const anon1 = {}
		const renderReturnValue = await view.render(options1, callback, anon1)
		
	})
})
