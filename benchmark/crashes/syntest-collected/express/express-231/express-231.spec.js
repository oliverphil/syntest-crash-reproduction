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
		const localName = 661;
		const arrayElement = 1000;
		const defaultEngine = [arrayElement]
		const root = null;
		const engines = {}
		const options = {
			"defaultEngine": defaultEngine,
			"root": root,
			"engines": engines
		}
		const anon = () => {};
		const view = new View(localName, options, anon)
		const arrayElement1 = 2.718281828459045;
		const arrayElement2 = true;
		const arrayElement3 = {}
		const localName1 = [arrayElement1, arrayElement2, arrayElement3]
		const anon1 = {}
		const lookupReturnValue = await view.lookup(localName1, anon1)
		const localName2 = 661;
		const arrayElement4 = 1000;
		const defaultEngine1 = [arrayElement4]
		const root1 = null;
		const engines1 = {}
		const options1 = {
			"defaultEngine": defaultEngine1,
			"root": root1,
			"engines": engines1
		}
		const anon2 = () => {};
		const view1 = new View(localName2, options1, anon2)
		const arrayElement5 = true;
		const callback = "piQ,q6i#Nv~aLLrLEQ6k_G}~q:/bxyw;^} 4#'";
		const anon3 = "HHiTUql-k'-6xoOF ";
		const anon4 = false;
		const renderReturnValue = await view1.render(arrayElement5, callback, anon3, anon4)
		const localName3 = 661;
		const arrayElement6 = 1000;
		const defaultEngine2 = [arrayElement6]
		const root2 = null;
		const engines2 = {}
		const options2 = {
			"defaultEngine": defaultEngine2,
			"root": root2,
			"engines": engines2
		}
		const anon5 = () => {};
		const view2 = new View(localName3, options2, anon5)
		const root3 = null;
		const arrayElement7 = {}
		const arrayElement8 = 1000;
		const resolveReturnValue = await view2.resolve(root3, arrayElement7, arrayElement8)
		
	})
})
