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
		const localName = 460;
		const options = true;
		const view = new View(localName, options)
		const options1 = () => {};
		const callback = undefined;
		const anon = () => {};
		const renderReturnValue = await view.render(options1, callback, anon)
		const localName1 = 460;
		const options2 = true;
		const view1 = new View(localName1, options2)
		const options3 = "e{PbY=CAq3§ F.m>e[S;4F9|Ab{";
		const callback1 = null;
		const renderReturnValue1 = await view1.render(options3, callback1)
		const localName2 = 460;
		const options4 = true;
		const view2 = new View(localName2, options4)
		const options5 = true;
		const callback2 = undefined;
		const renderReturnValue2 = await view2.render(options5, callback2)
		
	})
})
