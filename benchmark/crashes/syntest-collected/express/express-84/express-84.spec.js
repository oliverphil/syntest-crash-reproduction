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
		const arrayElement = {}
		const localName = [arrayElement]
		const options = false;
		const anon = "d;!r@±-w|}TVCt#=Sdv6:J\nA_p p!ksXby@Azd$C%&Mm`9`o<X~I`1§vEglq4pp8's";
		const view = new View(localName, options, anon)
		const options1 = true;
		const callback = 266.78648375514126;
		const renderReturnValue = await view.render(options1, callback)
		const arrayElement1 = {}
		const localName1 = [arrayElement1]
		const options2 = false;
		const anon1 = "d;!r@±-w|}TVCt#=Sdv6:J\nA_p p!ksXby@Azd$C%&Mm`9`o<X~I`1§vEglq4pp8's";
		const view1 = new View(localName1, options2, anon1)
		const options3 = null;
		const callback1 = 266.78648375514126;
		const renderReturnValue1 = await view1.render(options3, callback1)
		const arrayElement2 = {}
		const localName2 = [arrayElement2]
		const options4 = false;
		const anon2 = "d;!r@±-w|}TVCt#=Sdv6:J\nA_p p!ksXby@Azd$C%&Mm`9`o<X~I`1§vEglq4pp8's";
		const view2 = new View(localName2, options4, anon2)
		const options5 = 300;
		const callback2 = "range-parser";
		const arrayElement3 = {}
		const localName3 = [arrayElement3]
		const renderReturnValue2 = await view2.render(options5, callback2, localName3)
		
	})
})
