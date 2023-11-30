// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let normalizeType;
	let normalizeTypes;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		({normalizeType} = require("../instrumented/express/lib/utils.js"));
		({normalizeTypes} = require("../instrumented/express/lib/utils.js"));
	});

	it("Test 1", async () => {
		// Test
		const type = "express:view";
		const normalizeTypeReturnValue = await normalizeType(type)
		const localLength = 204;
		const types = {
			"length": localLength
		}
		const normalizeTypesReturnValue = await normalizeTypes(types)
		
	})
})
