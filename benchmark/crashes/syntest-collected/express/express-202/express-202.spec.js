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
		const localName = 68.16756064688963;
		const defaultEngine = null;
		const arrayElement = {}
		const arrayElement1 = null;
		const arrayElement2 = {}
		const root = [arrayElement, arrayElement1, arrayElement2]
		const engines = {}
		const options = {
			"defaultEngine": defaultEngine,
			"root": root,
			"engines": engines
		}
		const anon = null;
		const view = new View(localName, options, anon)
		const localName1 = -298.9425324439785;
		const lookupReturnValue = await view.lookup(localName1)
		const localName2 = 62;
		const defaultEngine1 = null;
		const arrayElement3 = {}
		const arrayElement4 = null;
		const arrayElement5 = {}
		const root1 = [arrayElement3, arrayElement4, arrayElement5]
		const engines1 = {}
		const options1 = {
			"defaultEngine": defaultEngine1,
			"root": root1,
			"engines": engines1
		}
		const anon1 = null;
		const view1 = new View(localName2, options1, anon1)
		const localDir = undefined;
		const file = undefined;
		const anon2 = null;
		const resolveReturnValue = await view1.resolve(localDir, file, anon2)
		const localName3 = 62;
		const defaultEngine2 = null;
		const arrayElement6 = {}
		const arrayElement7 = null;
		const arrayElement8 = {}
		const root2 = [arrayElement6, arrayElement7, arrayElement8]
		const engines2 = {}
		const options2 = {
			"defaultEngine": defaultEngine2,
			"root": root2,
			"engines": engines2
		}
		const anon3 = -569.9375473706748;
		const view2 = new View(localName3, options2, anon3)
		const options3 = "get";
		const callback = false;
		const renderReturnValue = await view2.render(options3, callback)
		const localName4 = 62;
		const defaultEngine3 = null;
		const arrayElement9 = {}
		const arrayElement10 = null;
		const arrayElement11 = {}
		const root3 = [arrayElement9, arrayElement10, arrayElement11]
		const engines3 = {}
		const options4 = {
			"defaultEngine": defaultEngine3,
			"root": root3,
			"engines": engines3
		}
		const anon4 = null;
		const view3 = new View(localName4, options4, anon4)
		const callback1 = false;
		const callback2 = 2.718281828459045;
		const renderReturnValue1 = await view3.render(callback1, callback2)
		
	})
})
