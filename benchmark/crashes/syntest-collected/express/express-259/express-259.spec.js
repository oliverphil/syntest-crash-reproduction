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
		const localName = -995;
		const options = true;
		const anon = false;
		const anon1 = undefined;
		const view = new View(localName, options, anon, anon1)
		const options1 = -973;
		const callback = "0Q<V s{LQB`d\\:c+'43uIa71F[G}Adq-O?S6&L\nh'rKP[`opmvb-H1v@yC:I{|Ht?jSr)\n,6%).G(NBd=|7N§/w]<|AugA";
		const renderReturnValue = await view.render(options1, callback)
		const localName1 = -995;
		const options2 = true;
		const anon2 = false;
		const anon3 = undefined;
		const view1 = new View(localName1, options2, anon2, anon3)
		const options3 = "\\u003c";
		const callback1 = "a`$_±'?gmi\n:>G+WVx!1)eEy'X\n&i*jt'64.}M#d2x|c}m_Lz1e±4\nYj1\\dl%GF!%DAF~rvj[E>}AZ~u'";
		const renderReturnValue1 = await view1.render(options3, callback1)
		const localName2 = "qV,MzH29Q\nvK(\"\nT>lnRjhm|±uxW2OB'\n,_Lz,M@a__-Z!4`Xh2§BDBRR)Yw|>NG-yBe&g7UpmqzDi!F{I_8@ltP9#a&";
		const defaultEngine = 346.84320992718335;
		const root = null;
		const engines = 304;
		const options4 = {
			"defaultEngine": defaultEngine,
			"root": root,
			"engines": engines
		}
		const view2 = new View(localName2, options4)
		const anon4 = undefined;
		const callback2 = "on-finished";
		const renderReturnValue2 = await view2.render(anon4, callback2)
		
	})
})
