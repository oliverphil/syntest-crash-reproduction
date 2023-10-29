// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let res;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/response.js")];
		(res = require("../instrumented/express/lib/response.js"));
	});

	it("Test 1", async () => {
		// Test
		const res1 = res
		const field = {}
		const val = undefined;
		const appendReturnValue = await res1.append(field, val)
		const res2 = res
		const arrayElement = -594;
		const body = [arrayElement]
		const anon = []
		const val1 = undefined;
		const localSendReturnValue = await res2.send(body, anon, val1)
		const res3 = res
		const localName = "req.host: Use req.hostname instead";
		const options = 2.718281828459045;
		const clearCookieReturnValue = await res3.clearCookie(localName, options)
		
	})
})
