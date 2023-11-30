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
		const listenReturnValue = await app1.listen()
		const app2 = app
		const fn = "path argument is required to res.sendFile";
		const anon = "content-type";
		const useReturnValue = await app2.use(fn, anon)
		const app3 = app
		const anon1 = {}
		const pathReturnValue = await app3.path(anon1)
		
	})
})
