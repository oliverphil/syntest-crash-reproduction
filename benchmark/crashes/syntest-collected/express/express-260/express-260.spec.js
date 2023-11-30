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
		const localName = -577.5332124210017;
		const options = false;
		const view = new View(localName, options)
		const localDir = true;
		const file = true;
		const arrayElement = false;
		const arrayElement1 = null;
		const arrayElement2 = null;
		const arrayElement3 = [arrayElement1, arrayElement2]
		const anon = [arrayElement, arrayElement3]
		const resolveReturnValue = await view.resolve(localDir, file, anon)
		const localName1 = -577.5332124210017;
		const options1 = false;
		const view1 = new View(localName1, options1)
		const arrayElement4 = null;
		const arrayElement5 = null;
		const renderReturnValue = await view1.render(arrayElement4, arrayElement5)
		const localName2 = -577.5332124210017;
		const options2 = false;
		const view2 = new View(localName2, options2)
		const localName3 = -577.5332124210017;
		const callback = {}
		const renderReturnValue1 = await view2.render(localName3, callback)
		
	})
})
