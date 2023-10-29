// Imports
require = require('esm')(module)
import {Moment} from "../instrumented/moment/src/lib/moment/constructor.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const localConfig = null;
		const momentReturnValue = await Moment(localConfig)
		const isAMomentObject = -41.7614234331088;
		const i = true;
		const f = true;
		const l = "(period, number) is deprecated. Please use moment().";
		const strict = "./parsing-flags";
		const tzm = undefined;
		const isUTC = "l0Dag\\FKT;x<,@K+'^W<v!SC[Xy§ER:<|/5d9w7O<q^$is}Ih8`";
		const offset = undefined;
		const pf = {}
		const locale = () => {};
		const localConfig1 = {
			"_isAMomentObject": isAMomentObject,
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
		const anon = "Z|k(f?d#±;M_*%it9\"oTzy±Tl3f8iFGp%CsL<`G(c2eT!&Ad24v[y6V6t'>^D>T2obZI~YeI/}ILa}rIB/O;E|'±Lh7$";
		const arrayElement = 1000;
		const arrayElement1 = "../utils/is-date";
		const anon1 = [arrayElement, arrayElement1]
		const momentReturnValue1 = await Moment(localConfig1, anon, anon1)
		
	})
})
