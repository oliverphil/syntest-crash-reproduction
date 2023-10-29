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
		const localLength = "v8tiJ[idz\"QM\n3§@U6|R;JR  g@}g§^+9NOJ2)s4i^cn=7d:uC7bm";
		const word = {
			"startsWith": startsWith,
			"slice": slice,
			"length": localLength
		}
		const candidates = "Commands:";
		const suggestSimilarReturnValue = await suggestSimilar(word, candidates)
		const word1 = "\n";
		const arrayElement = "M\\AAi|+q6ABK3Fz9lE2TD`$HCK-d>iLBfHt8wnPn73{2Oe#TZi7|MStqlbW])eXnOi&{u";
		const arrayElement1 = null;
		const arrayElement2 = 359;
		const candidates1 = [arrayElement, arrayElement1, arrayElement2]
		const anon = "[~4-V±#UQIg<cOdfxVQ=gV@H&Qj:._=Y";
		const suggestSimilarReturnValue1 = await suggestSimilar(word1, candidates1, anon)
		const arrayElement3 = "M\\AAi|+q6ABK3Fz9lE2TD`$HCK-d>iLBfHt8wnPn73{2Oe#TZi7|MStqlbW])eXnOi&{u";
		const arrayElement4 = null;
		const arrayElement5 = 359;
		const candidates2 = [arrayElement3, arrayElement4, arrayElement5]
		const startsWith1 = () => {};
		const slice1 = () => {};
		const localLength1 = "v8tiJ[idz\"QM\n3§@U6|R;JR  g@}g§^+9NOJ2)s4i^cn=7d:uC7bm";
		const word2 = {
			"startsWith": startsWith1,
			"slice": slice1,
			"length": localLength1
		}
		const anon1 = null;
		const startsWith2 = () => {};
		const slice2 = () => {};
		const localLength2 = "v8tiJ[idz\"QM\n3§@U6|R;JR  g@}g§^+9NOJ2)s4i^cn=7d:uC7bm";
		const word3 = {
			"startsWith": startsWith2,
			"slice": slice2,
			"length": localLength2
		}
		const arrayElement6 = null;
		const suggestSimilarReturnValue2 = await suggestSimilar(candidates2, word2, anon1, word3, arrayElement6)
		
	})
})
