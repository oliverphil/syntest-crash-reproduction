// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let normalizeTypes;
	let normalizeType;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		({normalizeTypes} = require("../instrumented/express/lib/utils.js"));
		({normalizeType} = require("../instrumented/express/lib/utils.js"));
	});

	it("Test 1", async () => {
		// Test
		const types = 843.7473745908833;
		const anon = undefined;
		const anon1 = null;
		const anon2 = {}
		const normalizeTypesReturnValue = await normalizeTypes(types, anon, anon1, anon2)
		const anon3 = {}
		const arrayElement = () => {};
		const arrayElement1 = [anon3, arrayElement]
		const anon4 = {}
		const type = [arrayElement1, anon4]
		const normalizeTypeReturnValue = await normalizeType(type)
		const arrayElement2 = () => {};
		const type1 = {
			"split": arrayElement2
		}
		const normalizeTypeReturnValue1 = await normalizeType(type1)
		
	})
})
