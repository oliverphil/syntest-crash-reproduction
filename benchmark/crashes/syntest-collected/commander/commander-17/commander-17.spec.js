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
		const anon = undefined;
		const anon1 = 60;
		const localHelp = new Help(anon, anon1)
		const localName = -758;
		const cmd = new Command(localName)
		const visibleOptionsReturnValue = await localHelp.visibleOptions(cmd)
		const anon2 = undefined;
		const anon3 = 60;
		const localHelp1 = new Help(anon2, anon3)
		const cmd1 = -1;
		const helper = new Help()
		const longestSubcommandTermLengthReturnValue = await localHelp1.longestSubcommandTermLength(cmd1, helper)
		const helper1 = new Help()
		const cmd2 = "-c, --cheese <identifierDescription>";
		const visibleOptions = () => {};
		const optionTerm = () => {};
		const helper2 = {
			"visibleOptions": visibleOptions,
			"optionTerm": optionTerm
		}
		const anon4 = ">NYC_Y1{{82h[7UUqe\\!2hy]1>:?itp5q'jMj$§^Wtp?,uyCW\"<%Spj<E^?A`j >sB(F''dDA";
		const longestOptionTermLengthReturnValue = await helper1.longestOptionTermLength(cmd2, helper2, anon4)
		const cmd3 = "-c, --cheese <identifierDescription>";
		const localHelp2 = new Help(cmd3)
		const cmd4 = true;
		const visibleOptions1 = () => {};
		const optionTerm1 = () => {};
		const helper3 = {
			"visibleOptions": visibleOptions1,
			"optionTerm": optionTerm1
		}
		const longestOptionTermLengthReturnValue1 = await localHelp2.longestOptionTermLength(cmd4, helper3)
		
	})
})
