// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let app;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/application.js")];
		(app = require("../instrumented/express/lib/application.js"));
	});

	it("Test 1", async () => {
		// Test
		const app1 = app
		const listenReturnValue = await app1.listen()
		const app2 = app
		const localName = "L'MRsC[q$w/Z'X B§X'!D]ID(L-\n<`MD/?YbnvuzJ@mR";
		const options = () => {};
		const callback = () => {};
		const anon = -640.1403883130329;
		const renderReturnValue = await app2.render(localName, options, callback, anon)
		
	})
})
