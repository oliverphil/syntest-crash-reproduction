// Imports
require = require('esm')(module)
import {createLocalOrUTC} from "../instrumented/moment/src/lib/create/from-anything.js";
import {prepareConfig} from "../instrumented/moment/src/lib/create/from-anything.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const input = () => {};
		const format = "../moment/constructor";
		const locale = "../utils/is-date";
		const strict = "+6±Tt5Se0HOk|J\\PJZs;_~{}PA!>!!=loD3\nF+5(nc)2'NOIX@So`4,:h&iZ===OQ(T[h82.0`/]VvU>9pQx";
		const arrayElement = 999;
		const isUTC = [arrayElement]
		const arrayElement1 = "<y}Jg'\\r9WA!GNXL`V~gbm`>dR.oUbmw uH$:+Pga`! Fk";
		const anon = [arrayElement1]
		const createLocalOrUTCReturnValue = await createLocalOrUTC(input, format, locale, strict, isUTC, anon)
		const isAMomentObject = true;
		const useUTC = undefined;
		const isUTC1 = true;
		const l = false;
		const arrayElement2 = "../utils/deprecate";
		const i = [arrayElement2]
		const arrayElement3 = undefined;
		const f = [arrayElement3]
		const strict1 = false;
		const localConfig = {
			"_isAMomentObject": isAMomentObject,
			"_useUTC": useUTC,
			"_isUTC": isUTC1,
			"_l": l,
			"_i": i,
			"_f": f,
			"_strict": strict1
		}
		const prepareConfigReturnValue = await prepareConfig(localConfig)
		const arrayElement4 = null;
		const arrayElement5 = undefined;
		const f1 = [arrayElement5]
		const arrayElement6 = "r]\"'!CEs~FE'4xS2gG±6WD;<|7g4'lwzk§b&;=Qwf72§yACp_>9JCF%'ut\"&§{9|q!6XG ?sF*USPEi9tF}U3K";
		const arrayElement7 = 999;
		const isUTC2 = [arrayElement7]
		const nextDay = [arrayElement4, f1, arrayElement6, isUTC2]
		const add = () => {};
		const localConfig1 = {
			"_nextDay": nextDay,
			"add": add
		}
		const prepareConfigReturnValue1 = await prepareConfig(localConfig1)
		
	})
})
