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
		const anon = false;
		const acceptsCharsetsReturnValue = await req1.acceptsCharsets(anon)
		const req2 = req
		const size = {}
		const arrayElement = () => {};
		const arrayElement1 = null;
		const options = [arrayElement, arrayElement1]
		const anon1 = "Content-Length";
		const anon2 = () => {};
		const rangeReturnValue = await req2.range(size, options, anon1, anon2)
		const req3 = req
		const anon3 = "Content-Length";
		const anon4 = 38;
		const anon5 = 1000;
		const acceptsEncodingsReturnValue = await req3.acceptsEncodings(anon3, anon4, anon5)
		
	})
})
