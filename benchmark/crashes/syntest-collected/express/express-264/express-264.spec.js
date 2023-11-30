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
		const localName = 39.45195858340617;
		const options = false;
		const anon = null;
		const view = new View(localName, options, anon)
		const options1 = {}
		const callback = "logger";
		const renderReturnValue = await view.render(options1, callback)
		const localName1 = 39.45195858340617;
		const options2 = false;
		const anon1 = null;
		const view1 = new View(localName1, options2, anon1)
		const anon2 = null;
		const lookupReturnValue = await view1.lookup(anon2)
		
	})
})
