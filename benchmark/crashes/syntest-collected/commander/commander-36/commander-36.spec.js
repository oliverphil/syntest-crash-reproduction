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
		const localLength = "--";
		const word = {
			"length": localLength
		}
		const candidates = () => {};
		const anon = null;
		const suggestSimilarReturnValue = await suggestSimilar(word, candidates, anon)
		const localLength1 = "--";
		const arrayElement = () => {};
		const candidates1 = [arrayElement]
		const suggestSimilarReturnValue1 = await suggestSimilar(localLength1, candidates1)
		const startsWith = () => {};
		const slice = () => {};
		const localLength2 = 40;
		const word1 = {
			"startsWith": startsWith,
			"slice": slice,
			"length": localLength2
		}
		const localLength3 = "--";
		const word2 = {
			"length": localLength3
		}
		const anon1 = false;
		const suggestSimilarReturnValue2 = await suggestSimilar(word1, word2, anon1)
		
	})
})
