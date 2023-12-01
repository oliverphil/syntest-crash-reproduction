// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let Help;
	let Option;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/commanderjs/lib/help.js")];
		delete require.cache[require.resolve("../instrumented/commanderjs/lib/option.js")];
		({Help} = require("../instrumented/commanderjs/lib/help.js"));
		({Option} = require("../instrumented/commanderjs/lib/option.js"));
	});

	it("Test 1", async () => {
		// Test
		const localHelp = new Help()
		const cmd = undefined;
		const anon = 0;
		const helper = new Help(anon)
		const padWidthReturnValue = await localHelp.padWidth(cmd, helper)
		const anon1 = 0;
		const helper1 = new Help(anon1)
		const split = () => {};
		const flags = {
			"split": split
		}
		const description = false;
		const option = new Option(flags, description)
		const optionDescriptionReturnValue = await helper1.optionDescription(option)
		const anon2 = 0;
		const helper2 = new Help(anon2)
		const argChoices = true;
		const defaultValue = undefined;
		const defaultValueDescription = "build <target>";
		const description1 = true;
		const argument = {
			"argChoices": argChoices,
			"defaultValue": defaultValue,
			"defaultValueDescription": defaultValueDescription,
			"description": description1
		}
		const split1 = () => {};
		const flags1 = {
			"split": split1
		}
		const argumentDescriptionReturnValue = await helper2.argumentDescription(argument, flags1)
		const anon3 = 0;
		const helper3 = new Help(anon3)
		const cmd1 = "1";
		const split2 = () => {};
		const flags2 = {
			"split": split2
		}
		const anon4 = 0;
		const argChoices1 = true;
		const padWidthReturnValue1 = await helper3.padWidth(cmd1, flags2, anon4, argChoices1)
		
	})
})
