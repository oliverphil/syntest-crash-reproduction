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
		const localName = 93;
		const options = -225;
		const view = new View(localName, options)
		const options1 = {}
		const callback = 200;
		const renderReturnValue = await view.render(options1, callback)
		const localName1 = 93;
		const options2 = -225;
		const view1 = new View(localName1, options2)
		const localName2 = 93;
		const callback1 = null;
		const renderReturnValue1 = await view1.render(localName2, callback1)
		const localName3 = 93;
		const options3 = -225;
		const view2 = new View(localName3, options3)
		const options4 = () => {};
		const callback2 = true;
		const renderReturnValue2 = await view2.render(options4, callback2)
		const localName4 = 93;
		const options5 = -225;
		const view3 = new View(localName4, options5)
		const localName5 = 93;
		const callback3 = null;
		const renderReturnValue3 = await view3.render(localName5, callback3)
		
	})
})
