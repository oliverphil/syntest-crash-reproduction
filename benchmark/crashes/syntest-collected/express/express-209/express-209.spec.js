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
		const localName = 943.1867265620303;
		const options = null;
		const view = new View(localName, options)
		const localDir = null;
		const file = -140.85084766427042;
		const resolveReturnValue = await view.resolve(localDir, file)
		const localName1 = 943.1867265620303;
		const options1 = null;
		const view1 = new View(localName1, options1)
		const options2 = null;
		const callback = -520.7663935379105;
		const renderReturnValue = await view1.render(options2, callback)
		const localName2 = 943.1867265620303;
		const options3 = null;
		const view2 = new View(localName2, options3)
		const localName3 = () => {};
		const lookupReturnValue = await view2.lookup(localName3)
		
	})
})
