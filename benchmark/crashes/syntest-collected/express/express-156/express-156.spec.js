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
		const localName = 304;
		const defaultEngine = {}
		const root = false;
		const engines = {}
		const options = {
			"defaultEngine": defaultEngine,
			"root": root,
			"engines": engines
		}
		const view = new View(localName, options)
		const options1 = false;
		const callback = undefined;
		const renderReturnValue = await view.render(options1, callback)
		const localName1 = 304;
		const defaultEngine1 = {}
		const root1 = false;
		const engines1 = {}
		const options2 = {
			"defaultEngine": defaultEngine1,
			"root": root1,
			"engines": engines1
		}
		const view1 = new View(localName1, options2)
		const options3 = "GET";
		const callback1 = false;
		const renderReturnValue1 = await view1.render(options3, callback1)
		
	})
})
