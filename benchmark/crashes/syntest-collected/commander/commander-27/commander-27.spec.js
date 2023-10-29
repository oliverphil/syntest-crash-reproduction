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
		const anon = "Commands:";
		const localHelp = new Help(anon)
		const match = () => {};
		const substr = () => {};
		const str = {
			"match": match,
			"substr": substr
		}
		const width = 80;
		const indent = 2;
		const assignment = 183.93899071721876;
		const wrapReturnValue = await localHelp.wrap(str, width, indent, assignment)
		const anon1 = "Commands:";
		const localHelp1 = new Help(anon1)
		const indent1 = 2;
		const anon2 = "Commands:";
		const localHelp2 = new Help(anon2)
		const match1 = () => {};
		const formatHelpReturnValue = await localHelp1.formatHelp(indent1, localHelp2, match1)
		const anon3 = "Commands:";
		const localHelp3 = new Help(anon3)
		const match2 = () => {};
		const substr1 = () => {};
		const str1 = {
			"match": match2,
			"substr": substr1
		}
		const match3 = () => {};
		const subcommandTermReturnValue = await localHelp3.subcommandTerm(str1, match3)
		const anon4 = "Commands:";
		const localHelp4 = new Help(anon4)
		const cmd = undefined;
		const match4 = () => {};
		const substr2 = () => {};
		const str2 = {
			"match": match4,
			"substr": substr2
		}
		const longestSubcommandTermLengthReturnValue = await localHelp4.longestSubcommandTermLength(cmd, str2)
		
	})
})
