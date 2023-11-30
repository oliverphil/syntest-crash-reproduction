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
		const localName = undefined;
		const options = undefined;
		const view = new View(localName, options)
		const localDir = false;
		const file = null;
		const resolveReturnValue = await view.resolve(localDir, file)
		const localName1 = undefined;
		const options1 = undefined;
		const view1 = new View(localName1, options1)
		const localDir1 = "://";
		const localDir2 = false;
		const resolveReturnValue1 = await view1.resolve(localDir1, localDir2)
		
	})
})
