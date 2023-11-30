// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let normalizeType;
	let compileETag;
	let compileTrust;
	let setCharset;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		({normalizeType} = require("../instrumented/express/lib/utils.js"));
		({compileETag} = require("../instrumented/express/lib/utils.js"));
		({compileTrust} = require("../instrumented/express/lib/utils.js"));
		({setCharset} = require("../instrumented/express/lib/utils.js"));
	});

	it("Test 1", async () => {
		// Test
		const indexOf = () => {};
		const type = {
			"indexOf": indexOf
		}
		const anon = "Qx22'`)jJy2jR(1`.|p`98OkB( k&k,g'eS]xD±-edj±]x>QHA{$*qnc5NoQN}S`'Nj-@tnM-B{J;+Br3*{hYA\\|`$+Q";
		const anon1 = 200;
		const normalizeTypeReturnValue = await normalizeType(type, anon, anon1)
		const type1 = "'\n$\"+$R`$f_+~!4h|SdFdO";
		const indexOf1 = () => {};
		const type2 = {
			"indexOf": indexOf1
		}
		const anon2 = "8pA'B/Fd^]IWT2'PP<Y?gi<#Q]KJQ±k.>i;±0Em'7\\l}IRLU";
		const normalizeTypeReturnValue1 = await normalizeType(type1, type2, anon2)
		const val = true;
		const anon3 = -967;
		const compileETagReturnValue = await compileETag(val, anon3)
		const val1 = false;
		const anon4 = {}
		const compileTrustReturnValue = await compileTrust(val1, anon4)
		const type3 = "Rn#D\nMY&";
		const charset = undefined;
		const anon5 = false;
		const indexOf2 = () => {};
		const setCharsetReturnValue = await setCharset(type3, charset, anon5, indexOf2)
		
	})
})
