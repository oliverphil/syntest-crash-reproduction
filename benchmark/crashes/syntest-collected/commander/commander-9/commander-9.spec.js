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
		const arrayElement = new Help()
		const arrayElement1 = ">|!sJKW|z";
		const arrayElement2 = null;
		const commands = [arrayElement, arrayElement1, arrayElement2]
		const hasImplicitHelpCommand = "f'E3w=7c'AVBErP[Y-SB:?5'DLE D,Pr\"s-Kn*9NURHRK-G8&a!~.. TC6\\uD`JD*UP<&8\t`Pi\nvQj+iM7J%x:VgCXc%";
		const helpCommandnameAndArgs = -778.8819613382008;
		const createCommand = () => {};
		const helpCommandDescription = {}
		const cmd = {
			"commands": commands,
			"_hasImplicitHelpCommand": hasImplicitHelpCommand,
			"_helpCommandnameAndArgs": helpCommandnameAndArgs,
			"createCommand": createCommand,
			"_helpCommandDescription": helpCommandDescription
		}
		const anon = "$sXwS$g-%RfE[<B)%K_JWM4wAAX~!!rAngp.E@u,a:4XLLGkG8kR775w_gsj;";
		const visibleCommandsReturnValue = await localHelp.visibleCommands(cmd, anon)
		
	})
})
