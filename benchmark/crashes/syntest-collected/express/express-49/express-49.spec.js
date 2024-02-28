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
		const statusCode = () => {};
		const anon = false;
		const sendStatusReturnValue = await res1.sendStatus(statusCode, anon)
		const res2 = res
		const field = null;
		const val = undefined;
		const appendReturnValue = await res2.append(field, val)
		
	})
})
