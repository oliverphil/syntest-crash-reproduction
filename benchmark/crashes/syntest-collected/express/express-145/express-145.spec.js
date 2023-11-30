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
		const localName = -243;
		const defaultEngine = false;
		const root = "S$}T3~I5c#BuDYOAd=$~HN1}^Z{O$YaMfeO4_:9DZc63I@Row7~g$wz";
		const engines = []
		const options = {
			"defaultEngine": defaultEngine,
			"root": root,
			"engines": engines
		}
		const anon = true;
		const view = new View(localName, options, anon)
		const localName1 = 538;
		const lookupReturnValue = await view.lookup(localName1)
		const localName2 = -243;
		const defaultEngine1 = false;
		const root1 = "S$}T3~I5c#BuDYOAd=$~HN1}^Z{O$YaMfeO4_:9DZc63I@Row7~g$wz";
		const engines1 = []
		const options1 = {
			"defaultEngine": defaultEngine1,
			"root": root1,
			"engines": engines1
		}
		const anon1 = true;
		const view1 = new View(localName2, options1, anon1)
		const localName3 = 538;
		const localName4 = -243;
		const anon2 = true;
		const anon3 = true;
		const resolveReturnValue = await view1.resolve(localName3, localName4, anon2, anon3)
		const localName5 = -243;
		const defaultEngine2 = false;
		const root2 = "S$}T3~I5c#BuDYOAd=$~HN1}^Z{O$YaMfeO4_:9DZc63I@Row7~g$wz";
		const engines2 = []
		const options2 = {
			"defaultEngine": defaultEngine2,
			"root": root2,
			"engines": engines2
		}
		const anon4 = true;
		const view2 = new View(localName5, options2, anon4)
		const options3 = "type-is";
		const callback = 919.9679674872466;
		const defaultEngine3 = false;
		const root3 = "S$}T3~I5c#BuDYOAd=$~HN1}^Z{O$YaMfeO4_:9DZc63I@Row7~g$wz";
		const engines3 = []
		const options4 = {
			"defaultEngine": defaultEngine3,
			"root": root3,
			"engines": engines3
		}
		const root4 = "S$}T3~I5c#BuDYOAd=$~HN1}^Z{O$YaMfeO4_:9DZc63I@Row7~g$wz";
		const renderReturnValue = await view2.render(options3, callback, options4, root4)
		const localName6 = -243;
		const defaultEngine4 = false;
		const root5 = "S$}T3~I5c#BuDYOAd=$~HN1}^Z{O$YaMfeO4_:9DZc63I@Row7~g$wz";
		const engines4 = []
		const options5 = {
			"defaultEngine": defaultEngine4,
			"root": root5,
			"engines": engines4
		}
		const anon5 = true;
		const view3 = new View(localName6, options5, anon5)
		const localDir = true;
		const file = () => {};
		const resolveReturnValue1 = await view3.resolve(localDir, file)
		
	})
})
