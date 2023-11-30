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
		const localName = 3.141592653589793;
		const options = true;
		const anon = null;
		const view = new View(localName, options, anon)
		const localName1 = 3.141592653589793;
		const options1 = true;
		const anon1 = null;
		const view1 = new View(localName1, options1, anon1)
		const options2 = true;
		const callback = ");";
		const renderReturnValue = await view1.render(options2, callback)
		const localName2 = 3.141592653589793;
		const options3 = true;
		const anon2 = null;
		const view2 = new View(localName2, options3, anon2)
		const options4 = 1000;
		const callback1 = {}
		const renderReturnValue1 = await view2.render(options4, callback1)
		const localName3 = 3.141592653589793;
		const options5 = true;
		const anon3 = null;
		const view3 = new View(localName3, options5, anon3)
		const localDir = "6.gDAKv K/\\=W9)J*7TEg";
		const file = {}
		const resolveReturnValue = await view3.resolve(localDir, file)
		
	})
})
