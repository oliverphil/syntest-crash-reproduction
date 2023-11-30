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
		const localName = 40.434124305485966;
		const options = true;
		const anon = "xBNjd'Y$L%t;>FZ+A7{za'2I)2oH51[7*>nv#\\+$kIP<";
		const view = new View(localName, options, anon)
		const options1 = {}
		const callback = {}
		const anon1 = 0;
		const anon2 = true;
		const renderReturnValue = await view.render(options1, callback, anon1, anon2)
		const localName1 = 40.434124305485966;
		const options2 = true;
		const anon3 = "xBNjd'Y$L%t;>FZ+A7{za'2I)2oH51[7*>nv#\\+$kIP<";
		const view1 = new View(localName1, options2, anon3)
		const localName2 = null;
		const lookupReturnValue = await view1.lookup(localName2)
		const localName3 = 40.434124305485966;
		const options3 = true;
		const anon4 = "xBNjd'Y$L%t;>FZ+A7{za'2I)2oH51[7*>nv#\\+$kIP<";
		const view2 = new View(localName3, options3, anon4)
		const localName4 = 40.434124305485966;
		const anon5 = "): Use req.params, req.body, or req.query instead";
		const lookupReturnValue1 = await view2.lookup(localName4, anon5)
		
	})
})
