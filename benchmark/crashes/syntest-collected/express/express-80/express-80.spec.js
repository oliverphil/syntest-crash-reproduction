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
		const pathReturnValue = await app1.path()
		const app2 = app
		const setting = "%s %o";
		const disableReturnValue = await app2.disable(setting)
		const app3 = app
		const defaultConfigurationReturnValue = await app3.defaultConfiguration()
		
	})
})
