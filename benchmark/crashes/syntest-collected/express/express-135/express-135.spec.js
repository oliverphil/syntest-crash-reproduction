// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let compileTrust;
	let compileQueryParser;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		({compileTrust} = require("../instrumented/express/lib/utils.js"));
		({compileQueryParser} = require("../instrumented/express/lib/utils.js"));
	});

	it("Test 1", async () => {
		// Test
		const types = "head";
		const compileTrustReturnValue = await compileTrust(types)
		const val = 28.456627747399125;
		const anon = false;
		const anon1 = null;
		const compileQueryParserReturnValue = await compileQueryParser(val, anon, anon1)
		
	})
})
