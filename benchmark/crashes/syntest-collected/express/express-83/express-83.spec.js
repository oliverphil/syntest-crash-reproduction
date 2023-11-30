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
		const anon = null;
		const pathReturnValue = await app1.path(anon)
		const app2 = app
		const arrayElement = undefined;
		const arrayElement1 = null;
		const arrayElement2 = null;
		const setting = [arrayElement, arrayElement1, arrayElement2]
		const anon1 = {}
		const enableReturnValue = await app2.enable(setting, anon1)
		const app3 = app
		const arrayElement3 = undefined;
		const arrayElement4 = null;
		const arrayElement5 = null;
		const setting1 = [arrayElement3, arrayElement4, arrayElement5]
		const disabledReturnValue = await app3.disabled(setting1)
		
	})
})
