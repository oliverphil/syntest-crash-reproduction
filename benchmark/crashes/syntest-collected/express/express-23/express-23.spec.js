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
		const arrayElement = []
		const arrayElement1 = "zK8zF&-p}(u}c1\"<UD+=2S,+*h@\"§Twjd>`6";
		const arrayElement2 = {}
		const type = [arrayElement, arrayElement1, arrayElement2]
		const arrayElement3 = () => {};
		const arrayElement4 = false;
		const anon = [arrayElement3, arrayElement4]
		const typeReturnValue = await res1.type(type, anon)
		const res2 = res
		const body = undefined;
		const localSendReturnValue = await res2.send(body)
		
	})
})
