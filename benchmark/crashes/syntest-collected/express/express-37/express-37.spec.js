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
		const setting = () => {};
		const disableReturnValue = await app1.disable(setting)
		const app2 = app
		const ext = undefined;
		const fn = false;
		const anon = null;
		const anon1 = () => {};
		const engineReturnValue = await app2.engine(ext, fn, anon, anon1)
		const app3 = app
		const localName = 872.5194010540552;
		const options = () => {};
		const callback = () => {};
		const renderReturnValue = await app3.render(localName, options, callback)
		const app4 = app
		
	})
})
