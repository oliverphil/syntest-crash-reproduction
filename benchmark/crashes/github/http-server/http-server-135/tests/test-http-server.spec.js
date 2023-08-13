const {createServer} = require("../../benchmark/crashes/http-server/http-server-135/node_modules/http-server/lib/http-server.js");
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('http-server', () => {
	it('test for http-server', async () => {
		const _options_boolean_xZEl = false;
		const _createServer_function_BPki = await createServer(_options_boolean_xZEl)

		expect(JSON.parse(JSON.stringify(_createServer_function_BPki))).to.deep.equal({"root":"./","cache":3600,"showDir":true,"autoIndex":true,"server":{"requestTimeout":300000,"headersTimeout":60000,"keepAliveTimeout":5000,"connectionsCheckingInterval":30000,"_events":{},"_eventsCount":2,"_connections":0,"_handle":null,"_usingWorkers":false,"_workers":[],"_unref":false,"allowHalfOpen":true,"pauseOnConnect":false,"noDelay":true,"keepAlive":false,"keepAliveInitialDelay":0,"httpAllowHalfOpen":false,"timeout":0,"maxHeadersCount":null,"maxRequestsPerSocket":0}})
	}).timeout(3000);
})