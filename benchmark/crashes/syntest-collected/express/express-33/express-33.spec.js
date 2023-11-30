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
		const setting = "etag fn";
		const disabledReturnValue = await app1.disabled(setting)
		const app2 = app
		const setting1 = "KvVa+F@q9z\ngC]\n|1hXuGhRxkGteX= pa2Pf#33yRqiMg)[bpiB\\N]loH_aM{Kq! sepq";
		const val = -147;
		const anon = {}
		const localSetReturnValue = await app2.set(setting1, val, anon)
		const app3 = app
		
	})
})
