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
		const localName = 598.2527257263491;
		const options = false;
		const anon = "multipart";
		const view = new View(localName, options, anon)
		const options1 = -115.10160878187298;
		const callback = 728;
		const renderReturnValue = await view.render(options1, callback)
		const localName1 = 598.2527257263491;
		const options2 = false;
		const anon1 = "multipart";
		const view1 = new View(localName1, options2, anon1)
		const localDir = null;
		const file = ".z\tq/,J_NDcLxK\\T;'P%xV^.A1sBf%R`BH%A";
		const resolveReturnValue = await view1.resolve(localDir, file)
		const localName2 = 598.2527257263491;
		const options3 = false;
		const anon2 = "multipart";
		const view2 = new View(localName2, options3, anon2)
		const options4 = {}
		const callback1 = {}
		const renderReturnValue1 = await view2.render(options4, callback1)
		
	})
})
