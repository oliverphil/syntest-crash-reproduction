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
		const links = {}
		const anon = {}
		const linksReturnValue = await res1.links(links, anon)
		const res2 = res
		const path = null;
		const options = false;
		const callback = true;
		const anon1 = -652;
		const arrayElement = 300;
		const arrayElement1 = () => {};
		const arrayElement2 = 304;
		const arrayElement3 = [arrayElement2]
		const anon2 = [arrayElement, arrayElement1, arrayElement3]
		const sendFileReturnValue = await res2.sendFile(path, options, callback, anon1, anon2)
		const res3 = res
		const arrayElement4 = 300;
		const val = undefined;
		const appendReturnValue = await res3.append(arrayElement4, val)
		
	})
})
