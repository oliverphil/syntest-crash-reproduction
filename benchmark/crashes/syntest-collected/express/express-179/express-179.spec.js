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
		const localName = -919;
		const options = true;
		const view = new View(localName, options)
		const options1 = () => {};
		const callback = "csrf";
		const renderReturnValue = await view.render(options1, callback)
		const localName1 = -919;
		const options2 = true;
		const view1 = new View(localName1, options2)
		const options3 = undefined;
		const callback1 = null;
		const renderReturnValue1 = await view1.render(options3, callback1)
		const localName2 = -919;
		const options4 = true;
		const view2 = new View(localName2, options4)
		const options5 = {}
		const callback2 = {}
		const options6 = true;
		const renderReturnValue2 = await view2.render(options5, callback2, options6)
		const localName3 = -919;
		const options7 = true;
		const view3 = new View(localName3, options7)
		const options8 = true;
		const callback3 = "ECONNABORTED";
		const renderReturnValue3 = await view3.render(options8, callback3)
		
	})
})
