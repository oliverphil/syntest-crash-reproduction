// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let Help;
	let Argument;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/commanderjs/lib/help.js")];
		delete require.cache[require.resolve("../instrumented/commanderjs/lib/argument.js")];
		({Help} = require("../instrumented/commanderjs/lib/help.js"));
		({Argument} = require("../instrumented/commanderjs/lib/argument.js"));
	});

	it("Test 1", async () => {
		// Test
		const anon = 80;
		const localHelp = new Help(anon)
		const cmd = null;
		const helper = new Help()
		const padWidthReturnValue = await localHelp.padWidth(cmd, helper)
		const anon1 = 80;
		const localHelp1 = new Help(anon1)
		const map = () => {};
		const args = {
			"map": map
		}
		const localName = 3.141592653589793;
		const arrayElement = 2;
		const aliases = [arrayElement]
		const options = () => {};
		const cmd1 = {
			"_args": args,
			"_name": localName,
			"_aliases": aliases,
			"options": options
		}
		const localName1 = "specify size of drink";
		const description = true;
		const anon2 = new Argument(localName1, description)
		const cmd2 = null;
		const subcommandTermReturnValue = await localHelp1.subcommandTerm(cmd1, anon2, cmd2)
		const helper1 = new Help()
		const map1 = () => {};
		const args1 = {
			"map": map1
		}
		const optionDescriptionReturnValue = await helper1.optionDescription(args1)
		
	})
})
