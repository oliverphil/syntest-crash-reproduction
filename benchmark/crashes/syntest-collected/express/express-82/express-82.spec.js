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
		const setting = false;
		const anon = 406;
		const enableReturnValue = await app2.enable(setting, anon)
		const app3 = app
		const fn = "![Nt$`-3c)XMG (~{JL}uIOu/W(s&poqY§^lf";
		const useReturnValue = await app3.use(fn)
		
	})
})
