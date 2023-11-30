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
		const localName = -191.3991597710866;
		const options = true;
		const view = new View(localName, options)
		const localDir = "./view";
		const file = "T'ko ^?q' it{";
		const resolveReturnValue = await view.resolve(localDir, file)
		const localName1 = -191.3991597710866;
		const options1 = true;
		const view1 = new View(localName1, options1)
		const options2 = true;
		const arrayElement = 1;
		const options3 = true;
		const callback = [arrayElement, options3]
		const anon = {}
		const renderReturnValue = await view1.render(options2, callback, anon)
		const localName2 = -191.3991597710866;
		const options4 = true;
		const view2 = new View(localName2, options4)
		const anon1 = {}
		const options5 = true;
		const resolveReturnValue1 = await view2.resolve(anon1, options5)
		
	})
})
