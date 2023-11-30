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
		const localName = -987.3735476329501;
		const options = true;
		const view = new View(localName, options)
		const options1 = null;
		const callback = false;
		const anon = () => {};
		const renderReturnValue = await view.render(options1, callback, anon)
		const localName1 = -987.3735476329501;
		const options2 = true;
		const view1 = new View(localName1, options2)
		const localName2 = {}
		const localName3 = -987.3735476329501;
		const lookupReturnValue = await view1.lookup(localName2, localName3)
		
	})
})
