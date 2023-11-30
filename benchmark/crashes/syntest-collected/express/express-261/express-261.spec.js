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
		const localName = 501;
		const defaultEngine = null;
		const root = true;
		const engines = "Q9";
		const options = {
			"defaultEngine": defaultEngine,
			"root": root,
			"engines": engines
		}
		const anon = {}
		const anon1 = "&7|8FKoE-2(3#§EcIyjs|HAfF[Z";
		const view = new View(localName, options, anon, anon1)
		const localName1 = 501;
		const defaultEngine1 = null;
		const root1 = true;
		const engines1 = "Q9";
		const options1 = {
			"defaultEngine": defaultEngine1,
			"root": root1,
			"engines": engines1
		}
		const anon2 = {}
		const anon3 = "&7|8FKoE-2(3#§EcIyjs|HAfF[Z";
		const view1 = new View(localName1, options1, anon2, anon3)
		const options2 = []
		const callback = 2.718281828459045;
		const renderReturnValue = await view1.render(options2, callback)
		const localName2 = 501;
		const defaultEngine2 = null;
		const root2 = true;
		const engines2 = "Q9";
		const options3 = {
			"defaultEngine": defaultEngine2,
			"root": root2,
			"engines": engines2
		}
		const anon4 = {}
		const anon5 = "&7|8FKoE-2(3#§EcIyjs|HAfF[Z";
		const view2 = new View(localName2, options3, anon4, anon5)
		const options4 = () => {};
		const defaultEngine3 = null;
		const renderReturnValue1 = await view2.render(options4, defaultEngine3)
		
	})
})
