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
		const localName = 0;
		const options = true;
		const view = new View(localName, options)
		const options1 = () => {};
		const callback = "Request aborted";
		const renderReturnValue = await view.render(options1, callback)
		const localName1 = 0;
		const options2 = true;
		const view1 = new View(localName1, options2)
		const localDir = "";
		const options3 = () => {};
		const resolveReturnValue = await view1.resolve(localDir, options3)
		
	})
})
