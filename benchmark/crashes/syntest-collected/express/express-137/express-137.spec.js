// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let compileTrust;
	let normalizeType;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		({compileTrust} = require("../instrumented/express/lib/utils.js"));
		({normalizeType} = require("../instrumented/express/lib/utils.js"));
	});

	it("Test 1", async () => {
		// Test
		const val = false;
		const compileTrustReturnValue = await compileTrust(val)
		const val1 = -836;
		const anon = "\"";
		const anon1 = "f0]InjmL|5p[Md_.4UUkn.MfDg/@S-WL:><8MY[9}P1{.mzw";
		const compileTrustReturnValue1 = await compileTrust(val1, anon, anon1)
		const anon2 = "\"";
		const anon3 = () => {};
		const normalizeTypeReturnValue = await normalizeType(anon2, anon3)
		const arrayElement = {}
		const anon4 = () => {};
		const val2 = [arrayElement, anon4]
		const compileTrustReturnValue2 = await compileTrust(val2)
		
	})
})
