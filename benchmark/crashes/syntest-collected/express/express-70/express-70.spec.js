// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let normalizeType;
	let compileTrust;
	let normalizeTypes;
	let compileETag;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		({normalizeType} = require("../instrumented/express/lib/utils.js"));
		({compileTrust} = require("../instrumented/express/lib/utils.js"));
		({normalizeTypes} = require("../instrumented/express/lib/utils.js"));
		({compileETag} = require("../instrumented/express/lib/utils.js"));
	});

	it("Test 1", async () => {
		// Test
		const type = ">Fz!\n\"i±Cn+LERZBzRS:R?Ji;XRP'vhq}*%| B:NRkI#<u~Urhz:";
		const anon = () => {};
		const anon1 = "q',VM,h§065o+P+CknUc{lXi2dRk Q]MeTx-yb%fmEkR>GV?2Zs4Zn9NgsXx:$uAyG4v'm'\\vG_&";
		const anon2 = false;
		const normalizeTypeReturnValue = await normalizeType(type, anon, anon1, anon2)
		const arrayElement = null;
		const arrayElement1 = 190;
		const val = [arrayElement, arrayElement1]
		const anon3 = {}
		const compileTrustReturnValue = await compileTrust(val, anon3)
		const types = "Range";
		const anon4 = undefined;
		const anon5 = false;
		const normalizeTypesReturnValue = await normalizeTypes(types, anon4, anon5)
		const val1 = false;
		const compileETagReturnValue = await compileETag(val1)
		
	})
})
