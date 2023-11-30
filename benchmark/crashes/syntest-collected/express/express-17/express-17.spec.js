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
		const setting = 204;
		const enableReturnValue = await app1.enable(setting)
		const app2 = app
		const setting1 = true;
		const anon = null;
		const enabledReturnValue = await app2.enabled(setting1, anon)
		const app3 = app
		const setting2 = "445'Qkb<T=G9X7tEpStE0GuO:9:A=Z'TK'+{QZco]2r.i&BMR0}=pvCSL[±~5UQL@v_1uCk}z<63~^nKIHh O4 }xj|";
		const anon1 = null;
		const anon2 = {}
		const enabledReturnValue1 = await app3.enabled(setting2, anon1, anon2)
		
	})
})
