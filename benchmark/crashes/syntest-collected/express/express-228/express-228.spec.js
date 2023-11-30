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
		const localName = -567;
		const defaultEngine = {}
		const arrayElement = "Content-Type";
		const root = [arrayElement]
		const arrayElement1 = false;
		const arrayElement2 = null;
		const arrayElement3 = () => {};
		const arrayElement4 = {}
		const engines = [arrayElement1, arrayElement2, arrayElement3, arrayElement4]
		const options = {
			"defaultEngine": defaultEngine,
			"root": root,
			"engines": engines
		}
		const view = new View(localName, options)
		const options1 = "q`\" !)n{wi{fERa!='R#)=OB(:UoPU1y&9kfFjq}Zto](@vjF7T9S2@GU/UsRzSed(=LbS#y^,;;\\t";
		const callback = "req.host: Use req.hostname instead";
		const anon = null;
		const renderReturnValue = await view.render(options1, callback, anon)
		const localName1 = -567;
		const defaultEngine1 = {}
		const arrayElement5 = "Content-Type";
		const root1 = [arrayElement5]
		const arrayElement6 = false;
		const arrayElement7 = null;
		const arrayElement8 = () => {};
		const arrayElement9 = {}
		const engines1 = [arrayElement6, arrayElement7, arrayElement8, arrayElement9]
		const options2 = {
			"defaultEngine": defaultEngine1,
			"root": root1,
			"engines": engines1
		}
		const view1 = new View(localName1, options2)
		const options3 = "q`\" !)n{wi{fERa!='R#)=OB(:UoPU1y&9kfFjq}Zto](@vjF7T9S2@GU/UsRzSed(=LbS#y^,;;\\t";
		const lookupReturnValue = await view1.lookup(options3)
		const localName2 = -567;
		const defaultEngine2 = {}
		const arrayElement10 = "Content-Type";
		const root2 = [arrayElement10]
		const arrayElement11 = false;
		const arrayElement12 = null;
		const arrayElement13 = () => {};
		const arrayElement14 = {}
		const engines2 = [arrayElement11, arrayElement12, arrayElement13, arrayElement14]
		const options4 = {
			"defaultEngine": defaultEngine2,
			"root": root2,
			"engines": engines2
		}
		const view2 = new View(localName2, options4)
		const localName3 = {}
		const anon1 = undefined;
		const lookupReturnValue1 = await view2.lookup(localName3, anon1)
		const localName4 = -567;
		const defaultEngine3 = {}
		const arrayElement15 = "Content-Type";
		const root3 = [arrayElement15]
		const arrayElement16 = false;
		const arrayElement17 = null;
		const arrayElement18 = () => {};
		const arrayElement19 = {}
		const engines3 = [arrayElement16, arrayElement17, arrayElement18, arrayElement19]
		const options5 = {
			"defaultEngine": defaultEngine3,
			"root": root3,
			"engines": engines3
		}
		const view3 = new View(localName4, options5)
		const defaultEngine4 = {}
		const arrayElement20 = false;
		const arrayElement21 = null;
		const arrayElement22 = () => {};
		const arrayElement23 = {}
		const engines4 = [arrayElement20, arrayElement21, arrayElement22, arrayElement23]
		const renderReturnValue1 = await view3.render(defaultEngine4, engines4)
		
	})
})
