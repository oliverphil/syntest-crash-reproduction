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
		const url = false;
		const arrayElement = true;
		const anon = [arrayElement]
		const localLocationReturnValue = await res1.location(url, anon)
		const res2 = res
		const arrayElement1 = -245.1043398738691;
		const arrayElement2 = 318.0367540038533;
		const arrayElement3 = "O#+\\6tlh{Ty>l x'9hvN\"g27V_3[_EYIV<6sn,370 %ITQjBnk34JD: \tCiHIedfrP+\tN`'/lD/q+d[9n%Y|B#maxF";
		const field = [arrayElement1, arrayElement2, arrayElement3]
		const arrayElement4 = true;
		const anon1 = [arrayElement4]
		const anon2 = 4;
		const headerReturnValue = await res2.header(field, anon1, anon2)
		
	})
})
