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
		const localName = -928.0972126283641;
		const options = true;
		const view = new View(localName, options)
		const options1 = 475;
		const callback = "callback function required";
		const arrayElement = 2.718281828459045;
		const arrayElement1 = true;
		const anon = [arrayElement, arrayElement1]
		const renderReturnValue = await view.render(options1, callback, anon)
		const localName1 = -928.0972126283641;
		const options2 = true;
		const view1 = new View(localName1, options2)
		const options3 = () => {};
		const callback1 = "callback function required";
		const anon1 = {}
		const renderReturnValue1 = await view1.render(options3, callback1, anon1)
		
	})
})
