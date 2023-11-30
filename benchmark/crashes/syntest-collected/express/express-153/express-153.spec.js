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
		const localName = -378.90028103380257;
		const defaultEngine = null;
		const root = 476.2514447559804;
		const engines = {}
		const options = {
			"defaultEngine": defaultEngine,
			"root": root,
			"engines": engines
		}
		const anon = () => {};
		const view = new View(localName, options, anon)
		const options1 = () => {};
		const callback = () => {};
		const anon1 = null;
		const anon2 = {}
		const renderReturnValue = await view.render(options1, callback, anon1, anon2)
		const localName1 = -378.90028103380257;
		const defaultEngine1 = null;
		const root1 = 476.2514447559804;
		const engines1 = {}
		const options2 = {
			"defaultEngine": defaultEngine1,
			"root": root1,
			"engines": engines1
		}
		const anon3 = () => {};
		const view1 = new View(localName1, options2, anon3)
		const root2 = 476.2514447559804;
		const callback1 = true;
		const anon4 = undefined;
		const anon5 = undefined;
		const renderReturnValue1 = await view1.render(root2, callback1, anon4, anon5)
		const localName2 = -378.90028103380257;
		const defaultEngine2 = null;
		const root3 = 476.2514447559804;
		const engines2 = {}
		const options3 = {
			"defaultEngine": defaultEngine2,
			"root": root3,
			"engines": engines2
		}
		const anon6 = () => {};
		const view2 = new View(localName2, options3, anon6)
		const defaultEngine3 = null;
		const lookupReturnValue = await view2.lookup(defaultEngine3)
		
	})
})
