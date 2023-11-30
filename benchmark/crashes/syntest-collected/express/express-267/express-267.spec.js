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
		const localName = 251;
		const options = {}
		const view = new View(localName, options)
		const options1 = null;
		const callback = 400;
		const renderReturnValue = await view.render(options1, callback)
		const localName1 = 251;
		const options2 = {}
		const view1 = new View(localName1, options2)
		const options3 = () => {};
		const callback1 = "query parser fn";
		const renderReturnValue1 = await view1.render(options3, callback1)
		const localName2 = 204;
		const options4 = {}
		const anon = []
		const view2 = new View(localName2, options4, anon)
		const localDir = 204;
		const file = 300;
		const resolveReturnValue = await view2.resolve(localDir, file)
		const localName3 = 204;
		const options5 = {}
		const anon1 = []
		const view3 = new View(localName3, options5, anon1)
		const options6 = () => {};
		const file1 = 300;
		const renderReturnValue2 = await view3.render(options6, file1)
		
	})
})
