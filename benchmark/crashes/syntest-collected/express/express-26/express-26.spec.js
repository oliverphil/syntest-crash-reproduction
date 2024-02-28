// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let normalizeTypes;
	let compileETag;
	let setCharset;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		delete require.cache[require.resolve("../instrumented/express/lib/utils.js")];
		({normalizeTypes} = require("../instrumented/express/lib/utils.js"));
		({compileETag} = require("../instrumented/express/lib/utils.js"));
		({setCharset} = require("../instrumented/express/lib/utils.js"));
	});

	it("Test 1", async () => {
		// Test
		const arrayElement = "I'~U6%>OeFx\nHOp>\tk'{&/]p\n{\\E g0Q*)J<cb>>*'4t";
		const arrayElement1 = "*xU`S65f9Z§ti$5( f\nd?LtANo5KYSA/[jWtuU\nN/c;~6w49h84B8uTKU\"{§§h";
		const arrayElement2 = true;
		const types = [arrayElement, arrayElement1, arrayElement2]
		const normalizeTypesReturnValue = await normalizeTypes(types)
		const arrayElement3 = "*xU`S65f9Z§ti$5( f\nd?LtANo5KYSA/[jWtuU\nN/c;~6w49h84B8uTKU\"{§§h";
		const compileETagReturnValue = await compileETag(arrayElement3)
		const type = () => {};
		const charset = null;
		const setCharsetReturnValue = await setCharset(type, charset)
		
	})
})
