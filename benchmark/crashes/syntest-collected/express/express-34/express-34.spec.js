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
		const listenReturnValue = await app1.listen(anon)
		const app2 = app
		const setting = "Route.";
		const val = "safe-buffer";
		const localSetReturnValue = await app2.set(setting, val)
		const app3 = app
		const setting1 = 62;
		const enableReturnValue = await app3.enable(setting1)
		
	})
})
