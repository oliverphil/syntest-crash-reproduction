// Imports
require = require('esm')(module)
import {Moment} from "../instrumented/moment/src/lib/moment/constructor.js";
import {isMoment} from "../instrumented/moment/src/lib/moment/constructor.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const obj = null;
		const anon = null;
		const anon1 = "moment";
		const isMomentReturnValue = await isMoment(obj, anon, anon1)
		const isAMomentObject = null;
		const obj1 = {
			"_isAMomentObject": isAMomentObject
		}
		const anon2 = 822.0614504141993;
		const isMomentReturnValue1 = await isMoment(obj1, anon2)
		const anon3 = "moment";
		const i = undefined;
		const f = false;
		const isAMomentObject1 = null;
		const obj2 = {
			"_isAMomentObject": isAMomentObject1
		}
		const obj3 = null;
		const arrayElement = true;
		const arrayElement1 = 365;
		const strict = [obj3, arrayElement, arrayElement1]
		const tzm = []
		const isUTC = 787;
		const anon4 = "moment";
		const pf = false;
		const locale = undefined;
		const localConfig = {
			"_isAMomentObject": anon3,
			"_i": i,
			"_f": f,
			"_l": obj2,
			"_strict": strict,
			"_tzm": tzm,
			"_isUTC": isUTC,
			"_offset": anon4,
			"_pf": pf,
			"_locale": locale
		}
		const momentReturnValue = await Moment(localConfig)
		const anon5 = "moment";
		const i1 = undefined;
		const f1 = false;
		const isAMomentObject2 = null;
		const obj4 = {
			"_isAMomentObject": isAMomentObject2
		}
		const obj5 = null;
		const arrayElement2 = true;
		const arrayElement3 = 365;
		const strict1 = [obj5, arrayElement2, arrayElement3]
		const tzm1 = []
		const isUTC1 = 787;
		const anon6 = "moment";
		const pf1 = false;
		const locale1 = undefined;
		const localConfig1 = {
			"_isAMomentObject": anon5,
			"_i": i1,
			"_f": f1,
			"_l": obj4,
			"_strict": strict1,
			"_tzm": tzm1,
			"_isUTC": isUTC1,
			"_offset": anon6,
			"_pf": pf1,
			"_locale": locale1
		}
		const anon7 = "Z>azy+Z$_y\tYz";
		const isMomentReturnValue2 = await isMoment(localConfig1, anon7)
		
	})
})
