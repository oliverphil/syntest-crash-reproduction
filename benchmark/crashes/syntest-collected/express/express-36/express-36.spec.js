// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let req;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/request.js")];
		(req = require("../instrumented/express/lib/request.js"));
	});

	it("Test 1", async () => {
		// Test
		const req1 = req
		const size = "@u<H-Go%'=EwzJ,$@6tZVOBbP<FyX]?!|UZ_uV8saoml>wNXhA&=%Gp\n0Fo1t^V±Ez'B)C*B~%Y±@";
		const options = 62;
		const anon = "§hc/..7YX7";
		const anon1 = -885;
		const anon2 = "WqI`PB^P)SnpL&*j2lyY:@~`>A'";
		const rangeReturnValue = await req1.range(size, options, anon, anon1, anon2)
		const req2 = req
		const prototype = "E43qEYH<QcP)-5q<N'wSEY*b6e/<j";
		const isArray = () => {};
		const types = {
			"prototype": prototype,
			"isArray": isArray
		}
		const anon3 = undefined;
		const isReturnValue = await req2.is(types, anon3)
		const req3 = req
		const anon4 = true;
		const acceptsCharsetsReturnValue = await req3.acceptsCharsets(anon4)
		const req4 = req
		const anon5 = null;
		const anon6 = true;
		const acceptsReturnValue = await req4.accepts(anon5, anon6)
		
	})
})
