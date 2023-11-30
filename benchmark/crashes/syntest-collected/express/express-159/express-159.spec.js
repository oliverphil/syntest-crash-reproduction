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
		const localName = -831.3260952480425;
		const defaultEngine = "fs";
		const root = "res.send(status, body): Use res.status(status).send(body) instead";
		const engines = {}
		const options = {
			"defaultEngine": defaultEngine,
			"root": root,
			"engines": engines
		}
		const view = new View(localName, options)
		const options1 = null;
		const callback = null;
		const renderReturnValue = await view.render(options1, callback)
		const localName1 = -831.3260952480425;
		const defaultEngine1 = "fs";
		const root1 = "res.send(status, body): Use res.status(status).send(body) instead";
		const engines1 = {}
		const options2 = {
			"defaultEngine": defaultEngine1,
			"root": root1,
			"engines": engines1
		}
		const view1 = new View(localName1, options2)
		const options3 = "9T\\BJ@ '<%O=e\n%§J";
		const callback1 = "res.json(obj, status): Use res.status(status).json(obj) instead";
		const renderReturnValue1 = await view1.render(options3, callback1)
		
	})
})
