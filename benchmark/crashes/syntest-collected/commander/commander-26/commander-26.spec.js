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
		const word = "./argument.js";
		const arrayElement = () => {};
		const arrayElement1 = "Commands:";
		const candidates = [arrayElement, arrayElement1]
		const anon = undefined;
		const anon1 = undefined;
		const suggestSimilarReturnValue = await suggestSimilar(word, candidates, anon, anon1)
		const word1 = 816.2357714722816;
		const candidates1 = 3;
		const anon2 = null;
		const suggestSimilarReturnValue1 = await suggestSimilar(word1, candidates1, anon2)
		const startsWith = () => {};
		const slice = () => {};
		const arrayElement2 = () => {};
		const arrayElement3 = "Commands:";
		const candidates2 = [arrayElement2, arrayElement3]
		const word2 = {
			"startsWith": startsWith,
			"slice": slice,
			"length": candidates2
		}
		const candidates3 = () => {};
		const suggestSimilarReturnValue2 = await suggestSimilar(word2, candidates3)
		const startsWith1 = () => {};
		const slice1 = () => {};
		const arrayElement4 = () => {};
		const arrayElement5 = "Commands:";
		const candidates4 = [arrayElement4, arrayElement5]
		const word3 = {
			"startsWith": startsWith1,
			"slice": slice1,
			"length": candidates4
		}
		const startsWith2 = () => {};
		const slice2 = () => {};
		const arrayElement6 = () => {};
		const arrayElement7 = "Commands:";
		const candidates5 = [arrayElement6, arrayElement7]
		const word4 = {
			"startsWith": startsWith2,
			"slice": slice2,
			"length": candidates5
		}
		const suggestSimilarReturnValue3 = await suggestSimilar(word3, word4)
		
	})
})
