const Layer = require("../../benchmark/crashes/express/express-4548/node_modules/express/lib/router/layer.js");
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('layer', () => {
	it('test for layer', async () => {
		const _Layer_object_kxjN = new Layer()


	}).timeout(3000);

	it('test for layer', async () => {
		const _path_function_eieT = () => { };
		const _options_boolean_iwGO = false;
		const _fn_object_rqlW = {
		
	}
		const _Layer_object_omVN = new Layer(_path_function_eieT, _options_boolean_iwGO, _fn_object_rqlW)

		expect(JSON.parse(JSON.stringify(_Layer_object_omVN))).to.deep.equal({"handle":{},"name":"<anonymous>","keys":[{"name":0,"optional":false,"offset":29}],"regexp":{"fast_star":false,"fast_slash":false}})
		expect(JSON.parse(JSON.stringify(_fn_object_rqlW))).to.deep.equal({})

		try {
			const _handle_request_function_TNDT = await _Layer_object_omVN.handle_request()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for layer', async () => {
		const _path_numeric_DSSa = 6.137457120999308;
		const _options_boolean_OrQi = false;
		const _fn_null_xyxo = null;
		const _Layer_object_SKFi = new Layer(_path_numeric_DSSa, _options_boolean_OrQi, _fn_null_xyxo)


	}).timeout(3000);

	it('test for layer', async () => {
		const _path_string_awCQ = "Kdg6xkI89lTEvXClNSzOwK9kiursIN4DlHWrT";
		const _options_boolean_bquS = true;
		const _fn_boolean_OQcc = true;
		const _Layer_object_AySz = new Layer(_path_string_awCQ, _options_boolean_bquS, _fn_boolean_OQcc)
		const _req_object_erTm = {
		
	}
		const _res_string_nTvi = "N6xym25IURjJvFKr0uSwR7dn8xlJuXeA7muJ7zLQrJIdIKC9Tl7CDigH1yA4";
		const _next_function_MZAa = () => { };
		const _handle_request_function_cYZn = await _Layer_object_AySz.handle_request(_req_object_erTm, _res_string_nTvi, _next_function_MZAa)

		expect(JSON.parse(JSON.stringify(_Layer_object_AySz))).to.deep.equal({"handle":true,"name":"<anonymous>","keys":[],"regexp":{"fast_star":false,"fast_slash":false}})
		expect(_handle_request_function_cYZn).to.equal(undefined)
		expect(JSON.parse(JSON.stringify(_req_object_erTm))).to.deep.equal({})
	}).timeout(3000);

	it('test for layer', async () => {
		const _path_null_gbGq = null;
		const _options_boolean_lxUA = true;
		const _fn_array_NVBe = []

		expect(JSON.parse(JSON.stringify(_fn_array_NVBe))).to.deep.equal([])

		try {
			const _Layer_object_Jrru = new Layer(_path_null_gbGq, _options_boolean_lxUA, _fn_array_NVBe)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for layer', async () => {
		const _path_undefined_umEd = undefined;
		const _options_null_IQUy = null;
		const _fn_boolean_Yoji = true;
		const _Layer_object_fUqZ = new Layer(_path_undefined_umEd, _options_null_IQUy, _fn_boolean_Yoji)


	}).timeout(3000);
})