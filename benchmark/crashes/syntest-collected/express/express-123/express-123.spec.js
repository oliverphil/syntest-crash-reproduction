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
		const url = 2;
		const anon = {}
		const redirectReturnValue = await res1.redirect(url, anon)
		const res2 = res
		const url1 = undefined;
		const anon1 = () => {};
		const redirectReturnValue1 = await res2.redirect(url1, anon1)
		const res3 = res
		const path = -645;
		const options = undefined;
		const callback = () => {};
		const sendfileReturnValue = await res3.sendfile(path, options, callback)
		
	})
})
