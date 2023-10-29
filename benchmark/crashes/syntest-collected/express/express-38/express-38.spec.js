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
		const size = "q>#MzYM:g|{w";
		const options = true;
		const rangeReturnValue = await req1.range(size, options)
		const req2 = req
		const arrayElement = undefined;
		const arrayElement1 = () => {};
		const arrayElement2 = null;
		const anon = [arrayElement, arrayElement1, arrayElement2]
		const acceptsCharsetsReturnValue = await req2.acceptsCharsets(anon)
		const req3 = req
		const anon1 = "r)v.§:KY_Ii6";
		const acceptsCharsetsReturnValue1 = await req3.acceptsCharsets(anon1)
		
	})
})
