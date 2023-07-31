const pathtoRegexp = require("../../benchmark/crashes/seeded/express/express-4548-2/node_modules/path-to-regexp/index.js");
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('index', () => {
	it('test for index', async () => {
		const _path_string_TkOa = "CHmjwXq2qlQmlOitEwOSCcLQCFoAY1s6L";
		const _keys_string_josA = "iTy2MhYN8J5ag6gjoAv1lmTcT9atAFBQQSgE5NXrpPVZPuEdBG5wI402tCEjeWHAdg8r";
		const _options_string_ZRpH = "QBsp";
		const _pathtoRegexp_function_XDXE = await pathtoRegexp(_path_string_TkOa, _keys_string_josA, _options_string_ZRpH)

		expect(JSON.parse(JSON.stringify(_pathtoRegexp_function_XDXE))).to.deep.equal({})
	}).timeout(3000);

	it('test for index', async () => {
		const _path_undefined_hyiL = undefined;
		const _keys_boolean_hPfU = false;
		const _options_boolean_bLKf = false;
		const _pathtoRegexp_function_NOas = await pathtoRegexp(_path_undefined_hyiL, _keys_boolean_hPfU, _options_boolean_bLKf)


	}).timeout(3000);

	it('test for index', async () => {
		const _path_function_oKTF = () => { };
		const _keys_string_Zetu = "OjNEm4ugBS0m4f9rtmx";
		const _options_null_fzUs = null;
		const _pathtoRegexp_function_JVEg = await pathtoRegexp(_path_function_oKTF, _keys_string_Zetu, _options_null_fzUs)


	}).timeout(3000);

	it('test for index', async () => {
		const _path_null_JQWE = null;
		const _keys_null_Ouwn = null;
		const _options_string_KNuX = "AS9";
		const _pathtoRegexp_function_dogM = await pathtoRegexp(_path_null_JQWE, _keys_null_Ouwn, _options_string_KNuX)


	}).timeout(3000);

	it('test for index', async () => {
		const _path_function_hCFg = () => { };
		const _keys_object_BBUM = {
		
	}
		const _options_string_FxFr = "NjVTyMOILTyjSoRPLGo";
		const _pathtoRegexp_function_SXZC = await pathtoRegexp(_path_function_hCFg, _keys_object_BBUM, _options_string_FxFr)

		expect(JSON.parse(JSON.stringify(_keys_object_BBUM))).to.deep.equal({})
		expect(JSON.parse(JSON.stringify(_pathtoRegexp_function_SXZC))).to.deep.equal({})
	}).timeout(3000);
})