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
		const localName = 2;
		const options = true;
		const view = new View(localName, options)
		const localName1 = "1'm5)u_t±(l'`yo>VIG)\"qo-2Mpo\ty6'g7c:@p7Khs*eb^ZR§=AxTzROj`gc<QG1z]#T";
		const options1 = true;
		const anon = "~>f|";
		const view1 = new View(localName1, options1, anon)
		const localName2 = 2;
		const localName3 = 2;
		const renderReturnValue = await view1.render(localName2, localName3)
		const localName4 = "1'm5)u_t±(l'`yo>VIG)\"qo-2Mpo\ty6'g7c:@p7Khs*eb^ZR§=AxTzROj`gc<QG1z]#T";
		const options2 = true;
		const anon1 = "~>f|";
		const view2 = new View(localName4, options2, anon1)
		const options3 = true;
		const localName5 = "1'm5)u_t±(l'`yo>VIG)\"qo-2Mpo\ty6'g7c:@p7Khs*eb^ZR§=AxTzROj`gc<QG1z]#T";
		const anon2 = false;
		const renderReturnValue1 = await view2.render(options3, localName5, anon2)
		const localName6 = "1'm5)u_t±(l'`yo>VIG)\"qo-2Mpo\ty6'g7c:@p7Khs*eb^ZR§=AxTzROj`gc<QG1z]#T";
		const options4 = true;
		const anon3 = "~>f|";
		const view3 = new View(localName6, options4, anon3)
		const localDir = undefined;
		const file = true;
		const resolveReturnValue = await view3.resolve(localDir, file)
		const localName7 = "1'm5)u_t±(l'`yo>VIG)\"qo-2Mpo\ty6'g7c:@p7Khs*eb^ZR§=AxTzROj`gc<QG1z]#T";
		const options5 = true;
		const anon4 = "~>f|";
		const view4 = new View(localName7, options5, anon4)
		const options6 = () => {};
		const localName8 = 2;
		const renderReturnValue2 = await view4.render(options6, localName8)
		
	})
})
