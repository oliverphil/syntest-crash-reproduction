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
		const localName = 800.016939876288;
		const options = true;
		const anon = () => {};
		const anon1 = () => {};
		const anon2 = {}
		const view = new View(localName, options, anon, anon1, anon2)
		const options1 = () => {};
		const callback = undefined;
		const renderReturnValue = await view.render(options1, callback)
		const localName1 = 800.016939876288;
		const options2 = true;
		const anon3 = () => {};
		const anon4 = () => {};
		const anon5 = {}
		const view1 = new View(localName1, options2, anon3, anon4, anon5)
		const anon6 = () => {};
		const options3 = true;
		const lookupReturnValue = await view1.lookup(anon6, options3)
		const localName2 = 800.016939876288;
		const options4 = true;
		const anon7 = () => {};
		const anon8 = () => {};
		const anon9 = {}
		const view2 = new View(localName2, options4, anon7, anon8, anon9)
		const localDir = 353;
		const file = "statuses";
		const resolveReturnValue = await view2.resolve(localDir, file)
		
	})
})
