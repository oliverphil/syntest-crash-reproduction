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
		const localName = 752.3605206834386;
		const options = false;
		const view = new View(localName, options)
		const options1 = "bodyParser";
		const callback = null;
		const renderReturnValue = await view.render(options1, callback)
		const localName1 = 752.3605206834386;
		const options2 = false;
		const view1 = new View(localName1, options2)
		const options3 = "bodyParser";
		const callback1 = "psn_uH. nKu'/&E0S-Ljd;g%)]dj;7P$RXZ\tU^pKn|Z:c=_{Ob\"g'tSy?-.Fa[o3k Qt#J`SP";
		const anon = {}
		const renderReturnValue1 = await view1.render(options3, callback1, anon)
		const localName2 = 752.3605206834386;
		const options4 = false;
		const view2 = new View(localName2, options4)
		const localName3 = 752.3605206834386;
		const options5 = "bodyParser";
		const anon1 = () => {};
		const renderReturnValue2 = await view2.render(localName3, options5, anon1)
		
	})
})
