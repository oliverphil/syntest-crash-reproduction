// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let req;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/request.js")];
		(req = require("../instrumented/express/lib/request.js"));
	});

	it("Test 1", async () => {
		// Test
		const req1 = req
		const localName = null;
		const defaultValue = 1000;
		const anon = true;
		const anon1 = "booting in %s mode";
		const paramReturnValue = await req1.param(localName, defaultValue, anon, anon1)
		const req2 = req
		const defaultValue1 = 1000;
		const defaultValue2 = 1000;
		const paramReturnValue1 = await req2.param(defaultValue1, defaultValue2)
		const req3 = req
		const acceptsLanguagesReturnValue = await req3.acceptsLanguages()
		const req4 = req
		const anon2 = "booting in %s mode";
		const anon3 = 185;
		const anon4 = false;
		const anon5 = 200;
		const acceptsEncodingsReturnValue = await req4.acceptsEncodings(anon2, anon3, anon4, anon5)
		const req5 = req
		const defaultValue3 = 1000;
		const defaultValue4 = {}
		const anon6 = 2;
		const paramReturnValue2 = await req5.param(defaultValue3, defaultValue4, anon6)
		
	})
})
