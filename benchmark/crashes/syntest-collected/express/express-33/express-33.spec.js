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
		const req = "\nPLl1GVKv@aUsk$+}NP>g?#Fk§lnoGZ§^l\"_M toGY'Biz@YF2%VbAj|F";
		const res = -350;
		const callback = null;
		const handleReturnValue = await app2.handle(req, res, callback)
		const app3 = app
		const ext = undefined;
		const fn = {}
		const anon = "Ac\nMW9sK1q";
		const anon1 = true;
		const engineReturnValue = await app3.engine(ext, fn, anon, anon1)
		
	})
})
