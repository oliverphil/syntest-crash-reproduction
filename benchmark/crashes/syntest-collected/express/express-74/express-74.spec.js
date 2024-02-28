// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let normalizeTypes;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		({normalizeTypes} = require("../instrumented/express/lib/utils.js"));
	});

	it("Test 1", async () => {
		// Test
		const arrayElement = () => {};
		const arrayElement1 = -37.93835022983558;
		const arrayElement2 = null;
		const arrayElement3 = [arrayElement2]
		const arrayElement4 = 204;
		const arrayElement5 = [arrayElement, arrayElement1, arrayElement3, arrayElement4]
		const types = [arrayElement5]
		const normalizeTypesReturnValue = await normalizeTypes(types)
		
	})
})
