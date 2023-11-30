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
		const localName = "No default engine was specified and no extension was provided.";
		const defaultEngine = true;
		const root = null;
		const engines = {}
		const options = {
			"defaultEngine": defaultEngine,
			"root": root,
			"engines": engines
		}
		const view = new View(localName, options)
		const options1 = () => {};
		const callback = {}
		const anon = false;
		const renderReturnValue = await view.render(options1, callback, anon)
		const localName1 = "No default engine was specified and no extension was provided.";
		const defaultEngine1 = true;
		const root1 = null;
		const engines1 = {}
		const options2 = {
			"defaultEngine": defaultEngine1,
			"root": root1,
			"engines": engines1
		}
		const view1 = new View(localName1, options2)
		const options3 = "etag";
		const callback1 = "errorHandler";
		const callback2 = {}
		const renderReturnValue1 = await view1.render(options3, callback1, callback2)
		const localName2 = "No default engine was specified and no extension was provided.";
		const defaultEngine2 = true;
		const root2 = null;
		const engines2 = {}
		const options4 = {
			"defaultEngine": defaultEngine2,
			"root": root2,
			"engines": engines2
		}
		const view2 = new View(localName2, options4)
		const options5 = undefined;
		const callback3 = () => {};
		const renderReturnValue2 = await view2.render(options5, callback3)
		
	})
})
