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
		const localName = "7vC#_bkm4±zcu[j73=D=VAjClFYs<8_q}6=TvUU!36}cFbuU1CsLW6±K@_w/b=F`+cH=§:eehA$ICt&.";
		const defaultEngine = () => {};
		const root = -1;
		const engines = "6wAx\n/3jim=0";
		const options = {
			"defaultEngine": defaultEngine,
			"root": root,
			"engines": engines
		}
		const view = new View(localName, options)
		const localDir = "rAlj777)j9n±3,HR>9NWY9LcBeU#;|3lD9^BK±F$1kO~`bgc0±uA4Y+QBs^`\n-CZB76±F,W6:c4\"LF+t";
		const file = () => {};
		const resolveReturnValue = await view.resolve(localDir, file)
		const localName1 = "7vC#_bkm4±zcu[j73=D=VAjClFYs<8_q}6=TvUU!36}cFbuU1CsLW6±K@_w/b=F`+cH=§:eehA$ICt&.";
		const defaultEngine1 = () => {};
		const root1 = -1;
		const engines1 = "6wAx\n/3jim=0";
		const options1 = {
			"defaultEngine": defaultEngine1,
			"root": root1,
			"engines": engines1
		}
		const view1 = new View(localName1, options1)
		const localDir1 = null;
		const localName2 = "7vC#_bkm4±zcu[j73=D=VAjClFYs<8_q}6=TvUU!36}cFbuU1CsLW6±K@_w/b=F`+cH=§:eehA$ICt&.";
		const file1 = () => {};
		const resolveReturnValue1 = await view1.resolve(localDir1, localName2, file1)
		
	})
})
