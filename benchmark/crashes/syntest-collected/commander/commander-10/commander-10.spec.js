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
		const cmd = undefined;
		const anon = () => {};
		const helper = new Help(anon)
		const anon1 = "y>0 :PN_ Q4#$Z<7*>Z}A*M§SF±.k;:q'&H&3f,pRtv \ns K<-8jE<O/§W=DhU.[zN2&/sdI.^PY8J$z^p({±l$D9RZSqbW";
		const longestArgumentTermLengthReturnValue = await localHelp.longestArgumentTermLength(cmd, helper, anon1)
		const anon2 = () => {};
		const helper1 = new Help(anon2)
		const description = () => {};
		const cmd1 = {
			"description": description
		}
		const commandDescriptionReturnValue = await helper1.commandDescription(cmd1)
		
	})
})
