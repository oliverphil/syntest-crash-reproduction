const res = require("../../benchmark/crashes/seeded/express/express-4093-1/node_modules/express/lib/response.js");
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('response', () => {
	it('test for response', async () => {
		const _res_object_uuxr = res
		const _code_array_JpZQ = []
		const _status_function_RbYv = await _res_object_uuxr.status(_code_array_JpZQ)

		expect(JSON.parse(JSON.stringify(_code_array_JpZQ))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_res_object_uuxr))).to.deep.equal({})
		expect(JSON.parse(JSON.stringify(_status_function_RbYv))).to.deep.equal({"statusCode":[]})

		try {
			const _json_function_bHer = await _res_object_uuxr.json()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for response', async () => {
		const _res_object_dTJM = res
		const _url_numeric_JDsT = -2.460409990753557;

		expect(JSON.parse(JSON.stringify(_res_object_dTJM))).to.deep.equal({"statusCode":[]})

		try {
			const _redirect_function_UZGr = await _res_object_dTJM.redirect(_url_numeric_JDsT)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for response', async () => {
		const _res_object_sSEz = res
		const _view_null_upca = null;
		const _options_numeric_Utgj = -0.06766055594707687;
		const _callback_boolean_Gtaj = false;

		expect(JSON.parse(JSON.stringify(_res_object_sSEz))).to.deep.equal({"statusCode":[]})

		try {
			const _render_function_FwQq = await _res_object_sSEz.render(_view_null_upca, _options_numeric_Utgj, _callback_boolean_Gtaj)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for response', async () => {
		const _res_object_ASzn = res
		const _status_function_RLbX = await _res_object_ASzn.status()
		const _code_string_EAkN = "FvirQQk8I7kS1ZfdWv6npO8FZHmk5ilrLLzKYvtod6jRp5EcFGyXMj";
		const _status_function_KtgF = await _res_object_ASzn.status(_code_string_EAkN)
		const _statusCode_string_CyQh = "bfzR5EM66RYJxTxQwN8nxmCecPBkYWSr4SZsv36rP9UuvWxkOvcD2oH3qX";

		expect(JSON.parse(JSON.stringify(_res_object_ASzn))).to.deep.equal({"statusCode":[]})
		expect(JSON.parse(JSON.stringify(_status_function_KtgF))).to.deep.equal({"statusCode":"FvirQQk8I7kS1ZfdWv6npO8FZHmk5ilrLLzKYvtod6jRp5EcFGyXMj"})
		expect(JSON.parse(JSON.stringify(_status_function_RLbX))).to.deep.equal({})

		try {
			const _sendStatus_function_VVgp = await _res_object_ASzn.sendStatus(_statusCode_string_CyQh)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for response', async () => {
		const _res_object_YZTN = res
		const _filename_boolean_iSGA = true;

		expect(JSON.parse(JSON.stringify(_res_object_YZTN))).to.deep.equal({"statusCode":"bfzR5EM66RYJxTxQwN8nxmCecPBkYWSr4SZsv36rP9UuvWxkOvcD2oH3qX"})

		try {
			const _attachment_function_movF = await _res_object_YZTN.attachment(_filename_boolean_iSGA)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for response', async () => {
		const _res_object_tOiR = res

		expect(JSON.parse(JSON.stringify(_res_object_tOiR))).to.deep.equal({"statusCode":"bfzR5EM66RYJxTxQwN8nxmCecPBkYWSr4SZsv36rP9UuvWxkOvcD2oH3qX"})

		try {
			const _format_function_IiXV = await _res_object_tOiR.format()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for response', async () => {
		const _res_object_icXv = res
		const _field_boolean_PURZ = true;

		expect(JSON.parse(JSON.stringify(_res_object_icXv))).to.deep.equal({"statusCode":"bfzR5EM66RYJxTxQwN8nxmCecPBkYWSr4SZsv36rP9UuvWxkOvcD2oH3qX"})

		try {
			const _vary_function_myXf = await _res_object_icXv.vary(_field_boolean_PURZ)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for response', async () => {
		const _res_object_WkuT = res

		expect(JSON.parse(JSON.stringify(_res_object_WkuT))).to.deep.equal({"statusCode":"bfzR5EM66RYJxTxQwN8nxmCecPBkYWSr4SZsv36rP9UuvWxkOvcD2oH3qX"})

		try {
			const _get_function_bUiq = await _res_object_WkuT.get()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for response', async () => {
		const _res_object_xTcV = res
		const _filename_object_YxiK = {
		
	}

		expect(JSON.parse(JSON.stringify(_filename_object_YxiK))).to.deep.equal({})
		expect(JSON.parse(JSON.stringify(_res_object_xTcV))).to.deep.equal({"statusCode":"bfzR5EM66RYJxTxQwN8nxmCecPBkYWSr4SZsv36rP9UuvWxkOvcD2oH3qX"})

		try {
			const _attachment_function_gZpO = await _res_object_xTcV.attachment(_filename_object_YxiK)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for response', async () => {
		const _res_object_oKmE = res

		expect(JSON.parse(JSON.stringify(_res_object_oKmE))).to.deep.equal({"statusCode":"bfzR5EM66RYJxTxQwN8nxmCecPBkYWSr4SZsv36rP9UuvWxkOvcD2oH3qX"})

		try {
			const _cookie_function_sYtJ = await _res_object_oKmE.cookie()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for response', async () => {
		const _res_object_OvDv = res
		const _field_function_aUWN = () => { };

		expect(JSON.parse(JSON.stringify(_res_object_OvDv))).to.deep.equal({"statusCode":"bfzR5EM66RYJxTxQwN8nxmCecPBkYWSr4SZsv36rP9UuvWxkOvcD2oH3qX"})

		try {
			const _get_function_OorO = await _res_object_OvDv.get(_field_function_aUWN)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for response', async () => {
		const _res_object_rLMh = res
		const _field_string_Wvmp = "X6XeO5eJUGEtJltFSDo0SFBJOphLX3ZcBrToLo7LhPJrpuwbpkPjTkN33B7UNjTsZkZWhhnr508JZvyghy9JM1J";

		expect(JSON.parse(JSON.stringify(_res_object_rLMh))).to.deep.equal({"statusCode":"bfzR5EM66RYJxTxQwN8nxmCecPBkYWSr4SZsv36rP9UuvWxkOvcD2oH3qX"})

		try {
			const _get_function_MjdF = await _res_object_rLMh.get(_field_string_Wvmp)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for response', async () => {
		const _res_object_kYst = res
		const _path_string_Yagm = "6vHIQGZ1sD2X1UaKCN21arm8vqA5XUqWlLBTDPGtTkFqifmm1zEh7VWsicJWtMQ9ik";
		const _filename_array_pjrD = []
		const _options_boolean_ZDiX = false;
		const _callback_string_pHdH = "FqqdwHz5MaocgBKf3qnvGc8c";

		expect(JSON.parse(JSON.stringify(_filename_array_pjrD))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_res_object_kYst))).to.deep.equal({"statusCode":"bfzR5EM66RYJxTxQwN8nxmCecPBkYWSr4SZsv36rP9UuvWxkOvcD2oH3qX"})

		try {
			const _download_function_VSbP = await _res_object_kYst.download(_path_string_Yagm, _filename_array_pjrD, _options_boolean_ZDiX, _callback_string_pHdH)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for response', async () => {
		const _res_object_qJvl = res
		const _field_object_qtAp = {
		
	}
		const _val_numeric_NVJx = -9.243489016828512;

		expect(JSON.parse(JSON.stringify(_field_object_qtAp))).to.deep.equal({})
		expect(JSON.parse(JSON.stringify(_res_object_qJvl))).to.deep.equal({"statusCode":"bfzR5EM66RYJxTxQwN8nxmCecPBkYWSr4SZsv36rP9UuvWxkOvcD2oH3qX"})

		try {
			const _header_function_CVcA = await _res_object_qJvl.header(_field_object_qtAp, _val_numeric_NVJx)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for response', async () => {
		const _res_object_yRvN = res
		const _field_function_sBDY = () => { };

		expect(JSON.parse(JSON.stringify(_res_object_yRvN))).to.deep.equal({"statusCode":"bfzR5EM66RYJxTxQwN8nxmCecPBkYWSr4SZsv36rP9UuvWxkOvcD2oH3qX"})

		try {
			const _get_function_WGGb = await _res_object_yRvN.get(_field_function_sBDY)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for response', async () => {
		const _res_object_pxAd = res

		expect(JSON.parse(JSON.stringify(_res_object_pxAd))).to.deep.equal({"statusCode":"bfzR5EM66RYJxTxQwN8nxmCecPBkYWSr4SZsv36rP9UuvWxkOvcD2oH3qX"})

		try {
			const _type_function_vtDw = await _res_object_pxAd.type()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for response', async () => {
		const _res_object_FFGK = res
		const _type_object_wBbO = {
		
	}

		expect(JSON.parse(JSON.stringify(_res_object_FFGK))).to.deep.equal({"statusCode":"bfzR5EM66RYJxTxQwN8nxmCecPBkYWSr4SZsv36rP9UuvWxkOvcD2oH3qX"})
		expect(JSON.parse(JSON.stringify(_type_object_wBbO))).to.deep.equal({})

		try {
			const _type_function_jaxa = await _res_object_FFGK.type(_type_object_wBbO)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for response', async () => {
		const _res_object_Xjhv = res
		const _header_function_DopY = await _res_object_Xjhv.header()
		const _filename_undefined_AgHL = undefined;

		expect(JSON.parse(JSON.stringify(_header_function_DopY))).to.deep.equal({"statusCode":"bfzR5EM66RYJxTxQwN8nxmCecPBkYWSr4SZsv36rP9UuvWxkOvcD2oH3qX"})
		expect(JSON.parse(JSON.stringify(_res_object_Xjhv))).to.deep.equal({"statusCode":"bfzR5EM66RYJxTxQwN8nxmCecPBkYWSr4SZsv36rP9UuvWxkOvcD2oH3qX"})

		try {
			const _attachment_function_eWdx = await _res_object_Xjhv.attachment(_filename_undefined_AgHL)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for response', async () => {
		const _res_object_BgKi = res
		const _links_object_KTtn = {
		
	}

		expect(JSON.parse(JSON.stringify(_links_object_KTtn))).to.deep.equal({})
		expect(JSON.parse(JSON.stringify(_res_object_BgKi))).to.deep.equal({"statusCode":"bfzR5EM66RYJxTxQwN8nxmCecPBkYWSr4SZsv36rP9UuvWxkOvcD2oH3qX"})

		try {
			const _links_function_NfOg = await _res_object_BgKi.links(_links_object_KTtn)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for response', async () => {
		const _res_object_ZNid = res
		const _body_string_NWsk = "GrWacctqEui2ha2Kfyo6r9nq8uHC8u2pQl2TmqTn6NwV1";

		expect(JSON.parse(JSON.stringify(_res_object_ZNid))).to.deep.equal({"statusCode":"bfzR5EM66RYJxTxQwN8nxmCecPBkYWSr4SZsv36rP9UuvWxkOvcD2oH3qX"})

		try {
			const _send_function_dvTS = await _res_object_ZNid.send(_body_string_NWsk)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for response', async () => {
		const _res_object_onIQ = res
		const _field_object_yytv = {
		
	}

		expect(JSON.parse(JSON.stringify(_field_object_yytv))).to.deep.equal({})
		expect(JSON.parse(JSON.stringify(_res_object_onIQ))).to.deep.equal({"statusCode":"bfzR5EM66RYJxTxQwN8nxmCecPBkYWSr4SZsv36rP9UuvWxkOvcD2oH3qX"})

		try {
			const _get_function_qWlj = await _res_object_onIQ.get(_field_object_yytv)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for response', async () => {
		const _res_object_fkXB = res
		const _type_array_bOlC = []

		expect(JSON.parse(JSON.stringify(_res_object_fkXB))).to.deep.equal({"statusCode":"bfzR5EM66RYJxTxQwN8nxmCecPBkYWSr4SZsv36rP9UuvWxkOvcD2oH3qX"})
		expect(JSON.parse(JSON.stringify(_type_array_bOlC))).to.deep.equal([])

		try {
			const _type_function_ubEc = await _res_object_fkXB.type(_type_array_bOlC)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for response', async () => {
		const _res_object_LrIY = res
		const _filename_function_fajL = () => { };

		expect(JSON.parse(JSON.stringify(_res_object_LrIY))).to.deep.equal({"statusCode":"bfzR5EM66RYJxTxQwN8nxmCecPBkYWSr4SZsv36rP9UuvWxkOvcD2oH3qX"})

		try {
			const _attachment_function_PeFg = await _res_object_LrIY.attachment(_filename_function_fajL)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for response', async () => {
		const _res_object_ANaf = res
		const _field_array_mXRi = []
		const _val_array_Druz = []

		expect(JSON.parse(JSON.stringify(_field_array_mXRi))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_res_object_ANaf))).to.deep.equal({"statusCode":"bfzR5EM66RYJxTxQwN8nxmCecPBkYWSr4SZsv36rP9UuvWxkOvcD2oH3qX"})
		expect(JSON.parse(JSON.stringify(_val_array_Druz))).to.deep.equal([])

		try {
			const _append_function_hpAc = await _res_object_ANaf.append(_field_array_mXRi, _val_array_Druz)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for response', async () => {
		const _res_object_QeGf = res
		const _field_function_Melz = () => { };

		expect(JSON.parse(JSON.stringify(_res_object_QeGf))).to.deep.equal({"statusCode":"bfzR5EM66RYJxTxQwN8nxmCecPBkYWSr4SZsv36rP9UuvWxkOvcD2oH3qX"})

		try {
			const _get_function_qGVY = await _res_object_QeGf.get(_field_function_Melz)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for response', async () => {
		const _res_object_MxsU = res
		const _field_string_bKVf = "";

		expect(JSON.parse(JSON.stringify(_res_object_MxsU))).to.deep.equal({"statusCode":"bfzR5EM66RYJxTxQwN8nxmCecPBkYWSr4SZsv36rP9UuvWxkOvcD2oH3qX"})

		try {
			const _get_function_nJJi = await _res_object_MxsU.get(_field_string_bKVf)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);
})