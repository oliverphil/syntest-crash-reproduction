// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let Help;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/commanderjs/lib/help.js")];
		({Help} = require("../instrumented/commanderjs/lib/help.js"));
	});

	it("Test 1", async () => {
		// Test
		const anon = -1;
		const localHelp = new Help(anon)
		const cmd = null;
		const anon1 = true;
		const helper = new Help(anon1)
		const longestSubcommandTermLengthReturnValue = await localHelp.longestSubcommandTermLength(cmd, helper)
		const anon2 = -1;
		const localHelp1 = new Help(anon2)
		const cmd1 = "mmrW\n!u7!<§n]eAou,\\v3E#tZ'vM}&OV'";
		const anon3 = true;
		const helper1 = new Help(anon3)
		const anon4 = 952.8594731291041;
		const longestArgumentTermLengthReturnValue = await localHelp1.longestArgumentTermLength(cmd1, helper1, anon4)
		const anon5 = -1;
		const localHelp2 = new Help(anon5)
		const argument = () => {};
		const argumentTermReturnValue = await localHelp2.argumentTerm(argument)
		
	})
})
