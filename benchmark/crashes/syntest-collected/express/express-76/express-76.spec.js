// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let isAbsolute;
	let normalizeType;
	let compileTrust;
	let setCharset;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		({isAbsolute} = require("../instrumented/express/lib/utils.js"));
		({normalizeType} = require("../instrumented/express/lib/utils.js"));
		({compileTrust} = require("../instrumented/express/lib/utils.js"));
		({setCharset} = require("../instrumented/express/lib/utils.js"));
	});

	it("Test 1", async () => {
		// Test
		const path = "x-powered-by";
		const anon = 167.13771769821074;
		const isAbsoluteReturnValue = await isAbsolute(path, anon)
		const type = "req.param(";
		const normalizeTypeReturnValue = await normalizeType(type)
		const anon1 = 167.13771769821074;
		const compileTrustReturnValue = await compileTrust(anon1)
		const arrayElement = 458;
		const arrayElement1 = "6j@^h\"OV&>>=}BlHR:PaD2Bk/(@<`s§v|JI7e$Y1G5aag,f%Z9lv%SUKq§'/D>]K]W§j^6sl3IUR";
		const arrayElement2 = null;
		const type1 = [arrayElement, arrayElement1, arrayElement2]
		const charset = {}
		const setCharsetReturnValue = await setCharset(type1, charset)
		
	})
})
