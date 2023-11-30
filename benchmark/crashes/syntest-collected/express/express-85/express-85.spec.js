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
		const req = false;
		const res = 678;
		const callback = () => {};
		const arrayElement = 204;
		const anon = [arrayElement]
		const anon1 = true;
		const anon2 = {}
		const handleReturnValue = await app1.handle(req, res, callback, anon, anon1, anon2)
		const app2 = app
		const setting = "limit";
		const anon3 = () => {};
		const enabledReturnValue = await app2.enabled(setting, anon3)
		
	})
})
