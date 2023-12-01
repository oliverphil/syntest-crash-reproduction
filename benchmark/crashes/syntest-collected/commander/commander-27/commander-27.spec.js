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
		const arrayElement = {}
		const arrayElement1 = 206;
		const localName = false;
		const arrayElement2 = new Command(localName)
		const arrayElement3 = "/GK_!(@B{k-r\"3ec_XeCe&X\n47{$^)?r>dgUwy5g<A``Y9^2rXsB\nx|+xE4Tql;=\n/b)95-Y~Tt},|Lh23<Ugb";
		const cmd = [arrayElement, arrayElement1, arrayElement2, arrayElement3]
		const longestOptionTermLength = () => {};
		const longestSubcommandTermLength = () => {};
		const longestArgumentTermLength = () => {};
		const helper = {
			"longestOptionTermLength": longestOptionTermLength,
			"longestSubcommandTermLength": longestSubcommandTermLength,
			"longestArgumentTermLength": longestArgumentTermLength
		}
		const padWidthReturnValue = await localHelp.padWidth(cmd, helper)
		const localName1 = false;
		const arrayElement4 = new Command(localName1)
		const argv = "pot";
		const parseOptions = "display some debugging";
		const parseAsyncReturnValue = await arrayElement4.parseAsync(argv, parseOptions)
		
	})
})
