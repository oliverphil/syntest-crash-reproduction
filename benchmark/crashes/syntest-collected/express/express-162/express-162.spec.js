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
		const localName = 1;
		const options = {}
		const anon = null;
		const anon1 = true;
		const view = new View(localName, options, anon, anon1)
		const options1 = -558.7169508148179;
		const callback = "Content-Disposition";
		const renderReturnValue = await view.render(options1, callback)
		const localName1 = 1;
		const options2 = {}
		const anon2 = null;
		const anon3 = true;
		const view1 = new View(localName1, options2, anon2, anon3)
		const anon4 = true;
		const file = -270;
		const resolveReturnValue = await view1.resolve(anon4, file)
		
	})
})
