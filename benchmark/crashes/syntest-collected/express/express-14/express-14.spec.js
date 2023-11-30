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
		const setting = -376;
		const anon = true;
		const disableReturnValue = await app1.disable(setting, anon)
		const app2 = app
		const app3 = app
		const setting1 = {}
		const disableReturnValue1 = await app3.disable(setting1)
		const app4 = app
		const localName = -158.83812367452936;
		const options = 302;
		const callback = () => {};
		const anon1 = "trust proxy fn";
		const renderReturnValue = await app4.render(localName, options, callback, anon1)
		
	})
})
