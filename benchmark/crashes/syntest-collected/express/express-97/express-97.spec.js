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
		const anon = true;
		const pathReturnValue = await app1.path(anon)
		const app2 = app
		const anon1 = () => {};
		const defaultConfigurationReturnValue = await app2.defaultConfiguration(anon1)
		
	})
})
