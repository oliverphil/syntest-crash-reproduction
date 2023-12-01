// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let Help;
	let InvalidArgumentError;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/commanderjs/lib/help.js")];
		delete require.cache[require.resolve("../instrumented/commanderjs/lib/error.js")];
		({Help} = require("../instrumented/commanderjs/lib/help.js"));
		({InvalidArgumentError} = require("../instrumented/commanderjs/lib/error.js"));
	});

	it("Test 1", async () => {
		// Test
		const localHelp = new Help()
		const cmd = null;
		const helper = new Help()
		const formatHelpReturnValue = await localHelp.formatHelp(cmd, helper)
		const localHelp1 = new Help()
		const cmd1 = "rcV<%G|\n5&T;4%§o~qUt3bc+tu±q&1q'E=`=,7P7%_j+)%e)%'?u >";
		const helper1 = 15.109242050168632;
		const anon = 2;
		const longestOptionTermLengthReturnValue = await localHelp1.longestOptionTermLength(cmd1, helper1, anon)
		const localHelp2 = new Help()
		const cmd2 = "rcV<%G|\n5&T;4%§o~qUt3bc+tu±q&1q'E=`=,7P7%_j+)%e)%'?u >";
		const anon1 = {}
		const argument = new InvalidArgumentError(cmd2, anon1)
		const anon2 = false;
		const argumentTermReturnValue = await localHelp2.argumentTerm(argument, anon2)
		const localHelp3 = new Help()
		const anon3 = {}
		const argumentDescriptionReturnValue = await localHelp3.argumentDescription(anon3)
		
	})
})
