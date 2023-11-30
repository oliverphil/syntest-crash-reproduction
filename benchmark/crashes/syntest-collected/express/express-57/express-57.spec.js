// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let compileTrust;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		({compileTrust} = require("../instrumented/express/lib/utils.js"));
	});

	it("Test 1", async () => {
		// Test
		const split = () => {};
		const val = {
			"split": split
		}
		const compileTrustReturnValue = await compileTrust(val)
		const val1 = 441;
		const compileTrustReturnValue1 = await compileTrust(val1)
		const val2 = true;
		const anon = {}
		const compileTrustReturnValue2 = await compileTrust(val2, anon)
		
	})
})
