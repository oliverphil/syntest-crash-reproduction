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
		const localName = -669.6528267195181;
		const defaultEngine = null;
		const root = "req.acceptsCharset: Use acceptsCharsets instead";
		const engines = {}
		const options = {
			"defaultEngine": defaultEngine,
			"root": root,
			"engines": engines
		}
		const anon = "%s %s : %s";
		const view = new View(localName, options, anon)
		const options1 = undefined;
		const callback = null;
		const anon1 = {}
		const renderReturnValue = await view.render(options1, callback, anon1)
		const localName1 = -669.6528267195181;
		const defaultEngine1 = null;
		const root1 = "req.acceptsCharset: Use acceptsCharsets instead";
		const engines1 = {}
		const options2 = {
			"defaultEngine": defaultEngine1,
			"root": root1,
			"engines": engines1
		}
		const anon2 = "%s %s : %s";
		const view1 = new View(localName1, options2, anon2)
		const localDir = 288;
		const localName2 = -669.6528267195181;
		const anon3 = () => {};
		const engines2 = {}
		const resolveReturnValue = await view1.resolve(localDir, localName2, anon3, engines2)
		const localName3 = -669.6528267195181;
		const defaultEngine2 = null;
		const root2 = "req.acceptsCharset: Use acceptsCharsets instead";
		const engines3 = {}
		const options3 = {
			"defaultEngine": defaultEngine2,
			"root": root2,
			"engines": engines3
		}
		const anon4 = "%s %s : %s";
		const view2 = new View(localName3, options3, anon4)
		const localName4 = -669.6528267195181;
		const anon5 = () => {};
		const anon6 = true;
		const renderReturnValue1 = await view2.render(localName4, anon5, anon6)
		
	})
})
