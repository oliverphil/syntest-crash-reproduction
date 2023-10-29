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
		const word = "--no-";
		const arrayElement = false;
		const arrayElement1 = 178.9455216423678;
		const candidates = [arrayElement, arrayElement1]
		const anon = false;
		const suggestSimilarReturnValue = await suggestSimilar(word, candidates, anon)
		const arrayElement2 = 2.718281828459045;
		const anon1 = false;
		const arrayElement3 = null;
		const arrayElement4 = [arrayElement2, anon1, arrayElement3]
		const anon2 = false;
		const word1 = [arrayElement4, anon2]
		const map = () => {};
		const anon3 = 80;
		const suggestSimilarReturnValue1 = await suggestSimilar(word1, map, anon3)
		const arrayElement5 = "3^7ur\nL]BeSYUP7'W%Q{]FRb+EF/5'Qo?h{pLT0v3:zG?,{?{ Mn+ oHw@§QVt\\nu|Cy+3S,vC)#R^4W<1\\Lz,k@U[~o§";
		const word2 = [arrayElement5]
		const localLength = -812;
		const map1 = () => {};
		const forEach = () => {};
		const candidates1 = {
			"length": localLength,
			"map": map1,
			"forEach": forEach
		}
		const suggestSimilarReturnValue2 = await suggestSimilar(word2, candidates1)
		const arrayElement6 = null;
		const arrayElement7 = {}
		const word3 = [arrayElement6, arrayElement7]
		const localLength1 = -812;
		const map2 = () => {};
		const forEach1 = () => {};
		const candidates2 = {
			"length": localLength1,
			"map": map2,
			"forEach": forEach1
		}
		const arrayElement8 = ", ";
		const anon4 = [arrayElement8]
		const suggestSimilarReturnValue3 = await suggestSimilar(word3, candidates2, anon4)
		
	})
})
