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
		const localName = -217.86460219313994;
		const options = false;
		const view = new View(localName, options)
		const options1 = false;
		const callback = () => {};
		const renderReturnValue = await view.render(options1, callback)
		const localName1 = -217.86460219313994;
		const options2 = false;
		const view1 = new View(localName1, options2)
		const options3 = {}
		const callback1 = "tIdE-EU\tp/TDfJ\"Z:A\n%1z,1\tL\nF=IAUFR9/sKg(TS";
		const renderReturnValue1 = await view1.render(options3, callback1)
		const localName2 = -217.86460219313994;
		const options4 = false;
		const view2 = new View(localName2, options4)
		const options5 = ". Redirecting to ";
		const callback2 = 400;
		const renderReturnValue2 = await view2.render(options5, callback2)
		
	})
})
