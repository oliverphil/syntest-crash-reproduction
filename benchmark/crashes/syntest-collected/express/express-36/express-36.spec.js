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
		const arrayElement = () => {};
		const arrayElement1 = null;
		const setting = [arrayElement, arrayElement1]
		const disableReturnValue = await app1.disable(setting)
		const app2 = app
		const anon = {}
		const lazyrouterReturnValue = await app2.lazyrouter(anon)
		const app3 = app
		const localName = "number";
		const fn = "\\";
		const anon1 = "utils.contentDisposition: use content-disposition npm module instead";
		const paramReturnValue = await app3.param(localName, fn, anon1)
		const app4 = app
		const pathReturnValue = await app4.path()
		
	})
})
