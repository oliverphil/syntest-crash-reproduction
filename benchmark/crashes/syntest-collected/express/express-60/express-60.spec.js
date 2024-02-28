// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let res;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/response.js")];
		(res = require("../instrumented/express/lib/response.js"));
	});

	it("Test 1", async () => {
		// Test
		const res1 = res
		const field = -275;
		const val = undefined;
		const appendReturnValue = await res1.append(field, val)
		const res2 = res
		const localLength = "}?o\\,T1#>_\\E\"['+1#9F;j@jM5O^13V<MyLh*9}IF\\DV(\" EH=sF&;o.OG\"Gu4snx[";
		const field1 = {
			"length": localLength
		}
		const varyReturnValue = await res2.vary(field1)
		const res3 = res
		const arrayElement = 60;
		const arrayElement1 = "d87|~Y8=qxY~|C$ ";
		const links = [arrayElement, arrayElement1]
		const linksReturnValue = await res3.links(links)
		
	})
})
