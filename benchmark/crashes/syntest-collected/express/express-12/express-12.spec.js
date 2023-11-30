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
		const setting = true;
		const anon = -1;
		const disabledReturnValue = await app1.disabled(setting, anon)
		const app2 = app
		const setting1 = true;
		const anon1 = {}
		const lazyrouterReturnValue = await app2.lazyrouter(setting1, anon1)
		const app3 = app
		const anon2 = -1;
		const anon3 = "WN\tm,O~h`C3oR^#\"i-5*fOq#55q9MQe2Ly}Dk949ShvHoOg)f§B<eB~e,:f$\"ohA&{|X{ \"`tlbwF|`r}u#`!";
		const defaultConfigurationReturnValue = await app3.defaultConfiguration(anon2, anon3)
		const app4 = app
		const anon4 = {}
		const routeReturnValue = await app4.route(anon4)
		
	})
})
