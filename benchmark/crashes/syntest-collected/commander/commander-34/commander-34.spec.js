// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let suggestSimilar;
	let Help;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/commanderjs/lib/suggestSimilar.js")];
		delete require.cache[require.resolve("../instrumented/commanderjs/lib/help.js")];
		({suggestSimilar} = require("../instrumented/commanderjs/lib/suggestSimilar.js"));
		({Help} = require("../instrumented/commanderjs/lib/help.js"));
	});

	it("Test 1", async () => {
		// Test
		const startsWith = () => {};
		const slice = () => {};
		const localLength = -133;
		const word = {
			"startsWith": startsWith,
			"slice": slice,
			"length": localLength
		}
		const arrayElement = false;
		const arrayElement1 = 178.9455216423678;
		const candidates = [arrayElement, arrayElement1]
		const anon = null;
		const suggestSimilarReturnValue = await suggestSimilar(word, candidates, anon)
		const arrayElement2 = false;
		const arrayElement3 = false;
		const word1 = [arrayElement2, arrayElement3]
		const arrayElement4 = false;
		const arrayElement5 = 178.9455216423678;
		const candidates1 = [arrayElement4, arrayElement5]
		const arrayElement6 = () => {};
		const arrayElement7 = undefined;
		const anon1 = [arrayElement6, arrayElement7]
		const suggestSimilarReturnValue1 = await suggestSimilar(word1, candidates1, anon1)
		const startsWith1 = () => {};
		const slice1 = () => {};
		const localLength1 = "PU|D;T%^iM\ne/?u\n[@]\":'k,BjGrXKKR/o.F{:FC!$`w";
		const word2 = {
			"startsWith": startsWith1,
			"slice": slice1,
			"length": localLength1
		}
		const localLength2 = -133;
		const arrayElement8 = " [options]";
		const candidates2 = [localLength2, arrayElement8]
		const arrayElement9 = false;
		const anon2 = "'N*<ZP|v'[c*KXly3/Tw*\n:xhtB'1JYm%Uaest|";
		const anon3 = new Help()
		const suggestSimilarReturnValue2 = await suggestSimilar(word2, candidates2, arrayElement9, anon2, anon3)
		
	})
})
