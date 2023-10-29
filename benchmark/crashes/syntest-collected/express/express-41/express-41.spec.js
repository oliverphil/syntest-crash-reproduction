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
		const localName = {}
		const defaultValue = -943;
		const anon = {}
		const paramReturnValue = await req1.param(localName, defaultValue, anon)
		const req2 = req
		const arrayElement = () => {};
		const arrayElement1 = false;
		const arrayElement2 = -782.0058483795207;
		const defaultValue1 = -943;
		const anon1 = [arrayElement, arrayElement1, arrayElement2, defaultValue1]
		const acceptsCharsetsReturnValue = await req2.acceptsCharsets(anon1)
		const req3 = req
		const defaultValue2 = -943;
		const acceptsEncodingsReturnValue = await req3.acceptsEncodings(defaultValue2)
		
	})
})
