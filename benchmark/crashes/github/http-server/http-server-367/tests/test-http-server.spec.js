const {HttpServer} = require("../../benchmark/crashes/http-server/http-server-367/node_modules/http-server/lib/http-server.js");
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('http-server', () => {
	it('test for http-server', async () => {
		const _options_boolean_zeec = false;
		const _HttpServer_object_eLWO = new HttpServer(_options_boolean_zeec)
		const _listen_function_yHKi = await _HttpServer_object_eLWO.listen()

		expect(JSON.parse(JSON.stringify(_HttpServer_object_eLWO))).to.deep.equal({"root":"./","headers":{},"cache":3600,"showDir":true,"autoIndex":true,"contentType":"application/octet-stream","server":{"requestTimeout":300000,"headersTimeout":60000,"keepAliveTimeout":5000,"connectionsCheckingInterval":30000,"_events":{},"_eventsCount":2,"_connections":0,"_handle":null,"_usingWorkers":false,"_workers":[],"_unref":false,"allowHalfOpen":true,"pauseOnConnect":false,"noDelay":true,"keepAlive":false,"keepAliveInitialDelay":0,"httpAllowHalfOpen":false,"timeout":0,"maxHeadersCount":null,"maxRequestsPerSocket":0}})
		expect(_listen_function_yHKi).to.equal(undefined)

		try {
			const _listen_function_pPKu = await _HttpServer_object_eLWO.listen()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);
})