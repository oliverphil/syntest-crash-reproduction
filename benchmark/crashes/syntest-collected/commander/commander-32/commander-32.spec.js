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
		const localLength = null;
		const word = {
			"startsWith": startsWith,
			"slice": slice,
			"length": localLength
		}
		const arrayElement = undefined;
		const candidates = [arrayElement]
		const suggestSimilarReturnValue = await suggestSimilar(word, candidates)
		
	})
})
