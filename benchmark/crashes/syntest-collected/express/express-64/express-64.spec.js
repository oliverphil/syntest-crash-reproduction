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
		const filename = 60;
		const anon = undefined;
		const anon1 = null;
		const attachmentReturnValue = await res1.attachment(filename, anon, anon1)
		const res2 = res
		const obj = undefined;
		const jsonReturnValue = await res2.json(obj)
		const res3 = res
		const obj1 = 302;
		const anon2 = 1;
		const jsonpReturnValue = await res3.jsonp(obj1, anon2)
		
	})
})
