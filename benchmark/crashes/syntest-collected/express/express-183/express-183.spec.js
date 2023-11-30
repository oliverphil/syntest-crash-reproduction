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
		const localName = -765;
		const options = true;
		const anon = 3;
		const view = new View(localName, options, anon)
		const localName1 = {}
		const lookupReturnValue = await view.lookup(localName1)
		const localName2 = -765;
		const options1 = true;
		const anon1 = 3;
		const view1 = new View(localName2, options1, anon1)
		const options2 = "&+;)}GF#\\5:=F}EtKjn)&'FzWTo-97J_UKbSC%W\t&q(U.9x\n>bB'$C7/OC&XI?5t>'^O-H_D&";
		const localName3 = {}
		const anon2 = "\\u2029";
		const renderReturnValue = await view1.render(options2, localName3, anon2)
		const localName4 = -765;
		const options3 = true;
		const anon3 = 3;
		const view2 = new View(localName4, options3, anon3)
		const options4 = undefined;
		const callback = "subdomains";
		const renderReturnValue1 = await view2.render(options4, callback)
		
	})
})
