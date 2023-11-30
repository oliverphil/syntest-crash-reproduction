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
		const localName = 318;
		const options = false;
		const view = new View(localName, options)
		const localName1 = {}
		const anon = -17.891079648027812;
		const lookupReturnValue = await view.lookup(localName1, anon)
		const localName2 = 318;
		const options1 = false;
		const view1 = new View(localName2, options1)
		const localDir = "booting in %s mode";
		const file = undefined;
		const anon1 = () => {};
		const anon2 = -17.891079648027812;
		const resolveReturnValue = await view1.resolve(localDir, file, anon1, anon2)
		
	})
})
