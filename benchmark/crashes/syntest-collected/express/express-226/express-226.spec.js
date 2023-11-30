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
		const localName = 257.5291178168643;
		const defaultEngine = undefined;
		const root = {}
		const engines = "express:router:route";
		const options = {
			"defaultEngine": defaultEngine,
			"root": root,
			"engines": engines
		}
		const view = new View(localName, options)
		const localName1 = 257.5291178168643;
		const defaultEngine1 = undefined;
		const root1 = {}
		const engines1 = "express:router:route";
		const options1 = {
			"defaultEngine": defaultEngine1,
			"root": root1,
			"engines": engines1
		}
		const view1 = new View(localName1, options1)
		const options2 = " 3P,y_rQKtiVJF`r}:\t`7*m]i~%j#{=vC2?K<3-";
		const callback = true;
		const localName2 = 257.5291178168643;
		const anon = false;
		const renderReturnValue = await view1.render(options2, callback, localName2, anon)
		
	})
})
