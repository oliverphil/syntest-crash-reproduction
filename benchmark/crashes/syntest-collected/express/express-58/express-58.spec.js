// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let setCharset;
	let normalizeTypes;
	let compileTrust;
	let compileETag;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		({setCharset} = require("../instrumented/express/lib/utils.js"));
		({normalizeTypes} = require("../instrumented/express/lib/utils.js"));
		({compileTrust} = require("../instrumented/express/lib/utils.js"));
		({compileETag} = require("../instrumented/express/lib/utils.js"));
	});

	it("Test 1", async () => {
		// Test
		const type = "\" in views ";
		const charset = 200;
		const setCharsetReturnValue = await setCharset(type, charset)
		const arrayElement = false;
		const arrayElement1 = () => {};
		const arrayElement2 = () => {};
		const types = [arrayElement, arrayElement1, arrayElement2]
		const anon = undefined;
		const normalizeTypesReturnValue = await normalizeTypes(types, anon)
		const val = 1000;
		const charset1 = 200;
		const charset2 = 200;
		const compileTrustReturnValue = await compileTrust(val, charset1, charset2)
		const val1 = 1000;
		const val2 = 1000;
		const compileETagReturnValue = await compileETag(val1, val2)
		
	})
})
