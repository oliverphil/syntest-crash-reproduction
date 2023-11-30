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
		const localName = -802;
		const defaultEngine = null;
		const root = () => {};
		const arrayElement = {}
		const arrayElement1 = () => {};
		const arrayElement2 = 372;
		const arrayElement3 = null;
		const engines = [arrayElement, arrayElement1, arrayElement2, arrayElement3]
		const options = {
			"defaultEngine": defaultEngine,
			"root": root,
			"engines": engines
		}
		const anon = 38;
		const view = new View(localName, options, anon)
		const localName1 = 302;
		const anon1 = true;
		const lookupReturnValue = await view.lookup(localName1, anon1)
		const localName2 = -802;
		const defaultEngine1 = null;
		const root1 = () => {};
		const arrayElement4 = {}
		const arrayElement5 = () => {};
		const arrayElement6 = 372;
		const arrayElement7 = null;
		const engines1 = [arrayElement4, arrayElement5, arrayElement6, arrayElement7]
		const options1 = {
			"defaultEngine": defaultEngine1,
			"root": root1,
			"engines": engines1
		}
		const anon2 = 38;
		const view1 = new View(localName2, options1, anon2)
		const localDir = "req.acceptsEncoding: Use acceptsEncodings instead";
		const arrayElement8 = {}
		const arrayElement9 = () => {};
		const arrayElement10 = 372;
		const arrayElement11 = null;
		const engines2 = [arrayElement8, arrayElement9, arrayElement10, arrayElement11]
		const resolveReturnValue = await view1.resolve(localDir, engines2)
		
	})
})
