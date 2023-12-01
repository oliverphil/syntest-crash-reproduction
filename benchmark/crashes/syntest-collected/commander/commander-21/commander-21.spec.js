// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let Help;
	let Argument;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/commanderjs/lib/help.js")];
		delete require.cache[require.resolve("../instrumented/commanderjs/lib/argument.js")];
		({Help} = require("../instrumented/commanderjs/lib/help.js"));
		({Argument} = require("../instrumented/commanderjs/lib/argument.js"));
	});

	it("Test 1", async () => {
		// Test
		const localHelp = new Help()
		const localName = "sBrnkIBhp;]N\n#zV'H3ZQ3?R';&TL?zY&Bm,xw.SZa!egg]=j`m8§\"5,§7%^b&BnV^/[zL\ncr>r*9NpdTdJjl!7Ccp";
		const description = true;
		const anon = "\"Zmxt";
		const argument = new Argument(localName, description, anon)
		const anon1 = "EdX1B7Late§v!.l3$a53>Xc`_YNzTrLG+§Kza0x6EgnHLk$^Vn%T@J-qK{]Y3;U*\\:§n[Qv%RI3O%g PPv-C\t*cu-KtXSuiaL*";
		const argumentDescriptionReturnValue = await localHelp.argumentDescription(argument, anon1)
		const localHelp1 = new Help()
		const cmd = "Sm,e9 ZmVL$|}:fH;v]2&4]I'R2q[s/cYkl;LX[±kHN2hCu}nsqED&3F7%)4";
		const localHelp2 = new Help()
		const padWidthReturnValue = await localHelp1.padWidth(cmd, localHelp2)
		
	})
})
