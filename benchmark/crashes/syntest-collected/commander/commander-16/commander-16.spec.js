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
		const localHelp = new Help()
		const flags = "./argument.js";
		const description = () => {};
		const option = new Option(flags, description)
		const optionTermReturnValue = await localHelp.optionTerm(option)
		const localHelp1 = new Help()
		const argsDescription = true;
		const description1 = () => {};
		const args = [description1]
		const cmd = {
			"_argsDescription": argsDescription,
			"_args": args
		}
		const visibleArgumentsReturnValue = await localHelp1.visibleArguments(cmd)
		const localHelp2 = new Help()
		const argsDescription1 = true;
		const argumentDescriptionReturnValue = await localHelp2.argumentDescription(argsDescription1)
		const localHelp3 = new Help()
		const cmd1 = 1;
		const description2 = () => {};
		const args1 = [description2]
		const longestArgumentTermLengthReturnValue = await localHelp3.longestArgumentTermLength(cmd1, args1)
		
	})
})
