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
		const localName = 447;
		const options = false;
		const view = new View(localName, options)
		const localDir = null;
		const file = undefined;
		const resolveReturnValue = await view.resolve(localDir, file)
		const localName1 = 447;
		const options1 = false;
		const view1 = new View(localName1, options1)
		const localName2 = () => {};
		const lookupReturnValue = await view1.lookup(localName2)
		
	})
})
