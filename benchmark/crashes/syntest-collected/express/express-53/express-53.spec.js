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
		const localName = () => {};
		const options = {}
		const anon = null;
		const clearCookieReturnValue = await res1.clearCookie(localName, options, anon)
		const res2 = res
		const url = null;
		const redirectReturnValue = await res2.redirect(url)
		const res3 = res
		const url1 = 302;
		const redirectReturnValue1 = await res3.redirect(url1)
		
	})
})
