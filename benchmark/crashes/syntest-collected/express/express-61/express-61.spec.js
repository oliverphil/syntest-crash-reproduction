// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let normalizeTypes;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		({normalizeTypes} = require("../instrumented/express/lib/utils.js"));
	});

	it("Test 1", async () => {
		// Test
		const arrayElement = "-\t,c~q[#Rp!*A@P4%)y,";
		const arrayElement1 = true;
		const arrayElement2 = null;
		const arrayElement3 = ".f*\"pXTY#1R^{OpE_O{W~Eu?%}{}^#%N:g3U'O~a;w&e'y1NJ\tSF@";
		const types = [arrayElement, arrayElement1, arrayElement2, arrayElement3]
		const anon = "Request aborted";
		const normalizeTypesReturnValue = await normalizeTypes(types, anon)
		
	})
})
