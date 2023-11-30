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
		const localName = -140.3760044035439;
		const options = false;
		const view = new View(localName, options)
		const localName1 = true;
		const anon = "methodOverride";
		const lookupReturnValue = await view.lookup(localName1, anon)
		const localName2 = -140.3760044035439;
		const options1 = false;
		const view1 = new View(localName2, options1)
		const localDir = 140.30487083647904;
		const file = "L@]_Qg.±f'F'IH^\">1udTk.uahF/euE(@T\n(d;2L >\\";
		const resolveReturnValue = await view1.resolve(localDir, file)
		
	})
})
