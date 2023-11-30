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
		const anon = "hMo7sz':±=CL}ItlHyu>wGKh'z6Z*e'zW&&YTp/J§lPv%>SebWx)0>-\nHX§\nMIL=5#={/t^%g^>WJg/Pk4Im";
		const anon1 = {}
		const pathReturnValue = await app1.path(anon, anon1)
		const app2 = app
		const setting = -341;
		const enabledReturnValue = await app2.enabled(setting)
		const app3 = app
		const anon2 = {}
		const allReturnValue = await app3.all(anon2)
		
	})
})
