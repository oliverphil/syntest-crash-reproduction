// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let Help;
	let CommanderError;
	let Command;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/commanderjs/lib/help.js")];
		delete require.cache[require.resolve("../instrumented/commanderjs/lib/error.js")];
		delete require.cache[require.resolve("../instrumented/commanderjs/lib/command.js")];
		({Help} = require("../instrumented/commanderjs/lib/help.js"));
		({CommanderError} = require("../instrumented/commanderjs/lib/error.js"));
		({Command} = require("../instrumented/commanderjs/lib/command.js"));
	});

	it("Test 1", async () => {
		// Test
		const localHelp = new Help()
		const cmd = undefined;
		const anon = "px-`q~2vh_sv\\F\\*Zi~[`83Vv'N@\nnhdYe$)DI\\|";
		const helper = new Help(anon)
		const exitCode = true;
		const code = () => {};
		const message = undefined;
		const anon1 = new CommanderError(exitCode, code, message)
		const longestSubcommandTermLengthReturnValue = await localHelp.longestSubcommandTermLength(cmd, helper, anon1)
		const localHelp1 = new Help()
		const localName = () => {};
		const argument = {
			"name": localName
		}
		const argumentTermReturnValue = await localHelp1.argumentTerm(argument)
		const anon2 = "px-`q~2vh_sv\\F\\*Zi~[`83Vv'N@\nnhdYe$)DI\\|";
		const helper1 = new Help(anon2)
		const localName1 = () => {};
		const argument1 = {
			"name": localName1
		}
		const anon3 = null;
		const localName2 = () => {};
		const commandUsageReturnValue = await helper1.commandUsage(argument1, anon3, localName2)
		const localHelp2 = new Help()
		const localName3 = false;
		const cmd1 = new Command(localName3)
		const visibleArgumentsReturnValue = await localHelp2.visibleArguments(cmd1)
		
	})
})
