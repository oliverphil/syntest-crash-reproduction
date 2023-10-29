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
		const localName = 148;
		const defaultValue = 304;
		const anon = false;
		const anon1 = "<p[ua<j^@+YS!,HYg;#(}dRRt";
		const paramReturnValue = await req1.param(localName, defaultValue, anon, anon1)
		const req2 = req
		const req3 = req
		const defaultValue1 = 304;
		const acceptsEncodingsReturnValue = await req3.acceptsEncodings(defaultValue1)
		const req4 = req
		const anon2 = null;
		const acceptsEncodingsReturnValue1 = await req4.acceptsEncodings(anon2)
		
	})
})
