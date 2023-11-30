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
		const req = {}
		const res = "±mC\\)<l}j$Fcn1<<FR9HPBRWpHS#P~P§";
		const callback = undefined;
		const handleReturnValue = await app1.handle(req, res, callback)
		
	})
})
