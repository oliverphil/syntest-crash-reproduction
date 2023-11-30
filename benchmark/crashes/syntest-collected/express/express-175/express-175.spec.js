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
		const localName = () => {};
		const options = true;
		const anon = () => {};
		const view = new View(localName, options, anon)
		const localName1 = 494;
		const anon1 = "[:RzKb%5bRKwfm.49#jj[d1Jb±Q]r'sV 5EFw,Q*/|2Xni^DF S-.E+*{ahT9U";
		const lookupReturnValue = await view.lookup(localName1, anon1)
		const localName2 = () => {};
		const options1 = true;
		const anon2 = () => {};
		const view1 = new View(localName2, options1, anon2)
		const anon3 = "[:RzKb%5bRKwfm.49#jj[d1Jb±Q]r'sV 5EFw,Q*/|2Xni^DF S-.E+*{ahT9U";
		const lookupReturnValue1 = await view1.lookup(anon3)
		const localName3 = () => {};
		const options2 = true;
		const anon4 = () => {};
		const view2 = new View(localName3, options2, anon4)
		const anon5 = () => {};
		const localName4 = () => {};
		const renderReturnValue = await view2.render(anon5, localName4)
		const localName5 = () => {};
		const options3 = true;
		const anon6 = () => {};
		const view3 = new View(localName5, options3, anon6)
		const options4 = 591.274980070953;
		const callback = undefined;
		const anon7 = true;
		const anon8 = 497.0914747722434;
		const renderReturnValue1 = await view3.render(options4, callback, anon7, anon8)
		
	})
})
