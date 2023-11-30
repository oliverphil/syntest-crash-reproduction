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
		const arrayElement = -245.1043398738691;
		const arrayElement1 = 318.0367540038533;
		const arrayElement2 = "O#+\\6tlh{Ty>l x'9hvN\"g27V_3[_EYIV<6sn,370 %ITQjBnk34JD: \tCiHIedfrP+\tN`'/lD/q+d[9n%Y|B#maxF";
		const field = [arrayElement, arrayElement1, arrayElement2]
		const arrayElement3 = true;
		const anon = [arrayElement3]
		const anon1 = 4;
		const headerReturnValue = await res1.header(field, anon, anon1)
		
	})
})
