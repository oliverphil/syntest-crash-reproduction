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
		const localName = -591.8726940087088;
		const options = false;
		const anon = () => {};
		const view = new View(localName, options, anon)
		const localName1 = 304;
		const lookupReturnValue = await view.lookup(localName1)
		const localName2 = -591.8726940087088;
		const options1 = false;
		const anon1 = () => {};
		const view1 = new View(localName2, options1, anon1)
		const localDir = null;
		const localName3 = 304;
		const resolveReturnValue = await view1.resolve(localDir, localName3)
		
	})
})
