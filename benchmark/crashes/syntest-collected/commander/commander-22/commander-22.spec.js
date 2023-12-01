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
		const str = "user";
		const width = 727;
		const indent = 3;
		const assignment = 936.7682183769148;
		const anon = 500.76470374794326;
		const wrapReturnValue = await localHelp.wrap(str, width, indent, assignment, anon)
		const localHelp1 = new Help()
		const arrayElement = null;
		const anon1 = 500.76470374794326;
		const arrayElement1 = () => {};
		const options = [arrayElement, anon1, arrayElement1]
		const hasHelpOption = false;
		const helpShortFlag = false;
		const findOption = () => {};
		const str1 = "user";
		const createOption = () => {};
		const helpDescription = true;
		const helpFlags = "$3k$Ql%Ls   je8u7;Ot7]y (^k\n|:]x)l@,f^Pc{m>9p15<4gn\"%U&4i.A>L?0!mUGc)|[)|\n<v#+kq";
		const cmd = {
			"options": options,
			"_hasHelpOption": hasHelpOption,
			"_helpShortFlag": helpShortFlag,
			"_findOption": findOption,
			"_helpLongFlag": str1,
			"createOption": createOption,
			"_helpDescription": helpDescription,
			"_helpFlags": helpFlags
		}
		const visibleOptionsReturnValue = await localHelp1.visibleOptions(cmd)
		const localHelp2 = new Help()
		const arrayElement2 = null;
		const anon2 = 500.76470374794326;
		const arrayElement3 = () => {};
		const options1 = [arrayElement2, anon2, arrayElement3]
		const hasHelpOption1 = false;
		const helpShortFlag1 = false;
		const findOption1 = () => {};
		const str2 = "user";
		const createOption1 = () => {};
		const helpDescription1 = true;
		const helpFlags1 = "$3k$Ql%Ls   je8u7;Ot7]y (^k\n|:]x)l@,f^Pc{m>9p15<4gn\"%U&4i.A>L?0!mUGc)|[)|\n<v#+kq";
		const cmd1 = {
			"options": options1,
			"_hasHelpOption": hasHelpOption1,
			"_helpShortFlag": helpShortFlag1,
			"_findOption": findOption1,
			"_helpLongFlag": str2,
			"createOption": createOption1,
			"_helpDescription": helpDescription1,
			"_helpFlags": helpFlags1
		}
		const helpDescription2 = true;
		const argumentTermReturnValue = await localHelp2.argumentTerm(cmd1, helpDescription2)
		
	})
})
