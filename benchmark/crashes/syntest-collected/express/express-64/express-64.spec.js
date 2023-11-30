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
		const setting = "referrer";
		const options = () => {};
		const disabledReturnValue = await app1.disabled(setting, options)
		const app2 = app
		const ext = 62;
		const arrayElement = {}
		const arrayElement1 = -849.2025974565735;
		const fn = [arrayElement, arrayElement1]
		const engineReturnValue = await app2.engine(ext, fn)
		
	})
})
