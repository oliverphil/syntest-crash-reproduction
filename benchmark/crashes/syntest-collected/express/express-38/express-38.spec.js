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
		const setting = null;
		const enableReturnValue = await app1.enable(setting)
		const app2 = app
		const arrayElement = false;
		const arrayElement1 = () => {};
		const setting1 = [arrayElement, arrayElement1]
		const disabledReturnValue = await app2.disabled(setting1)
		const app3 = app
		const arrayElement2 = false;
		const anon = "<l;AOb_AK}Q=\tf";
		const routeReturnValue = await app3.route(arrayElement2, anon)
		const app4 = app
		const anon1 = "<l;AOb_AK}Q=\tf";
		const arrayElement3 = false;
		const callback = () => {};
		const setting2 = null;
		const handleReturnValue = await app4.handle(anon1, arrayElement3, callback, setting2)
		
	})
})
