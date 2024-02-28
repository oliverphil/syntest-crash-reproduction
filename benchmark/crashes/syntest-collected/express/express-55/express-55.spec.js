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
		const field = 204;
		const getReturnValue = await res1.get(field)
		const res2 = res
		const links = {}
		const anon = "/:?06sr!up( ]Y&c61Hw#'\nPb@aF6MQ5Kh`[Rwe'lu4FK[)rqAN1§l±Muh,:Uofrr§)'cC_";
		const linksReturnValue = await res2.links(links, anon)
		
	})
})
