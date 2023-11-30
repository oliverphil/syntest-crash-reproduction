// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let setCharset;
	let compileTrust;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		({setCharset} = require("../instrumented/express/lib/utils.js"));
		({compileTrust} = require("../instrumented/express/lib/utils.js"));
	});

	it("Test 1", async () => {
		// Test
		const type = () => {};
		const charset = "Set-Cookie";
		const anon = -1;
		const anon1 = false;
		const setCharsetReturnValue = await setCharset(type, charset, anon, anon1)
		const type1 = {}
		const anon2 = false;
		const anon3 = "utils-merge";
		const setCharsetReturnValue1 = await setCharset(type1, anon2, anon3)
		const type2 = {}
		const compileTrustReturnValue = await compileTrust(type2)
		
	})
})
