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
		const localName = undefined;
		const options = true;
		const view = new View(localName, options)
		const localName1 = null;
		const anon = 114;
		const lookupReturnValue = await view.lookup(localName1, anon)
		const localName2 = undefined;
		const options1 = true;
		const view1 = new View(localName2, options1)
		
	})
})
