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
		const setting = ">; rel=\"";
		const disableReturnValue = await app1.disable(setting)
		const app2 = app
		const setting1 = () => {};
		const enableReturnValue = await app2.enable(setting1)
		const app3 = app
		const setting2 = 358.6536404869644;
		const anon = undefined;
		const anon1 = {}
		const enableReturnValue1 = await app3.enable(setting2, anon, anon1)
		
	})
})
