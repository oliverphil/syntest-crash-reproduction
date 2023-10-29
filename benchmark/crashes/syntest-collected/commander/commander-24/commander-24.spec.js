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
		const word = "w8>cGQ>B'X";
		const candidates = () => {};
		const suggestSimilarReturnValue = await suggestSimilar(word, candidates)
		const arrayElement = undefined;
		const arrayElement1 = false;
		const word1 = [arrayElement, arrayElement1]
		const candidates1 = -200.47925954084167;
		const suggestSimilarReturnValue1 = await suggestSimilar(word1, candidates1)
		const word2 = "]§cx)Mrdx5,L)v&?}jV4u6>Xsq(4#!%ON:{EK]b(}+Qu[H}j=1ZfgeEL9]0JHnXqJx[b]7j\nmw";
		const candidates2 = []
		const suggestSimilarReturnValue2 = await suggestSimilar(word2, candidates2)
		const word3 = "w8>cGQ>B'X";
		const arrayElement2 = undefined;
		const arrayElement3 = false;
		const word4 = [arrayElement2, arrayElement3]
		const word5 = [word3, word4]
		const localLength = 0;
		const map = () => {};
		const forEach = () => {};
		const candidates3 = {
			"length": localLength,
			"map": map,
			"forEach": forEach
		}
		const candidates4 = -200.47925954084167;
		const candidates5 = -200.47925954084167;
		const suggestSimilarReturnValue3 = await suggestSimilar(word5, candidates3, candidates4, candidates5)
		
	})
})
