// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let normalizeTypes;
	let normalizeType;
	let compileTrust;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		({normalizeTypes} = require("../instrumented/express/lib/utils.js"));
		({normalizeType} = require("../instrumented/express/lib/utils.js"));
		({compileTrust} = require("../instrumented/express/lib/utils.js"));
	});

	it("Test 1", async () => {
		// Test
		const localLength = 204;
		const types = {
			"length": localLength
		}
		const anon = "S~rRvzvqD%1&l9Iu<vFnM\\2h\"#^`,9§{";
		const normalizeTypesReturnValue = await normalizeTypes(types, anon)
		const type = -898.11723740264;
		const anon1 = ",";
		const normalizeTypeReturnValue = await normalizeType(type, anon1)
		const val = false;
		const compileTrustReturnValue = await compileTrust(val)
		
	})
})
