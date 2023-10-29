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
		const filename = false;
		const anon = 81.33551525306893;
		const attachmentReturnValue = await res1.attachment(filename, anon)
		const res2 = res
		const url = true;
		const anon1 = () => {};
		const localLocationReturnValue = await res2.location(url, anon1)
		
	})
})
