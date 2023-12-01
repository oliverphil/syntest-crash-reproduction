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
		const anon = false;
		const localHelp = new Help(anon)
		const localName = true;
		const cmd = new Command(localName)
		const anon1 = () => {};
		const visibleOptionsReturnValue = await localHelp.visibleOptions(cmd, anon1)
		const localName1 = true;
		const cmd1 = new Command(localName1)
		const arrayElement = 10;
		const arrayElement1 = 0.4;
		const localName2 = true;
		const operands = [arrayElement, arrayElement1, localName2]
		const localFind = () => {};
		const unknown = {
			"find": localFind
		}
		const parseCommandReturnValue = await cmd1._parseCommand(operands, unknown)
		
	})
})
