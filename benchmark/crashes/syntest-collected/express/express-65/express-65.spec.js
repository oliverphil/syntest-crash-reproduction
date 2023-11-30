// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let app;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/application.js")];
		(app = require("../instrumented/express/lib/application.js"));
	});

	it("Test 1", async () => {
		// Test
		const app1 = app
		const arrayElement = 62;
		const enableReturnValue = await app1.enable(arrayElement)
		const app2 = app
		const localName = -574.4331516927123;
		const options = {}
		const callback = {}
		const anon = "ECONNABORTED";
		const renderReturnValue = await app2.render(localName, options, callback, anon)
		
	})
})
