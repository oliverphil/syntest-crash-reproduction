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
		const anon = -480.3351643608768;
		const localHelp = new Help(anon)
		const localName = false;
		const cmd = new Command(localName)
		const anon1 = new Help()
		const anon2 = 1;
		const commandUsageReturnValue = await localHelp.commandUsage(cmd, anon1, anon2)
		const anon3 = null;
		const localHelp1 = new Help(anon3)
		const anon4 = -480.3351643608768;
		const arrayElement = undefined;
		const cmd1 = [anon4, arrayElement]
		const helper = new Help()
		const formatHelpReturnValue = await localHelp1.formatHelp(cmd1, helper)
		const anon5 = -480.3351643608768;
		const localHelp2 = new Help(anon5)
		const anon6 = -480.3351643608768;
		const arrayElement1 = undefined;
		const cmd2 = [anon6, arrayElement1]
		const visibleOptions = () => {};
		const optionTerm = () => {};
		const helper1 = {
			"visibleOptions": visibleOptions,
			"optionTerm": optionTerm
		}
		const longestOptionTermLengthReturnValue = await localHelp2.longestOptionTermLength(cmd2, helper1)
		const localName1 = false;
		const cmd3 = new Command(localName1)
		const localEvent = () => {};
		const listener = "extra";
		const localName2 = false;
		const hookReturnValue = await cmd3.hook(localEvent, listener, localName2)
		
	})
})
