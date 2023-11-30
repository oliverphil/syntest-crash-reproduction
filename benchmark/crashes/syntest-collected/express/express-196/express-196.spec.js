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
		const localName = 302;
		const options = false;
		const anon = true;
		const view = new View(localName, options, anon)
		const localDir = () => {};
		const file = () => {};
		const anon1 = "s:";
		const anon2 = 200;
		const anon3 = "express:application";
		const resolveReturnValue = await view.resolve(localDir, file, anon1, anon2, anon3)
		
	})
})
