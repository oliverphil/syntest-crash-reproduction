// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let setCharset;
	let normalizeTypes;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		({setCharset} = require("../instrumented/express/lib/utils.js"));
		({normalizeTypes} = require("../instrumented/express/lib/utils.js"));
	});

	it("Test 1", async () => {
		// Test
		const type = null;
		const charset = () => {};
		const setCharsetReturnValue = await setCharset(type, charset)
		const type1 = null;
		const type2 = null;
		const types = [type1, type2]
		const normalizeTypesReturnValue = await normalizeTypes(types)
		
	})
})
