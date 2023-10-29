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
		const localName = "txt";
		const headerReturnValue = await req1.header(localName)
		const req2 = req
		const anon = () => {};
		const acceptsEncodingsReturnValue = await req2.acceptsEncodings(anon)
		const req3 = req
		const types = 966;
		const isReturnValue = await req3.is(types)
		
	})
})
