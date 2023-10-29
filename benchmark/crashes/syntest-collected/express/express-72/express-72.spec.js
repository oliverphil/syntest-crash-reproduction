// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let compileTrust;
	let setCharset;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		({compileTrust} = require("../instrumented/express/lib/utils.js"));
		({setCharset} = require("../instrumented/express/lib/utils.js"));
	});

	it("Test 1", async () => {
		// Test
		const arrayElement = true;
		const val = [arrayElement]
		const anon = 204;
		const anon1 = {}
		const compileTrustReturnValue = await compileTrust(val, anon, anon1)
		const arrayElement1 = true;
		const charset = undefined;
		const anon2 = null;
		const anon3 = 171;
		const setCharsetReturnValue = await setCharset(arrayElement1, charset, anon2, anon3)
		
	})
})
