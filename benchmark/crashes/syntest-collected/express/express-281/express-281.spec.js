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
		const val = null;
		const anon = () => {};
		const appendReturnValue = await res1.append(field, val, anon)
		const res2 = res
		const body = "view";
		const anon1 = 3.141592653589793;
		const localSendReturnValue = await res2.send(body, anon1)
		
	})
})
