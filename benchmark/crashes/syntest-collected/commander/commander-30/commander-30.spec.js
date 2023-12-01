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
		const anon = 60;
		const localHelp = new Help(anon)
		const filter = () => {};
		const commands = {
			"filter": filter
		}
		const hasImplicitHelpCommand = () => {};
		const match = () => {};
		const helpCommandnameAndArgs = {
			"match": match
		}
		const createCommand = () => {};
		const helpCommandDescription = "a\"^KO*PA=86zF#&7HbIu)'\n1NwY~u7\tjN5L$c\\pw_\"v+(C apY~±OP^Z-rc]wj7B\"]!:bV ";
		const cmd = {
			"commands": commands,
			"_hasImplicitHelpCommand": hasImplicitHelpCommand,
			"_helpCommandnameAndArgs": helpCommandnameAndArgs,
			"createCommand": createCommand,
			"_helpCommandDescription": helpCommandDescription
		}
		const visibleCommandsReturnValue = await localHelp.visibleCommands(cmd)
		const localHelp1 = new Help()
		const cmd1 = null;
		const helper = new Help()
		const formatHelpReturnValue = await localHelp1.formatHelp(cmd1, helper)
		
	})
})
