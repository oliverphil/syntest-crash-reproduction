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
		const localName = -279;
		const defaultEngine = 68;
		const root = -180.45721960078868;
		const engines = "Router.use() requires a middleware function";
		const options = {
			"defaultEngine": defaultEngine,
			"root": root,
			"engines": engines
		}
		const view = new View(localName, options)
		const localName1 = 304;
		const anon = "secure";
		const lookupReturnValue = await view.lookup(localName1, anon)
		const localName2 = -279;
		const defaultEngine1 = 68;
		const root1 = -180.45721960078868;
		const engines1 = "Router.use() requires a middleware function";
		const options1 = {
			"defaultEngine": defaultEngine1,
			"root": root1,
			"engines": engines1
		}
		const view1 = new View(localName2, options1)
		const options2 = "EISDIR";
		const defaultEngine2 = 68;
		const renderReturnValue = await view1.render(options2, defaultEngine2)
		
	})
})
