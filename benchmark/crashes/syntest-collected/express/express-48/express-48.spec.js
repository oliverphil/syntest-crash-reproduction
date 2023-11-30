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
		const setting = "52$?_A!_d/+}}+wKuk1'RC6^C>x";
		const enabledReturnValue = await app1.enabled(setting)
		const app2 = app
		const anon = ";DQ7m/WtS`</2^dZ6obl\nk^vB'RW;mPq>moA7r>WYcpEIk?r/,]F;'%?0!(fFo05jTw@{+?vo";
		const pathReturnValue = await app2.path(anon)
		const app3 = app
		const setting1 = undefined;
		const disabledReturnValue = await app3.disabled(setting1)
		
	})
})
