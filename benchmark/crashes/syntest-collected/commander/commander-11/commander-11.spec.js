// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let Help;
	let CommanderError;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/commanderjs/lib/help.js")];
		delete require.cache[require.resolve("../instrumented/commanderjs/lib/error.js")];
		({Help} = require("../instrumented/commanderjs/lib/help.js"));
		({CommanderError} = require("../instrumented/commanderjs/lib/error.js"));
	});

	it("Test 1", async () => {
		// Test
		const anon = "Remaining arguments: ";
		const localHelp = new Help(anon)
		const cmd = null;
		const helper = new Help()
		const anon1 = undefined;
		const anon2 = "--message <value>";
		const longestArgumentTermLengthReturnValue = await localHelp.longestArgumentTermLength(cmd, helper, anon1, anon2)
		const helper1 = new Help()
		const exitCode = () => {};
		const code = "J($X$Bk'+$ci0)}G±ro3§|%XJh:fse0~gC`WqE_%;%X6(s2C~%/w!K]#Xj~R^Z?I#foFON{o[!H]5b\"\n*qdqM72±8Q>!9`a±?";
		const cmd1 = null;
		const argument = new CommanderError(exitCode, code, cmd1)
		const argumentTermReturnValue = await helper1.argumentTerm(argument)
		
	})
})
