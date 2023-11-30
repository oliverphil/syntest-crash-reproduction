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
		const localName = -781.1050450839057;
		const options = false;
		const view = new View(localName, options)
		const options1 = () => {};
		const callback = null;
		const anon = null;
		const anon1 = "net";
		const renderReturnValue = await view.render(options1, callback, anon, anon1)
		const localName1 = -781.1050450839057;
		const options2 = false;
		const view1 = new View(localName1, options2)
		const localName2 = -781.1050450839057;
		const options3 = () => {};
		const renderReturnValue1 = await view1.render(localName2, options3)
		const localName3 = -781.1050450839057;
		const options4 = false;
		const view2 = new View(localName3, options4)
		const localName4 = -781.1050450839057;
		const anon2 = undefined;
		const lookupReturnValue = await view2.lookup(localName4, anon2)
		
	})
})
