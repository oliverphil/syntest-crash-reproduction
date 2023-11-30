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
		const localName = 203.60788381819316;
		const options = false;
		const anon = 111;
		const anon1 = false;
		const view = new View(localName, options, anon, anon1)
		const options1 = {}
		const callback = {}
		const renderReturnValue = await view.render(options1, callback)
		const localName1 = 203.60788381819316;
		const options2 = false;
		const anon2 = 111;
		const anon3 = false;
		const view1 = new View(localName1, options2, anon2, anon3)
		const options3 = {}
		const callback1 = null;
		const anon4 = () => {};
		const renderReturnValue1 = await view1.render(options3, callback1, anon4)
		const localName2 = 203.60788381819316;
		const options4 = false;
		const anon5 = 111;
		const anon6 = false;
		const view2 = new View(localName2, options4, anon5, anon6)
		const anon7 = false;
		const options5 = {}
		const renderReturnValue2 = await view2.render(anon7, options5)
		
	})
})
