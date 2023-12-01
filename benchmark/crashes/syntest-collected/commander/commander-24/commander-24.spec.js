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
		const arrayElement = "Ms<;#MNT2!@$S?n,6{\"`z?u\t]j2Z$\\Qw73\\!\\SK`[3bE)'p\\uT~§a3IT\\p _||ZV=";
		const args = [arrayElement]
		const localName = -746;
		const arrayElement1 = true;
		const arrayElement2 = -480.35266546301284;
		const aliases = [arrayElement1, arrayElement2]
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
		const subcommandTermReturnValue = await localHelp.subcommandTerm(cmd)
		const localHelp1 = new Help()
		const localLength1 = true;
		const localLength2 = true;
		const options1 = {
			"length": localLength2
		}
		const formatHelpReturnValue = await localHelp1.formatHelp(localLength1, options1)
		const localHelp2 = new Help()
		
	})
})
