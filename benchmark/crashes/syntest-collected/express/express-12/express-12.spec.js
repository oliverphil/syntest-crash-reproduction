// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let normalizeType;
	let normalizeTypes;
	let setCharset;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		({normalizeType} = require("../instrumented/express/lib/utils.js"));
		({normalizeTypes} = require("../instrumented/express/lib/utils.js"));
		({setCharset} = require("../instrumented/express/lib/utils.js"));
	});

	it("Test 1", async () => {
		// Test
		const type = "req.param(";
		const normalizeTypeReturnValue = await normalizeType(type)
		const localLength = -1;
		const types = {
			"length": localLength
		}
		const normalizeTypesReturnValue = await normalizeTypes(types)
		const type1 = "cp34tkZawF$=wwzU<eL_wkhQJ</73ld|§4TWJ<<|WdFFwd§?\\L\"8U xCyL";
		const charset = () => {};
		const setCharsetReturnValue = await setCharset(type1, charset)
		
	})
})
