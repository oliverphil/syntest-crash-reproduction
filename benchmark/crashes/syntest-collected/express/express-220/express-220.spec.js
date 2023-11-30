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
		const localName = 455;
		const options = true;
		const view = new View(localName, options)
		const options1 = "ECONNABORTED";
		const callback = "Content-Type cannot be set to an ARRAY";
		const renderReturnValue = await view.render(options1, callback)
		const localName1 = 455;
		const options2 = true;
		const view1 = new View(localName1, options2)
		const options3 = true;
		const file = "GZv'/$w,iOyHGWpYj-[;±-vO\nO~d*Rq2}P.x;TCH|WWLa\"/Xo±vU\"Iaj31B\"!;Zy*Lqyrd\"F/653Hg$3\\I +-Zt$V.WVxa{§";
		const resolveReturnValue = await view1.resolve(options3, file)
		const localName2 = 406;
		const options4 = true;
		const view2 = new View(localName2, options4)
		const localDir = "?CX\\k;WkQiCTwalW§Xg5UkY$5{V8%N:jiiZ+7+&M~|\nh}B`8o77^[cbn8u])'e)7R";
		const file1 = -167.70827197886854;
		const resolveReturnValue1 = await view2.resolve(localDir, file1)
		
	})
})
