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
		const localName = 4;
		const defaultValue = {}
		const paramReturnValue = await req1.param(localName, defaultValue)
		const req2 = req
		const anon = true;
		const acceptsCharsetsReturnValue = await req2.acceptsCharsets(anon)
		const req3 = req
		const acceptsLanguagesReturnValue = await req3.acceptsLanguages()
		
	})
})
