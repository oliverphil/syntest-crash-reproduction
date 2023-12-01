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
		const cmd = null;
		const anon = undefined;
		const helper = new Help(anon)
		const anon1 = -491;
		const longestSubcommandTermLengthReturnValue = await localHelp.longestSubcommandTermLength(cmd, helper, anon1)
		const anon2 = undefined;
		const helper1 = new Help(anon2)
		const options = "pf{`H[D4(RauD`){]MHO@N?X0U5E\"l3bh3j\nnaC.cH±oA0}O!3b2S9p2NosMor(wL";
		const hasHelpOption = true;
		const helpShortFlag = true;
		const findOption = () => {};
		const cmd1 = null;
		const cmd2 = null;
		const arrayElement = "commander.unknownOption";
		const cmd3 = null;
		const helpDescription = [arrayElement, cmd3]
		const helpFlags = "-l, --list <items>";
		const cmd4 = {
			"options": options,
			"_hasHelpOption": hasHelpOption,
			"_helpShortFlag": helpShortFlag,
			"_findOption": findOption,
			"_helpLongFlag": cmd1,
			"createOption": cmd2,
			"_helpDescription": helpDescription,
			"_helpFlags": helpFlags
		}
		const anon3 = " !D$;J<b{j^6vSPVwRAqa$(CE{iW{_sYf]U6k1;W\"DTkmy4'qr,s±$InfU\\Jk\"C";
		const visibleOptionsReturnValue = await helper1.visibleOptions(cmd4, anon3)
		const anon4 = undefined;
		const helper2 = new Help(anon4)
		const cmd5 = "call .storeOptionsAsProperties() before adding options";
		const visibleOptionsReturnValue1 = await helper2.visibleOptions(cmd5)
		
	})
})
