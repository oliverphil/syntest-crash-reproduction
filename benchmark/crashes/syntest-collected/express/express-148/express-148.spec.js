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
		const localName = -945;
		const defaultEngine = "end";
		const root = null;
		const engines = {}
		const options = {
			"defaultEngine": defaultEngine,
			"root": root,
			"engines": engines
		}
		const view = new View(localName, options)
		const localName1 = null;
		const lookupReturnValue = await view.lookup(localName1)
		const localName2 = -945;
		const defaultEngine1 = "end";
		const root1 = null;
		const engines1 = {}
		const options1 = {
			"defaultEngine": defaultEngine1,
			"root": root1,
			"engines": engines1
		}
		const view1 = new View(localName2, options1)
		const localName3 = null;
		const anon = 106.91369543755036;
		const lookupReturnValue1 = await view1.lookup(localName3, anon)
		const localName4 = -945;
		const defaultEngine2 = "end";
		const root2 = null;
		const engines2 = {}
		const options2 = {
			"defaultEngine": defaultEngine2,
			"root": root2,
			"engines": engines2
		}
		const view2 = new View(localName4, options2)
		const localDir = "S§Vvr";
		const file = () => {};
		const resolveReturnValue = await view2.resolve(localDir, file)
		
	})
})
