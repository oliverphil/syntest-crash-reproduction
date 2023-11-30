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
		const localName = 457.7563156066185;
		const options = true;
		const anon = undefined;
		const arrayElement = false;
		const anon1 = [arrayElement]
		const view = new View(localName, options, anon, anon1)
		const localName1 = 457.7563156066185;
		const options1 = true;
		const anon2 = undefined;
		const arrayElement1 = false;
		const anon3 = [arrayElement1]
		const view1 = new View(localName1, options1, anon2, anon3)
		const arrayElement2 = false;
		const anon4 = [arrayElement2]
		const callback = "next";
		const anon5 = {}
		const renderReturnValue = await view1.render(anon4, callback, anon5)
		const localName2 = 457.7563156066185;
		const options2 = true;
		const anon6 = undefined;
		const arrayElement3 = false;
		const anon7 = [arrayElement3]
		const view2 = new View(localName2, options2, anon6, anon7)
		const options3 = "QtOQ§(=<`l§l@\\5^s+-4qN4\\lF`~vdD/bl()Mula ±xg&";
		const callback1 = "n$";
		const anon8 = {}
		const renderReturnValue1 = await view2.render(options3, callback1, anon8)
		const localName3 = 457.7563156066185;
		const options4 = true;
		const anon9 = undefined;
		const arrayElement4 = false;
		const anon10 = [arrayElement4]
		const view3 = new View(localName3, options4, anon9, anon10)
		const callback2 = "next";
		const callback3 = "T^XAPXc§,,>8Bi.C\n9Vil\\Nb+,T'OK>(F+t";
		const renderReturnValue2 = await view3.render(callback2, callback3)
		
	})
})
