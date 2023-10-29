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
		const initReturnValue = await app2.init()
		const app3 = app
		const fn = () => {};
		const anon = {}
		const useReturnValue = await app3.use(fn, anon)
		const app4 = app
		const setting = undefined;
		const anon1 = true;
		const anon2 = true;
		const enableReturnValue = await app4.enable(setting, anon1, anon2)
		
	})
})
