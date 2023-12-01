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
		const anon = () => {};
		const localHelp = new Help(anon)
		const arrayElement = true;
		const arrayElement1 = 0;
		const options = [arrayElement, arrayElement1]
		const hasHelpOption = 60;
		const helpShortFlag = true;
		const findOption = () => {};
		const arrayElement2 = -1;
		const arrayElement3 = "turn off colour output";
		const arrayElement4 = "drink cup size";
		const arrayElement5 = "-d, --dry-run";
		const localName = [arrayElement2, arrayElement3, arrayElement4, arrayElement5]
		const description = false;
		const helpLongFlag = new Argument(localName, description)
		const createOption = () => {};
		const helpDescription = "sauce";
		const helpFlags = "'\"_*DT\\z-i]]+zl7DWb;<\\{U:ci3}`JYa*mxt#6j:BBF_YMxv9oUXsTuqq]MUrNMZY#twUP{ZhrLrk'!LAaz0{";
		const cmd = {
			"options": options,
			"_hasHelpOption": hasHelpOption,
			"_helpShortFlag": helpShortFlag,
			"_findOption": findOption,
			"_helpLongFlag": helpLongFlag,
			"createOption": createOption,
			"_helpDescription": helpDescription,
			"_helpFlags": helpFlags
		}
		const visibleOptionsReturnValue = await localHelp.visibleOptions(cmd)
		const localHelp1 = new Help()
		const arrayElement6 = "§SyX80;y4b!y#sDw]]d[\nO\t> |x]@!'][YZzrR8§:bd^§mSprw~B*bBexLAckpw4@gG\\W";
		const args = [arrayElement6]
		const localName1 = 73;
		const aliases = []
		const options1 = "afterHelp";
		const cmd1 = {
			"_args": args,
			"_name": localName1,
			"_aliases": aliases,
			"options": options1
		}
		const anon1 = -426;
		const subcommandTermReturnValue = await localHelp1.subcommandTerm(cmd1, anon1)
		const localHelp2 = new Help()
		const map = () => {};
		const args1 = {
			"map": map
		}
		const argumentTermReturnValue = await localHelp2.argumentTerm(args1)
		
	})
})
