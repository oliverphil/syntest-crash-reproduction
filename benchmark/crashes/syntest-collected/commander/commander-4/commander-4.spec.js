// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let Help;
	let Option;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/commanderjs/lib/help.js")];
		delete require.cache[require.resolve("../instrumented/commanderjs/lib/option.js")];
		({Help} = require("../instrumented/commanderjs/lib/help.js"));
		({Option} = require("../instrumented/commanderjs/lib/option.js"));
	});

	it("Test 1", async () => {
		// Test
		const localHelp = new Help()
		const includes = () => {};
		const flags = {
			"includes": includes
		}
		const arrayElement = () => {};
		const arrayElement1 = true;
		const description = [arrayElement, arrayElement1]
		const cmd = new Option(flags, description)
		const anon = -620;
		const helper = new Help(anon)
		const anon1 = 202;
		const longestSubcommandTermLengthReturnValue = await localHelp.longestSubcommandTermLength(cmd, helper, anon1)
		const anon2 = -620;
		const helper1 = new Help(anon2)
		const includes1 = () => {};
		const flags1 = {
			"includes": includes1
		}
		const argumentDescriptionReturnValue = await helper1.argumentDescription(flags1)
		const anon3 = -620;
		const helper2 = new Help(anon3)
		const arrayElement2 = true;
		const includes2 = () => {};
		const flags2 = {
			"includes": includes2
		}
		const anon4 = 202;
		const longestArgumentTermLengthReturnValue = await helper2.longestArgumentTermLength(arrayElement2, flags2, anon4)
		
	})
})
