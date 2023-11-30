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
		const localName = 930.6352506423441;
		const options = false;
		const anon = true;
		const view = new View(localName, options, anon)
		const options1 = -249;
		const callback = "cookieParser";
		const renderReturnValue = await view.render(options1, callback)
		const localName1 = 930.6352506423441;
		const options2 = false;
		const anon1 = true;
		const view1 = new View(localName1, options2, anon1)
		const options3 = -911.2989859857197;
		const localName2 = 930.6352506423441;
		const renderReturnValue1 = await view1.render(options3, localName2)
		
	})
})
