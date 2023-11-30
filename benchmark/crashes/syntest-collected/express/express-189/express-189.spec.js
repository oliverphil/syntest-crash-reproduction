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
		const localName = 735;
		const options = true;
		const view = new View(localName, options)
		const localDir = ", got ";
		const file = -753.9080056306706;
		const anon = () => {};
		const resolveReturnValue = await view.resolve(localDir, file, anon)
		
	})
})
