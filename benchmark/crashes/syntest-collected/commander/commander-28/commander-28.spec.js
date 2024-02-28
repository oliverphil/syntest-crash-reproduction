// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let Help;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/commanderjs/lib/help.js")];
		({Help} = require("../instrumented/commanderjs/lib/help.js"));
	});

	it("Test 1", async () => {
		// Test
		const localHelp = new Help()
		const cmd = () => {};
		const longestOptionTermLength = () => {};
		const longestSubcommandTermLength = () => {};
		const longestArgumentTermLength = () => {};
		const helper = {
			"longestOptionTermLength": longestOptionTermLength,
			"longestSubcommandTermLength": longestSubcommandTermLength,
			"longestArgumentTermLength": longestArgumentTermLength
		}
		const padWidthReturnValue = await localHelp.padWidth(cmd, helper)
		const localHelp1 = new Help()
		const longestOptionTermLength1 = () => {};
		const longestSubcommandTermLength1 = () => {};
		const longestArgumentTermLength1 = () => {};
		const helper1 = {
			"longestOptionTermLength": longestOptionTermLength1,
			"longestSubcommandTermLength": longestSubcommandTermLength1,
			"longestArgumentTermLength": longestArgumentTermLength1
		}
		const longestOptionTermLength2 = () => {};
		const longestSubcommandTermLength2 = () => {};
		const longestArgumentTermLength2 = () => {};
		const helper2 = {
			"longestOptionTermLength": longestOptionTermLength2,
			"longestSubcommandTermLength": longestSubcommandTermLength2,
			"longestArgumentTermLength": longestArgumentTermLength2
		}
		const anon = 40;
		const padWidthReturnValue1 = await localHelp1.padWidth(helper1, helper2, anon)
		const localHelp2 = new Help()
		const arrayElement = " v'mU:[VAxpi\n>\"Vno9XTB%wP*P:})'U?I$\\0Wnp3HA\n4Y7c/Ruq>E\njo@$1_";
		const arrayElement1 = true;
		const longestOptionTermLength3 = () => {};
		const longestSubcommandTermLength3 = () => {};
		const longestArgumentTermLength3 = () => {};
		const helper3 = {
			"longestOptionTermLength": longestOptionTermLength3,
			"longestSubcommandTermLength": longestSubcommandTermLength3,
			"longestArgumentTermLength": longestArgumentTermLength3
		}
		const args = [arrayElement, arrayElement1, helper3]
		const localName = "2DWd2yU (!Yo^";
		const aliases = true;
		const localLength = false;
		const options = {
			"length": localLength
		}
		const cmd1 = {
			"_args": args,
			"_name": localName,
			"_aliases": aliases,
			"options": options
		}
		const anon1 = null;
		const subcommandTermReturnValue = await localHelp2.subcommandTerm(cmd1, anon1)
		
	})
})
