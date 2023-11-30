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
		const localName = 106.95005271030368;
		const options = false;
		const anon = undefined;
		const view = new View(localName, options, anon)
		const localDir = () => {};
		const file = "wCaV*tN*3B+`/";
		const anon1 = "DZfS'<\\['#8`+_#pOvn[@'g3.8Cd\nF2CG(l6ME~R9[czeGR}/N";
		const resolveReturnValue = await view.resolve(localDir, file, anon1)
		const localName1 = 106.95005271030368;
		const options1 = false;
		const anon2 = undefined;
		const view1 = new View(localName1, options1, anon2)
		const options2 = 470;
		const arrayElement = null;
		const arrayElement1 = false;
		const arrayElement2 = 304.3344946350544;
		const anon3 = undefined;
		const callback = [arrayElement, arrayElement1, arrayElement2, anon3]
		const anon4 = {}
		const anon5 = {}
		const renderReturnValue = await view1.render(options2, callback, anon4, anon5)
		const localName2 = 106.95005271030368;
		const options3 = false;
		const anon6 = undefined;
		const view2 = new View(localName2, options3, anon6)
		const options4 = "+27iQ^#q%0rQ],[Si9UC§';js_F/<c~e\tp\\`Hk|&HI-EtZ2af`WaW7 Gjc[EF\n`t2?5SL*oH`x9]{9\"6%IMJ0\n:(nk_fYC";
		const callback1 = "IDe3X?&.DrO|fWG\nlf$*(1/=YSLA\\>S+%!6<i<`K(@V\\\"E7b+Z+xK*rdfu8URL?k\"f;cE?s!z:q('a!n\\q6<=P.|L~\n&X#%gJ";
		const anon7 = "0";
		const anon8 = {}
		const renderReturnValue1 = await view2.render(options4, callback1, anon7, anon8)
		const localName3 = 106.95005271030368;
		const options5 = false;
		const anon9 = undefined;
		const view3 = new View(localName3, options5, anon9)
		const anon10 = "DZfS'<\\['#8`+_#pOvn[@'g3.8Cd\nF2CG(l6ME~R9[czeGR}/N";
		const anon11 = null;
		const lookupReturnValue = await view3.lookup(anon10, anon11)
		
	})
})
