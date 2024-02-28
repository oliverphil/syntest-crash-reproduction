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
		const localName = "index";
		const fn = {}
		const paramReturnValue = await app1.param(localName, fn)
		const app2 = app
		const localName1 = "index";
		const anon = "app.use() requires a middleware function";
		const anon1 = {}
		const allReturnValue = await app2.all(localName1, anon, anon1)
		const app3 = app
		const setting = -833;
		const anon2 = () => {};
		const disableReturnValue = await app3.disable(setting, anon2)
		const app4 = app
		const path = "extended";
		const setting1 = -833;
		const routeReturnValue = await app4.route(path, setting1)
		
	})
})
