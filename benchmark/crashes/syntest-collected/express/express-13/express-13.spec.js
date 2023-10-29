// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let compileQueryParser;
	let normalizeType;
	let compileTrust;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		({compileQueryParser} = require("../instrumented/express/lib/utils.js"));
		({normalizeType} = require("../instrumented/express/lib/utils.js"));
		({compileTrust} = require("../instrumented/express/lib/utils.js"));
	});

	it("Test 1", async () => {
		// Test
		const val = true;
		const compileQueryParserReturnValue = await compileQueryParser(val)
		const indexOf = () => {};
		const type = {
			"indexOf": indexOf
		}
		const normalizeTypeReturnValue = await normalizeType(type)
		const type1 = "bXACoRSK1GDFp%|$?4Q`,';HPL8))g*oDD\n;>V5§tT|wT!\\>HZ=z~FVY=6Yxghh`X/1UHsQy3tM6%P:Y'[g`";
		const normalizeTypeReturnValue1 = await normalizeType(type1)
		const val1 = false;
		const compileTrustReturnValue = await compileTrust(val1)
		
	})
})
