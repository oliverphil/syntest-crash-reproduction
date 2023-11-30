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
		const localName = -415.43763122553014;
		const options = true;
		const view = new View(localName, options)
		const options1 = "H_U&LX.c]4TS§\ny#IW5RBxGD*=fr!P)4}HgF8HQKfut)?Hjt4";
		const callback = {}
		const renderReturnValue = await view.render(options1, callback)
		const localName1 = -415.43763122553014;
		const options2 = true;
		const view1 = new View(localName1, options2)
		const callback1 = {}
		const file = () => {};
		const resolveReturnValue = await view1.resolve(callback1, file)
		const localName2 = -415.43763122553014;
		const options3 = true;
		const view2 = new View(localName2, options3)
		const localName3 = null;
		const lookupReturnValue = await view2.lookup(localName3)
		
	})
})
