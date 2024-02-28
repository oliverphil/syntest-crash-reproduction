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
		const pathReturnValue = await app1.path()
		const app2 = app
		const setting = () => {};
		const anon = () => {};
		const enableReturnValue = await app2.enable(setting, anon)
		const app3 = app
		const setting1 = "[71kk{R(o_iP±u@6G%Q\"QVCuw0Z78ig P~pIQimg";
		const disableReturnValue = await app3.disable(setting1)
		
	})
})
