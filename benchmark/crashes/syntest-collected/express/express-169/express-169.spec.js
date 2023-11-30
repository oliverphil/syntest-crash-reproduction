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
		const localName = 3;
		const options = () => {};
		const view = new View(localName, options)
		const options1 = -231.68105296669762;
		const callback = ".use app under %s";
		const renderReturnValue = await view.render(options1, callback)
		const localName1 = 3;
		const options2 = () => {};
		const view1 = new View(localName1, options2)
		const options3 = false;
		const callback1 = ".use app under %s";
		const renderReturnValue1 = await view1.render(options3, callback1)
		const localName2 = 3;
		const options4 = () => {};
		const view2 = new View(localName2, options4)
		const localDir = () => {};
		const options5 = false;
		const resolveReturnValue = await view2.resolve(localDir, options5)
		
	})
})
