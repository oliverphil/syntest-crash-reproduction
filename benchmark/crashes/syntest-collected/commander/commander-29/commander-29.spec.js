// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let Option;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/commanderjs/lib/option.js")];
		({Option} = require("../instrumented/commanderjs/lib/option.js"));
	});

	it("Test 1", async () => {
		// Test
		const flags = "-";
		const description = "U\\/WVq1<'Sa::";
		const option = new Option(flags, description)
		const anon = -462.39905644711484;
		const attributeNameReturnValue = await option.attributeName(anon)
		const flags1 = "-";
		const description1 = "U\\/WVq1<'Sa::";
		const option1 = new Option(flags1, description1)
		const attributeNameReturnValue1 = await option1.attributeName()
		const flags2 = "-";
		const description2 = "U\\/WVq1<'Sa::";
		const option2 = new Option(flags2, description2)
		const value = ", ";
		const flags3 = "-";
		const concatValueReturnValue = await option2._concatValue(value, flags3)
		
	})
})
