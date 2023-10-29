// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let normalizeType;
	let compileETag;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		({normalizeType} = require("../instrumented/express/lib/utils.js"));
		({compileETag} = require("../instrumented/express/lib/utils.js"));
	});

	it("Test 1", async () => {
		// Test
		const indexOf = () => {};
		const type = {
			"indexOf": indexOf
		}
		const anon = {}
		const normalizeTypeReturnValue = await normalizeType(type, anon)
		const val = "`0.(eosZcd9XmXRQxXN?GX1>Ef8eOPnbp~q2`*#Y*0,ibKj!_vYsC.lBGvd46NCe|**Nd/NNl";
		const compileETagReturnValue = await compileETag(val)
		
	})
})
