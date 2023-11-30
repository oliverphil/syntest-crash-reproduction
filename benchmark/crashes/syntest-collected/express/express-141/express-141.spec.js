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
		const localName = 406;
		const options = undefined;
		const view = new View(localName, options)
		const localDir = 0;
		const file = 204;
		const resolveReturnValue = await view.resolve(localDir, file)
		const localName1 = 406;
		const options1 = undefined;
		const view1 = new View(localName1, options1)
		const localName2 = "write";
		const lookupReturnValue = await view1.lookup(localName2)
		const localName3 = 406;
		const options2 = undefined;
		const view2 = new View(localName3, options2)
		const localName4 = "write";
		const anon = true;
		const lookupReturnValue1 = await view2.lookup(localName4, anon)
		const localName5 = 406;
		const options3 = undefined;
		const view3 = new View(localName5, options3)
		const options4 = {}
		const options5 = undefined;
		const anon1 = "!'MXUmks{O^§x?#sr§OTt-oy6)|meHx]Q_nS*m+_§(N\\y±9\"'";
		const renderReturnValue = await view3.render(options4, options5, anon1)
		
	})
})
