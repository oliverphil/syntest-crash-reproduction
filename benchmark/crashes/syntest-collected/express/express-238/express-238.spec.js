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
		const localName = -521;
		const defaultEngine = undefined;
		const root = () => {};
		const arrayElement = "test";
		const engines = [arrayElement]
		const options = {
			"defaultEngine": defaultEngine,
			"root": root,
			"engines": engines
		}
		const view = new View(localName, options)
		const localDir = -1;
		const file = false;
		const anon = () => {};
		const resolveReturnValue = await view.resolve(localDir, file, anon)
		const localName1 = -521;
		const defaultEngine1 = undefined;
		const root1 = () => {};
		const arrayElement1 = "test";
		const engines1 = [arrayElement1]
		const options1 = {
			"defaultEngine": defaultEngine1,
			"root": root1,
			"engines": engines1
		}
		const view1 = new View(localName1, options1)
		const options2 = -737.4152135511058;
		const defaultEngine2 = undefined;
		const renderReturnValue = await view1.render(options2, defaultEngine2)
		const localName2 = -521;
		const defaultEngine3 = undefined;
		const root2 = () => {};
		const arrayElement2 = "test";
		const engines2 = [arrayElement2]
		const options3 = {
			"defaultEngine": defaultEngine3,
			"root": root2,
			"engines": engines2
		}
		const view2 = new View(localName2, options3)
		const anon1 = () => {};
		const callback = -128.84400404838323;
		const renderReturnValue1 = await view2.render(anon1, callback)
		
	})
})
