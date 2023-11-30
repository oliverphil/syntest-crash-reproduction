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
		const localName = 712.7305143237527;
		const options = false;
		const view = new View(localName, options)
		const localDir = -1;
		const file = {}
		const resolveReturnValue = await view.resolve(localDir, file)
		const localName1 = 712.7305143237527;
		const options1 = false;
		const view1 = new View(localName1, options1)
		const options2 = "'app.router' is deprecated!\nPlease see the 3.x to 4.x migration guide for details on how to update your app.";
		const callback = () => {};
		const renderReturnValue = await view1.render(options2, callback)
		const localName2 = 712.7305143237527;
		const options3 = false;
		const view2 = new View(localName2, options3)
		const options4 = "'app.router' is deprecated!\nPlease see the 3.x to 4.x migration guide for details on how to update your app.";
		const callback1 = () => {};
		const arrayElement = "0";
		const callback2 = [callback1, arrayElement]
		const renderReturnValue1 = await view2.render(options4, callback2)
		
	})
})
