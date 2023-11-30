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
		const localName = 395.1688733260903;
		const defaultEngine = "a1oBS";
		const root = -107.049068539916;
		const arrayElement = "booting in %s mode";
		const arrayElement1 = "Allow";
		const engines = [arrayElement, arrayElement1]
		const options = {
			"defaultEngine": defaultEngine,
			"root": root,
			"engines": engines
		}
		const view = new View(localName, options)
		const options1 = 200;
		const callback = 472;
		const renderReturnValue = await view.render(options1, callback)
		const localName1 = 395.1688733260903;
		const defaultEngine1 = "a1oBS";
		const root1 = -107.049068539916;
		const arrayElement2 = "booting in %s mode";
		const arrayElement3 = "Allow";
		const engines1 = [arrayElement2, arrayElement3]
		const options2 = {
			"defaultEngine": defaultEngine1,
			"root": root1,
			"engines": engines1
		}
		const view1 = new View(localName1, options2)
		const callback1 = 472;
		const callback2 = null;
		const renderReturnValue1 = await view1.render(callback1, callback2)
		const localName2 = 395.1688733260903;
		const defaultEngine2 = "a1oBS";
		const root2 = -107.049068539916;
		const arrayElement4 = "booting in %s mode";
		const arrayElement5 = "Allow";
		const engines2 = [arrayElement4, arrayElement5]
		const options3 = {
			"defaultEngine": defaultEngine2,
			"root": root2,
			"engines": engines2
		}
		const view2 = new View(localName2, options3)
		const callback3 = 472;
		const callback4 = null;
		const renderReturnValue2 = await view2.render(callback3, callback4)
		const localName3 = 395.1688733260903;
		const defaultEngine3 = "a1oBS";
		const root3 = -107.049068539916;
		const arrayElement6 = "booting in %s mode";
		const arrayElement7 = "Allow";
		const engines3 = [arrayElement6, arrayElement7]
		const options4 = {
			"defaultEngine": defaultEngine3,
			"root": root3,
			"engines": engines3
		}
		const view3 = new View(localName3, options4)
		const options5 = 2;
		const callback5 = false;
		const arrayElement8 = "booting in %s mode";
		const arrayElement9 = "Allow";
		const engines4 = [arrayElement8, arrayElement9]
		const defaultEngine4 = "a1oBS";
		const root4 = -107.049068539916;
		const arrayElement10 = "booting in %s mode";
		const arrayElement11 = "Allow";
		const engines5 = [arrayElement10, arrayElement11]
		const options6 = {
			"defaultEngine": defaultEngine4,
			"root": root4,
			"engines": engines5
		}
		const anon = [engines4, options6]
		const renderReturnValue3 = await view3.render(options5, callback5, anon)
		
	})
})
