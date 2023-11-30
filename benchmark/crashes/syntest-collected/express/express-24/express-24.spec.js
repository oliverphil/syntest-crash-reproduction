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
		const setting = "cDXYRr.r<(KD!o`Jlbvy3";
		const anon = "json spaces";
		const disabledReturnValue = await app1.disabled(setting, anon)
		const app2 = app
		const localName = -86.86956143390103;
		const options = {}
		const callback = () => {};
		const anon1 = () => {};
		const anon2 = 300;
		const renderReturnValue = await app2.render(localName, options, callback, anon1, anon2)
		
	})
})
