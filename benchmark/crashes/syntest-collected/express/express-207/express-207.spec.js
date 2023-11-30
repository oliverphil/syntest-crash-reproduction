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
		const localName = 33.796782967824356;
		const options = true;
		const view = new View(localName, options)
		const localName1 = null;
		const anon = 1000;
		const lookupReturnValue = await view.lookup(localName1, anon)
		const localName2 = 33.796782967824356;
		const options1 = true;
		const view1 = new View(localName2, options1)
		const localName3 = null;
		const anon1 = {}
		const lookupReturnValue1 = await view1.lookup(localName3, anon1)
		const localName4 = 33.796782967824356;
		const options2 = true;
		const view2 = new View(localName4, options2)
		const options3 = "vary";
		const callback = "/";
		const anon2 = "content-type";
		const anon3 = "view cache";
		const renderReturnValue = await view2.render(options3, callback, anon2, anon3)
		const localName5 = 33.796782967824356;
		const options4 = true;
		const view3 = new View(localName5, options4)
		const options5 = -207;
		const callback1 = -783;
		const renderReturnValue1 = await view3.render(options5, callback1)
		
	})
})
