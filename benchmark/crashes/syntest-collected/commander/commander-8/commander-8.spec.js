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
		const anon = null;
		const anon1 = 80;
		const localHelp = new Help(anon, anon1)
		const cmd = () => {};
		const anon2 = null;
		const helper = new Help(anon2)
		const longestSubcommandTermLengthReturnValue = await localHelp.longestSubcommandTermLength(cmd, helper)
		const anon3 = null;
		const helper1 = new Help(anon3)
		const arrayElement = 60;
		const arrayElement1 = "1m&]wZSy^1fa~TENVveAG{$`Amb\\))'rI%m`'~q*2EKi'n1zm1a{Mzny§]I5PC\nnqAT24i-8\nO";
		const arrayElement2 = "lIS&x";
		const arrayElement3 = "^BD\\§Fj01qu`MN,6~§uB=Nw~7O}idIt\n1g%u'bLO`4B<PbY%'\"697u5y%'N";
		const flags = [arrayElement, arrayElement1, arrayElement2, arrayElement3]
		const description = "R@TdKA'\"qF§CR,";
		const argument = new Option(flags, description)
		const argumentDescriptionReturnValue = await helper1.argumentDescription(argument)
		const anon4 = null;
		const helper2 = new Help(anon4)
		const localName = () => {};
		const argument1 = {
			"name": localName
		}
		const argumentTermReturnValue = await helper2.argumentTerm(argument1)
		const anon5 = null;
		const anon6 = 80;
		const localHelp1 = new Help(anon5, anon6)
		const localName1 = () => {};
		const argument2 = {
			"name": localName1
		}
		const arrayElement4 = "^BD\\§Fj01qu`MN,6~§uB=Nw~7O}idIt\n1g%u'bLO`4B<PbY%'\"697u5y%'N";
		const visibleArgumentsReturnValue = await localHelp1.visibleArguments(argument2, arrayElement4)
		
	})
})
