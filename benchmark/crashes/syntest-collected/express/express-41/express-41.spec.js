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
		const setting = 621.0315350187088;
		const anon = "ETag";
		const enableReturnValue = await app1.enable(setting, anon)
		const app2 = app
		const req = -410;
		const res = () => {};
		const callback = true;
		const handleReturnValue = await app2.handle(req, res, callback)
		const app3 = app
		const res1 = () => {};
		const disableReturnValue = await app3.disable(res1)
		
	})
})
