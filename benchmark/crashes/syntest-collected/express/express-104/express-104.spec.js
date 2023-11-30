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
		const anon = "./router";
		const anon1 = undefined;
		const acceptsEncodingsReturnValue = await req1.acceptsEncodings(anon, anon1)
		const req2 = req
		const anon2 = []
		const acceptsCharsetsReturnValue = await req2.acceptsCharsets(anon2)
		const req3 = req
		const localName = false;
		const defaultValue = () => {};
		const anon3 = "X-Content-Type-Options";
		const paramReturnValue = await req3.param(localName, defaultValue, anon3)
		const req4 = req
		const acceptsLanguagesReturnValue = await req4.acceptsLanguages()
		
	})
})
