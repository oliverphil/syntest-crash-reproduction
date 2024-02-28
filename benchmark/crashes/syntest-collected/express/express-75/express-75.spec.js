// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let compileTrust;
	let normalizeType;
	let normalizeTypes;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		({compileTrust} = require("../instrumented/express/lib/utils.js"));
		({normalizeType} = require("../instrumented/express/lib/utils.js"));
		({normalizeTypes} = require("../instrumented/express/lib/utils.js"));
	});

	it("Test 1", async () => {
		// Test
		const val = 2.718281828459045;
		const anon = "$|\t\\bs~7QJ/~x}|,O9MI|";
		const compileTrustReturnValue = await compileTrust(val, anon)
		const anon1 = "$|\t\\bs~7QJ/~x}|,O9MI|";
		const anon2 = "$|\t\\bs~7QJ/~x}|,O9MI|";
		const normalizeTypeReturnValue = await normalizeType(anon1, anon2)
		const arrayElement = 302;
		const arrayElement1 = [arrayElement]
		const arrayElement2 = () => {};
		const arrayElement3 = 711;
		const types = [arrayElement1, arrayElement2, arrayElement3]
		const normalizeTypesReturnValue = await normalizeTypes(types)
		
	})
})
