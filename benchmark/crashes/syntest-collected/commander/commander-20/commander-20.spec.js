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
		const word = () => {};
		const candidates = () => {};
		const suggestSimilarReturnValue = await suggestSimilar(word, candidates)
		const localLength = -128;
		const word1 = {
			"length": localLength
		}
		const candidates1 = -1;
		const suggestSimilarReturnValue1 = await suggestSimilar(word1, candidates1)
		
	})
})
