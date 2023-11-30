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
		const localName = -781;
		const options = false;
		const view = new View(localName, options)
		const options1 = {}
		const callback = 38;
		const renderReturnValue = await view.render(options1, callback)
		const localName1 = -781;
		const options2 = false;
		const view1 = new View(localName1, options2)
		const options3 = "setprototypeof";
		const callback1 = () => {};
		const options4 = false;
		const renderReturnValue1 = await view1.render(options3, callback1, options4)
		const localName2 = -781;
		const options5 = false;
		const view2 = new View(localName2, options5)
		const options6 = false;
		const file = "hlV#eUOgu\\6K&vi2cUX~|''&NZHMhKm-;ZJ}_k4'j";
		const resolveReturnValue = await view2.resolve(options6, file)
		const localName3 = -781;
		const options7 = false;
		const view3 = new View(localName3, options7)
		const options8 = {}
		const callback2 = 38;
		const options9 = false;
		const resolveReturnValue1 = await view3.resolve(options8, callback2, options9)
		
	})
})
