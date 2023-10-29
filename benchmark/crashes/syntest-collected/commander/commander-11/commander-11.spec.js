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
		const anon = -70;
		const localHelp = new Help(anon)
		const arrayElement = () => {};
		const arrayElement1 = null;
		const args = [arrayElement, arrayElement1]
		const localName = -546;
		const arrayElement2 = "R9HPBRWpHS#P~P§,C/jo%ID-'IcjKlZ/(QzvM±H6*";
		const arrayElement3 = false;
		const aliases = [arrayElement2, arrayElement3]
		const options = null;
		const cmd = {
			"_args": args,
			"_name": localName,
			"_aliases": aliases,
			"options": options
		}
		const subcommandTermReturnValue = await localHelp.subcommandTerm(cmd)
		const localHelp1 = new Help()
		const arrayElement4 = () => {};
		const arrayElement5 = null;
		const args1 = [arrayElement4, arrayElement5]
		const localName1 = -546;
		const arrayElement6 = "R9HPBRWpHS#P~P§,C/jo%ID-'IcjKlZ/(QzvM±H6*";
		const arrayElement7 = false;
		const aliases1 = [arrayElement6, arrayElement7]
		const options1 = null;
		const cmd1 = {
			"_args": args1,
			"_name": localName1,
			"_aliases": aliases1,
			"options": options1
		}
		const optionDescriptionReturnValue = await localHelp1.optionDescription(cmd1)
		const anon1 = -70;
		const localHelp2 = new Help(anon1)
		const arrayElement8 = () => {};
		const arrayElement9 = null;
		const args2 = [arrayElement8, arrayElement9]
		const localName2 = -546;
		const arrayElement10 = "R9HPBRWpHS#P~P§,C/jo%ID-'IcjKlZ/(QzvM±H6*";
		const arrayElement11 = false;
		const aliases2 = [arrayElement10, arrayElement11]
		const options2 = null;
		const cmd2 = {
			"_args": args2,
			"_name": localName2,
			"_aliases": aliases2,
			"options": options2
		}
		const arrayElement12 = () => {};
		const arrayElement13 = null;
		const args3 = [arrayElement12, arrayElement13]
		const localName3 = -546;
		const arrayElement14 = "R9HPBRWpHS#P~P§,C/jo%ID-'IcjKlZ/(QzvM±H6*";
		const arrayElement15 = false;
		const aliases3 = [arrayElement14, arrayElement15]
		const options3 = null;
		const cmd3 = {
			"_args": args3,
			"_name": localName3,
			"_aliases": aliases3,
			"options": options3
		}
		const arrayElement16 = () => {};
		const formatHelpReturnValue = await localHelp2.formatHelp(cmd2, cmd3, arrayElement16)
		const localHelp3 = new Help()
		const arrayElement17 = "R9HPBRWpHS#P~P§,C/jo%ID-'IcjKlZ/(QzvM±H6*";
		const description = false;
		const cmd4 = new Option(arrayElement17, description)
		const subcommandDescriptionReturnValue = await localHelp3.subcommandDescription(cmd4)
		
	})
})
