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
		const localName = 892.6005789871742;
		const options = false;
		const view = new View(localName, options)
		const localName1 = "y§`%)V2s-HLDc5NhQ<}6^6h ,'LS}NMN+\t#!:txB~}l%hQJzqrse/9kv}§\\6R*eZ>Q-)NEki";
		const lookupReturnValue = await view.lookup(localName1)
		const localName2 = 892.6005789871742;
		const options1 = false;
		const view1 = new View(localName2, options1)
		const localName3 = "y§`%)V2s-HLDc5NhQ<}6^6h ,'LS}NMN+\t#!:txB~}l%hQJzqrse/9kv}§\\6R*eZ>Q-)NEki";
		const localName4 = "y§`%)V2s-HLDc5NhQ<}6^6h ,'LS}NMN+\t#!:txB~}l%hQJzqrse/9kv}§\\6R*eZ>Q-)NEki";
		const file = [localName4]
		const anon = "k :3qc4|X'~:-{g9MubZ\"k7om/?KxiVlc`6xH6qqF>UR\\§[RyxU";
		const resolveReturnValue = await view1.resolve(localName3, file, anon)
		const localName5 = 892.6005789871742;
		const options2 = false;
		const view2 = new View(localName5, options2)
		const options3 = false;
		const callback = 3;
		const anon1 = {}
		const renderReturnValue = await view2.render(options3, callback, anon1)
		const localName6 = 614.5853981935679;
		const options4 = false;
		const view3 = new View(localName6, options4)
		const options5 = () => {};
		const localName7 = "y§`%)V2s-HLDc5NhQ<}6^6h ,'LS}NMN+\t#!:txB~}l%hQJzqrse/9kv}§\\6R*eZ>Q-)NEki";
		const file1 = [localName7]
		const renderReturnValue1 = await view3.render(options5, file1)
		const localName8 = 892.6005789871742;
		const options6 = false;
		const view4 = new View(localName8, options6)
		const localName9 = {}
		const lookupReturnValue1 = await view4.lookup(localName9)
		
	})
})
