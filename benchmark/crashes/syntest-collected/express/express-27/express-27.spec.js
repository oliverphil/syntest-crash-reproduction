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
		const type = 304;
		const charset = () => {};
		const setCharsetReturnValue = await setCharset(type, charset)
		const type1 = "X@";
		const anon = 488.97240310960456;
		const charset1 = () => {};
		const normalizeTypeReturnValue = await normalizeType(type1, anon, charset1)
		
	})
})
