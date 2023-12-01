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
		const anon1 = "commander.helpDisplayed";
		const arrayElement = true;
		const arrayElement1 = "blue";
		const anon2 = [arrayElement, arrayElement1]
		const cmd = new Command(localName, anon, anon1, anon2)
		const anon3 = "se't?P9DB'(q9T v<D6#us:d2^";
		const visibleCommandsReturnValue = await localHelp.visibleCommands(cmd, anon3)
		const localHelp1 = new Help()
		const arrayElement2 = null;
		const arrayElement3 = 2;
		const args = [arrayElement2, arrayElement3]
		const localName1 = 60;
		const arrayElement4 = 2;
		const arrayElement5 = 58.66077165463753;
		const aliases = [arrayElement4, arrayElement5]
		const options = "Gz7#tQd/h|rf#jxlh[+;'o=%#/$}_R1";
		const cmd1 = {
			"_args": args,
			"_name": localName1,
			"_aliases": aliases,
			"options": options
		}
		const anon4 = () => {};
		const subcommandTermReturnValue = await localHelp1.subcommandTerm(cmd1, anon4)
		const localHelp2 = new Help()
		const arrayElement6 = null;
		const argumentTermReturnValue = await localHelp2.argumentTerm(arrayElement6)
		
	})
})
