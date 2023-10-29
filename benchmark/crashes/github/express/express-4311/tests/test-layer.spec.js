const Layer = require("../../benchmark/crashes/express/express-4311/node_modules/express/lib/router/layer.js");
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('layer', () => {
	it('test for layer', async () => {
		const _Layer_object_zJNj = new Layer()


	}).timeout(3000);

	it('test for layer', async () => {
		const _path_string_byYr = "TGaqHnYbkr";
		const _options_boolean_DGDD = true;
		const _fn_function_TJCN = () => { };
		const _Layer_object_PDHN = new Layer(_path_string_byYr, _options_boolean_DGDD, _fn_function_TJCN)
		const _error_string_qMwQ = "riwIW6CWJcaNu9cVBIGJjuK2oIJyBx6F4VYrlb2mifcAUuwmlH3DK3nQQcdLoOWTNabNAehLkAlELfTxO34G3q";
		const _req_string_hWUX = "FHlsSHixXA7blDirLVoItQOB46x3Gc5aY3PsCl9IsC2L6np5TSApkDbt6vQ3nCTtYhrP7Xzy6";
		const _res_boolean_Brsx = true;
		const _next_string_Euid = "HG6eRF8W2YJH5khwKqd8Gk8VuG4hGvwJfaTyPkkEHjkvGNH";

		expect(JSON.parse(JSON.stringify(_Layer_object_PDHN))).to.deep.equal({"name":"_fn_function_TJCN","keys":[],"regexp":{"fast_star":false,"fast_slash":false}})

		try {
			const _handle_error_function_ZhEn = await _Layer_object_PDHN.handle_error(_error_string_qMwQ, _req_string_hWUX, _res_boolean_Brsx, _next_string_Euid)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for layer', async () => {
		const _path_undefined_LrUQ = undefined;
		const _options_string_VHDr = "6MK5MyRV12WrUETsnKYRsdlHd57UIe1INe3HYifAyJywNafRKN9i4UllT2ZjqqOkOKprO8ZqdZnFJc61DsUn";
		const _fn_boolean_ODKZ = false;
		const _Layer_object_msGd = new Layer(_path_undefined_LrUQ, _options_string_VHDr, _fn_boolean_ODKZ)


	}).timeout(3000);

	it('test for layer', async () => {
		const _path_string_YsfH = "h3alU2bEm7keh3I873LQnFHwEyr5S4JOq1htxvSYP4pj1D2yIReyoEDoRF6K1OXq9xKC8bpvortmQW";
		const _options_boolean_hKpw = false;
		const _fn_null_gVUw = null;
		const _Layer_object_fFRx = new Layer(_path_string_YsfH, _options_boolean_hKpw, _fn_null_gVUw)


	}).timeout(3000);

	it('test for layer', async () => {
		const _path_null_zKNx = null;
		const _options_string_hLNc = "8aD9QGaP7qnvS5NXpMe7li7A5G";
		const _fn_string_NhRx = "I2QzqkzM69Bz4zIUSP7HYmlcdoCIpwCNyj9EMkUDbp4RwVoGoY9AzHp";
		const _Layer_object_TvUm = new Layer(_path_null_zKNx, _options_string_hLNc, _fn_string_NhRx)


	}).timeout(3000);

	it('test for layer', async () => {
		const _path_string_WpKz = "8lCyuy0HnYZO96efZjtBrq89hwYeda2bFCxIMIU78jOBbyOFiGBnKuPSb4ixYZ5plOgfuS";
		const _options_object_uHbF = {
		
	}
		const _fn_function_uYmG = () => { };
		const _Layer_object_iYjP = new Layer(_path_string_WpKz, _options_object_uHbF, _fn_function_uYmG)
		const _req_string_JaTX = "oKBuEOWIR3v6SSXQ33xXhAN";
		const _res_boolean_AalU = false;
		const _next_numeric_JyZl = 6.588526149775074;
		const _handle_request_function_LUbP = await _Layer_object_iYjP.handle_request(_req_string_JaTX, _res_boolean_AalU, _next_numeric_JyZl)

		expect(JSON.parse(JSON.stringify(_Layer_object_iYjP))).to.deep.equal({"name":"_fn_function_uYmG","keys":[],"regexp":{"fast_star":false,"fast_slash":false}})
		expect(_handle_request_function_LUbP).to.equal(undefined)
		expect(JSON.parse(JSON.stringify(_options_object_uHbF))).to.deep.equal({})
	}).timeout(3000);
})