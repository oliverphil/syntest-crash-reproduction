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
		const localName = 63;
		const defaultEngine = () => {};
		const root = "stream";
		const engines = "boolean";
		const options = {
			"defaultEngine": defaultEngine,
			"root": root,
			"engines": engines
		}
		const anon = -407;
		const view = new View(localName, options, anon)
		const localDir = "Route.all() requires a callback function but got a ";
		const file = "Dr\")83`\n>GT>7d3tB-#>Vt4\\okQIY±gwQ_J~|#r7vaz[T,LW t)]f+sO\nPbd`Q&vT65?>SnsM\"EN§X!z'@2:[mQ@";
		const anon1 = "fEdlHb!\ty@'?n8\t)8lf\\";
		const resolveReturnValue = await view.resolve(localDir, file, anon1)
		const localName1 = 62;
		const defaultEngine1 = () => {};
		const root1 = "stream";
		const engines1 = "boolean";
		const options1 = {
			"defaultEngine": defaultEngine1,
			"root": root1,
			"engines": engines1
		}
		const anon2 = -407;
		const view1 = new View(localName1, options1, anon2)
		const localName2 = 62;
		const arrayElement = "*aO~`HI-;StHApF'<na'qySr[S'±+§9x~I;/,Rqy>TB8}ddel^]H]B§v!^KC/7E:7,q\t";
		const defaultEngine2 = () => {};
		const root2 = "stream";
		const engines2 = "boolean";
		const options2 = {
			"defaultEngine": defaultEngine2,
			"root": root2,
			"engines": engines2
		}
		const anon3 = [arrayElement, options2]
		const lookupReturnValue = await view1.lookup(localName2, anon3)
		
	})
})
