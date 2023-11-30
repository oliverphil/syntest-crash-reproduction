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
		const localName = -629.0506803253055;
		const options = 859;
		const view = new View(localName, options)
		const localName1 = -629.0506803253055;
		const options1 = 859;
		const view1 = new View(localName1, options1)
		const options2 = {}
		const callback = () => {};
		const anon = false;
		const renderReturnValue = await view1.render(options2, callback, anon)
		
	})
})
