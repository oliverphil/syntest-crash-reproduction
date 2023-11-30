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
		const code = false;
		const anon = null;
		const localStatusReturnValue = await res1.status(code, anon)
		const res2 = res
		const obj = 104.00787586572847;
		const arrayElement = 400;
		const arrayElement1 = "(/'L]Ft";
		const body = [obj, arrayElement, arrayElement1]
		const anon1 = ", fn) instead";
		const localSendReturnValue = await res2.send(body, anon1)
		
	})
})
