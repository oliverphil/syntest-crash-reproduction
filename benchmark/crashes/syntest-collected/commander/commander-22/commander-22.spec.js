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
		const slice = {}
		const arrayElement = {}
		const arrayElement1 = 0;
		const arrayElement2 = 1;
		const localLength = [arrayElement, arrayElement1, arrayElement2]
		const word = {
			"startsWith": startsWith,
			"slice": slice,
			"length": localLength
		}
		const candidates = "i84n@$KcENpJ0Ln'%[&+]8^`Z\\Lin'.WhQ1`}[2C'zLlydDI&AcHPCHx[K?YzF?iKBdW";
		const suggestSimilarReturnValue = await suggestSimilar(word, candidates)
		const slice1 = {}
		const arrayElement3 = 1;
		const arrayElement4 = 0;
		const suggestSimilarReturnValue1 = await suggestSimilar(slice1, arrayElement3, arrayElement4)
		
	})
})
