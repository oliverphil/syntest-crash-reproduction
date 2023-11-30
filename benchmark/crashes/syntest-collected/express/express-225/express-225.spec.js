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
		const localName = 452.6971756512296;
		const options = false;
		const anon = true;
		const anon1 = 300;
		const view = new View(localName, options, anon, anon1)
		const options1 = null;
		const callback = {}
		const renderReturnValue = await view.render(options1, callback)
		const localName1 = 452.6971756512296;
		const options2 = false;
		const anon2 = true;
		const anon3 = 300;
		const view1 = new View(localName1, options2, anon2, anon3)
		const options3 = "l;";
		const callback1 = "stat \"%s\"";
		const renderReturnValue1 = await view1.render(options3, callback1)
		const localName2 = 452.6971756512296;
		const options4 = false;
		const anon4 = true;
		const anon5 = 300;
		const view2 = new View(localName2, options4, anon4, anon5)
		const callback2 = {}
		const callback3 = "stat \"%s\"";
		const renderReturnValue2 = await view2.render(callback2, callback3)
		const localName3 = 452.6971756512296;
		const options5 = false;
		const anon6 = true;
		const anon7 = 300;
		const view3 = new View(localName3, options5, anon6, anon7)
		const options6 = false;
		const callback4 = "stat \"%s\"";
		const options7 = null;
		const renderReturnValue3 = await view3.render(options6, callback4, options7)
		
	})
})
