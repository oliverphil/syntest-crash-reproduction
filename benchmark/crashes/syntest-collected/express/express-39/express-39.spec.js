// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let req;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/request.js")];
		(req = require("../instrumented/express/lib/request.js"));
	});

	it("Test 1", async () => {
		// Test
		const req1 = req
		const acceptsReturnValue = await req1.accepts()
		const req2 = req
		const arrayElement = null;
		const arrayElement1 = "booting in %s mode";
		const arrayElement2 = 60;
		const anon = [arrayElement, arrayElement1, arrayElement2]
		const anon1 = "http";
		const acceptsCharsetsReturnValue = await req2.acceptsCharsets(anon, anon1)
		
	})
})
