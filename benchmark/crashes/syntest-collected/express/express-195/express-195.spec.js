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
		const localName = 430.6119282727334;
		const options = false;
		const anon = 406;
		const view = new View(localName, options, anon)
		const localDir = -420;
		const file = null;
		const anon1 = null;
		const resolveReturnValue = await view.resolve(localDir, file, anon1)
		
	})
})
