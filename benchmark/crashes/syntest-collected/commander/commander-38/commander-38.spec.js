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
		const word = ", ";
		const candidates = "\n";
		const anon = "./error.js";
		const suggestSimilarReturnValue = await suggestSimilar(word, candidates, anon)
		const startsWith = () => {};
		const slice = undefined;
		const localLength = () => {};
		const word1 = {
			"startsWith": startsWith,
			"slice": slice,
			"length": localLength
		}
		const arrayElement = 380.302920556903;
		const arrayElement1 = "Kf\\\"l%\n=~vqH4(<uG>_m1+7B%I[)4230nH_U'7$(u%§";
		const candidates1 = [arrayElement, arrayElement1]
		const anon1 = "R'.L9$INmG!#N6.Jq` rAArHx'H{Io(p~h\\";
		const suggestSimilarReturnValue1 = await suggestSimilar(word1, candidates1, anon1)
		const startsWith1 = () => {};
		const slice1 = () => {};
		const arrayElement2 = 380.302920556903;
		const arrayElement3 = "Kf\\\"l%\n=~vqH4(<uG>_m1+7B%I[)4230nH_U'7$(u%§";
		const candidates2 = [arrayElement2, arrayElement3]
		const word2 = {
			"startsWith": startsWith1,
			"slice": slice1,
			"length": candidates2
		}
		const slice2 = undefined;
		const suggestSimilarReturnValue2 = await suggestSimilar(word2, slice2)
		const anon2 = "R'.L9$INmG!#N6.Jq` rAArHx'H{Io(p~h\\";
		const arrayElement4 = 380.302920556903;
		const arrayElement5 = "Kf\\\"l%\n=~vqH4(<uG>_m1+7B%I[)4230nH_U'7$(u%§";
		const candidates3 = [arrayElement4, arrayElement5]
		const suggestSimilarReturnValue3 = await suggestSimilar(anon2, candidates3)
		
	})
})
