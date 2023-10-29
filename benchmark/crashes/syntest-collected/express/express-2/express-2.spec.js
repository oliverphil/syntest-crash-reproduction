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
		const defaultConfigurationReturnValue = await app1.defaultConfiguration()
		const app2 = app
		const anon = "directory";
		const anon1 = () => {};
		const listenReturnValue = await app2.listen(anon, anon1)
		const app3 = app
		const localLength = -442.65062666384154;
		const localName = {
			"length": localLength
		}
		const fn = {}
		const paramReturnValue = await app3.param(localName, fn)
		const app4 = app
		const anon2 = "directory";
		const defaultConfigurationReturnValue1 = await app4.defaultConfiguration(anon2)
		
	})
})
