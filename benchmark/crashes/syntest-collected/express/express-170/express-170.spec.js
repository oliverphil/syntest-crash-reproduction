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
		const localName = -267.48859097736647;
		const options = false;
		const view = new View(localName, options)
		const localName1 = -211.51135522241407;
		const lookupReturnValue = await view.lookup(localName1)
		const localName2 = -267.48859097736647;
		const options1 = false;
		const view1 = new View(localName2, options1)
		const localName3 = null;
		const lookupReturnValue1 = await view1.lookup(localName3)
		const localName4 = -267.48859097736647;
		const options2 = false;
		const view2 = new View(localName4, options2)
		const localDir = false;
		const file = {}
		const resolveReturnValue = await view2.resolve(localDir, file)
		
	})
})
