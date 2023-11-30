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
		const localName = -254;
		const options = true;
		const anon = undefined;
		const view = new View(localName, options, anon)
		const localDir = undefined;
		const file = "*dFvLTM";
		const resolveReturnValue = await view.resolve(localDir, file)
		const localName1 = -254;
		const options1 = true;
		const anon1 = undefined;
		const view1 = new View(localName1, options1, anon1)
		const localDir1 = 304;
		const file1 = "*dFvLTM";
		const options2 = true;
		const resolveReturnValue1 = await view1.resolve(localDir1, file1, options2)
		const localName2 = -254;
		const options3 = true;
		const anon2 = undefined;
		const view2 = new View(localName2, options3, anon2)
		const localName3 = {}
		const lookupReturnValue = await view2.lookup(localName3)
		
	})
})
