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
		const arrayElement = true;
		const arrayElement1 = undefined;
		const val = [arrayElement, arrayElement1]
		const appendReturnValue = await res1.append(field, val)
		
	})
})
