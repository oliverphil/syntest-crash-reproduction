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
		const localName = 52;
		const options = true;
		const view = new View(localName, options)
		const localName1 = {}
		const lookupReturnValue = await view.lookup(localName1)
		const localName2 = 52;
		const options1 = true;
		const view1 = new View(localName2, options1)
		const localDir = "maxAge";
		const localName3 = 52;
		const anon = null;
		const resolveReturnValue = await view1.resolve(localDir, localName3, anon)
		const localName4 = 52;
		const options2 = true;
		const view2 = new View(localName4, options2)
		const localDir1 = "app.del: Use app.delete instead";
		const file = "Og;n`§<93UbO\"@udce]3W[W(C9[\tL@Wg=MBlI)dX$PD+@D_h[3@66*`}br§mi]SSxT^/>nz\\z}'y>^?s$§";
		const anon1 = null;
		const resolveReturnValue1 = await view2.resolve(localDir1, file, anon1)
		
	})
})
