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
		const arrayElement = null;
		const args = [arrayElement]
		const localName = 615.7982754700811;
		const arrayElement1 = false;
		const arrayElement2 = 323;
		const arrayElement3 = true;
		const aliases = [arrayElement1, arrayElement2, arrayElement3]
		const localLength = true;
		const options = {
			"length": localLength
		}
		const cmd = {
			"_args": args,
			"_name": localName,
			"_aliases": aliases,
			"options": options
		}
		const anon = null;
		const anon1 = "|";
		const subcommandTermReturnValue = await localHelp.subcommandTerm(cmd, anon, anon1)
		const localHelp1 = new Help()
		const anon2 = "|";
		const arrayElement4 = null;
		const args1 = [arrayElement4]
		const localName1 = 615.7982754700811;
		const arrayElement5 = false;
		const arrayElement6 = 323;
		const arrayElement7 = true;
		const aliases1 = [arrayElement5, arrayElement6, arrayElement7]
		const localLength1 = true;
		const options1 = {
			"length": localLength1
		}
		const cmd1 = {
			"_args": args1,
			"_name": localName1,
			"_aliases": aliases1,
			"options": options1
		}
		const arrayElement8 = null;
		const args2 = [arrayElement8]
		const formatHelpReturnValue = await localHelp1.formatHelp(anon2, cmd1, args2)
		const localHelp2 = new Help()
		const arrayElement9 = 323;
		const arrayElement10 = null;
		const args3 = [arrayElement10]
		const localName2 = 615.7982754700811;
		const arrayElement11 = false;
		const arrayElement12 = 323;
		const arrayElement13 = true;
		const aliases2 = [arrayElement11, arrayElement12, arrayElement13]
		const localLength2 = true;
		const options2 = {
			"length": localLength2
		}
		const cmd2 = {
			"_args": args3,
			"_name": localName2,
			"_aliases": aliases2,
			"options": options2
		}
		const longestArgumentTermLengthReturnValue = await localHelp2.longestArgumentTermLength(arrayElement9, cmd2)
		
	})
})
