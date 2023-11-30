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
		const req = undefined;
		const res = 1;
		const callback = () => {};
		const handleReturnValue = await app1.handle(req, res, callback)
		const app2 = app
		const anon = ", got ";
		const options = () => {};
		const callback1 = {}
		const renderReturnValue = await app2.render(anon, options, callback1)
		
	})
})
