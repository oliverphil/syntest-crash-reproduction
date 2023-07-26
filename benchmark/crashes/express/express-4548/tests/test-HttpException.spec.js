const {HttpException} = require("../../benchmark/crashes/express/express-4548/node_modules/http-exception-transformer/exceptions/HttpException.js");
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('HttpException', () => {
	it('test for HttpException', async () => {
		const _code_object_brQA = {
		
	}
		const _message_function_Tbdt = () => { };
		const _payload_numeric_KaQl = -3.3574327693228323;
		const _HttpException_object_kBzk = new HttpException(_code_object_brQA, _message_function_Tbdt, _payload_numeric_KaQl)
		const _transformResponse_function_xkyl = await _HttpException_object_kBzk.transformResponse()
		const _transformResponse_function_QRzn = await _HttpException_object_kBzk.transformResponse()
		const _transformResponse_function_tKNl = await _HttpException_object_kBzk.transformResponse()
		const _transformResponse_function_Uplj = await _HttpException_object_kBzk.transformResponse()
		const _transformResponse_function_oxAl = await _HttpException_object_kBzk.transformResponse()

		expect(JSON.parse(JSON.stringify(_HttpException_object_kBzk))).to.deep.equal({"name":"GenericHttpException","code":{},"payload":-3.3574327693228323,"reference":"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"})
		expect(JSON.parse(JSON.stringify(_code_object_brQA))).to.deep.equal({})
		expect(JSON.parse(JSON.stringify(_transformResponse_function_QRzn))).to.deep.equal({"code":{},"error":true,"payload":-3.3574327693228323,"reference":"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"})
		expect(JSON.parse(JSON.stringify(_transformResponse_function_Uplj))).to.deep.equal({"code":{},"error":true,"payload":-3.3574327693228323,"reference":"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"})
		expect(JSON.parse(JSON.stringify(_transformResponse_function_oxAl))).to.deep.equal({"code":{},"error":true,"payload":-3.3574327693228323,"reference":"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"})
		expect(JSON.parse(JSON.stringify(_transformResponse_function_tKNl))).to.deep.equal({"code":{},"error":true,"payload":-3.3574327693228323,"reference":"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"})
		expect(JSON.parse(JSON.stringify(_transformResponse_function_xkyl))).to.deep.equal({"code":{},"error":true,"payload":-3.3574327693228323,"reference":"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"})
	}).timeout(3000);
})