const Layer = require("../../benchmark/crashes/seeded/express/express-4548-1/node_modules/express/lib/router/layer.js");
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('layer', () => {
	it('test for layer', async () => {
		const _Layer_object_WRbY = new Layer()


	}).timeout(3000);

	it('test for layer', async () => {
		const _path_undefined_hSpi = undefined;
		const _options_boolean_AoSl = true;
		const _fn_function_Vbmg = () => { };
		const _Layer_object_eflG = new Layer(_path_undefined_hSpi, _options_boolean_AoSl, _fn_function_Vbmg)


	}).timeout(3000);

	it('test for layer', async () => {
		const _path_string_TtBu = "XUcrmZKFMZJvZzEYl16jHPEgzpSjlIs9yi5Twdml7HmE6Ff";
		const _options_boolean_oZGd = true;
		const _fn_numeric_nOFp = 4.750232316059455;
		const _Layer_object_DOJx = new Layer(_path_string_TtBu, _options_boolean_oZGd, _fn_numeric_nOFp)
		const _match_function_urWb = await _Layer_object_DOJx.match()
		const _req_array_QDOG = []
		const _res_string_ewuK = "UT";
		const _next_array_NcsQ = []

		expect(JSON.parse(JSON.stringify(_Layer_object_DOJx))).to.deep.equal({"handle":4.750232316059455,"name":"<anonymous>","keys":[],"regexp":{"fast_star":false,"fast_slash":false}})
		expect(_match_function_urWb).to.equal(false)
		expect(JSON.parse(JSON.stringify(_next_array_NcsQ))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_req_array_QDOG))).to.deep.equal([])

		try {
			const _handle_request_function_FJaV = await _Layer_object_DOJx.handle_request(_req_array_QDOG, _res_string_ewuK, _next_array_NcsQ)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for layer', async () => {
		const _path_null_sNyJ = null;
		const _options_boolean_kTNG = false;
		const _fn_string_iLdJ = "1bBhuEbqJzguKZz22fbfdlT2ZU2XoZ2LPeCrXJuIoVQ";
		const _Layer_object_USyH = new Layer(_path_null_sNyJ, _options_boolean_kTNG, _fn_string_iLdJ)


	}).timeout(3000);

	it('test for layer', async () => {
		const _path_array_FZXC = []
		const _options_function_wYjC = () => { };
		const _fn_null_pAzs = null;

		expect(JSON.parse(JSON.stringify(_path_array_FZXC))).to.deep.equal([])

		try {
			const _Layer_object_eNfj = new Layer(_path_array_FZXC, _options_function_wYjC, _fn_null_pAzs)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);
})