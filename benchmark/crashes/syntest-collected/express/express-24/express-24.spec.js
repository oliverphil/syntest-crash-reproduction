// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let compileTrust;
	let normalizeTypes;
	let compileETag;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		({compileTrust} = require("../instrumented/express/lib/utils.js"));
		({normalizeTypes} = require("../instrumented/express/lib/utils.js"));
		({compileETag} = require("../instrumented/express/lib/utils.js"));
	});

	it("Test 1", async () => {
		// Test
		const split = () => {};
		const val = {
			"split": split
		}
		const compileTrustReturnValue = await compileTrust(val)
		const types = 1000;
		const normalizeTypesReturnValue = await normalizeTypes(types)
		const val1 = false;
		const compileETagReturnValue = await compileETag(val1)
		
	})
})
