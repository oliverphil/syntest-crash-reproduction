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
		const localName = -541;
		const options = true;
		const view = new View(localName, options)
		const localDir = "rI\noxQ7M*\tIPdpr^=@!87jWwy,WeJl";
		const file = -687.0596594837886;
		const anon = "fpqv;k+±\nl";
		const anon1 = true;
		const resolveReturnValue = await view.resolve(localDir, file, anon, anon1)
		const localName1 = -541;
		const options1 = true;
		const view1 = new View(localName1, options1)
		const localDir1 = "{';htc|Ul`g?SBO>=OA4D5+)§qv\t^+7~QM8{>dNzo\nF/Ys'hVnMMm";
		const file1 = undefined;
		const resolveReturnValue1 = await view1.resolve(localDir1, file1)
		const localName2 = -541;
		const options2 = true;
		const view2 = new View(localName2, options2)
		const localDir2 = "RHJ@P]//d;iD\tD}8,<§w$ZWSo!\\c9=`NU§.+#BKC_sa\nm%fGo@6,@^x7RlHTONN0Rr`#tSS7Ai9S'rv±.Agk\t^JQWQh9";
		const file2 = () => {};
		const resolveReturnValue2 = await view2.resolve(localDir2, file2)
		const localName3 = -541;
		const options3 = true;
		const view3 = new View(localName3, options3)
		const anon2 = true;
		const arrayElement = {}
		const arrayElement1 = null;
		const callback = [arrayElement, arrayElement1]
		const anon3 = null;
		const renderReturnValue = await view3.render(anon2, callback, anon3)
		
	})
})
