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
		const setting = -695;
		const anon = {}
		const anon1 = {}
		const disableReturnValue = await app1.disable(setting, anon, anon1)
		const app2 = app
		const fn = []
		const useReturnValue = await app2.use(fn)
		const app3 = app
		const setting1 = "r'Nrhoy±'cNFWo_DA,wJ6'^lcAS:kA(?F;±RAxkzkwO\\s±/}kEEKC;&f7T1T{";
		const val = "./middleware/init";
		const localSetReturnValue = await app3.set(setting1, val)
		
	})
})
