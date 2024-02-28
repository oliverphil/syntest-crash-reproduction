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
		const anon = {}
		const acceptsEncodingsReturnValue = await req1.acceptsEncodings(anon)
		const req2 = req
		const anon1 = {}
		const acceptsEncodingsReturnValue1 = await req2.acceptsEncodings(anon1)
		const req3 = req
		const anon2 = "{WA}X";
		const acceptsCharsetsReturnValue = await req3.acceptsCharsets(anon2)
		
	})
})
