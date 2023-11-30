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
		const localName = -493.49040159861477;
		const options = true;
		const view = new View(localName, options)
		const options1 = 300;
		const callback = () => {};
		const anon = null;
		const renderReturnValue = await view.render(options1, callback, anon)
		const localName1 = -493.49040159861477;
		const options2 = true;
		const view1 = new View(localName1, options2)
		const localName2 = "PW*!S\\r.\\Q(#gs^MhUw85=kjumEbB]-3$73oMT]G{(bF1P}Ty+(G/s§k&wBH5@`\\J%2*'+qz U^O-U[C${(.*[x±Z4Kc,a";
		const lookupReturnValue = await view1.lookup(localName2)
		const localName3 = -493.49040159861477;
		const options3 = true;
		const view2 = new View(localName3, options3)
		const callback1 = () => {};
		const options4 = 300;
		const resolveReturnValue = await view2.resolve(callback1, options4)
		const localName4 = -493.49040159861477;
		const options5 = true;
		const view3 = new View(localName4, options5)
		const anon1 = null;
		const localName5 = -493.49040159861477;
		const renderReturnValue1 = await view3.render(anon1, localName5)
		
	})
})
