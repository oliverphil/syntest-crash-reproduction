// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let normalizeTypes;
	let setCharset;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		({normalizeTypes} = require("../instrumented/express/lib/utils.js"));
		({setCharset} = require("../instrumented/express/lib/utils.js"));
	});

	it("Test 1", async () => {
		// Test
		const types = () => {};
		const anon = () => {};
		const anon1 = {}
		const normalizeTypesReturnValue = await normalizeTypes(types, anon, anon1)
		const type = "object";
		const anon2 = () => {};
		const arrayElement = null;
		const anon3 = {}
		const arrayElement1 = 248.0960110115925;
		const arrayElement2 = [anon3, arrayElement1]
		const arrayElement3 = [arrayElement2]
		const anon4 = [arrayElement, arrayElement3]
		const setCharsetReturnValue = await setCharset(type, anon2, anon4)
		
	})
})
