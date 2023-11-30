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
		const path = false;
		const filename = {}
		const options = true;
		const callback = null;
		const anon = () => {};
		const downloadReturnValue = await res1.download(path, filename, options, callback, anon)
		const res2 = res
		const filename1 = {}
		const statusCode = [filename1]
		const sendStatusReturnValue = await res2.sendStatus(statusCode)
		
	})
})
