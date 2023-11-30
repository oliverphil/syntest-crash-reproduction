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
		const localName = -135;
		const defaultEngine = false;
		const root = () => {};
		const engines = {}
		const options = {
			"defaultEngine": defaultEngine,
			"root": root,
			"engines": engines
		}
		const view = new View(localName, options)
		const localDir = 432.6561435922513;
		const file = 1000;
		const resolveReturnValue = await view.resolve(localDir, file)
		const localName1 = -135;
		const defaultEngine1 = false;
		const root1 = () => {};
		const engines1 = {}
		const options1 = {
			"defaultEngine": defaultEngine1,
			"root": root1,
			"engines": engines1
		}
		const view1 = new View(localName1, options1)
		const file1 = 1000;
		const callback = -899;
		const renderReturnValue = await view1.render(file1, callback)
		const localName2 = -135;
		const defaultEngine2 = false;
		const root2 = () => {};
		const engines2 = {}
		const options2 = {
			"defaultEngine": defaultEngine2,
			"root": root2,
			"engines": engines2
		}
		const view2 = new View(localName2, options2)
		const localName3 = -135;
		const callback1 = "";
		const renderReturnValue1 = await view2.render(localName3, callback1)
		const localName4 = -135;
		const defaultEngine3 = false;
		const root3 = () => {};
		const engines3 = {}
		const options3 = {
			"defaultEngine": defaultEngine3,
			"root": root3,
			"engines": engines3
		}
		const view3 = new View(localName4, options3)
		const callback2 = "";
		const callback3 = "ECONNRESET";
		const anon = () => {};
		const renderReturnValue2 = await view3.render(callback2, callback3, anon)
		
	})
})
