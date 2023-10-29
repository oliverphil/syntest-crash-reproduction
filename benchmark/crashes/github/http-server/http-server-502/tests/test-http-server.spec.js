const {HttpServer} = require("../../benchmark/crashes/http-server/http-server-502/node_modules/http-server/lib/http-server.js");
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('http-server', () => {
	it('test for http-server', async () => {
		const _HttpServer_object_CNBk = new HttpServer()
		const _listen_function_JRXf = await _HttpServer_object_CNBk.listen()

		expect(JSON.parse(JSON.stringify(_HttpServer_object_CNBk))).to.deep.equal({"root":"./","headers":{},"cache":3600,"showDir":true,"autoIndex":true,"gzip":false,"contentType":"application/octet-stream","server":{"requestTimeout":300000,"headersTimeout":60000,"keepAliveTimeout":5000,"connectionsCheckingInterval":30000,"_events":{},"_eventsCount":2,"_connections":0,"_handle":null,"_usingWorkers":false,"_workers":[],"_unref":false,"allowHalfOpen":true,"pauseOnConnect":false,"noDelay":true,"keepAlive":false,"keepAliveInitialDelay":0,"httpAllowHalfOpen":false,"timeout":0,"maxHeadersCount":null,"maxRequestsPerSocket":0}})
		expect(_listen_function_JRXf).to.equal(undefined)

		try {
			const _listen_function_WoKC = await _HttpServer_object_CNBk.listen()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);
})