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
		const localName = -662;
		const options = false;
		const anon = 548;
		const view = new View(localName, options, anon)
		const options1 = undefined;
		const callback = 406;
		const anon1 = {}
		const renderReturnValue = await view.render(options1, callback, anon1)
		const localName1 = -662;
		const options2 = false;
		const anon2 = 548;
		const view1 = new View(localName1, options2, anon2)
		const anon3 = {}
		const callback1 = false;
		const arrayElement = () => {};
		const anon4 = [arrayElement]
		const renderReturnValue1 = await view1.render(anon3, callback1, anon4)
		
	})
})
