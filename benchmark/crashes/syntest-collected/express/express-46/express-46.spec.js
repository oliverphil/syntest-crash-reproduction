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
		const arrayElement = true;
		const arrayElement1 = 839;
		const field = [arrayElement, arrayElement1]
		const anon = "Last-Modified";
		const varyReturnValue = await res1.vary(field, anon)
		const res2 = res
		const url = 204;
		const redirectReturnValue = await res2.redirect(url)
		const res3 = res
		const localDefault = true;
		const obj = {
			"default": localDefault
		}
		const formatReturnValue = await res3.format(obj)
		const res4 = res
		const localName = undefined;
		const value = null;
		const arrayElement2 = 839;
		const cookieReturnValue = await res4.cookie(localName, value, arrayElement2)
		
	})
})
