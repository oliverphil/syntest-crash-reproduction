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
		const field = () => {};
		const anon = "9^_.t\"8n'Ls+`kU±u<[yiy|QGZmr§UooH*`e(";
		const getReturnValue = await res1.get(field, anon)
		const res2 = res
		const links = 304;
		const linksReturnValue = await res2.links(links)
		
	})
})
