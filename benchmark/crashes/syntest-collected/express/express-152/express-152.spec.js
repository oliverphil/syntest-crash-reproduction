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
		const localName = -912;
		const options = {}
		const view = new View(localName, options)
		const localName1 = -912;
		const options1 = {}
		const view1 = new View(localName1, options1)
		const localName2 = -912;
		const callback = false;
		const renderReturnValue = await view1.render(localName2, callback)
		const localName3 = -912;
		const options2 = {}
		const view2 = new View(localName3, options2)
		const arrayElement = () => {};
		const options3 = [arrayElement]
		const callback1 = "string";
		const renderReturnValue1 = await view2.render(options3, callback1)
		
	})
})
