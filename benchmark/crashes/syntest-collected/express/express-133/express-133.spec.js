// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let compileTrust;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		({compileTrust} = require("../instrumented/express/lib/utils.js"));
	});

	it("Test 1", async () => {
		// Test
		const arrayElement = "i&3Pj/jh} @54)YA|7Q~'\\.AWgyd!~+3LX±c.cF} L{J\\\\\\ojnRi7!Su& D\"SNqEk|DeCb";
		const split = () => {};
		const val = {
			"split": split
		}
		const val1 = true;
		const val2 = [arrayElement, val, val1]
		const compileTrustReturnValue = await compileTrust(val2)
		const val3 = 441;
		const compileTrustReturnValue1 = await compileTrust(val3)
		const val4 = true;
		const anon = -325;
		const compileTrustReturnValue2 = await compileTrust(val4, anon)
		
	})
})
