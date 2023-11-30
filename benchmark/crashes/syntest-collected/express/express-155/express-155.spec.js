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
		const localName = -369;
		const defaultEngine = () => {};
		const arrayElement = {}
		const arrayElement1 = () => {};
		const arrayElement2 = {}
		const arrayElement3 = false;
		const root = [arrayElement, arrayElement1, arrayElement2, arrayElement3]
		const engines = 1;
		const options = {
			"defaultEngine": defaultEngine,
			"root": root,
			"engines": engines
		}
		const view = new View(localName, options)
		const localName1 = -369;
		const defaultEngine1 = () => {};
		const arrayElement4 = {}
		const arrayElement5 = () => {};
		const arrayElement6 = {}
		const arrayElement7 = false;
		const root1 = [arrayElement4, arrayElement5, arrayElement6, arrayElement7]
		const engines1 = 1;
		const options1 = {
			"defaultEngine": defaultEngine1,
			"root": root1,
			"engines": engines1
		}
		const view1 = new View(localName1, options1)
		const arrayElement8 = {}
		const file = null;
		const anon = null;
		const resolveReturnValue = await view1.resolve(arrayElement8, file, anon)
		const localName2 = -369;
		const defaultEngine2 = () => {};
		const arrayElement9 = {}
		const arrayElement10 = () => {};
		const arrayElement11 = {}
		const arrayElement12 = false;
		const root2 = [arrayElement9, arrayElement10, arrayElement11, arrayElement12]
		const engines2 = 1;
		const options2 = {
			"defaultEngine": defaultEngine2,
			"root": root2,
			"engines": engines2
		}
		const view2 = new View(localName2, options2)
		const localDir = ".";
		const file1 = "trim prefix (%s) from url %s";
		const resolveReturnValue1 = await view2.resolve(localDir, file1)
		
	})
})
