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
		const code = "send";
		const localStatusReturnValue = await res2.status(code)
		const res3 = res
		const toLowerCase = () => {};
		const field = {
			"toLowerCase": toLowerCase
		}
		const arrayElement = null;
		const arrayElement1 = {}
		const val = [arrayElement, arrayElement1]
		const headerReturnValue = await res3.header(field, val)
		
	})
})
