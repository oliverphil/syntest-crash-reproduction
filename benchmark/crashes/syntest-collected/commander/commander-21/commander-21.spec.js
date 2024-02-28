// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let suggestSimilar;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/commanderjs/lib/suggestSimilar.js")];
		({suggestSimilar} = require("../instrumented/commanderjs/lib/suggestSimilar.js"));
	});

	it("Test 1", async () => {
		// Test
		const word = "TbhH\"'r";
		const candidates = () => {};
		const suggestSimilarReturnValue = await suggestSimilar(word, candidates)
		const localLength = -808;
		const word1 = {
			"length": localLength
		}
		const localLength1 = 988.4076021016795;
		const map = () => {};
		const forEach = () => {};
		const candidates1 = {
			"length": localLength1,
			"map": map,
			"forEach": forEach
		}
		const anon = null;
		const suggestSimilarReturnValue1 = await suggestSimilar(word1, candidates1, anon)
		const word2 = "TbhH\"'r";
		const arrayElement = false;
		const word3 = [word2, arrayElement]
		const map1 = () => {};
		const suggestSimilarReturnValue2 = await suggestSimilar(word3, map1)
		const arrayElement1 = false;
		const anon1 = null;
		const map2 = () => {};
		const suggestSimilarReturnValue3 = await suggestSimilar(arrayElement1, anon1, map2)
		
	})
})
