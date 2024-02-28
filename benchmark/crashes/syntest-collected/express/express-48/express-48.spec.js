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
		const res2 = res
		const type = "-6j?4fAMBJh<_iym1zQ!-f@#§K)VmU^VB@\\/l)a42Jabl.?KE QB>'@ozo|#K@Jo'8L\t|s79y;}%\tULwfS\n0_rlmf*§Ul(";
		const typeReturnValue = await res2.type(type)
		const res3 = res
		const toLowerCase = () => {};
		const options = true;
		const anon = "res.jsonp(obj, status): Use res.status(status).jsonp(obj) instead";
		const clearCookieReturnValue = await res3.clearCookie(toLowerCase, options, anon)
		
	})
})
