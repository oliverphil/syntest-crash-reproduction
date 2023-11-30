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
		const field = -852;
		const anon = {}
		const getReturnValue = await res1.get(field, anon)
		const res2 = res
		const field1 = -392;
		const anon1 = null;
		const getReturnValue1 = await res2.get(field1, anon1)
		const res3 = res
		const type = undefined;
		const typeReturnValue = await res3.type(type)
		const res4 = res
		const url = true;
		const anon2 = false;
		const redirectReturnValue = await res4.redirect(url, anon2)
		
	})
})
