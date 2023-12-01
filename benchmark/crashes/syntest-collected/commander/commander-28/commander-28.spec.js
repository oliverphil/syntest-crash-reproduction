// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let Help;
	let Command;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/commanderjs/lib/help.js")];
		delete require.cache[require.resolve("../instrumented/commanderjs/lib/command.js")];
		({Help} = require("../instrumented/commanderjs/lib/help.js"));
		({Command} = require("../instrumented/commanderjs/lib/command.js"));
	});

	it("Test 1", async () => {
		// Test
		const localHelp = new Help()
		const localName = false;
		const anon = false;
		const cmd = new Command(localName, anon)
		const visibleCommandsReturnValue = await localHelp.visibleCommands(cmd)
		const localHelp1 = new Help()
		const cmd1 = undefined;
		const localHelp2 = new Help()
		const formatHelpReturnValue = await localHelp1.formatHelp(cmd1, localHelp2)
		const localHelp3 = new Help()
		const cmd2 = "X5{b8m!\n\t8 KFZU\\<pMwsT4±;JOG±aM\"Dhd\"X%*K'gwU\\Ii@>BYqP";
		const padWidth = () => {};
		const helpWidth = true;
		const wrap = () => {};
		const commandUsage = () => {};
		const commandDescription = () => {};
		const visibleArguments = () => {};
		const argumentTerm = () => {};
		const argumentDescription = () => {};
		const visibleOptions = () => {};
		const optionTerm = () => {};
		const optionDescription = () => {};
		const visibleCommands = () => {};
		const subcommandTerm = () => {};
		const subcommandDescription = () => {};
		const helper = {
			"padWidth": padWidth,
			"helpWidth": helpWidth,
			"wrap": wrap,
			"commandUsage": commandUsage,
			"commandDescription": commandDescription,
			"visibleArguments": visibleArguments,
			"argumentTerm": argumentTerm,
			"argumentDescription": argumentDescription,
			"visibleOptions": visibleOptions,
			"optionTerm": optionTerm,
			"optionDescription": optionDescription,
			"visibleCommands": visibleCommands,
			"subcommandTerm": subcommandTerm,
			"subcommandDescription": subcommandDescription
		}
		const formatHelpReturnValue1 = await localHelp3.formatHelp(cmd2, helper)
		
	})
})
