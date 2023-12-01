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
		const anon = "± }$ljFm5B";
		const localHelp = new Help(anon)
		const cmd = undefined;
		const helper = new Help()
		const anon1 = "$)@j'LZ/c'!T7%\\^xUY0)\nmp-NyeOU\\*m4h?I±j§@Gz±LrRNn\nDoy§ODfz|P4ZGk 6f<fR;v-OuhgqoW";
		const longestOptionTermLengthReturnValue = await localHelp.longestOptionTermLength(cmd, helper, anon1)
		const anon2 = "± }$ljFm5B";
		const localHelp1 = new Help(anon2)
		const filter = () => {};
		const commands = {
			"filter": filter
		}
		const hasImplicitHelpCommand = () => {};
		const localName = false;
		const helpCommandnameAndArgs = new Command(localName)
		const createCommand = () => {};
		const anon3 = "± }$ljFm5B";
		const cmd1 = {
			"commands": commands,
			"_hasImplicitHelpCommand": hasImplicitHelpCommand,
			"_helpCommandnameAndArgs": helpCommandnameAndArgs,
			"createCommand": createCommand,
			"_helpCommandDescription": anon3
		}
		const visibleCommandsReturnValue = await localHelp1.visibleCommands(cmd1)
		
	})
})
