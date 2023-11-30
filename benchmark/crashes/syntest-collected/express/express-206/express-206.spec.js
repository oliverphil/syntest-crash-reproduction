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
		const localName = -1;
		const options = true;
		const view = new View(localName, options)
		const localName1 = -1;
		const options1 = true;
		const view1 = new View(localName1, options1)
		const localDir = 293.8186437468005;
		const file = null;
		const resolveReturnValue = await view1.resolve(localDir, file)
		const localName2 = -1;
		const options2 = true;
		const view2 = new View(localName2, options2)
		const localName3 = -1;
		const callback = -216.611386501428;
		const renderReturnValue = await view2.render(localName3, callback)
		const localName4 = -1;
		const options3 = true;
		const view3 = new View(localName4, options3)
		const localDir1 = 293.8186437468005;
		const callback1 = "setprototypeof";
		const renderReturnValue1 = await view3.render(localDir1, callback1)
		
	})
})
