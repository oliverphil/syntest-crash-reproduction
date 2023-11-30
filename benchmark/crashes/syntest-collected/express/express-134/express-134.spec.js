// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let compileTrust;
	let isAbsolute;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		({compileTrust} = require("../instrumented/express/lib/utils.js"));
		({isAbsolute} = require("../instrumented/express/lib/utils.js"));
	});

	it("Test 1", async () => {
		// Test
		const val = "P0AZ9J9Db*3OpdV-krw>yJy.uH*(]SI&AYLaz$2vt-G\"l&m6P?8VuQ§F\"5m_mC!Z3.JJzCT?|";
		const anon = {}
		const compileTrustReturnValue = await compileTrust(val, anon)
		const val1 = "P0AZ9J9Db*3OpdV-krw>yJy.uH*(]SI&AYLaz$2vt-G\"l&m6P?8VuQ§F\"5m_mC!Z3.JJzCT?|";
		const isAbsoluteReturnValue = await isAbsolute(val1)
		
	})
})
