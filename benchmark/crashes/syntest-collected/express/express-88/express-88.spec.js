// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let setCharset;
	let normalizeTypes;
	let normalizeType;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		({setCharset} = require("../instrumented/express/lib/utils.js"));
		({normalizeTypes} = require("../instrumented/express/lib/utils.js"));
		({normalizeType} = require("../instrumented/express/lib/utils.js"));
	});

	it("Test 1", async () => {
		// Test
		const type = false;
		const charset = "stat \"%s\"";
		const setCharsetReturnValue = await setCharset(type, charset)
		const charset1 = "stat \"%s\"";
		const normalizeTypesReturnValue = await normalizeTypes(charset1)
		const indexOf = () => {};
		const type1 = {
			"indexOf": indexOf
		}
		const type2 = false;
		const arrayElement = 200;
		const arrayElement1 = false;
		const anon = [type2, arrayElement, arrayElement1]
		const anon1 = {}
		const normalizeTypeReturnValue = await normalizeType(type1, anon, anon1)
		
	})
})
