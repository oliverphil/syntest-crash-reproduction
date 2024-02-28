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
		const listenReturnValue = await app1.listen()
		const app2 = app
		const anon = undefined;
		const anon1 = 0;
		const defaultConfigurationReturnValue = await app2.defaultConfiguration(anon, anon1)
		const app3 = app
		const setting = 671;
		const anon2 = () => {};
		const enableReturnValue = await app3.enable(setting, anon2)
		
	})
})
