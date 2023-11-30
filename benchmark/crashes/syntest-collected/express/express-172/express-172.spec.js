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
		const localName = -268;
		const defaultEngine = {}
		const root = -497.1953464700688;
		const arrayElement = "*§$nPC[E/d:X+3,;P<\\.Y8q;^1#~C±(M4xYLJAxFI26<]}7&?;iUmr1DS1mV;@Jwe d)t]` ?#+vRm±wA\\n\"o#86xd q,(qqg";
		const engines = [arrayElement]
		const options = {
			"defaultEngine": defaultEngine,
			"root": root,
			"engines": engines
		}
		const view = new View(localName, options)
		const options1 = true;
		const callback = "X-Powered-By";
		const renderReturnValue = await view.render(options1, callback)
		const localName1 = -268;
		const defaultEngine1 = {}
		const root1 = -497.1953464700688;
		const arrayElement1 = "*§$nPC[E/d:X+3,;P<\\.Y8q;^1#~C±(M4xYLJAxFI26<]}7&?;iUmr1DS1mV;@Jwe d)t]` ?#+vRm±wA\\n\"o#86xd q,(qqg";
		const engines1 = [arrayElement1]
		const options2 = {
			"defaultEngine": defaultEngine1,
			"root": root1,
			"engines": engines1
		}
		const view1 = new View(localName1, options2)
		const root2 = -497.1953464700688;
		const lookupReturnValue = await view1.lookup(root2)
		const localName2 = -268;
		const defaultEngine2 = {}
		const root3 = -497.1953464700688;
		const arrayElement2 = "*§$nPC[E/d:X+3,;P<\\.Y8q;^1#~C±(M4xYLJAxFI26<]}7&?;iUmr1DS1mV;@Jwe d)t]` ?#+vRm±wA\\n\"o#86xd q,(qqg";
		const engines2 = [arrayElement2]
		const options3 = {
			"defaultEngine": defaultEngine2,
			"root": root3,
			"engines": engines2
		}
		const view2 = new View(localName2, options3)
		const root4 = -497.1953464700688;
		const lookupReturnValue1 = await view2.lookup(root4)
		
	})
})
