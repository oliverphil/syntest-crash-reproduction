// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let compileTrust;
	let isAbsolute;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		({compileTrust} = require("../instrumented/express/lib/utils.js"));
		({isAbsolute} = require("../instrumented/express/lib/utils.js"));
	});

	it("Test 1", async () => {
		// Test
		const val = "ZLc4d<c:1e;]d4e%g_Kt6SV8}EPKBs[H'0GA`'qNnqdTPJdGqZ§4>5wa";
		const anon = null;
		const compileTrustReturnValue = await compileTrust(val, anon)
		const val1 = "ZLc4d<c:1e;]d4e%g_Kt6SV8}EPKBs[H'0GAu`'qNnqdTPJdGqZ§4>5wa";
		const anon1 = () => {};
		const anon2 = null;
		const isAbsoluteReturnValue = await isAbsolute(val1, anon1, anon2)
		
	})
})
