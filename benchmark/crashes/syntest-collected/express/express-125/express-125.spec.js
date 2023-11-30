// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let setCharset;
	let normalizeType;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		({setCharset} = require("../instrumented/express/lib/utils.js"));
		({normalizeType} = require("../instrumented/express/lib/utils.js"));
	});

	it("Test 1", async () => {
		// Test
		const type = {}
		const charset = 60;
		const setCharsetReturnValue = await setCharset(type, charset)
		const type1 = "b#'?N>=d%yXgTp1'.±<N,+5vpM*^0-7%Xbz8a/";
		const anon = null;
		const normalizeTypeReturnValue = await normalizeType(type1, anon)
		
	})
})
