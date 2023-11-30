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
		const path = () => {};
		const options = () => {};
		const callback = true;
		const anon = 204;
		const anon1 = {}
		const sendfileReturnValue = await res1.sendfile(path, options, callback, anon, anon1)
		const res2 = res
		const callback1 = true;
		const anon2 = {}
		const attachmentReturnValue = await res2.attachment(callback1, anon2)
		const res3 = res
		const url = true;
		const localLocationReturnValue = await res3.location(url)
		
	})
})
