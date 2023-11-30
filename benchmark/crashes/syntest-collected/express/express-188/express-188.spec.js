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
		const localName = -143.21764762710552;
		const defaultEngine = "extended";
		const root = {}
		const arrayElement = null;
		const arrayElement1 = "6Tl8p_]qIE\nM\"e9 !shZx|,Fsgcr|fwszbEF;KR+1'$A+§O,tr9BR)Hzai28R`+AILTBdn7~+YnPCVF1D%~p6|7n;;,}Up]Q";
		const engines = [arrayElement, arrayElement1]
		const options = {
			"defaultEngine": defaultEngine,
			"root": root,
			"engines": engines
		}
		const view = new View(localName, options)
		const localName1 = -143.21764762710552;
		const defaultEngine1 = "extended";
		const root1 = {}
		const arrayElement2 = null;
		const arrayElement3 = "6Tl8p_]qIE\nM\"e9 !shZx|,Fsgcr|fwszbEF;KR+1'$A+§O,tr9BR)Hzai28R`+AILTBdn7~+YnPCVF1D%~p6|7n;;,}Up]Q";
		const engines1 = [arrayElement2, arrayElement3]
		const options1 = {
			"defaultEngine": defaultEngine1,
			"root": root1,
			"engines": engines1
		}
		const view1 = new View(localName1, options1)
		const localName2 = -143.21764762710552;
		const lookupReturnValue = await view1.lookup(localName2)
		const localName3 = -143.21764762710552;
		const defaultEngine2 = "extended";
		const root2 = {}
		const arrayElement4 = null;
		const arrayElement5 = "6Tl8p_]qIE\nM\"e9 !shZx|,Fsgcr|fwszbEF;KR+1'$A+§O,tr9BR)Hzai28R`+AILTBdn7~+YnPCVF1D%~p6|7n;;,}Up]Q";
		const engines2 = [arrayElement4, arrayElement5]
		const options2 = {
			"defaultEngine": defaultEngine2,
			"root": root2,
			"engines": engines2
		}
		const view2 = new View(localName3, options2)
		const options3 = ")±Uc§jF±aK1 Erdo*\\\"Y}]±^:eW*6;!Kv'agJfs0yo@''rL92\nmy\\";
		const callback = undefined;
		const renderReturnValue = await view2.render(options3, callback)
		const localName4 = -143.21764762710552;
		const defaultEngine3 = "extended";
		const root3 = {}
		const arrayElement6 = null;
		const arrayElement7 = "6Tl8p_]qIE\nM\"e9 !shZx|,Fsgcr|fwszbEF;KR+1'$A+§O,tr9BR)Hzai28R`+AILTBdn7~+YnPCVF1D%~p6|7n;;,}Up]Q";
		const engines3 = [arrayElement6, arrayElement7]
		const options4 = {
			"defaultEngine": defaultEngine3,
			"root": root3,
			"engines": engines3
		}
		const view3 = new View(localName4, options4)
		const localName5 = () => {};
		const lookupReturnValue1 = await view3.lookup(localName5)
		
	})
})
