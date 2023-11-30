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
		const arrayElement1 = -400;
		const arrayElement2 = () => {};
		const arrayElement3 = null;
		const type = [arrayElement, arrayElement1, arrayElement2, arrayElement3]
		const anon = null;
		const typeReturnValue = await res1.type(type, anon)
		
	})
})
