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
		const word = "$\\ZP&Q!C5N>X^+Pmvj9I?&bjK,uTKwe9;v,J}|~DT&@tcs\tqZV=^3J{-G^";
		const arrayElement = null;
		const candidates = [arrayElement]
		const suggestSimilarReturnValue = await suggestSimilar(word, candidates)
		const arrayElement1 = null;
		const candidates1 = [arrayElement1]
		const localLength = -98.20875234966604;
		const map = () => {};
		const forEach = () => {};
		const candidates2 = {
			"length": localLength,
			"map": map,
			"forEach": forEach
		}
		const suggestSimilarReturnValue1 = await suggestSimilar(candidates1, candidates2)
		
	})
})
