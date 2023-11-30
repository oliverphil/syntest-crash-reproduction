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
		const localName = 724;
		const anon = true;
		const arrayElement = false;
		const engines = {}
		const options = {
			"defaultEngine": anon,
			"root": arrayElement,
			"engines": engines
		}
		const view = new View(localName, options)
		const localName1 = "mdEA \\\tuuZvuefEfLb_/IA]2viX\n8Bszj4m";
		const arrayElement1 = null;
		const arrayElement2 = [arrayElement1]
		const arrayElement3 = () => {};
		const anon1 = true;
		const arrayElement4 = 789.2612239802554;
		const arrayElement5 = "J%{6*qbh[b|&b[Vi;n|uX§ibDp]@9Es*7vX.2'+efSvu\nLw2%§,mB=RRoP~]S5j:d(LbhHV±9G>_§~W,y";
		const arrayElement6 = [anon1, arrayElement4, arrayElement5]
		const arrayElement7 = "\\u003e";
		const arrayElement8 = false;
		const arrayElement9 = 508.16497322425084;
		const arrayElement10 = [arrayElement6, arrayElement7, arrayElement8, arrayElement9]
		const arrayElement11 = 1;
		const anon2 = [arrayElement2, arrayElement3, arrayElement10, arrayElement11]
		const lookupReturnValue = await view.lookup(localName1, anon2)
		const localName2 = "V%iI9§^K(,,Okj/o|U)VO*P'&[FfZH]K#:YFW=*ym9+v}|,k\n";
		const arrayElement12 = {}
		const defaultEngine = [arrayElement12]
		const root = {}
		const engines1 = {}
		const options1 = {
			"defaultEngine": defaultEngine,
			"root": root,
			"engines": engines1
		}
		const anon3 = true;
		const view1 = new View(localName2, options1, anon3)
		const engines2 = {}
		const engines3 = {}
		const renderReturnValue = await view1.render(engines2, engines3)
		
	})
})
