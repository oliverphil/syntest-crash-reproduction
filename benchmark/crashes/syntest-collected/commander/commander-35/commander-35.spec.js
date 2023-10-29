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
		const startsWith1 = () => {};
		const slice1 = () => {};
		const localLength = null;
		const word = {
			"startsWith": startsWith1,
			"slice": slice1,
			"length": localLength
		}
		const word1 = {
			"startsWith": startsWith,
			"slice": slice,
			"length": word
		}
		const arrayElement = "Commands:";
		const candidates = [arrayElement]
		const suggestSimilarReturnValue = await suggestSimilar(word1, candidates)
		
	})
})
