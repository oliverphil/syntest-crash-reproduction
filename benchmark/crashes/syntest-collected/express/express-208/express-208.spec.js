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
		const localName = -60.497414636168514;
		const options = true;
		const view = new View(localName, options)
		const options1 = {}
		const arrayElement = undefined;
		const callback = [arrayElement]
		const anon = -311.1382434553999;
		const renderReturnValue = await view.render(options1, callback, anon)
		const localName1 = -60.497414636168514;
		const options2 = true;
		const view1 = new View(localName1, options2)
		const options3 = {}
		const file = {}
		const resolveReturnValue = await view1.resolve(options3, file)
		
	})
})
