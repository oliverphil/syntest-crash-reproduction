// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let Help;
	let Command;
	let CommanderError;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/commanderjs/lib/help.js")];
		delete require.cache[require.resolve("../instrumented/commanderjs/lib/command.js")];
		delete require.cache[require.resolve("../instrumented/commanderjs/lib/error.js")];
		({Help} = require("../instrumented/commanderjs/lib/help.js"));
		({Command} = require("../instrumented/commanderjs/lib/command.js"));
		({CommanderError} = require("../instrumented/commanderjs/lib/error.js"));
	});

	it("Test 1", async () => {
		// Test
		const anon = undefined;
		const anon1 = 1000;
		const localHelp = new Help(anon, anon1)
		const localName = true;
		const cmd = new Command(localName)
		const visibleCommandsReturnValue = await localHelp.visibleCommands(cmd)
		const anon2 = undefined;
		const anon3 = 1000;
		const localHelp1 = new Help(anon2, anon3)
		const anon4 = null;
		const arrayElement = "';!vn^n[g{DStdhuwOo*DmP%'pUQ'bNK T .cHirko^Wj=rr\"KHE>aU3%J6oQ7§5YTQ4T^f5t,`\\bY\n|";
		const arrayElement1 = {}
		const anon5 = 1000;
		const localName1 = true;
		const code = () => {};
		const message = null;
		const anon6 = {}
		const arrayElement2 = new CommanderError(localName1, code, message, anon6)
		const commands = [anon4, arrayElement, arrayElement1, anon5, arrayElement2]
		const hasImplicitHelpCommand = () => {};
		const helpCommandnameAndArgs = "5}ko0^>Ek}m/O:Wb\nYt|ulYeVCN|pY{1R/&Ldf)7\t)TgF!AU5w}=p\\L,u";
		const createCommand = () => {};
		const helpCommandDescription = true;
		const cmd1 = {
			"commands": commands,
			"_hasImplicitHelpCommand": hasImplicitHelpCommand,
			"_helpCommandnameAndArgs": helpCommandnameAndArgs,
			"createCommand": createCommand,
			"_helpCommandDescription": helpCommandDescription
		}
		const visibleCommandsReturnValue1 = await localHelp1.visibleCommands(cmd1)
		const localName2 = true;
		const cmd2 = new Command(localName2)
		const str = "\n§F)>§!x-O]_Cfa-L4|%ouD9CiBva@?*\\r#F,>m.hc5fX!I\\\"c\nlN}#KB'f±=+L?44>%q:5TXLfJ9;i#o3VE%B!fQ^y";
		const argsDescription = undefined;
		const anon7 = "mhSg.1[&s9\"QV9yP-z.B,o|P!:(q)6]/wkAYGv'G\"]'/RRo_a-sB>0§7sKkw(D,fQ2+E6UjlSFNcw:xlFq(mfK";
		const anon8 = {}
		const descriptionReturnValue = await cmd2.description(str, argsDescription, anon7, anon8)
		
	})
})
