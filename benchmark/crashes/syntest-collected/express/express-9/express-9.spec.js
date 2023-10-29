// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let normalizeTypes;
	let compileTrust;
	let compileETag;
	let compileQueryParser;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		({normalizeTypes} = require("../instrumented/express/lib/utils.js"));
		({compileTrust} = require("../instrumented/express/lib/utils.js"));
		({compileETag} = require("../instrumented/express/lib/utils.js"));
		({compileQueryParser} = require("../instrumented/express/lib/utils.js"));
	});

	it("Test 1", async () => {
		// Test
		const types = () => {};
		const normalizeTypesReturnValue = await normalizeTypes(types)
		const split = () => {};
		const val = {
			"split": split
		}
		const anon = null;
		const compileTrustReturnValue = await compileTrust(val, anon)
		const val1 = "BI$aw/'CXD]~?'8?`pEsLP_`^s}VX#H >vYD)1^]5-=lb`WMjb=!xc?Z8jq8+ng&tky&:(\"±%OYR`94X%aX";
		const anon1 = "array-flatten";
		const compileETagReturnValue = await compileETag(val1, anon1)
		const val2 = "<m(&";
		const compileQueryParserReturnValue = await compileQueryParser(val2)
		
	})
})
