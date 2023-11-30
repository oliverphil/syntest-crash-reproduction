// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let setCharset;
	let normalizeTypes;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		({setCharset} = require("../instrumented/express/lib/utils.js"));
		({normalizeTypes} = require("../instrumented/express/lib/utils.js"));
	});

	it("Test 1", async () => {
		// Test
		const type = null;
		const charset = false;
		const setCharsetReturnValue = await setCharset(type, charset)
		const localLength = -935.1871918029376;
		const types = {
			"length": localLength
		}
		const normalizeTypesReturnValue = await normalizeTypes(types)
		const localLength1 = -935.1871918029376;
		const types1 = {
			"length": localLength1
		}
		const normalizeTypesReturnValue1 = await normalizeTypes(types1)
		const arrayElement = {}
		const arrayElement1 = "zQq@5l/~rS6eF4QzG9DJ%K}MJy@%{K@CKoF+4\n'§`;&8v]2,u'Z2.Bp6ih`0\"z O+@/O5[±F1cy&wH\\je&#[R|?`rO?!.PR";
		const types2 = [arrayElement, arrayElement1]
		const normalizeTypesReturnValue2 = await normalizeTypes(types2)
		
	})
})
