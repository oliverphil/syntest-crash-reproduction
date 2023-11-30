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
		const localName = 4;
		const options = true;
		const view = new View(localName, options)
		const localName1 = 4;
		const options1 = true;
		const view1 = new View(localName1, options1)
		const options2 = () => {};
		const options3 = true;
		const renderReturnValue = await view1.render(options2, options3)
		const localName2 = 4;
		const options4 = true;
		const view2 = new View(localName2, options4)
		const localName3 = "XmGL'A\t)CeR.;4\t'rt#6JRxio@\"4\" (_`U']V,pd$!LyH4JOq±dC/wf]Q$UI^g}]<k'+<,z";
		const anon = "router.param(fn): Refactor to use path params";
		const lookupReturnValue = await view2.lookup(localName3, anon)
		
	})
})
