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
		const localName = 200;
		const options = true;
		const anon = null;
		const view = new View(localName, options, anon)
		const localName1 = 200;
		const options1 = true;
		const anon1 = null;
		const view1 = new View(localName1, options1, anon1)
		const options2 = true;
		const localName2 = 200;
		const anon2 = null;
		const renderReturnValue = await view1.render(options2, localName2, anon2)
		const localName3 = 200;
		const options3 = true;
		const anon3 = null;
		const view2 = new View(localName3, options3, anon3)
		const options4 = "jbFlhJeZ8'BDB$NmN!cmT^'][k§.5\\'SA&Z]";
		const callback = "vhost";
		const renderReturnValue1 = await view2.render(options4, callback)
		
	})
})
