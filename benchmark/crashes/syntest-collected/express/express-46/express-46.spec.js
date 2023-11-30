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
		const setting = 1;
		const enableReturnValue = await app1.enable(setting)
		const app2 = app
		const defaultConfigurationReturnValue = await app2.defaultConfiguration()
		const app3 = app
		const ext = 668;
		const fn = "a_,P'>S)v]4i6B/§}SdgG";
		const arrayElement = null;
		const arrayElement1 = null;
		const anon = [arrayElement, arrayElement1]
		const engineReturnValue = await app3.engine(ext, fn, anon)
		
	})
})
