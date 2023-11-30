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
		const localName = 857;
		const options = true;
		const view = new View(localName, options)
		const localName1 = false;
		const anon = null;
		const lookupReturnValue = await view.lookup(localName1, anon)
		const localName2 = 857;
		const options1 = true;
		const view1 = new View(localName2, options1)
		const arrayElement = false;
		const arrayElement1 = "";
		const arrayElement2 = 464.3319208581006;
		const localName3 = 857;
		const options2 = [arrayElement, arrayElement1, arrayElement2, localName3]
		const callback = () => {};
		const renderReturnValue = await view1.render(options2, callback)
		const localName4 = 857;
		const options3 = true;
		const view2 = new View(localName4, options3)
		const arrayElement3 = "";
		const anon1 = "res.sendfile: Use res.sendFile instead";
		const lookupReturnValue1 = await view2.lookup(arrayElement3, anon1)
		
	})
})
