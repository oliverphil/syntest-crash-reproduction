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
		const field = undefined;
		const val = undefined;
		const appendReturnValue = await res1.append(field, val)
		const res2 = res
		const val1 = undefined;
		const anon = () => {};
		const formatReturnValue = await res2.format(val1, anon)
		const res3 = res
		const toLowerCase = () => {};
		const field1 = {
			"toLowerCase": toLowerCase
		}
		const map = () => {};
		const val2 = {
			"map": map
		}
		const headerReturnValue = await res3.header(field1, val2)
		
	})
})
