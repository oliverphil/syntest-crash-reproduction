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
		const localName = 1000;
		const options = true;
		const anon = "utf-8";
		const view = new View(localName, options, anon)
		const options1 = 204;
		const callback = {}
		const anon1 = "|{?0gFSe>#N?/^.=B§QR]s'on§(%lT'RKRifM&@G1!EF{§)R@^)4imzO+I^5u;i_70IY5zfo<xe<P4n'&h#|<}§Gs5)oRVgv";
		const anon2 = () => {};
		const renderReturnValue = await view.render(options1, callback, anon1, anon2)
		const localName1 = 1000;
		const options2 = true;
		const anon3 = "utf-8";
		const view1 = new View(localName1, options2, anon3)
		const callback1 = {}
		const anon4 = () => {};
		const resolveReturnValue = await view1.resolve(callback1, anon4)
		const localName2 = 1000;
		const options3 = true;
		const anon5 = "utf-8";
		const view2 = new View(localName2, options3, anon5)
		const options4 = 204;
		const callback2 = null;
		const renderReturnValue1 = await view2.render(options4, callback2)
		
	})
})
