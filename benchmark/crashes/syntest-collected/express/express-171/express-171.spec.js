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
		const localName = -706;
		const options = false;
		const view = new View(localName, options)
		const options1 = -980.0665238470261;
		const callback = false;
		const anon = "x.7>\"ifd{+i}?Y_fcW>`}H4b'dI>n}#^DZ8$qQU[/Sr@_:H:x!a$}l]G}Qbyilfc>2126f";
		const renderReturnValue = await view.render(options1, callback, anon)
		const localName1 = -706;
		const options2 = false;
		const view1 = new View(localName1, options2)
		const localDir = () => {};
		const options3 = false;
		const resolveReturnValue = await view1.resolve(localDir, options3)
		const localName2 = -706;
		const options4 = false;
		const view2 = new View(localName2, options4)
		const localName3 = "e8Ihr@rM§Ll§vz&p>QTS|aC0X+1aOCaP'R5v3~}5o[4ML*/iVB@;f\\ ~\\;1\n'XK8^\nF6U'U(+±y':pk'IgwzP2\\b";
		const lookupReturnValue = await view2.lookup(localName3)
		
	})
})
