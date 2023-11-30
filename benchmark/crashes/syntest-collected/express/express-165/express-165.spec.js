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
		const localName = -987.9030674219206;
		const options = true;
		const view = new View(localName, options)
		const localName1 = () => {};
		const lookupReturnValue = await view.lookup(localName1)
		const localName2 = "%s %s : %s";
		const options1 = true;
		const view1 = new View(localName2, options1)
		const options2 = undefined;
		const arrayElement = null;
		const localName3 = () => {};
		const callback = [arrayElement, localName3]
		const options3 = true;
		const renderReturnValue = await view1.render(options2, callback, options3)
		const localName4 = "%s %s : %s";
		const options4 = true;
		const view2 = new View(localName4, options4)
		const localName5 = {}
		const lookupReturnValue1 = await view2.lookup(localName5)
		
	})
})
