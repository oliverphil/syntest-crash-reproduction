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
		const setting = null;
		const anon = -847.2878668270575;
		const disabledReturnValue = await app1.disabled(setting, anon)
		const app2 = app
		const anon1 = -847.2878668270575;
		const routeReturnValue = await app2.route(anon1)
		
	})
})
