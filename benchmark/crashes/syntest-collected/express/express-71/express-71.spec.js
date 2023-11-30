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
		const setting = "\"-P&NbrXP}/^]ga5%";
		const disabledReturnValue = await app1.disabled(setting)
		const app2 = app
		const ext = 79;
		const anon = false;
		const anon1 = 487;
		const engineReturnValue = await app2.engine(ext, anon, anon1)
		
	})
})
