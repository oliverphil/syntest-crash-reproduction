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
		const localDefault = () => {};
		const arrayElement = "req.param(";
		const anon = []
		const arrayElement1 = undefined;
		const val = [arrayElement, anon, arrayElement1]
		const appendReturnValue = await res1.append(localDefault, val)
		const res2 = res
		const localDefault1 = () => {};
		const value = 302;
		const arrayElement2 = "req.param(";
		const cookieReturnValue = await res2.cookie(localDefault1, value, arrayElement2)
		const res3 = res
		const localDefault2 = () => {};
		const obj = {
			"default": localDefault2
		}
		const arrayElement3 = "req.param(";
		const options = 304;
		const cookieReturnValue1 = await res3.cookie(obj, arrayElement3, options)
		
	})
})
