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
		const flags = "c7]\"b <B+JNL4lsp@KrG)zn}A>Nfh^Y%K\\A%P~§^yi-(:JCS±c §GgQS}C[j'";
		const option = {
			"flags": flags
		}
		const optionTermReturnValue = await localHelp.optionTerm(option)
		const localHelp1 = new Help()
		const cmd = -602.6907962728205;
		const localHelp2 = new Help()
		const anon = null;
		const longestArgumentTermLengthReturnValue = await localHelp1.longestArgumentTermLength(cmd, localHelp2, anon)
		
	})
})
