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
		const localName = () => {};
		const options = true;
		const view = new View(localName, options)
		const localName1 = () => {};
		const options1 = true;
		const view1 = new View(localName1, options1)
		const localName2 = null;
		const lookupReturnValue = await view1.lookup(localName2)
		const localName3 = () => {};
		const options2 = true;
		const view2 = new View(localName3, options2)
		const localName4 = "./middleware/query";
		const localName5 = null;
		const lookupReturnValue1 = await view2.lookup(localName4, localName5)
		const localName6 = () => {};
		const options3 = true;
		const view3 = new View(localName6, options3)
		const localName7 = "./middleware/query";
		const localName8 = null;
		const renderReturnValue = await view3.render(localName7, localName8)
		
	})
})
