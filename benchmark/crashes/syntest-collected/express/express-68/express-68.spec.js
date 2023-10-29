// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let isAbsolute;
	let compileTrust;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		({isAbsolute} = require("../instrumented/express/lib/utils.js"));
		({compileTrust} = require("../instrumented/express/lib/utils.js"));
	});

	it("Test 1", async () => {
		// Test
		const substring = () => {};
		const path = {
			"substring": substring
		}
		const anon = () => {};
		const isAbsoluteReturnValue = await isAbsolute(path, anon)
		const arrayElement = 0;
		const val = [arrayElement]
		const compileTrustReturnValue = await compileTrust(val)
		
	})
})
