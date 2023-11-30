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
		const anon = "g4±M±§d``L§v";
		const normalizeTypesReturnValue = await normalizeTypes(types, anon)
		const split = () => {};
		const val = {
			"split": split
		}
		const compileTrustReturnValue = await compileTrust(val)
		
	})
})
