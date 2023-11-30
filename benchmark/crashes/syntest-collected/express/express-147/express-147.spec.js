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
		const localName = 211;
		const defaultEngine = "req.acceptsCharset: Use acceptsCharsets instead";
		const root = null;
		const engines = {}
		const options = {
			"defaultEngine": defaultEngine,
			"root": root,
			"engines": engines
		}
		const anon = 0;
		const view = new View(localName, options, anon)
		const localDir = "strong";
		const file = 3;
		const resolveReturnValue = await view.resolve(localDir, file)
		const localName1 = 211;
		const defaultEngine1 = "req.acceptsCharset: Use acceptsCharsets instead";
		const root1 = null;
		const engines1 = {}
		const options1 = {
			"defaultEngine": defaultEngine1,
			"root": root1,
			"engines": engines1
		}
		const anon1 = 0;
		const view1 = new View(localName1, options1, anon1)
		const options2 = "s:";
		const callback = null;
		const renderReturnValue = await view1.render(options2, callback)
		
	})
})
