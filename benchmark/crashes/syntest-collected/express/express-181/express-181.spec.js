// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let View;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/view.js")];
		(View = require("../instrumented/express/lib/view.js"));
	});

	it("Test 1", async () => {
		// Test
		const localName = -868;
		const defaultEngine = () => {};
		const root = "Route.";
		const engines = {}
		const options = {
			"defaultEngine": defaultEngine,
			"root": root,
			"engines": engines
		}
		const view = new View(localName, options)
		const options1 = 400;
		const callback = "QbH#bYt9&A1_.^~\\x+I*6`[4gpca-Ho<]K=\"Z[?§3Z(\t<;-Ejfs3sbW2`EjoAv.IF jbw:\n@`CnAF[r:<o80Y8Axpr";
		const anon = ">; rel=\"";
		const renderReturnValue = await view.render(options1, callback, anon)
		
	})
})
