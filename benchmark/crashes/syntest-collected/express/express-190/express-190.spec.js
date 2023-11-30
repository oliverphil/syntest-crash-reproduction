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
		const localName = -304;
		const options = false;
		const anon = {}
		const view = new View(localName, options, anon)
		const options1 = {}
		const callback = "error";
		const anon1 = true;
		const renderReturnValue = await view.render(options1, callback, anon1)
		const localName1 = -304;
		const options2 = false;
		const anon2 = {}
		const view1 = new View(localName1, options2, anon2)
		const anon3 = true;
		const callback1 = true;
		const callback2 = "error";
		const renderReturnValue1 = await view1.render(anon3, callback1, callback2)
		
	})
})
