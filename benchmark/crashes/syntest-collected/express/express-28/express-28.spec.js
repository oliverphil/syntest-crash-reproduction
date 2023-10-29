// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let setCharset;
	let compileTrust;
	let normalizeType;
	let normalizeTypes;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		({setCharset} = require("../instrumented/express/lib/utils.js"));
		({compileTrust} = require("../instrumented/express/lib/utils.js"));
		({normalizeType} = require("../instrumented/express/lib/utils.js"));
		({normalizeTypes} = require("../instrumented/express/lib/utils.js"));
	});

	it("Test 1", async () => {
		// Test
		const type = "w`]TM)p<qHe4SMN[d{'slpis{JC\"PF_DAO-}V+7N=6[eyE0:4eejgrS 7};9}^*";
		const arrayElement = false;
		const arrayElement1 = () => {};
		const arrayElement2 = "object";
		const charset = [arrayElement, arrayElement1, arrayElement2]
		const setCharsetReturnValue = await setCharset(type, charset)
		const val = false;
		const anon = {}
		const compileTrustReturnValue = await compileTrust(val, anon)
		const arrayElement3 = false;
		const arrayElement4 = () => {};
		const arrayElement5 = "object";
		const charset1 = [arrayElement3, arrayElement4, arrayElement5]
		const normalizeTypeReturnValue = await normalizeType(charset1)
		const arrayElement6 = false;
		const arrayElement7 = () => {};
		const arrayElement8 = "object";
		const charset2 = [arrayElement6, arrayElement7, arrayElement8]
		const normalizeTypesReturnValue = await normalizeTypes(charset2)
		
	})
})
