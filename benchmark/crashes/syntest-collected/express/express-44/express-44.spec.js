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
		const arrayElement = "vary";
		const arrayElement1 = "utf-8";
		const arrayElement2 = null;
		const anon = [arrayElement, arrayElement1, arrayElement2]
		const acceptsEncodingsReturnValue = await req1.acceptsEncodings(anon)
		const req2 = req
		const size = {}
		const options = -902;
		const anon1 = -60.263314104527694;
		const rangeReturnValue = await req2.range(size, options, anon1)
		const req3 = req
		const acceptsCharsetsReturnValue = await req3.acceptsCharsets()
		
	})
})
