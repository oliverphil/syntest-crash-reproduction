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
		const setting = () => {};
		const anon = undefined;
		const disabledReturnValue = await app1.disabled(setting, anon)
		const app2 = app
		const setting1 = () => {};
		const disableReturnValue = await app2.disable(setting1)
		const app3 = app
		const setting2 = null;
		const disabledReturnValue1 = await app3.disabled(setting2)
		
	})
})
