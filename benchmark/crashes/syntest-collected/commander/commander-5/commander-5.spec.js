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
		const startsWith = () => {};
		const slice = () => {};
		const localLength = undefined;
		const word = {
			"startsWith": startsWith,
			"slice": slice,
			"length": localLength
		}
		const localLength1 = -643;
		const map = () => {};
		const forEach = () => {};
		const candidates = {
			"length": localLength1,
			"map": map,
			"forEach": forEach
		}
		const suggestSimilarReturnValue = await suggestSimilar(word, candidates)
		const localLength2 = -643;
		const map1 = () => {};
		const forEach1 = () => {};
		const candidates1 = {
			"length": localLength2,
			"map": map1,
			"forEach": forEach1
		}
		const startsWith1 = () => {};
		const slice1 = () => {};
		const localLength3 = undefined;
		const word1 = {
			"startsWith": startsWith1,
			"slice": slice1,
			"length": localLength3
		}
		const anon = null;
		const suggestSimilarReturnValue1 = await suggestSimilar(candidates1, word1, anon)
		
	})
})
