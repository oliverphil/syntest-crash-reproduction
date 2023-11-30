// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let compileETag;
	let compileTrust;
	let normalizeType;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		({compileETag} = require("../instrumented/express/lib/utils.js"));
		({compileTrust} = require("../instrumented/express/lib/utils.js"));
		({normalizeType} = require("../instrumented/express/lib/utils.js"));
	});

	it("Test 1", async () => {
		// Test
		const val = true;
		const compileETagReturnValue = await compileETag(val)
		const val1 = false;
		const compileTrustReturnValue = await compileTrust(val1)
		const arrayElement = "GET";
		const arrayElement1 = {}
		const type = [arrayElement, arrayElement1]
		const anon = {}
		const anon1 = -223;
		const normalizeTypeReturnValue = await normalizeType(type, anon, anon1)
		
	})
})
