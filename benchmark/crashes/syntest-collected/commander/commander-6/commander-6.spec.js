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
		const arrayElement = null;
		const arrayElement1 = undefined;
		const arrayElement2 = [arrayElement1]
		const arrayElement3 = "[5*{;yuenkeEYl[m%skYXt7G!(QtWF@B\\j3|E9{&}H>o<Y<y;7k+PU^VA=K%%`qH\\x2^T*QK%',_i<ly'eL[[jh\",:NWx>3";
		const arrayElement4 = [arrayElement2, arrayElement3]
		const localLength = [arrayElement, arrayElement4]
		const word = {
			"startsWith": startsWith,
			"slice": slice,
			"length": localLength
		}
		const candidates = 2;
		const suggestSimilarReturnValue = await suggestSimilar(word, candidates)
		const localLength1 = {}
		const word1 = {
			"length": localLength1
		}
		const candidates1 = "<";
		const arrayElement5 = undefined;
		const arrayElement6 = [arrayElement5]
		const suggestSimilarReturnValue1 = await suggestSimilar(word1, candidates1, arrayElement6)
		
	})
})
