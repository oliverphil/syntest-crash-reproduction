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
		const localHelp = new Help()
		const anon = 40;
		const cmd = new Help(anon)
		const helper = new Help()
		const longestArgumentTermLengthReturnValue = await localHelp.longestArgumentTermLength(cmd, helper)
		const anon1 = 40;
		const cmd1 = new Help(anon1)
		const description = () => {};
		const cmd2 = {
			"description": description
		}
		const anon2 = "--no-";
		const anon3 = () => {};
		const commandDescriptionReturnValue = await cmd1.commandDescription(cmd2, anon2, anon3)
		const localHelp1 = new Help()
		const cmd3 = () => {};
		const visibleCommands = () => {};
		const subcommandTerm = () => {};
		const helper1 = {
			"visibleCommands": visibleCommands,
			"subcommandTerm": subcommandTerm
		}
		const longestSubcommandTermLengthReturnValue = await localHelp1.longestSubcommandTermLength(cmd3, helper1)
		
	})
})
