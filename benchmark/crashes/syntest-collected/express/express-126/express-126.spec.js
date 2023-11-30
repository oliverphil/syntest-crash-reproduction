// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let normalizeTypes;
	let compileTrust;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		({normalizeTypes} = require("../instrumented/express/lib/utils.js"));
		({compileTrust} = require("../instrumented/express/lib/utils.js"));
	});

	it("Test 1", async () => {
		// Test
		const types = []
		const types1 = [types]
		const anon = () => {};
		const normalizeTypesReturnValue = await normalizeTypes(types1, anon)
		const val = true;
		const compileTrustReturnValue = await compileTrust(val)
		
	})
})
