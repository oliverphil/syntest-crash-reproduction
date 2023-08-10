const Layer = require("../../benchmark/crashes/express/express-4228/node_modules/express/lib/router/layer.js");
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('layer', () => {
	it('test for layer', async () => {
		const _Layer_object_mquM = new Layer()


	}).timeout(3000);

	it('test for layer', async () => {
		const _path_object_WagU = {
		
	}
		const _options_null_iYHb = null;
		const _fn_object_UiaT = {
		
	}
		const _Layer_object_nKgx = new Layer(_path_object_WagU, _options_null_iYHb, _fn_object_UiaT)
		const _req_numeric_tlyi = 9.59596548618088;
		const _res_undefined_XoyL = undefined;
		const _next_boolean_ZTaA = true;

		expect(JSON.parse(JSON.stringify(_Layer_object_nKgx))).to.deep.equal({"handle":{},"name":"<anonymous>","keys":[],"regexp":{"fast_star":false,"fast_slash":false}})
		expect(JSON.parse(JSON.stringify(_fn_object_UiaT))).to.deep.equal({})
		expect(JSON.parse(JSON.stringify(_path_object_WagU))).to.deep.equal({})

		try {
			const _handle_request_function_qnog = await _Layer_object_nKgx.handle_request(_req_numeric_tlyi, _res_undefined_XoyL, _next_boolean_ZTaA)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for layer', async () => {
		const _path_undefined_wzVY = undefined;
		const _options_numeric_KZWQ = 5.344107812785353;
		const _fn_object_KBnl = {
		
	}

		expect(JSON.parse(JSON.stringify(_fn_object_KBnl))).to.deep.equal({})

		try {
			const _Layer_object_FSFv = new Layer(_path_undefined_wzVY, _options_numeric_KZWQ, _fn_object_KBnl)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for layer', async () => {
		const _path_numeric_aGVX = 5.2739985171566985;
		const _options_boolean_mMiQ = false;
		const _fn_null_xMrk = null;
		const _Layer_object_GtwS = new Layer(_path_numeric_aGVX, _options_boolean_mMiQ, _fn_null_xMrk)


	}).timeout(3000);

	it('test for layer', async () => {
		const _path_null_dRfE = null;
		const _options_boolean_HMGP = true;
		const _fn_string_oxwr = "hzuePs1U50TJicLyRxKBQ1gSOp5al6bm4e468U6sNEUTpgXcnVVyaOwb32b59mHdkRYk8RQ2r";
		const _Layer_object_CQxC = new Layer(_path_null_dRfE, _options_boolean_HMGP, _fn_string_oxwr)


	}).timeout(3000);
})