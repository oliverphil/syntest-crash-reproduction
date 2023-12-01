// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let Help;
	let Command;
	let Option;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/commanderjs/lib/help.js")];
		delete require.cache[require.resolve("../instrumented/commanderjs/lib/command.js")];
		delete require.cache[require.resolve("../instrumented/commanderjs/lib/option.js")];
		({Help} = require("../instrumented/commanderjs/lib/help.js"));
		({Command} = require("../instrumented/commanderjs/lib/command.js"));
		({Option} = require("../instrumented/commanderjs/lib/option.js"));
	});

	it("Test 1", async () => {
		// Test
		const anon = null;
		const localHelp = new Help(anon)
		const localName = false;
		const cmd = new Command(localName)
		const visibleOptionsReturnValue = await localHelp.visibleOptions(cmd)
		const localName1 = false;
		const cmd1 = new Command(localName1)
		const flags = "beforeHelp";
		const description = true;
		const localName2 = false;
		const anon1 = -599;
		const option = new Option(flags, description, localName2, anon1)
		const missingMandatoryOptionValueReturnValue = await cmd1.missingMandatoryOptionValue(option)
		
	})
})
