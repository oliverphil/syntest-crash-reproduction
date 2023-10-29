// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let setCharset;
	let compileETag;
	let normalizeTypes;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		({setCharset} = require("../instrumented/express/lib/utils.js"));
		({compileETag} = require("../instrumented/express/lib/utils.js"));
		({normalizeTypes} = require("../instrumented/express/lib/utils.js"));
	});

	it("Test 1", async () => {
		// Test
		const arrayElement = "No default engine was specified and no extension was provided.";
		const type = [arrayElement]
		const charset = () => {};
		const setCharsetReturnValue = await setCharset(type, charset)
		const val = "express";
		const compileETagReturnValue = await compileETag(val)
		const type1 = "ZaR1}\nNZ`p .9QEg+kU";
		const charset1 = {}
		const anon = true;
		const setCharsetReturnValue1 = await setCharset(type1, charset1, anon)
		const charset2 = {}
		const normalizeTypesReturnValue = await normalizeTypes(charset2)
		
	})
})
