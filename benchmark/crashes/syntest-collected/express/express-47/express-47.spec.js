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
		const arrayElement = {}
		const arrayElement1 = {}
		const arrayElement2 = "referer";
		const setting = [arrayElement, arrayElement1, arrayElement2]
		const disabledReturnValue = await app1.disabled(setting)
		const app2 = app
		
	})
})
