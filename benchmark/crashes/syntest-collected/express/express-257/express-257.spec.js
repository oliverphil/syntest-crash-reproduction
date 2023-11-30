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
		const localName = 876;
		const defaultEngine = {}
		const root = "query parser";
		const engines = {}
		const options = {
			"defaultEngine": defaultEngine,
			"root": root,
			"engines": engines
		}
		const anon = 777;
		const view = new View(localName, options, anon)
		const localName1 = 876;
		const defaultEngine1 = {}
		const root1 = "query parser";
		const engines1 = {}
		const options1 = {
			"defaultEngine": defaultEngine1,
			"root": root1,
			"engines": engines1
		}
		const anon1 = 777;
		const view1 = new View(localName1, options1, anon1)
		const options2 = () => {};
		const callback = null;
		const renderReturnValue = await view1.render(options2, callback)
		const localName2 = 876;
		const defaultEngine2 = {}
		const root2 = "query parser";
		const engines2 = {}
		const options3 = {
			"defaultEngine": defaultEngine2,
			"root": root2,
			"engines": engines2
		}
		const anon2 = 777;
		const view2 = new View(localName2, options3, anon2)
		const callback1 = null;
		const lookupReturnValue = await view2.lookup(callback1)
		const localName3 = 876;
		const defaultEngine3 = {}
		const root3 = "query parser";
		const engines3 = {}
		const options4 = {
			"defaultEngine": defaultEngine3,
			"root": root3,
			"engines": engines3
		}
		const anon3 = 777;
		const view3 = new View(localName3, options4, anon3)
		const localName4 = -1;
		const anon4 = true;
		const anon5 = "utf8";
		const lookupReturnValue1 = await view3.lookup(localName4, anon4, anon5)
		
	})
})
