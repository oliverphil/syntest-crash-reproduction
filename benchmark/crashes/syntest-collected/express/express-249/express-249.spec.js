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
		const localName = -384.2479705617012;
		const defaultEngine = true;
		const root = -658;
		const engines = {}
		const options = {
			"defaultEngine": defaultEngine,
			"root": root,
			"engines": engines
		}
		const view = new View(localName, options)
		const arrayElement = false;
		const arrayElement1 = "cookie-signature";
		const options1 = [arrayElement, arrayElement1]
		const callback = true;
		const renderReturnValue = await view.render(options1, callback)
		const localName1 = -384.2479705617012;
		const defaultEngine1 = true;
		const root1 = -658;
		const engines1 = {}
		const options2 = {
			"defaultEngine": defaultEngine1,
			"root": root1,
			"engines": engines1
		}
		const view1 = new View(localName1, options2)
		const localName2 = true;
		const callback1 = true;
		const lookupReturnValue = await view1.lookup(localName2, callback1)
		const localName3 = -384.2479705617012;
		const defaultEngine2 = true;
		const root2 = -658;
		const engines2 = {}
		const options3 = {
			"defaultEngine": defaultEngine2,
			"root": root2,
			"engines": engines2
		}
		const view2 = new View(localName3, options3)
		const arrayElement2 = "cookie-signature";
		const lookupReturnValue1 = await view2.lookup(arrayElement2)
		
	})
})
