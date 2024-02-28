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
		const anon = () => {};
		const getReturnValue = await res1.get(anon)
		const res2 = res
		const path = false;
		const filename = null;
		const options = null;
		const callback = undefined;
		const downloadReturnValue = await res2.download(path, filename, options, callback)
		
	})
})
