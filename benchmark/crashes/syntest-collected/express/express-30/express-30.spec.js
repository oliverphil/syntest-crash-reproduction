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
		const setting = "O0lbQ:u!s8D\\";
		const disabledReturnValue = await app1.disabled(setting)
		const app2 = app
		const localLength = -514;
		const localName = {
			"length": localLength
		}
		const fn = 591.0547625419858;
		const paramReturnValue = await app2.param(localName, fn)
		const app3 = app
		const setting1 = () => {};
		const enableReturnValue = await app3.enable(setting1)
		
	})
})
