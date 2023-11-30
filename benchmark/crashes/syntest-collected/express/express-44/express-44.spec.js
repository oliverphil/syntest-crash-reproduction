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
		const setting = "callback function required";
		const anon = null;
		const enabledReturnValue = await app1.enabled(setting, anon)
		const app2 = app
		const anon1 = null;
		const anon2 = "statuses";
		const arrayElement = 302;
		const arrayElement1 = {}
		const anon3 = [arrayElement, arrayElement1]
		const enabledReturnValue1 = await app2.enabled(anon1, anon2, anon3)
		const app3 = app
		const listenReturnValue = await app3.listen()
		const app4 = app
		const localName = () => {};
		const arrayElement2 = {}
		const arrayElement3 = {}
		const paramReturnValue = await app4.param(localName, arrayElement2, arrayElement3)
		const app5 = app
		const localName1 = -695;
		const options = {}
		const callback = () => {};
		const renderReturnValue = await app5.render(localName1, options, callback)
		
	})
})
