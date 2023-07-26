const {HttpServer} = require("../../benchmark/crashes/http-server/http-server-451/node_modules/http-server/lib/http-server.js");
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('http-server', () => {
	it('test for http-server', async () => {
		const _options_object_ELVu = {
		
	}
		const _HttpServer_object_JFbK = new HttpServer(_options_object_ELVu)
		const _listen_function_IgCW = await _HttpServer_object_JFbK.listen()

		expect(JSON.parse(JSON.stringify(_HttpServer_object_JFbK))).to.deep.equal({"root":"./","headers":{},"cache":3600,"showDir":true,"autoIndex":true,"gzip":false,"contentType":"application/octet-stream","server":{"requestTimeout":300000,"headersTimeout":60000,"keepAliveTimeout":5000,"connectionsCheckingInterval":30000,"_events":{},"_eventsCount":2,"_connections":0,"_handle":null,"_usingWorkers":false,"_workers":[],"_unref":false,"allowHalfOpen":true,"pauseOnConnect":false,"noDelay":true,"keepAlive":false,"keepAliveInitialDelay":0,"httpAllowHalfOpen":false,"timeout":0,"maxHeadersCount":null,"maxRequestsPerSocket":0}})
		expect(_listen_function_IgCW).to.equal(undefined)
		expect(JSON.parse(JSON.stringify(_options_object_ELVu))).to.deep.equal({})

		try {
			const _listen_function_XgPe = await _HttpServer_object_JFbK.listen()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);
})