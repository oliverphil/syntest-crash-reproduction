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
		const localName = 300;
		const defaultEngine = null;
		const root = 204;
		const engines = {}
		const options = {
			"defaultEngine": defaultEngine,
			"root": root,
			"engines": engines
		}
		const anon = {}
		const view = new View(localName, options, anon)
		const localName1 = 300;
		const defaultEngine1 = null;
		const root1 = 204;
		const engines1 = {}
		const options1 = {
			"defaultEngine": defaultEngine1,
			"root": root1,
			"engines": engines1
		}
		const anon1 = {}
		const view1 = new View(localName1, options1, anon1)
		const defaultEngine2 = null;
		const root2 = 204;
		const engines2 = {}
		const options2 = {
			"defaultEngine": defaultEngine2,
			"root": root2,
			"engines": engines2
		}
		const anon2 = "subdomains";
		const lookupReturnValue = await view1.lookup(options2, anon2)
		const localName2 = 300;
		const defaultEngine3 = null;
		const root3 = 204;
		const engines3 = {}
		const options3 = {
			"defaultEngine": defaultEngine3,
			"root": root3,
			"engines": engines3
		}
		const anon3 = {}
		const view2 = new View(localName2, options3, anon3)
		const root4 = 204;
		const root5 = 204;
		const renderReturnValue = await view2.render(root4, root5)
		
	})
})
