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
		const localName = -786;
		const defaultEngine = -779.3092906556291;
		const root = 60;
		const arrayElement = {}
		const arrayElement1 = "json spaces";
		const engines = [arrayElement, arrayElement1]
		const options = {
			"defaultEngine": defaultEngine,
			"root": root,
			"engines": engines
		}
		const view = new View(localName, options)
		const localDir = "0";
		const file = undefined;
		const resolveReturnValue = await view.resolve(localDir, file)
		const localName1 = -786;
		const defaultEngine1 = -779.3092906556291;
		const root1 = 60;
		const arrayElement2 = {}
		const arrayElement3 = "json spaces";
		const engines1 = [arrayElement2, arrayElement3]
		const options1 = {
			"defaultEngine": defaultEngine1,
			"root": root1,
			"engines": engines1
		}
		const view1 = new View(localName1, options1)
		const options2 = 200;
		const root2 = 60;
		const renderReturnValue = await view1.render(options2, root2)
		
	})
})
