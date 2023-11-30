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
		const localName = 180;
		const arrayElement = undefined;
		const defaultEngine = [arrayElement]
		const root = () => {};
		const engines = "[[bVwV{1t~1;\"MZ\"wUQS#%Lu!";
		const options = {
			"defaultEngine": defaultEngine,
			"root": root,
			"engines": engines
		}
		const view = new View(localName, options)
		const options1 = 0;
		const callback = {}
		const anon = "req.host: Use req.hostname instead";
		const anon1 = undefined;
		const renderReturnValue = await view.render(options1, callback, anon, anon1)
		const localName1 = 180;
		const arrayElement1 = undefined;
		const defaultEngine1 = [arrayElement1]
		const root1 = () => {};
		const engines1 = "[[bVwV{1t~1;\"MZ\"wUQS#%Lu!";
		const options2 = {
			"defaultEngine": defaultEngine1,
			"root": root1,
			"engines": engines1
		}
		const view1 = new View(localName1, options2)
		const localDir = () => {};
		const anon2 = "req.host: Use req.hostname instead";
		const resolveReturnValue = await view1.resolve(localDir, anon2)
		const localName2 = 180;
		const arrayElement2 = undefined;
		const defaultEngine2 = [arrayElement2]
		const root2 = () => {};
		const engines2 = "[[bVwV{1t~1;\"MZ\"wUQS#%Lu!";
		const options3 = {
			"defaultEngine": defaultEngine2,
			"root": root2,
			"engines": engines2
		}
		const view2 = new View(localName2, options3)
		const localDir1 = -370.1159831216992;
		const file = null;
		const resolveReturnValue1 = await view2.resolve(localDir1, file)
		const localName3 = 180;
		const arrayElement3 = undefined;
		const defaultEngine3 = [arrayElement3]
		const root3 = () => {};
		const engines3 = "[[bVwV{1t~1;\"MZ\"wUQS#%Lu!";
		const options4 = {
			"defaultEngine": defaultEngine3,
			"root": root3,
			"engines": engines3
		}
		const view3 = new View(localName3, options4)
		const arrayElement4 = undefined;
		const defaultEngine4 = [arrayElement4]
		const root4 = () => {};
		const engines4 = "[[bVwV{1t~1;\"MZ\"wUQS#%Lu!";
		const options5 = {
			"defaultEngine": defaultEngine4,
			"root": root4,
			"engines": engines4
		}
		const callback1 = false;
		const renderReturnValue1 = await view3.render(options5, callback1)
		
	})
})
