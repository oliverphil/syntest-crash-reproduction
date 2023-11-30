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
		const localName = -105;
		const options = true;
		const anon = false;
		const view = new View(localName, options, anon)
		const options1 = null;
		const callback = 300;
		const anon1 = undefined;
		const anon2 = false;
		const renderReturnValue = await view.render(options1, callback, anon1, anon2)
		const localName1 = -105;
		const options2 = true;
		const anon3 = false;
		const view1 = new View(localName1, options2, anon3)
		const localDir = -982.8352415658633;
		const file = {}
		const options3 = null;
		const resolveReturnValue = await view1.resolve(localDir, file, options3)
		const localName2 = -105;
		const options4 = true;
		const anon4 = false;
		const view2 = new View(localName2, options4, anon4)
		const options5 = ";:cJw)K9`z>o=S;@T_R`:>gVI(26K?efc7_+rYeVE%$!<TpGRMxZ$?UrM#pa`8$>uJ2K\\`\\y1Q8m6!;Ns-]c'EkbX{N";
		const anon5 = undefined;
		const renderReturnValue1 = await view2.render(options5, anon5)
		
	})
})
