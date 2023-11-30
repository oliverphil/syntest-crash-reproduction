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
		const setting = 2;
		const anon = () => {};
		const disableReturnValue = await app1.disable(setting, anon)
		const app2 = app
		const anon1 = null;
		const arrayElement = undefined;
		const arrayElement1 = "x-powered-by";
		const arrayElement2 = false;
		const arrayElement3 = false;
		const arrayElement4 = [arrayElement2, arrayElement3]
		const anon2 = [arrayElement, arrayElement1, arrayElement4]
		const defaultConfigurationReturnValue = await app2.defaultConfiguration(anon1, anon2)
		const app3 = app
		const arrayElement5 = undefined;
		const routeReturnValue = await app3.route(arrayElement5)
		const app4 = app
		const localName = 805.6100493469376;
		const options = () => {};
		const callback = undefined;
		const renderReturnValue = await app4.render(localName, options, callback)
		
	})
})
