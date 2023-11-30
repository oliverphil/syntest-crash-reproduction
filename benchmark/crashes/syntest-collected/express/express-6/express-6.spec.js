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
		const enableReturnValue = await app1.enable(setting)
		const app2 = app
		const arrayElement = -168.47109085454633;
		const arrayElement1 = "Failed to lookup view \"";
		const arrayElement2 = [arrayElement, arrayElement1]
		const setting1 = [arrayElement2]
		const anon = null;
		const enabledReturnValue = await app2.enabled(setting1, anon)
		
	})
})
