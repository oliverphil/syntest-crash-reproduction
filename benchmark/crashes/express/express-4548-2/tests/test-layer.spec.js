const Layer = require("../../benchmark/crashes/seeded/express/express-4548-2/node_modules/express/lib/router/layer.js");
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('layer', () => {
	it('test for layer', async () => {
		const _Layer_object_nuQM = new Layer()


	}).timeout(3000);

	it('test for layer', async () => {
		const _path_string_spbN = "mi7i43Nhn2t1DvYlKtI4yb0HTdrEYXxVxl1mdyLA";
		const _options_boolean_BnOA = false;
		const _fn_function_jxDn = () => { };
		const _Layer_object_jnXP = new Layer(_path_string_spbN, _options_boolean_BnOA, _fn_function_jxDn)
		const _req_array_YQRX = []
		const _res_string_cEIP = "XSXTYcbOPSG6gDSg3vUevldIad37Ibkoamtyo8gkoyEWp4ySt6lSmnZqCjCi77awtcMLjaCO4wd1ExyAAdmMaL9CnnvX";
		const _next_string_PdbM = "igh1S2OJJE2Sv1HlYlxvlGij6cz0xtRP2QUwfuqqSgBzV6ahVTURMzwiyS1Jx025eA2";
		const _handle_request_function_hMlN = await _Layer_object_jnXP.handle_request(_req_array_YQRX, _res_string_cEIP, _next_string_PdbM)

		expect(JSON.parse(JSON.stringify(_Layer_object_jnXP))).to.deep.equal({"name":"_fn_function_jxDn","keys":[],"regexp":{"fast_star":false,"fast_slash":false}})
		expect(_handle_request_function_hMlN).to.equal(undefined)
		expect(JSON.parse(JSON.stringify(_req_array_YQRX))).to.deep.equal([])

		try {
			const _handle_error_function_EhIQ = await _Layer_object_jnXP.handle_error()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for layer', async () => {
		const _path_null_fqyc = null;
		const _options_string_LXFT = "2PsYDnXUUOz9nlyQ";
		const _fn_null_SjNI = null;
		const _Layer_object_ZEgD = new Layer(_path_null_fqyc, _options_string_LXFT, _fn_null_SjNI)


	}).timeout(3000);

	it('test for layer', async () => {
		const _path_null_jNPf = null;
		const _options_array_hRSr = []
		const _fn_string_wQoS = "wUabHNzqr6n93kFI6xuuSLKBihzl9FIuD8sXQ6ZIcQTMx7Stzsl6g5EWcm72I";

		expect(JSON.parse(JSON.stringify(_options_array_hRSr))).to.deep.equal([])

		try {
			const _Layer_object_qFFB = new Layer(_path_null_jNPf, _options_array_hRSr, _fn_string_wQoS)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for layer', async () => {
		const _path_undefined_faJo = undefined;
		const _options_undefined_hqEd = undefined;
		const _fn_string_tbfG = "IqyovJnBR4fZvNpDKIQaAPKnDjsiK";
		const _Layer_object_tbHN = new Layer(_path_undefined_faJo, _options_undefined_hqEd, _fn_string_tbfG)


	}).timeout(3000);
})