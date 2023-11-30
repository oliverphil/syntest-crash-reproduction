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
		const field = () => {};
		const anon = {}
		const varyReturnValue = await res1.vary(field, anon)
		const res2 = res
		const localName = false;
		const anon1 = {}
		const clearCookieReturnValue = await res2.clearCookie(localName, anon1)
		const res3 = res
		const field1 = () => {};
		const arrayElement = true;
		const arrayElement1 = undefined;
		const val = [arrayElement, arrayElement1]
		const appendReturnValue = await res3.append(field1, val)
		
	})
})
