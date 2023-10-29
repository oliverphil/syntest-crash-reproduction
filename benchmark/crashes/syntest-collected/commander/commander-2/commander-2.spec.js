// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let Help;
	let Option;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/commanderjs/lib/help.js")];
		delete require.cache[require.resolve("../instrumented/commanderjs/lib/option.js")];
		({Help} = require("../instrumented/commanderjs/lib/help.js"));
		({Option} = require("../instrumented/commanderjs/lib/option.js"));
	});

	it("Test 1", async () => {
		// Test
		const localHelp = new Help()
		const arrayElement = null;
		const arrayElement1 = () => {};
		const arrayElement2 = [arrayElement, arrayElement1]
		const arrayElement3 = "\n";
		const arrayElement4 = "8GL^l1/§UEfa(|GYn})N\tC<N_)wxGbRMUw[W§}yIiT's/G[#SrcV<%G|\n5&T;4%§o~qUt3bc+tu±q&1q";
		const arrayElement5 = false;
		const arrayElement6 = [arrayElement3, arrayElement4, arrayElement5]
		const arrayElement7 = [arrayElement2, arrayElement6]
		const arrayElement8 = () => {};
		const arrayElement9 = [arrayElement7, arrayElement8]
		const arrayElement10 = 80;
		const flags = [arrayElement9, arrayElement10]
		const description = false;
		const anon = true;
		const argument = new Option(flags, description, anon)
		const anon1 = false;
		const argumentTermReturnValue = await localHelp.argumentTerm(argument, anon1)
		const arrayElement11 = null;
		const arrayElement12 = () => {};
		const arrayElement13 = [arrayElement11, arrayElement12]
		const arrayElement14 = "\n";
		const arrayElement15 = "8GL^l1/§UEfa(|GYn})N\tC<N_)wxGbRMUw[W§}yIiT's/G[#SrcV<%G|\n5&T;4%§o~qUt3bc+tu±q&1q";
		const arrayElement16 = false;
		const arrayElement17 = [arrayElement14, arrayElement15, arrayElement16]
		const arrayElement18 = [arrayElement13, arrayElement17]
		const arrayElement19 = () => {};
		const arrayElement20 = [arrayElement18, arrayElement19]
		const arrayElement21 = 80;
		const flags1 = [arrayElement20, arrayElement21]
		const description1 = false;
		const anon2 = true;
		const argument1 = new Option(flags1, description1, anon2)
		const fn = "[";
		const anon3 = ".{1,";
		const anon4 = () => {};
		const arrayElement22 = null;
		const anon5 = {}
		const description2 = false;
		const argParserReturnValue = await argument1.argParser(fn, anon3, anon4, arrayElement22, anon5, description2)
		const localHelp1 = new Help()
		const anon6 = {}
		const visibleCommandsReturnValue = await localHelp1.visibleCommands(anon6)
		const arrayElement23 = null;
		const arrayElement24 = () => {};
		const arrayElement25 = [arrayElement23, arrayElement24]
		const arrayElement26 = "\n";
		const arrayElement27 = "8GL^l1/§UEfa(|GYn})N\tC<N_)wxGbRMUw[W§}yIiT's/G[#SrcV<%G|\n5&T;4%§o~qUt3bc+tu±q&1q";
		const arrayElement28 = false;
		const arrayElement29 = [arrayElement26, arrayElement27, arrayElement28]
		const arrayElement30 = [arrayElement25, arrayElement29]
		const arrayElement31 = () => {};
		const arrayElement32 = [arrayElement30, arrayElement31]
		const arrayElement33 = 80;
		const flags2 = [arrayElement32, arrayElement33]
		const description3 = false;
		const anon7 = true;
		const argument2 = new Option(flags2, description3, anon7)
		const assignment = false;
		const makeOptionMandatoryReturnValue = await argument2.makeOptionMandatory(assignment)
		
	})
})
