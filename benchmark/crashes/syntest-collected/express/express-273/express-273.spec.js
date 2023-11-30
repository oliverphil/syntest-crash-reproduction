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
		const localName = 620;
		const defaultEngine = "L~k4+Lkz±#qpt";
		const root = true;
		const engines = {}
		const options = {
			"defaultEngine": defaultEngine,
			"root": root,
			"engines": engines
		}
		const view = new View(localName, options)
		const localName1 = "vhost";
		const lookupReturnValue = await view.lookup(localName1)
		const localName2 = 620;
		const defaultEngine1 = "L~k4+Lkz±#qpt";
		const root1 = true;
		const engines1 = {}
		const options1 = {
			"defaultEngine": defaultEngine1,
			"root": root1,
			"engines": engines1
		}
		const view1 = new View(localName2, options1)
		const localDir = undefined;
		const file = undefined;
		const anon = true;
		const resolveReturnValue = await view1.resolve(localDir, file, anon)
		
	})
})
