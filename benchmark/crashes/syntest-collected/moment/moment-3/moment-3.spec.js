// Imports
require = require('esm')(module)
import {Moment} from "../instrumented/moment/src/lib/moment/constructor.js";
import {isMoment} from "../instrumented/moment/src/lib/moment/constructor.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const isAMomentObject = null;
		const obj = {
			"_isAMomentObject": isAMomentObject
		}
		const isMomentReturnValue = await isMoment(obj)
		const localConfig = null;
		const momentReturnValue = await Moment(localConfig)
		const isAMomentObject1 = []
		const i = false;
		const arrayElement = "JEMorl+@?.a:-f+qX";
		const isAMomentObject2 = null;
		const obj1 = {
			"_isAMomentObject": isAMomentObject2
		}
		const f = [arrayElement, obj1]
		const l = undefined;
		const strict = "h`4Cn@m#GamSEhT8[F±xD4Kq6B8)hj>l ?8xNFL+$o'~3y:6K1Oa5sZT\"OT2\"b=-MZK/";
		const tzm = true;
		const arrayElement1 = "r>yh\tb_3OV§$}'BkN_6{D'%U9K\"7YR,vbfQla±F\"Y2&#.=a_T6#HzwT_\\In%HXh";
		const isAMomentObject3 = null;
		const obj2 = {
			"_isAMomentObject": isAMomentObject3
		}
		const arrayElement2 = 7;
		const isUTC = [arrayElement1, obj2, arrayElement2]
		const offset = false;
		const pf = {}
		const locale = "../parse/token";
		const localConfig1 = {
			"_isAMomentObject": isAMomentObject1,
			"_i": i,
			"_f": f,
			"_l": l,
			"_strict": strict,
			"_tzm": tzm,
			"_isUTC": isUTC,
			"_offset": offset,
			"_pf": pf,
			"_locale": locale
		}
		const anon = null;
		const momentReturnValue1 = await Moment(localConfig1, anon)
		const isAMomentObject4 = () => {};
		const i1 = "GGGG[W]WW";
		const isAMomentObject5 = null;
		const obj3 = {
			"_isAMomentObject": isAMomentObject5
		}
		const tzm1 = true;
		const strict1 = true;
		const tzm2 = "\t+n@vq$WQp\nur{;{*6r)RQ (0hEMz1[MZ;g3Fwj5v\"f+9%z'pxBE#/>$O§\\\"-Z}nH[V776G5h@SW";
		const offset1 = false;
		const isAMomentObject6 = []
		const pf1 = 577;
		const arrayElement3 = 7;
		const localConfig2 = {
			"_isAMomentObject": isAMomentObject4,
			"_i": i1,
			"_f": obj3,
			"_l": tzm1,
			"_strict": strict1,
			"_tzm": tzm2,
			"_isUTC": offset1,
			"_offset": isAMomentObject6,
			"_pf": pf1,
			"_locale": arrayElement3
		}
		const l1 = undefined;
		const momentReturnValue2 = await Moment(localConfig2, l1)
		
	})
})
