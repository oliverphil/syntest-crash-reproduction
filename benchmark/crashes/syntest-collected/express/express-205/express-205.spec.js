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
		const localName = -715.2225480140517;
		const options = false;
		const anon = 0;
		const view = new View(localName, options, anon)
		const options1 = () => {};
		const callback = undefined;
		const anon1 = null;
		const renderReturnValue = await view.render(options1, callback, anon1)
		const localName1 = -715.2225480140517;
		const options2 = false;
		const anon2 = 0;
		const view1 = new View(localName1, options2, anon2)
		const anon3 = 0;
		const options3 = false;
		const options4 = false;
		const renderReturnValue1 = await view1.render(anon3, options3, options4)
		const localName2 = -715.2225480140517;
		const options5 = false;
		const anon4 = 0;
		const view2 = new View(localName2, options5, anon4)
		const callback1 = undefined;
		const callback2 = {}
		const callback3 = undefined;
		const renderReturnValue2 = await view2.render(callback1, callback2, callback3)
		const localName3 = -715.2225480140517;
		const options6 = false;
		const anon5 = 0;
		const view3 = new View(localName3, options6, anon5)
		const localName4 = 0;
		const lookupReturnValue = await view3.lookup(localName4)
		const localName5 = -715.2225480140517;
		const options7 = false;
		const anon6 = 0;
		const view4 = new View(localName5, options7, anon6)
		const anon7 = null;
		const anon8 = 0;
		const resolveReturnValue = await view4.resolve(anon7, anon8)
		
	})
})
