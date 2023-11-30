// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let compileTrust;
	let isAbsolute;
	let normalizeTypes;
	let setCharset;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		({compileTrust} = require("../instrumented/express/lib/utils.js"));
		({isAbsolute} = require("../instrumented/express/lib/utils.js"));
		({normalizeTypes} = require("../instrumented/express/lib/utils.js"));
		({setCharset} = require("../instrumented/express/lib/utils.js"));
	});

	it("Test 1", async () => {
		// Test
		const val = -449;
		const anon = -407.1795010134458;
		const compileTrustReturnValue = await compileTrust(val, anon)
		const substring = () => {};
		const path = {
			"substring": substring
		}
		const isAbsoluteReturnValue = await isAbsolute(path)
		const substring1 = () => {};
		const normalizeTypesReturnValue = await normalizeTypes(substring1)
		const type = () => {};
		const substring2 = () => {};
		const anon1 = -407.1795010134458;
		const setCharsetReturnValue = await setCharset(type, substring2, anon1)
		
	})
})
