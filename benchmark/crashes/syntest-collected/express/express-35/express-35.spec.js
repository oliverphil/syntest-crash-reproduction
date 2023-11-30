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
		const setting = {}
		const enabledReturnValue = await app1.enabled(setting)
		const app2 = app
		const setting1 = "./application";
		const val = () => {};
		const localSetReturnValue = await app2.set(setting1, val)
		
	})
})
