const Route = require("../../benchmark/crashes/express/express-4311/node_modules/express/lib/router/route.js");
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('route', () => {
	it('test for route', async () => {
		const _path_string_LmhT = "3XxhNuHr4cTa9ShKkbXn6B3E3MGSk";
		const _Route_object_FNrA = new Route(_path_string_LmhT)
		const __options_function_yssL = await _Route_object_FNrA._options()
		const _all_function_Pwhj = await _Route_object_FNrA.all()

		expect(JSON.parse(JSON.stringify(_Route_object_FNrA))).to.deep.equal({"path":"3XxhNuHr4cTa9ShKkbXn6B3E3MGSk","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_yssL))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_Pwhj))).to.deep.equal({"path":"3XxhNuHr4cTa9ShKkbXn6B3E3MGSk","stack":[],"methods":{}})

		try {
			const _method_function_elKU = await _Route_object_FNrA.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_TiGJ = "GlULGGOYWbClwmOkzVeCf9iACPo4CIXWsyLFIDeuKL";
		const _Route_object_IQGT = new Route(_path_string_TiGJ)
		const _req_numeric_qqGU = -4.169688697639513;
		const _res_function_trHR = () => { };
		const _done_array_uYUm = []

		expect(JSON.parse(JSON.stringify(_Route_object_IQGT))).to.deep.equal({"path":"GlULGGOYWbClwmOkzVeCf9iACPo4CIXWsyLFIDeuKL","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_done_array_uYUm))).to.deep.equal([])

		try {
			const _dispatch_function_zIzd = await _Route_object_IQGT.dispatch(_req_numeric_qqGU, _res_function_trHR, _done_array_uYUm)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_hFTd = -8.221162669458772;
		const _Route_object_ZkrI = new Route(_path_numeric_hFTd)
		const _all_function_ZrPf = await _Route_object_ZkrI.all()

		expect(JSON.parse(JSON.stringify(_Route_object_ZkrI))).to.deep.equal({"path":-8.221162669458772,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_ZrPf))).to.deep.equal({"path":-8.221162669458772,"stack":[],"methods":{}})

		try {
			const _method_function_YDQM = await _Route_object_ZkrI.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_vYiS = {
		
	}
		const _Route_object_PCRi = new Route(_path_object_vYiS)

		expect(JSON.parse(JSON.stringify(_Route_object_PCRi))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_vYiS))).to.deep.equal({})

		try {
			const __handles_method_function_HjoV = await _Route_object_PCRi._handles_method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_RVkt = () => { };
		const _Route_object_YOlU = new Route(_path_function_RVkt)

		expect(JSON.parse(JSON.stringify(_Route_object_YOlU))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_LlFq = await _Route_object_YOlU.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_msOW = []
		const _Route_object_ZmbX = new Route(_path_array_msOW)
		const __options_function_Mmya = await _Route_object_ZmbX._options()

		expect(JSON.parse(JSON.stringify(_Route_object_ZmbX))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_Mmya))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_path_array_msOW))).to.deep.equal([])

		try {
			const _method_function_vtxA = await _Route_object_ZmbX.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_WVNJ = []
		const _Route_object_uRpw = new Route(_path_array_WVNJ)

		expect(JSON.parse(JSON.stringify(_Route_object_uRpw))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_WVNJ))).to.deep.equal([])

		try {
			const _method_function_dGPz = await _Route_object_uRpw.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_Exqw = undefined;
		const _Route_object_oxDS = new Route(_path_undefined_Exqw)

		expect(JSON.parse(JSON.stringify(_Route_object_oxDS))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_zibA = await _Route_object_oxDS.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_IBuv = 6.232634864912676;
		const _Route_object_OSya = new Route(_path_numeric_IBuv)
		const _method_boolean_BZgI = true;

		expect(JSON.parse(JSON.stringify(_Route_object_OSya))).to.deep.equal({"path":6.232634864912676,"stack":[],"methods":{}})

		try {
			const __handles_method_function_FBQd = await _Route_object_OSya._handles_method(_method_boolean_BZgI)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_ohco = null;
		const _Route_object_BmXP = new Route(_path_null_ohco)
		const __options_function_rxte = await _Route_object_BmXP._options()

		expect(JSON.parse(JSON.stringify(_Route_object_BmXP))).to.deep.equal({"path":null,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_rxte))).to.deep.equal([])

		try {
			const _method_function_VvXe = await _Route_object_BmXP.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_xRAQ = new Route()
		const _all_function_mYTw = await _Route_object_xRAQ.all()

		expect(JSON.parse(JSON.stringify(_Route_object_xRAQ))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_mYTw))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_ixXR = await _Route_object_xRAQ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_QZRk = "uFKt1ilQumiTf7";
		const _Route_object_OMJc = new Route(_path_string_QZRk)
		const _all_function_inHe = await _Route_object_OMJc.all()

		expect(JSON.parse(JSON.stringify(_Route_object_OMJc))).to.deep.equal({"path":"uFKt1ilQumiTf7","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_inHe))).to.deep.equal({"path":"uFKt1ilQumiTf7","stack":[],"methods":{}})

		try {
			const _method_function_cauF = await _Route_object_OMJc.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_sFpN = undefined;
		const _Route_object_GfMY = new Route(_path_undefined_sFpN)

		expect(JSON.parse(JSON.stringify(_Route_object_GfMY))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_OLQE = await _Route_object_GfMY.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_NmJM = null;
		const _Route_object_jNjd = new Route(_path_null_NmJM)

		expect(JSON.parse(JSON.stringify(_Route_object_jNjd))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_MMHM = await _Route_object_jNjd.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_njlw = -7.257306913156563;
		const _Route_object_PDTM = new Route(_path_numeric_njlw)

		expect(JSON.parse(JSON.stringify(_Route_object_PDTM))).to.deep.equal({"path":-7.257306913156563,"stack":[],"methods":{}})

		try {
			const _method_function_nkFD = await _Route_object_PDTM.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_KVVJ = "BgTgBL";
		const _Route_object_azvI = new Route(_path_string_KVVJ)
		const __options_function_xVcX = await _Route_object_azvI._options()

		expect(JSON.parse(JSON.stringify(_Route_object_azvI))).to.deep.equal({"path":"BgTgBL","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_xVcX))).to.deep.equal([])

		try {
			const _method_function_jnfc = await _Route_object_azvI.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_MmDK = () => { };
		const _Route_object_XRrc = new Route(_path_function_MmDK)

		expect(JSON.parse(JSON.stringify(_Route_object_XRrc))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_tONS = await _Route_object_XRrc.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_xEex = true;
		const _Route_object_QGyY = new Route(_path_boolean_xEex)
		const __options_function_vOak = await _Route_object_QGyY._options()
		const _all_function_jEvp = await _Route_object_QGyY.all()
		const _method_null_TpyA = null;

		expect(JSON.parse(JSON.stringify(_Route_object_QGyY))).to.deep.equal({"path":true,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_vOak))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_jEvp))).to.deep.equal({"path":true,"stack":[],"methods":{}})

		try {
			const __handles_method_function_Vkjo = await _Route_object_QGyY._handles_method(_method_null_TpyA)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_tAbu = undefined;
		const _Route_object_muDo = new Route(_path_undefined_tAbu)
		const _all_function_gNbp = await _Route_object_muDo.all()

		expect(JSON.parse(JSON.stringify(_Route_object_muDo))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_gNbp))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_eKgX = await _Route_object_muDo.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_gIjN = () => { };
		const _Route_object_Zvci = new Route(_path_function_gIjN)
		const _all_function_pqgI = await _Route_object_Zvci.all()

		expect(JSON.parse(JSON.stringify(_Route_object_Zvci))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_pqgI))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_gTbz = await _Route_object_Zvci.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_SETS = () => { };
		const _Route_object_zIll = new Route(_path_function_SETS)

		expect(JSON.parse(JSON.stringify(_Route_object_zIll))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_nhwM = await _Route_object_zIll.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_fJJE = "VC1zJd4wnA";
		const _Route_object_OpeL = new Route(_path_string_fJJE)

		expect(JSON.parse(JSON.stringify(_Route_object_OpeL))).to.deep.equal({"path":"VC1zJd4wnA","stack":[],"methods":{}})

		try {
			const _method_function_grpD = await _Route_object_OpeL.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_dRUp = "cpgumniWClyC3RjVYW4cm6fQ2tS5uLrnmmGeL3mVt7YlbnRrDLifoJQPYMbfibi6qf69VbLdsoi2B5n";
		const _Route_object_sDpq = new Route(_path_string_dRUp)
		const __options_function_Kcdr = await _Route_object_sDpq._options()

		expect(JSON.parse(JSON.stringify(_Route_object_sDpq))).to.deep.equal({"path":"cpgumniWClyC3RjVYW4cm6fQ2tS5uLrnmmGeL3mVt7YlbnRrDLifoJQPYMbfibi6qf69VbLdsoi2B5n","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_Kcdr))).to.deep.equal([])

		try {
			const _method_function_UYNl = await _Route_object_sDpq.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_aLvm = "GhWPsXlYpDuYICek9i1X6fDE2deQ1UwG9XPIltThho3Sjz3sQK11V1se9nYerLvXPjkGAu58a0BR";
		const _Route_object_cQQe = new Route(_path_string_aLvm)
		const __options_function_MhuD = await _Route_object_cQQe._options()
		const _all_function_cNRg = await _Route_object_cQQe.all()

		expect(JSON.parse(JSON.stringify(_Route_object_cQQe))).to.deep.equal({"path":"GhWPsXlYpDuYICek9i1X6fDE2deQ1UwG9XPIltThho3Sjz3sQK11V1se9nYerLvXPjkGAu58a0BR","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_MhuD))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_cNRg))).to.deep.equal({"path":"GhWPsXlYpDuYICek9i1X6fDE2deQ1UwG9XPIltThho3Sjz3sQK11V1se9nYerLvXPjkGAu58a0BR","stack":[],"methods":{}})

		try {
			const _method_function_fjmm = await _Route_object_cQQe.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_fcgu = () => { };
		const _Route_object_jslg = new Route(_path_function_fcgu)

		expect(JSON.parse(JSON.stringify(_Route_object_jslg))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_qhzx = await _Route_object_jslg.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_nYXY = {
		
	}
		const _Route_object_NojF = new Route(_path_object_nYXY)

		expect(JSON.parse(JSON.stringify(_Route_object_NojF))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_nYXY))).to.deep.equal({})

		try {
			const _method_function_YwOu = await _Route_object_NojF.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_swns = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_swns))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_chKT = await _Route_object_swns.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_vNsR = undefined;
		const _Route_object_mcEx = new Route(_path_undefined_vNsR)

		expect(JSON.parse(JSON.stringify(_Route_object_mcEx))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_aAez = await _Route_object_mcEx.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_EtWm = "QOv1irx6GtssH9Wv4CV0dxeXrYD";
		const _Route_object_qJVA = new Route(_path_string_EtWm)

		expect(JSON.parse(JSON.stringify(_Route_object_qJVA))).to.deep.equal({"path":"QOv1irx6GtssH9Wv4CV0dxeXrYD","stack":[],"methods":{}})

		try {
			const _method_function_ZNzR = await _Route_object_qJVA.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_EJsB = undefined;
		const _Route_object_VOPB = new Route(_path_undefined_EJsB)

		expect(JSON.parse(JSON.stringify(_Route_object_VOPB))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_CEYz = await _Route_object_VOPB.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_FxMh = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_FxMh))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_jJsi = await _Route_object_FxMh.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_RHNu = "ZfIq8AyQarkXKc6UC27znMCP";
		const _Route_object_SqHY = new Route(_path_string_RHNu)

		expect(JSON.parse(JSON.stringify(_Route_object_SqHY))).to.deep.equal({"path":"ZfIq8AyQarkXKc6UC27znMCP","stack":[],"methods":{}})

		try {
			const _method_function_fbGu = await _Route_object_SqHY.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_uSfq = "TbBqtlDPjOaqBQyWV6yI8Twje9ekR7iEUCwlQZcUN7fO4eTwoXsccY7sCxp76";
		const _Route_object_Zxzi = new Route(_path_string_uSfq)
		const __options_function_GmqU = await _Route_object_Zxzi._options()

		expect(JSON.parse(JSON.stringify(_Route_object_Zxzi))).to.deep.equal({"path":"TbBqtlDPjOaqBQyWV6yI8Twje9ekR7iEUCwlQZcUN7fO4eTwoXsccY7sCxp76","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_GmqU))).to.deep.equal([])

		try {
			const _method_function_fgFn = await _Route_object_Zxzi.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_rITI = new Route()
		const _all_function_jmWz = await _Route_object_rITI.all()

		expect(JSON.parse(JSON.stringify(_Route_object_rITI))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_jmWz))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_KZKd = await _Route_object_rITI.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_pXRX = new Route()
		const _all_function_rAsj = await _Route_object_pXRX.all()

		expect(JSON.parse(JSON.stringify(_Route_object_pXRX))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_rAsj))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_MxdE = await _Route_object_pXRX.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_rLCa = undefined;
		const _Route_object_FIwu = new Route(_path_undefined_rLCa)

		expect(JSON.parse(JSON.stringify(_Route_object_FIwu))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_ReTB = await _Route_object_FIwu.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_niRn = undefined;
		const _Route_object_xNno = new Route(_path_undefined_niRn)
		const _all_function_evNb = await _Route_object_xNno.all()
		const __options_function_ffYD = await _Route_object_xNno._options()

		expect(JSON.parse(JSON.stringify(_Route_object_xNno))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_ffYD))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_evNb))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_YsnN = await _Route_object_xNno.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_gTpu = () => { };
		const _Route_object_HDld = new Route(_path_function_gTpu)
		const __options_function_aGpr = await _Route_object_HDld._options()
		const __options_function_yCCr = await _Route_object_HDld._options()
		const _all_function_NlOb = await _Route_object_HDld.all()

		expect(JSON.parse(JSON.stringify(_Route_object_HDld))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_aGpr))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(__options_function_yCCr))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_NlOb))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_WPcK = await _Route_object_HDld.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_FRxX = () => { };
		const _Route_object_Jbkm = new Route(_path_function_FRxX)

		expect(JSON.parse(JSON.stringify(_Route_object_Jbkm))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_nvUy = await _Route_object_Jbkm.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_dKvM = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_dKvM))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_zaiN = await _Route_object_dKvM.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_OExj = []
		const _Route_object_DBWd = new Route(_path_array_OExj)

		expect(JSON.parse(JSON.stringify(_Route_object_DBWd))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_OExj))).to.deep.equal([])

		try {
			const _method_function_ligG = await _Route_object_DBWd.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_wHnt = {
		
	}
		const _Route_object_mmQN = new Route(_path_object_wHnt)
		const _all_function_pMQY = await _Route_object_mmQN.all()

		expect(JSON.parse(JSON.stringify(_Route_object_mmQN))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_pMQY))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_wHnt))).to.deep.equal({})

		try {
			const _method_function_tTLd = await _Route_object_mmQN.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_klOv = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_klOv))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_hQbD = await _Route_object_klOv.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_dsKV = null;
		const _Route_object_sIeW = new Route(_path_null_dsKV)

		expect(JSON.parse(JSON.stringify(_Route_object_sIeW))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_Fakk = await _Route_object_sIeW.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_pLuU = {
		
	}
		const _Route_object_JhlG = new Route(_path_object_pLuU)

		expect(JSON.parse(JSON.stringify(_Route_object_JhlG))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_pLuU))).to.deep.equal({})

		try {
			const _method_function_wRrQ = await _Route_object_JhlG.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_dCwQ = 1.9459765648402723;
		const _Route_object_omdk = new Route(_path_numeric_dCwQ)
		const __options_function_ftdD = await _Route_object_omdk._options()

		expect(JSON.parse(JSON.stringify(_Route_object_omdk))).to.deep.equal({"path":1.9459765648402723,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_ftdD))).to.deep.equal([])

		try {
			const _method_function_KNkp = await _Route_object_omdk.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_YAnt = "qymw0mb1an9GCuJsAyu";
		const _Route_object_KFdo = new Route(_path_string_YAnt)

		expect(JSON.parse(JSON.stringify(_Route_object_KFdo))).to.deep.equal({"path":"qymw0mb1an9GCuJsAyu","stack":[],"methods":{}})

		try {
			const _method_function_yyTF = await _Route_object_KFdo.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_nPJK = -0.384549870562541;
		const _Route_object_huHY = new Route(_path_numeric_nPJK)
		const _all_function_ZRzA = await _Route_object_huHY.all()
		const _all_function_Wtfa = await _Route_object_huHY.all()
		const __options_function_mYxq = await _Route_object_huHY._options()

		expect(JSON.parse(JSON.stringify(_Route_object_huHY))).to.deep.equal({"path":-0.384549870562541,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_mYxq))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_Wtfa))).to.deep.equal({"path":-0.384549870562541,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_ZRzA))).to.deep.equal({"path":-0.384549870562541,"stack":[],"methods":{}})

		try {
			const _method_function_qmVw = await _Route_object_huHY.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_RONO = []
		const _Route_object_ksGB = new Route(_path_array_RONO)
		const __options_function_qFVv = await _Route_object_ksGB._options()
		const _all_function_OPQV = await _Route_object_ksGB.all()

		expect(JSON.parse(JSON.stringify(_Route_object_ksGB))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_qFVv))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_OPQV))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_RONO))).to.deep.equal([])

		try {
			const _method_function_tLNa = await _Route_object_ksGB.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_wCIv = 7.201863740010062;
		const _Route_object_RnHU = new Route(_path_numeric_wCIv)
		const __options_function_uZxl = await _Route_object_RnHU._options()

		expect(JSON.parse(JSON.stringify(_Route_object_RnHU))).to.deep.equal({"path":7.201863740010062,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_uZxl))).to.deep.equal([])

		try {
			const _method_function_gUGb = await _Route_object_RnHU.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_zfVs = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_zfVs))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_fewO = await _Route_object_zfVs.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_aGbc = () => { };
		const _Route_object_tYSY = new Route(_path_function_aGbc)

		expect(JSON.parse(JSON.stringify(_Route_object_tYSY))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_IBDW = await _Route_object_tYSY.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_VZHM = undefined;
		const _Route_object_GJOy = new Route(_path_undefined_VZHM)
		const __options_function_ikEf = await _Route_object_GJOy._options()
		const _method_string_oHxj = "Hm2YyGYaVu6y4y459LLcaNyKwegnvhC";
		const __handles_method_function_LXXU = await _Route_object_GJOy._handles_method(_method_string_oHxj)

		expect(JSON.parse(JSON.stringify(_Route_object_GJOy))).to.deep.equal({"stack":[],"methods":{}})
		expect(__handles_method_function_LXXU).to.equal(false)
		expect(JSON.parse(JSON.stringify(__options_function_ikEf))).to.deep.equal([])

		try {
			const _method_function_SXzQ = await _Route_object_GJOy.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_SOsF = "gz2bDjsCmjUJTmCdBtuho5yYR6WygEq4vjGj3W647lY7VLrSXjj";
		const _Route_object_lwWD = new Route(_path_string_SOsF)

		expect(JSON.parse(JSON.stringify(_Route_object_lwWD))).to.deep.equal({"path":"gz2bDjsCmjUJTmCdBtuho5yYR6WygEq4vjGj3W647lY7VLrSXjj","stack":[],"methods":{}})

		try {
			const _method_function_qcno = await _Route_object_lwWD.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_uspy = null;
		const _Route_object_Uwub = new Route(_path_null_uspy)
		const _method_string_hjJJ = "fiFmjIt2b4rTOQaVOcDaBGBw5bSHmkF7DguyeVm7tXW6LTc2D8g3yusuMvoTG9p2fh5F9SQlbb9M5pVyFDVBO3kesCnmA";
		const __handles_method_function_GZyD = await _Route_object_Uwub._handles_method(_method_string_hjJJ)

		expect(JSON.parse(JSON.stringify(_Route_object_Uwub))).to.deep.equal({"path":null,"stack":[],"methods":{}})
		expect(__handles_method_function_GZyD).to.equal(false)

		try {
			const _method_function_pKJA = await _Route_object_Uwub.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_JOoh = undefined;
		const _Route_object_EKpG = new Route(_path_undefined_JOoh)
		const __options_function_WSzA = await _Route_object_EKpG._options()

		expect(JSON.parse(JSON.stringify(_Route_object_EKpG))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_WSzA))).to.deep.equal([])

		try {
			const _method_function_iyLv = await _Route_object_EKpG.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_CoQa = "KC2OHhxFKn2JM7CW7rK7trOCgqdNPTmtbM3oKOnZObipzpXssInkdPDWadQ82qKll7OJmeImKcSHRxaZxNC8bGIhWAeuzqe1p";
		const _Route_object_nteH = new Route(_path_string_CoQa)

		expect(JSON.parse(JSON.stringify(_Route_object_nteH))).to.deep.equal({"path":"KC2OHhxFKn2JM7CW7rK7trOCgqdNPTmtbM3oKOnZObipzpXssInkdPDWadQ82qKll7OJmeImKcSHRxaZxNC8bGIhWAeuzqe1p","stack":[],"methods":{}})

		try {
			const _method_function_VxGW = await _Route_object_nteH.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_BpHE = undefined;
		const _Route_object_GfFX = new Route(_path_undefined_BpHE)
		const __options_function_XjXu = await _Route_object_GfFX._options()

		expect(JSON.parse(JSON.stringify(_Route_object_GfFX))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_XjXu))).to.deep.equal([])

		try {
			const _method_function_MHGn = await _Route_object_GfFX.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_yEMh = null;
		const _Route_object_IhMm = new Route(_path_null_yEMh)
		const __options_function_EOvv = await _Route_object_IhMm._options()
		const _all_function_HcnW = await _Route_object_IhMm.all()
		const _all_function_NiQh = await _Route_object_IhMm.all()

		expect(JSON.parse(JSON.stringify(_Route_object_IhMm))).to.deep.equal({"path":null,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_EOvv))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_HcnW))).to.deep.equal({"path":null,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_NiQh))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_BCcF = await _Route_object_IhMm.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_htaO = undefined;
		const _Route_object_NqNE = new Route(_path_undefined_htaO)
		const __options_function_ugJV = await _Route_object_NqNE._options()
		const __options_function_EWFk = await _Route_object_NqNE._options()
		const __options_function_blLq = await _Route_object_NqNE._options()

		expect(JSON.parse(JSON.stringify(_Route_object_NqNE))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_EWFk))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(__options_function_blLq))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(__options_function_ugJV))).to.deep.equal([])

		try {
			const _method_function_wWJI = await _Route_object_NqNE.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_zVLY = []
		const _Route_object_PtGQ = new Route(_path_array_zVLY)

		expect(JSON.parse(JSON.stringify(_Route_object_PtGQ))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_zVLY))).to.deep.equal([])

		try {
			const _method_function_REZX = await _Route_object_PtGQ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_kufq = false;
		const _Route_object_wgkZ = new Route(_path_boolean_kufq)

		expect(JSON.parse(JSON.stringify(_Route_object_wgkZ))).to.deep.equal({"path":false,"stack":[],"methods":{}})

		try {
			const _method_function_aQhM = await _Route_object_wgkZ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_lBTW = "tARigk6lUczd2rJ7";
		const _Route_object_Nvuy = new Route(_path_string_lBTW)

		expect(JSON.parse(JSON.stringify(_Route_object_Nvuy))).to.deep.equal({"path":"tARigk6lUczd2rJ7","stack":[],"methods":{}})

		try {
			const _method_function_fOjr = await _Route_object_Nvuy.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_FLOC = () => { };
		const _Route_object_IJLM = new Route(_path_function_FLOC)

		expect(JSON.parse(JSON.stringify(_Route_object_IJLM))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_aBLo = await _Route_object_IJLM.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_AgIL = []
		const _Route_object_nOvp = new Route(_path_array_AgIL)
		const _all_function_EXYc = await _Route_object_nOvp.all()

		expect(JSON.parse(JSON.stringify(_Route_object_nOvp))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_EXYc))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_AgIL))).to.deep.equal([])

		try {
			const _method_function_zQmb = await _Route_object_nOvp.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_tRpf = null;
		const _Route_object_oqLT = new Route(_path_null_tRpf)

		expect(JSON.parse(JSON.stringify(_Route_object_oqLT))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_AAPX = await _Route_object_oqLT.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_Wflg = -2.365880507235218;
		const _Route_object_QRoS = new Route(_path_numeric_Wflg)
		const _all_function_cvxr = await _Route_object_QRoS.all()
		const __options_function_PUcU = await _Route_object_QRoS._options()

		expect(JSON.parse(JSON.stringify(_Route_object_QRoS))).to.deep.equal({"path":-2.365880507235218,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_PUcU))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_cvxr))).to.deep.equal({"path":-2.365880507235218,"stack":[],"methods":{}})

		try {
			const _method_function_plzt = await _Route_object_QRoS.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_ctxI = {
		
	}
		const _Route_object_YbOh = new Route(_path_object_ctxI)
		const _all_function_QIEM = await _Route_object_YbOh.all()

		expect(JSON.parse(JSON.stringify(_Route_object_YbOh))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_QIEM))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_ctxI))).to.deep.equal({})

		try {
			const _method_function_fFQa = await _Route_object_YbOh.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_eHOn = undefined;
		const _Route_object_upxv = new Route(_path_undefined_eHOn)

		expect(JSON.parse(JSON.stringify(_Route_object_upxv))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_joRe = await _Route_object_upxv.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_MzhX = null;
		const _Route_object_IsTi = new Route(_path_null_MzhX)
		const _all_function_lYiW = await _Route_object_IsTi.all()

		expect(JSON.parse(JSON.stringify(_Route_object_IsTi))).to.deep.equal({"path":null,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_lYiW))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_mtgn = await _Route_object_IsTi.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_rgHX = []
		const _Route_object_ilMw = new Route(_path_array_rgHX)
		const _all_function_Axwc = await _Route_object_ilMw.all()

		expect(JSON.parse(JSON.stringify(_Route_object_ilMw))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_Axwc))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_rgHX))).to.deep.equal([])

		try {
			const _method_function_zvsY = await _Route_object_ilMw.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_FWyn = new Route()
		const _all_function_ddzm = await _Route_object_FWyn.all()

		expect(JSON.parse(JSON.stringify(_Route_object_FWyn))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_ddzm))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_sBuj = await _Route_object_FWyn.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_YQen = null;
		const _Route_object_FlmJ = new Route(_path_null_YQen)
		const _all_function_DfTS = await _Route_object_FlmJ.all()

		expect(JSON.parse(JSON.stringify(_Route_object_FlmJ))).to.deep.equal({"path":null,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_DfTS))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_SrhY = await _Route_object_FlmJ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_tpUW = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_tpUW))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_mFnu = await _Route_object_tpUW.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_JcRz = "kHYMTNv4HKQ6gVGjzMCFpm1n";
		const _Route_object_ZCot = new Route(_path_string_JcRz)

		expect(JSON.parse(JSON.stringify(_Route_object_ZCot))).to.deep.equal({"path":"kHYMTNv4HKQ6gVGjzMCFpm1n","stack":[],"methods":{}})

		try {
			const _method_function_QlWf = await _Route_object_ZCot.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_rxcx = new Route()
		const _all_function_rCoL = await _Route_object_rxcx.all()

		expect(JSON.parse(JSON.stringify(_Route_object_rxcx))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_rCoL))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_PdZa = await _Route_object_rxcx.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_PexU = false;
		const _Route_object_QbZI = new Route(_path_boolean_PexU)

		expect(JSON.parse(JSON.stringify(_Route_object_QbZI))).to.deep.equal({"path":false,"stack":[],"methods":{}})

		try {
			const _method_function_qXhi = await _Route_object_QbZI.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_fMPy = null;
		const _Route_object_KJXV = new Route(_path_null_fMPy)

		expect(JSON.parse(JSON.stringify(_Route_object_KJXV))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_qRvc = await _Route_object_KJXV.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_lMuy = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_lMuy))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_LaCb = await _Route_object_lMuy.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_oHFD = new Route()
		const __options_function_WaRl = await _Route_object_oHFD._options()
		const _all_function_GVTZ = await _Route_object_oHFD.all()
		const __options_function_DIie = await _Route_object_oHFD._options()

		expect(JSON.parse(JSON.stringify(_Route_object_oHFD))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_DIie))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(__options_function_WaRl))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_GVTZ))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_IRBr = await _Route_object_oHFD.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_MzyP = []
		const _Route_object_bqpq = new Route(_path_array_MzyP)

		expect(JSON.parse(JSON.stringify(_Route_object_bqpq))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_MzyP))).to.deep.equal([])

		try {
			const _method_function_BPbH = await _Route_object_bqpq.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_xOrE = new Route()
		const _all_function_zraW = await _Route_object_xOrE.all()

		expect(JSON.parse(JSON.stringify(_Route_object_xOrE))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_zraW))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_pqJH = await _Route_object_xOrE.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_eYpd = []
		const _Route_object_aAga = new Route(_path_array_eYpd)

		expect(JSON.parse(JSON.stringify(_Route_object_aAga))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_eYpd))).to.deep.equal([])

		try {
			const _method_function_rWoz = await _Route_object_aAga.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_VLBz = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_VLBz))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_SNSk = await _Route_object_VLBz.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_PoTy = new Route()
		const __options_function_xCMJ = await _Route_object_PoTy._options()

		expect(JSON.parse(JSON.stringify(_Route_object_PoTy))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_xCMJ))).to.deep.equal([])

		try {
			const _method_function_RcCB = await _Route_object_PoTy.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_QUwI = undefined;
		const _Route_object_NEGR = new Route(_path_undefined_QUwI)

		expect(JSON.parse(JSON.stringify(_Route_object_NEGR))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_xPHn = await _Route_object_NEGR.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_bKsh = {
		
	}
		const _Route_object_Ifcq = new Route(_path_object_bKsh)

		expect(JSON.parse(JSON.stringify(_Route_object_Ifcq))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_bKsh))).to.deep.equal({})

		try {
			const _method_function_SRgW = await _Route_object_Ifcq.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_SReI = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_SReI))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_hLgh = await _Route_object_SReI.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_vogR = undefined;
		const _Route_object_vWNz = new Route(_path_undefined_vogR)
		const _method_string_KNsb = "qhbRfOJlz5wLSHTGqt1j8F8IN16rXAO9MfCTLs1LrhKRneX5KJhCeJX0LvomJsHAulS1qE2DBFdp1LKilIg8GAIOjT";
		const __handles_method_function_BJAe = await _Route_object_vWNz._handles_method(_method_string_KNsb)

		expect(JSON.parse(JSON.stringify(_Route_object_vWNz))).to.deep.equal({"stack":[],"methods":{}})
		expect(__handles_method_function_BJAe).to.equal(false)

		try {
			const _method_function_UFBF = await _Route_object_vWNz.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_LYQw = new Route()
		const __options_function_mTOd = await _Route_object_LYQw._options()

		expect(JSON.parse(JSON.stringify(_Route_object_LYQw))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_mTOd))).to.deep.equal([])

		try {
			const _method_function_OsQh = await _Route_object_LYQw.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_SaXm = undefined;
		const _Route_object_ObJE = new Route(_path_undefined_SaXm)

		expect(JSON.parse(JSON.stringify(_Route_object_ObJE))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_gVdV = await _Route_object_ObJE.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_vyRN = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_vyRN))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_WBEt = await _Route_object_vyRN.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_iVIQ = null;
		const _Route_object_Koui = new Route(_path_null_iVIQ)
		const _req_boolean_XBGO = false;
		const _res_string_IKiq = "0FzM0wrQ9Bj2fsf1RKb0hQrLeVOuyS";
		const _done_function_HCQA = () => { };
		const _dispatch_function_cdmi = await _Route_object_Koui.dispatch(_req_boolean_XBGO, _res_string_IKiq, _done_function_HCQA)

		expect(JSON.parse(JSON.stringify(_Route_object_Koui))).to.deep.equal({"path":null,"stack":[],"methods":{}})
		expect(_dispatch_function_cdmi).to.equal(undefined)

		try {
			const _method_function_xLLs = await _Route_object_Koui.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_gqnZ = new Route()
		const _all_function_OPxS = await _Route_object_gqnZ.all()
		const _all_function_ofEF = await _Route_object_gqnZ.all()

		expect(JSON.parse(JSON.stringify(_Route_object_gqnZ))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_OPxS))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_ofEF))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_aVkY = await _Route_object_gqnZ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_cSbR = () => { };
		const _Route_object_knIr = new Route(_path_function_cSbR)

		expect(JSON.parse(JSON.stringify(_Route_object_knIr))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_HvEq = await _Route_object_knIr.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_Rqwh = "fukSVzG8WBNuhzYUQL7L32s";
		const _Route_object_bEdt = new Route(_path_string_Rqwh)

		expect(JSON.parse(JSON.stringify(_Route_object_bEdt))).to.deep.equal({"path":"fukSVzG8WBNuhzYUQL7L32s","stack":[],"methods":{}})

		try {
			const _method_function_eyNh = await _Route_object_bEdt.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_zdOP = new Route()
		const _all_function_FbbY = await _Route_object_zdOP.all()

		expect(JSON.parse(JSON.stringify(_Route_object_zdOP))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_FbbY))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_PYFK = await _Route_object_zdOP.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_aJDX = true;
		const _Route_object_YoyZ = new Route(_path_boolean_aJDX)

		expect(JSON.parse(JSON.stringify(_Route_object_YoyZ))).to.deep.equal({"path":true,"stack":[],"methods":{}})

		try {
			const _method_function_dpKI = await _Route_object_YoyZ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_QFla = 8.036772375697112;
		const _Route_object_aYfV = new Route(_path_numeric_QFla)

		expect(JSON.parse(JSON.stringify(_Route_object_aYfV))).to.deep.equal({"path":8.036772375697112,"stack":[],"methods":{}})

		try {
			const _method_function_TeNM = await _Route_object_aYfV.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_ZKaE = 8.273832721443569;
		const _Route_object_bGXc = new Route(_path_numeric_ZKaE)

		expect(JSON.parse(JSON.stringify(_Route_object_bGXc))).to.deep.equal({"path":8.273832721443569,"stack":[],"methods":{}})

		try {
			const _method_function_pcgf = await _Route_object_bGXc.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_EUqz = undefined;
		const _Route_object_AtxR = new Route(_path_undefined_EUqz)

		expect(JSON.parse(JSON.stringify(_Route_object_AtxR))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_HNNx = await _Route_object_AtxR.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_BPkJ = []
		const _Route_object_VEDe = new Route(_path_array_BPkJ)

		expect(JSON.parse(JSON.stringify(_Route_object_VEDe))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_BPkJ))).to.deep.equal([])

		try {
			const _method_function_ebYt = await _Route_object_VEDe.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_rQHF = "bSZIf97QQkvTKHSBeXeE4M4taUHyWN0Y1rv8Or1TzlVnpz5oqkkW";
		const _Route_object_cXju = new Route(_path_string_rQHF)
		const _all_function_bLMU = await _Route_object_cXju.all()
		const _req_null_SxsW = null;
		const _res_undefined_WpNW = undefined;
		const _done_function_matC = () => { };
		const _dispatch_function_kBTN = await _Route_object_cXju.dispatch(_req_null_SxsW, _res_undefined_WpNW, _done_function_matC)

		expect(JSON.parse(JSON.stringify(_Route_object_cXju))).to.deep.equal({"path":"bSZIf97QQkvTKHSBeXeE4M4taUHyWN0Y1rv8Or1TzlVnpz5oqkkW","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_bLMU))).to.deep.equal({"path":"bSZIf97QQkvTKHSBeXeE4M4taUHyWN0Y1rv8Or1TzlVnpz5oqkkW","stack":[],"methods":{}})
		expect(_dispatch_function_kBTN).to.equal(undefined)

		try {
			const _method_function_cxeW = await _Route_object_cXju.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_xXxA = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_xXxA))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_IFyO = await _Route_object_xXxA.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_Ktkl = -9.107992388321309;
		const _Route_object_txoa = new Route(_path_numeric_Ktkl)
		const _all_function_uddG = await _Route_object_txoa.all()
		const _all_function_JhaF = await _Route_object_txoa.all()
		const _all_function_tbui = await _Route_object_txoa.all()

		expect(JSON.parse(JSON.stringify(_Route_object_txoa))).to.deep.equal({"path":-9.107992388321309,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_JhaF))).to.deep.equal({"path":-9.107992388321309,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_tbui))).to.deep.equal({"path":-9.107992388321309,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_uddG))).to.deep.equal({"path":-9.107992388321309,"stack":[],"methods":{}})

		try {
			const _method_function_YwTd = await _Route_object_txoa.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_wMGt = false;
		const _Route_object_mNvc = new Route(_path_boolean_wMGt)

		expect(JSON.parse(JSON.stringify(_Route_object_mNvc))).to.deep.equal({"path":false,"stack":[],"methods":{}})

		try {
			const _method_function_lHGE = await _Route_object_mNvc.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_FYne = new Route()
		const __options_function_rneU = await _Route_object_FYne._options()
		const _method_string_VRIB = "5Mv4NCenSOfpBQHr1FVLKBrjTcShLHrYyDEPWEgNEkQAkRjr7YsSfQRXSKDivG3lZyBUEZARhYTxDmS89gdudckN4VeHL1Ev";
		const __handles_method_function_gZQF = await _Route_object_FYne._handles_method(_method_string_VRIB)

		expect(JSON.parse(JSON.stringify(_Route_object_FYne))).to.deep.equal({"stack":[],"methods":{}})
		expect(__handles_method_function_gZQF).to.equal(false)
		expect(JSON.parse(JSON.stringify(__options_function_rneU))).to.deep.equal([])

		try {
			const _method_function_juTh = await _Route_object_FYne.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_NnHk = -9.068371114345746;
		const _Route_object_LlFk = new Route(_path_numeric_NnHk)
		const _all_function_MsQp = await _Route_object_LlFk.all()

		expect(JSON.parse(JSON.stringify(_Route_object_LlFk))).to.deep.equal({"path":-9.068371114345746,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_MsQp))).to.deep.equal({"path":-9.068371114345746,"stack":[],"methods":{}})

		try {
			const _method_function_GJue = await _Route_object_LlFk.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_HMPC = 1.9587468974050424;
		const _Route_object_wCvO = new Route(_path_numeric_HMPC)

		expect(JSON.parse(JSON.stringify(_Route_object_wCvO))).to.deep.equal({"path":1.9587468974050424,"stack":[],"methods":{}})

		try {
			const _method_function_OOmC = await _Route_object_wCvO.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_wtKT = []
		const _Route_object_ozeO = new Route(_path_array_wtKT)

		expect(JSON.parse(JSON.stringify(_Route_object_ozeO))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_wtKT))).to.deep.equal([])

		try {
			const _method_function_AHHm = await _Route_object_ozeO.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_vEHb = new Route()
		const _all_function_WATT = await _Route_object_vEHb.all()

		expect(JSON.parse(JSON.stringify(_Route_object_vEHb))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_WATT))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_HWfZ = await _Route_object_vEHb.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_bgyX = () => { };
		const _Route_object_AdEM = new Route(_path_function_bgyX)

		expect(JSON.parse(JSON.stringify(_Route_object_AdEM))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_cRtF = await _Route_object_AdEM.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_NWWM = "KqTXhgU76IPNVIBIudzbHY45Ol";
		const _Route_object_OiUm = new Route(_path_string_NWWM)

		expect(JSON.parse(JSON.stringify(_Route_object_OiUm))).to.deep.equal({"path":"KqTXhgU76IPNVIBIudzbHY45Ol","stack":[],"methods":{}})

		try {
			const _method_function_FyxI = await _Route_object_OiUm.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_sXFj = null;
		const _Route_object_dXpM = new Route(_path_null_sXFj)

		expect(JSON.parse(JSON.stringify(_Route_object_dXpM))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_ioxy = await _Route_object_dXpM.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_TzLX = {
		
	}
		const _Route_object_SZQe = new Route(_path_object_TzLX)

		expect(JSON.parse(JSON.stringify(_Route_object_SZQe))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_TzLX))).to.deep.equal({})

		try {
			const _method_function_fmnl = await _Route_object_SZQe.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_dRlv = undefined;
		const _Route_object_aRuM = new Route(_path_undefined_dRlv)
		const __options_function_Prnf = await _Route_object_aRuM._options()
		const _all_function_Cvel = await _Route_object_aRuM.all()

		expect(JSON.parse(JSON.stringify(_Route_object_aRuM))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_Prnf))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_Cvel))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_tyCs = await _Route_object_aRuM.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_vDXh = () => { };
		const _Route_object_GLPt = new Route(_path_function_vDXh)

		expect(JSON.parse(JSON.stringify(_Route_object_GLPt))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_CKlp = await _Route_object_GLPt.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_gCGb = "61VfkxGw9lNJVfNYp6uNHYXnsl7BlfXCzsR9ZlVpFL1rIpbWk8rVxZ1bvTqbdlwjkbgiUev";
		const _Route_object_ozrK = new Route(_path_string_gCGb)

		expect(JSON.parse(JSON.stringify(_Route_object_ozrK))).to.deep.equal({"path":"61VfkxGw9lNJVfNYp6uNHYXnsl7BlfXCzsR9ZlVpFL1rIpbWk8rVxZ1bvTqbdlwjkbgiUev","stack":[],"methods":{}})

		try {
			const _method_function_DOcQ = await _Route_object_ozrK.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_MJZx = []
		const _Route_object_zLUA = new Route(_path_array_MJZx)

		expect(JSON.parse(JSON.stringify(_Route_object_zLUA))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_MJZx))).to.deep.equal([])

		try {
			const _method_function_AwKu = await _Route_object_zLUA.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_VQgH = undefined;
		const _Route_object_Hzwz = new Route(_path_undefined_VQgH)

		expect(JSON.parse(JSON.stringify(_Route_object_Hzwz))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_RZQT = await _Route_object_Hzwz.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_AqPV = () => { };
		const _Route_object_oNrj = new Route(_path_function_AqPV)
		const _method_string_hzjW = "ygL771QPuxPXV9Qf7bBSDRDwKgWy3zPVbSlvW87plQaIGDAE1500";
		const __handles_method_function_liBb = await _Route_object_oNrj._handles_method(_method_string_hzjW)

		expect(JSON.parse(JSON.stringify(_Route_object_oNrj))).to.deep.equal({"stack":[],"methods":{}})
		expect(__handles_method_function_liBb).to.equal(false)

		try {
			const _method_function_leMy = await _Route_object_oNrj.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_MIMj = "h7BwSa8eur7rEBA";
		const _Route_object_FvIE = new Route(_path_string_MIMj)

		expect(JSON.parse(JSON.stringify(_Route_object_FvIE))).to.deep.equal({"path":"h7BwSa8eur7rEBA","stack":[],"methods":{}})

		try {
			const _method_function_kKPA = await _Route_object_FvIE.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_MvjI = "yV1VlHudqgZtcaUeM";
		const _Route_object_fZDk = new Route(_path_string_MvjI)
		const _all_function_UTxL = await _Route_object_fZDk.all()

		expect(JSON.parse(JSON.stringify(_Route_object_fZDk))).to.deep.equal({"path":"yV1VlHudqgZtcaUeM","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_UTxL))).to.deep.equal({"path":"yV1VlHudqgZtcaUeM","stack":[],"methods":{}})

		try {
			const _method_function_Gzma = await _Route_object_fZDk.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_eiXp = []
		const _Route_object_RvZZ = new Route(_path_array_eiXp)
		const _req_function_JTGN = () => { };
		const _res_string_lOsZ = "weTbFbMxYz7TqomOUyPLmLSG3Bhplwi";
		const _done_function_yhvt = () => { };
		const _dispatch_function_sGLl = await _Route_object_RvZZ.dispatch(_req_function_JTGN, _res_string_lOsZ, _done_function_yhvt)

		expect(JSON.parse(JSON.stringify(_Route_object_RvZZ))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(_dispatch_function_sGLl).to.equal(undefined)
		expect(JSON.parse(JSON.stringify(_path_array_eiXp))).to.deep.equal([])

		try {
			const _method_function_MFur = await _Route_object_RvZZ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_NTfW = []
		const _Route_object_SQLo = new Route(_path_array_NTfW)

		expect(JSON.parse(JSON.stringify(_Route_object_SQLo))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_NTfW))).to.deep.equal([])

		try {
			const _method_function_SieQ = await _Route_object_SQLo.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_cTKa = "U5FL6rcclSIN5zT5ee3HncPgUe45qxLitFHz2XwHtFBiPfJGe";
		const _Route_object_JMYa = new Route(_path_string_cTKa)

		expect(JSON.parse(JSON.stringify(_Route_object_JMYa))).to.deep.equal({"path":"U5FL6rcclSIN5zT5ee3HncPgUe45qxLitFHz2XwHtFBiPfJGe","stack":[],"methods":{}})

		try {
			const _method_function_ERFj = await _Route_object_JMYa.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_zKPp = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_zKPp))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_OMLT = await _Route_object_zKPp.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_ygyG = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_ygyG))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_mFXp = await _Route_object_ygyG.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_eSFZ = []
		const _Route_object_VHLs = new Route(_path_array_eSFZ)

		expect(JSON.parse(JSON.stringify(_Route_object_VHLs))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_eSFZ))).to.deep.equal([])

		try {
			const _method_function_ayTz = await _Route_object_VHLs.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_skzr = "XvDvV6SE7CRNfDpXKSRsSnbceT21yIGpx1DPXDJjCUcLWSq794SWz0WynlT0qd5Yh4OnYhTH6iZPuIgWpB6r1vqkPQA";
		const _Route_object_LwXm = new Route(_path_string_skzr)

		expect(JSON.parse(JSON.stringify(_Route_object_LwXm))).to.deep.equal({"path":"XvDvV6SE7CRNfDpXKSRsSnbceT21yIGpx1DPXDJjCUcLWSq794SWz0WynlT0qd5Yh4OnYhTH6iZPuIgWpB6r1vqkPQA","stack":[],"methods":{}})

		try {
			const _method_function_hagG = await _Route_object_LwXm.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_yvPB = () => { };
		const _Route_object_ubet = new Route(_path_function_yvPB)
		const _all_function_lDNn = await _Route_object_ubet.all()
		const _all_function_AoXO = await _Route_object_ubet.all()

		expect(JSON.parse(JSON.stringify(_Route_object_ubet))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_AoXO))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_lDNn))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_nkdJ = await _Route_object_ubet.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_rSMH = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_rSMH))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_mjIg = await _Route_object_rSMH.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_xkze = "m5z7C5xxi5muJaJ9NIjH74x4m41sJAoCN3xDfzPb23K0MCMzpFFhWBsjD4iJ6JRmW9fK4AJDh9a9AfQGRTWuqRi";
		const _Route_object_PpUC = new Route(_path_string_xkze)

		expect(JSON.parse(JSON.stringify(_Route_object_PpUC))).to.deep.equal({"path":"m5z7C5xxi5muJaJ9NIjH74x4m41sJAoCN3xDfzPb23K0MCMzpFFhWBsjD4iJ6JRmW9fK4AJDh9a9AfQGRTWuqRi","stack":[],"methods":{}})

		try {
			const _method_function_lEDT = await _Route_object_PpUC.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_nEqz = -4.660512352460502;
		const _Route_object_URTp = new Route(_path_numeric_nEqz)

		expect(JSON.parse(JSON.stringify(_Route_object_URTp))).to.deep.equal({"path":-4.660512352460502,"stack":[],"methods":{}})

		try {
			const _method_function_ZCVY = await _Route_object_URTp.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_nhni = null;
		const _Route_object_MXYY = new Route(_path_null_nhni)
		const __options_function_uFgI = await _Route_object_MXYY._options()

		expect(JSON.parse(JSON.stringify(_Route_object_MXYY))).to.deep.equal({"path":null,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_uFgI))).to.deep.equal([])

		try {
			const _method_function_djcY = await _Route_object_MXYY.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_dIeR = undefined;
		const _Route_object_tgIi = new Route(_path_undefined_dIeR)

		expect(JSON.parse(JSON.stringify(_Route_object_tgIi))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_QRWa = await _Route_object_tgIi.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_TqjH = () => { };
		const _Route_object_TGZx = new Route(_path_function_TqjH)

		expect(JSON.parse(JSON.stringify(_Route_object_TGZx))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_QhAn = await _Route_object_TGZx.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_CzTN = new Route()
		const _all_function_gRFl = await _Route_object_CzTN.all()

		expect(JSON.parse(JSON.stringify(_Route_object_CzTN))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_gRFl))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_BKnT = await _Route_object_CzTN.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_IYfK = 0.6901702872965636;
		const _Route_object_JpbA = new Route(_path_numeric_IYfK)

		expect(JSON.parse(JSON.stringify(_Route_object_JpbA))).to.deep.equal({"path":0.6901702872965636,"stack":[],"methods":{}})

		try {
			const _method_function_YPKl = await _Route_object_JpbA.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_ZicH = () => { };
		const _Route_object_vIjC = new Route(_path_function_ZicH)

		expect(JSON.parse(JSON.stringify(_Route_object_vIjC))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_vPVd = await _Route_object_vIjC.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_DOCk = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_DOCk))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_KSRW = await _Route_object_DOCk.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_CAtk = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_CAtk))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_frLJ = await _Route_object_CAtk.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_NZxT = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_NZxT))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_BXjL = await _Route_object_NZxT.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_KxAo = () => { };
		const _Route_object_DtAp = new Route(_path_function_KxAo)

		expect(JSON.parse(JSON.stringify(_Route_object_DtAp))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_Prdt = await _Route_object_DtAp.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_pGdk = "lIQEGa8ylL9qNxRjYbx8hbLVMgay8Ld33G1HJFPtpHarvi1P7NBGJb9a6hNHQswnhM73Yrbf5dlioGp29uHucBnCXFKB1NkpE";
		const _Route_object_GFoq = new Route(_path_string_pGdk)
		const __options_function_psPH = await _Route_object_GFoq._options()
		const _all_function_vrvh = await _Route_object_GFoq.all()

		expect(JSON.parse(JSON.stringify(_Route_object_GFoq))).to.deep.equal({"path":"lIQEGa8ylL9qNxRjYbx8hbLVMgay8Ld33G1HJFPtpHarvi1P7NBGJb9a6hNHQswnhM73Yrbf5dlioGp29uHucBnCXFKB1NkpE","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_psPH))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_vrvh))).to.deep.equal({"path":"lIQEGa8ylL9qNxRjYbx8hbLVMgay8Ld33G1HJFPtpHarvi1P7NBGJb9a6hNHQswnhM73Yrbf5dlioGp29uHucBnCXFKB1NkpE","stack":[],"methods":{}})

		try {
			const _method_function_ksyg = await _Route_object_GFoq.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_AcGO = false;
		const _Route_object_IZQW = new Route(_path_boolean_AcGO)
		const __options_function_hCyX = await _Route_object_IZQW._options()
		const _all_function_jmGK = await _Route_object_IZQW.all()

		expect(JSON.parse(JSON.stringify(_Route_object_IZQW))).to.deep.equal({"path":false,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_hCyX))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_jmGK))).to.deep.equal({"path":false,"stack":[],"methods":{}})

		try {
			const _method_function_TZIx = await _Route_object_IZQW.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_LppY = null;
		const _Route_object_lgbC = new Route(_path_null_LppY)

		expect(JSON.parse(JSON.stringify(_Route_object_lgbC))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_njMX = await _Route_object_lgbC.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_COlo = () => { };
		const _Route_object_ZkBR = new Route(_path_function_COlo)

		expect(JSON.parse(JSON.stringify(_Route_object_ZkBR))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_TgvX = await _Route_object_ZkBR.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_UVRo = {
		
	}
		const _Route_object_pfrX = new Route(_path_object_UVRo)
		const __options_function_rFwg = await _Route_object_pfrX._options()

		expect(JSON.parse(JSON.stringify(_Route_object_pfrX))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_rFwg))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_path_object_UVRo))).to.deep.equal({})

		try {
			const _method_function_gjxH = await _Route_object_pfrX.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_YAub = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_YAub))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_xHJc = await _Route_object_YAub.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_quHw = null;
		const _Route_object_itbK = new Route(_path_null_quHw)

		expect(JSON.parse(JSON.stringify(_Route_object_itbK))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_EOYh = await _Route_object_itbK.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_vSwR = new Route()
		const _all_function_KNjs = await _Route_object_vSwR.all()

		expect(JSON.parse(JSON.stringify(_Route_object_vSwR))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_KNjs))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_SviI = await _Route_object_vSwR.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_ZPpX = new Route()
		const _all_function_qnWT = await _Route_object_ZPpX.all()

		expect(JSON.parse(JSON.stringify(_Route_object_ZPpX))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_qnWT))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_MBni = await _Route_object_ZPpX.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_zIHB = null;
		const _Route_object_EHsz = new Route(_path_null_zIHB)

		expect(JSON.parse(JSON.stringify(_Route_object_EHsz))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_MSqL = await _Route_object_EHsz.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_FwlE = {
		
	}
		const _Route_object_KavE = new Route(_path_object_FwlE)

		expect(JSON.parse(JSON.stringify(_Route_object_KavE))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_FwlE))).to.deep.equal({})

		try {
			const _method_function_pWIo = await _Route_object_KavE.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_etyK = 7.8686473799258;
		const _Route_object_UBVI = new Route(_path_numeric_etyK)
		const __options_function_zyWJ = await _Route_object_UBVI._options()

		expect(JSON.parse(JSON.stringify(_Route_object_UBVI))).to.deep.equal({"path":7.8686473799258,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_zyWJ))).to.deep.equal([])

		try {
			const _method_function_wYgL = await _Route_object_UBVI.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_aIAq = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_aIAq))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_bhab = await _Route_object_aIAq.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_QoWa = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_QoWa))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_sLyP = await _Route_object_QoWa.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_hMnX = "vfNoQk2FDMqkqr";
		const _Route_object_zdfN = new Route(_path_string_hMnX)
		const __options_function_RaVo = await _Route_object_zdfN._options()
		const _all_function_rMFZ = await _Route_object_zdfN.all()

		expect(JSON.parse(JSON.stringify(_Route_object_zdfN))).to.deep.equal({"path":"vfNoQk2FDMqkqr","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_RaVo))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_rMFZ))).to.deep.equal({"path":"vfNoQk2FDMqkqr","stack":[],"methods":{}})

		try {
			const _method_function_ZQSz = await _Route_object_zdfN.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_qSbJ = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_qSbJ))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_GfwY = await _Route_object_qSbJ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_ZPJK = undefined;
		const _Route_object_uGuR = new Route(_path_undefined_ZPJK)
		const _all_function_Xkxa = await _Route_object_uGuR.all()

		expect(JSON.parse(JSON.stringify(_Route_object_uGuR))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_Xkxa))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_GlaT = await _Route_object_uGuR.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_GFay = 3.8143692726523586;
		const _Route_object_erSk = new Route(_path_numeric_GFay)
		const _all_function_WXTO = await _Route_object_erSk.all()

		expect(JSON.parse(JSON.stringify(_Route_object_erSk))).to.deep.equal({"path":3.8143692726523586,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_WXTO))).to.deep.equal({"path":3.8143692726523586,"stack":[],"methods":{}})

		try {
			const _method_function_Duoa = await _Route_object_erSk.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_BfFR = true;
		const _Route_object_xQBq = new Route(_path_boolean_BfFR)
		const _all_function_BwmS = await _Route_object_xQBq.all()

		expect(JSON.parse(JSON.stringify(_Route_object_xQBq))).to.deep.equal({"path":true,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_BwmS))).to.deep.equal({"path":true,"stack":[],"methods":{}})

		try {
			const _method_function_RItE = await _Route_object_xQBq.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_haVb = "pXEzUjzebWPA";
		const _Route_object_HeWR = new Route(_path_string_haVb)
		const __options_function_sbXg = await _Route_object_HeWR._options()

		expect(JSON.parse(JSON.stringify(_Route_object_HeWR))).to.deep.equal({"path":"pXEzUjzebWPA","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_sbXg))).to.deep.equal([])

		try {
			const _method_function_piuN = await _Route_object_HeWR.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_oHjh = new Route()
		const _all_function_ecqw = await _Route_object_oHjh.all()

		expect(JSON.parse(JSON.stringify(_Route_object_oHjh))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_ecqw))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_hhYP = await _Route_object_oHjh.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_beIy = null;
		const _Route_object_CurJ = new Route(_path_null_beIy)

		expect(JSON.parse(JSON.stringify(_Route_object_CurJ))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_QeGe = await _Route_object_CurJ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_NfZH = () => { };
		const _Route_object_LLRV = new Route(_path_function_NfZH)
		const _req_undefined_xxfN = undefined;
		const _res_undefined_lNwq = undefined;
		const _done_function_SCNB = () => { };
		const _dispatch_function_yKeo = await _Route_object_LLRV.dispatch(_req_undefined_xxfN, _res_undefined_lNwq, _done_function_SCNB)

		expect(JSON.parse(JSON.stringify(_Route_object_LLRV))).to.deep.equal({"stack":[],"methods":{}})
		expect(_dispatch_function_yKeo).to.equal(undefined)

		try {
			const _method_function_lGKY = await _Route_object_LLRV.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_KzQl = new Route()
		const _all_function_Slol = await _Route_object_KzQl.all()

		expect(JSON.parse(JSON.stringify(_Route_object_KzQl))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_Slol))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_snwp = await _Route_object_KzQl.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_wWeb = new Route()
		const _all_function_SQsR = await _Route_object_wWeb.all()

		expect(JSON.parse(JSON.stringify(_Route_object_wWeb))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_SQsR))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_IEnx = await _Route_object_wWeb.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_kFeR = "kQvgmuliDDxcMmZoOo98n1GG1CHTy";
		const _Route_object_PVch = new Route(_path_string_kFeR)
		const __options_function_FTwj = await _Route_object_PVch._options()

		expect(JSON.parse(JSON.stringify(_Route_object_PVch))).to.deep.equal({"path":"kQvgmuliDDxcMmZoOo98n1GG1CHTy","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_FTwj))).to.deep.equal([])

		try {
			const _method_function_dgkN = await _Route_object_PVch.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_yOrs = undefined;
		const _Route_object_mhMj = new Route(_path_undefined_yOrs)
		const __options_function_jRML = await _Route_object_mhMj._options()

		expect(JSON.parse(JSON.stringify(_Route_object_mhMj))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_jRML))).to.deep.equal([])

		try {
			const _method_function_KEvO = await _Route_object_mhMj.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_sXFN = () => { };
		const _Route_object_qdrY = new Route(_path_function_sXFN)
		const _method_string_STXI = "C87XTZ9Hxqohusc3tcI6ySEALrgAqutKT2fOnTbRBD";
		const __handles_method_function_LeGQ = await _Route_object_qdrY._handles_method(_method_string_STXI)
		const __options_function_SKHF = await _Route_object_qdrY._options()

		expect(JSON.parse(JSON.stringify(_Route_object_qdrY))).to.deep.equal({"stack":[],"methods":{}})
		expect(__handles_method_function_LeGQ).to.equal(false)
		expect(JSON.parse(JSON.stringify(__options_function_SKHF))).to.deep.equal([])

		try {
			const _method_function_vMHX = await _Route_object_qdrY.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_aCgL = new Route()
		const _all_function_whMz = await _Route_object_aCgL.all()

		expect(JSON.parse(JSON.stringify(_Route_object_aCgL))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_whMz))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_CPpr = await _Route_object_aCgL.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_cLRD = []
		const _Route_object_Wbsk = new Route(_path_array_cLRD)

		expect(JSON.parse(JSON.stringify(_Route_object_Wbsk))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_cLRD))).to.deep.equal([])

		try {
			const _method_function_GAjL = await _Route_object_Wbsk.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_mGUb = undefined;
		const _Route_object_jZBP = new Route(_path_undefined_mGUb)

		expect(JSON.parse(JSON.stringify(_Route_object_jZBP))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_PoxV = await _Route_object_jZBP.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_RLPS = "fcWvV";
		const _Route_object_YkGp = new Route(_path_string_RLPS)

		expect(JSON.parse(JSON.stringify(_Route_object_YkGp))).to.deep.equal({"path":"fcWvV","stack":[],"methods":{}})

		try {
			const _method_function_txaj = await _Route_object_YkGp.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_rwVv = "8QVgMoIpp0AaM";
		const _Route_object_quhM = new Route(_path_string_rwVv)
		const __options_function_xdjP = await _Route_object_quhM._options()

		expect(JSON.parse(JSON.stringify(_Route_object_quhM))).to.deep.equal({"path":"8QVgMoIpp0AaM","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_xdjP))).to.deep.equal([])

		try {
			const _method_function_wnpZ = await _Route_object_quhM.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_CBxK = null;
		const _Route_object_XDEx = new Route(_path_null_CBxK)
		const __options_function_aXcp = await _Route_object_XDEx._options()

		expect(JSON.parse(JSON.stringify(_Route_object_XDEx))).to.deep.equal({"path":null,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_aXcp))).to.deep.equal([])

		try {
			const _method_function_QokE = await _Route_object_XDEx.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_vEDm = 0.9441875385515708;
		const _Route_object_oGNN = new Route(_path_numeric_vEDm)

		expect(JSON.parse(JSON.stringify(_Route_object_oGNN))).to.deep.equal({"path":0.9441875385515708,"stack":[],"methods":{}})

		try {
			const _method_function_iYfs = await _Route_object_oGNN.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_YvFL = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_YvFL))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_FYzR = await _Route_object_YvFL.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_Kxfv = undefined;
		const _Route_object_oHVf = new Route(_path_undefined_Kxfv)

		expect(JSON.parse(JSON.stringify(_Route_object_oHVf))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_qzLu = await _Route_object_oHVf.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_iyQH = 1.7838062250317392;
		const _Route_object_hfLt = new Route(_path_numeric_iyQH)

		expect(JSON.parse(JSON.stringify(_Route_object_hfLt))).to.deep.equal({"path":1.7838062250317392,"stack":[],"methods":{}})

		try {
			const _method_function_BQsv = await _Route_object_hfLt.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_fMlr = "oSQEf2SmEHFu19sLShyS8P2hCN4";
		const _Route_object_AITg = new Route(_path_string_fMlr)

		expect(JSON.parse(JSON.stringify(_Route_object_AITg))).to.deep.equal({"path":"oSQEf2SmEHFu19sLShyS8P2hCN4","stack":[],"methods":{}})

		try {
			const _method_function_qcOf = await _Route_object_AITg.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_pyFE = null;
		const _Route_object_NZYe = new Route(_path_null_pyFE)
		const __options_function_omIA = await _Route_object_NZYe._options()
		const __options_function_mFeF = await _Route_object_NZYe._options()

		expect(JSON.parse(JSON.stringify(_Route_object_NZYe))).to.deep.equal({"path":null,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_mFeF))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(__options_function_omIA))).to.deep.equal([])

		try {
			const _method_function_qNgg = await _Route_object_NZYe.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_WggP = undefined;
		const _Route_object_NeMk = new Route(_path_undefined_WggP)

		expect(JSON.parse(JSON.stringify(_Route_object_NeMk))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_QOys = await _Route_object_NeMk.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_Ktqd = "8jB5fralm4zUOQ2K6YsIUSktH7C1MiUUTN8fThpMtIMpBehDRmrQmrd2f5JVR133RDsiUMthwjEIrawYh21fnV9JQJbypnU";
		const _Route_object_vJBt = new Route(_path_string_Ktqd)

		expect(JSON.parse(JSON.stringify(_Route_object_vJBt))).to.deep.equal({"path":"8jB5fralm4zUOQ2K6YsIUSktH7C1MiUUTN8fThpMtIMpBehDRmrQmrd2f5JVR133RDsiUMthwjEIrawYh21fnV9JQJbypnU","stack":[],"methods":{}})

		try {
			const _method_function_dEJF = await _Route_object_vJBt.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_mHcJ = -2.018066849390289;
		const _Route_object_IzXt = new Route(_path_numeric_mHcJ)

		expect(JSON.parse(JSON.stringify(_Route_object_IzXt))).to.deep.equal({"path":-2.018066849390289,"stack":[],"methods":{}})

		try {
			const _method_function_fojN = await _Route_object_IzXt.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_CWqI = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_CWqI))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_FaKv = await _Route_object_CWqI.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_IyyT = true;
		const _Route_object_ryut = new Route(_path_boolean_IyyT)
		const _req_object_boqk = {
		
	}
		const _res_function_xAUs = () => { };
		const _done_function_XtFh = () => { };
		const _dispatch_function_SkBX = await _Route_object_ryut.dispatch(_req_object_boqk, _res_function_xAUs, _done_function_XtFh)
		const _all_function_neYI = await _Route_object_ryut.all()
		const __options_function_ngqW = await _Route_object_ryut._options()

		expect(JSON.parse(JSON.stringify(_Route_object_ryut))).to.deep.equal({"path":true,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_ngqW))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_neYI))).to.deep.equal({"path":true,"stack":[],"methods":{}})
		expect(_dispatch_function_SkBX).to.equal(undefined)
		expect(JSON.parse(JSON.stringify(_req_object_boqk))).to.deep.equal({})

		try {
			const _method_function_HeVL = await _Route_object_ryut.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_mLNw = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_mLNw))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_VIbD = await _Route_object_mLNw.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_cauN = null;
		const _Route_object_CJuY = new Route(_path_null_cauN)
		const __options_function_sowd = await _Route_object_CJuY._options()

		expect(JSON.parse(JSON.stringify(_Route_object_CJuY))).to.deep.equal({"path":null,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_sowd))).to.deep.equal([])

		try {
			const _method_function_sxGk = await _Route_object_CJuY.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_pliA = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_pliA))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_gZoV = await _Route_object_pliA.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_YtdU = true;
		const _Route_object_boTG = new Route(_path_boolean_YtdU)
		const _all_function_cWnu = await _Route_object_boTG.all()
		const __options_function_XDbR = await _Route_object_boTG._options()

		expect(JSON.parse(JSON.stringify(_Route_object_boTG))).to.deep.equal({"path":true,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_XDbR))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_cWnu))).to.deep.equal({"path":true,"stack":[],"methods":{}})

		try {
			const _method_function_SFBv = await _Route_object_boTG.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_YcBI = "hKQcPA3wuvJvztzuIbsi6uvS1ntTxUnUIIwBmvzhrNmcKhY5C4IKHHwFNLHCaulIR2";
		const _Route_object_MWzg = new Route(_path_string_YcBI)

		expect(JSON.parse(JSON.stringify(_Route_object_MWzg))).to.deep.equal({"path":"hKQcPA3wuvJvztzuIbsi6uvS1ntTxUnUIIwBmvzhrNmcKhY5C4IKHHwFNLHCaulIR2","stack":[],"methods":{}})

		try {
			const _method_function_vFBI = await _Route_object_MWzg.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_yLjw = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_yLjw))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_XIut = await _Route_object_yLjw.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_zQkD = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_zQkD))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_ecNW = await _Route_object_zQkD.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_Urjd = "qLrnuSZz27XkenkL6H4j8G7pGCEStkRrSpqXyBkVAVSMalVhirlDjIRHTn";
		const _Route_object_TKaJ = new Route(_path_string_Urjd)

		expect(JSON.parse(JSON.stringify(_Route_object_TKaJ))).to.deep.equal({"path":"qLrnuSZz27XkenkL6H4j8G7pGCEStkRrSpqXyBkVAVSMalVhirlDjIRHTn","stack":[],"methods":{}})

		try {
			const _method_function_Qxyb = await _Route_object_TKaJ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_mDdG = false;
		const _Route_object_xKFP = new Route(_path_boolean_mDdG)
		const __options_function_BMuR = await _Route_object_xKFP._options()

		expect(JSON.parse(JSON.stringify(_Route_object_xKFP))).to.deep.equal({"path":false,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_BMuR))).to.deep.equal([])

		try {
			const _method_function_hbOe = await _Route_object_xKFP.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_GamP = undefined;
		const _Route_object_RzLl = new Route(_path_undefined_GamP)
		const _all_function_GLjS = await _Route_object_RzLl.all()

		expect(JSON.parse(JSON.stringify(_Route_object_RzLl))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_GLjS))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_QZSk = await _Route_object_RzLl.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_hilM = "t3T07F1VltmbbCj39fUGettnRuQzARPi6ytk1sE0bH1qA4urXHgEPXTyiSXRbhitk7pmxfmqsS3lOLykLq1L0D6lN3ec7XvGS";
		const _Route_object_jvLE = new Route(_path_string_hilM)

		expect(JSON.parse(JSON.stringify(_Route_object_jvLE))).to.deep.equal({"path":"t3T07F1VltmbbCj39fUGettnRuQzARPi6ytk1sE0bH1qA4urXHgEPXTyiSXRbhitk7pmxfmqsS3lOLykLq1L0D6lN3ec7XvGS","stack":[],"methods":{}})

		try {
			const _method_function_hLsQ = await _Route_object_jvLE.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_Wkoe = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_Wkoe))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_vaPv = await _Route_object_Wkoe.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_Ovsz = () => { };
		const _Route_object_PBle = new Route(_path_function_Ovsz)

		expect(JSON.parse(JSON.stringify(_Route_object_PBle))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_wVQR = await _Route_object_PBle.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_qlha = null;
		const _Route_object_oKeq = new Route(_path_null_qlha)

		expect(JSON.parse(JSON.stringify(_Route_object_oKeq))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_rQMW = await _Route_object_oKeq.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_MpjT = -3.8465236721613607;
		const _Route_object_sPwm = new Route(_path_numeric_MpjT)

		expect(JSON.parse(JSON.stringify(_Route_object_sPwm))).to.deep.equal({"path":-3.8465236721613607,"stack":[],"methods":{}})

		try {
			const _method_function_GXXF = await _Route_object_sPwm.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_rgQg = () => { };
		const _Route_object_cQQZ = new Route(_path_function_rgQg)

		expect(JSON.parse(JSON.stringify(_Route_object_cQQZ))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_ZLUw = await _Route_object_cQQZ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_kNev = false;
		const _Route_object_EgMx = new Route(_path_boolean_kNev)
		const _req_undefined_jQpA = undefined;
		const _res_array_kEaR = []
		const _done_function_muhO = () => { };
		const _dispatch_function_THqf = await _Route_object_EgMx.dispatch(_req_undefined_jQpA, _res_array_kEaR, _done_function_muhO)

		expect(JSON.parse(JSON.stringify(_Route_object_EgMx))).to.deep.equal({"path":false,"stack":[],"methods":{}})
		expect(_dispatch_function_THqf).to.equal(undefined)
		expect(JSON.parse(JSON.stringify(_res_array_kEaR))).to.deep.equal([])

		try {
			const _method_function_tVPh = await _Route_object_EgMx.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_QFpt = []
		const _Route_object_DLyf = new Route(_path_array_QFpt)

		expect(JSON.parse(JSON.stringify(_Route_object_DLyf))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_QFpt))).to.deep.equal([])

		try {
			const _method_function_Jlan = await _Route_object_DLyf.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_anFk = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_anFk))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_ZTrP = await _Route_object_anFk.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_vsPY = new Route()
		const _all_function_Rvhm = await _Route_object_vsPY.all()

		expect(JSON.parse(JSON.stringify(_Route_object_vsPY))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_Rvhm))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_oSnG = await _Route_object_vsPY.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_bumY = null;
		const _Route_object_WIgA = new Route(_path_null_bumY)

		expect(JSON.parse(JSON.stringify(_Route_object_WIgA))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_CTpl = await _Route_object_WIgA.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_Zpwy = null;
		const _Route_object_ovNw = new Route(_path_null_Zpwy)
		const _all_function_KSLe = await _Route_object_ovNw.all()

		expect(JSON.parse(JSON.stringify(_Route_object_ovNw))).to.deep.equal({"path":null,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_KSLe))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_UHgl = await _Route_object_ovNw.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_hSKm = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_hSKm))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_zYsf = await _Route_object_hSKm.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_pRge = new Route()
		const _all_function_MaGD = await _Route_object_pRge.all()

		expect(JSON.parse(JSON.stringify(_Route_object_pRge))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_MaGD))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_YhXW = await _Route_object_pRge.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_Nson = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_Nson))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_edLb = await _Route_object_Nson.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_Mqdt = "oWbSXewgjfxs6VCqHKrl9rcp3KVCzc";
		const _Route_object_dsGM = new Route(_path_string_Mqdt)

		expect(JSON.parse(JSON.stringify(_Route_object_dsGM))).to.deep.equal({"path":"oWbSXewgjfxs6VCqHKrl9rcp3KVCzc","stack":[],"methods":{}})

		try {
			const _method_function_tMVV = await _Route_object_dsGM.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_uCcx = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_uCcx))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_yYxC = await _Route_object_uCcx.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_qEWI = "CSASBfRG7H5b2JceWpjWJaqx3HhHt5iYeaNGPbw";
		const _Route_object_aclR = new Route(_path_string_qEWI)

		expect(JSON.parse(JSON.stringify(_Route_object_aclR))).to.deep.equal({"path":"CSASBfRG7H5b2JceWpjWJaqx3HhHt5iYeaNGPbw","stack":[],"methods":{}})

		try {
			const _method_function_WgwH = await _Route_object_aclR.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_QKMf = true;
		const _Route_object_INAx = new Route(_path_boolean_QKMf)
		const __options_function_wUgj = await _Route_object_INAx._options()
		const __options_function_Sbuh = await _Route_object_INAx._options()
		const __options_function_bFuU = await _Route_object_INAx._options()

		expect(JSON.parse(JSON.stringify(_Route_object_INAx))).to.deep.equal({"path":true,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_Sbuh))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(__options_function_bFuU))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(__options_function_wUgj))).to.deep.equal([])

		try {
			const _method_function_gzlg = await _Route_object_INAx.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_udPr = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_udPr))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_wqJg = await _Route_object_udPr.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_HSpL = "9rMwkSyzTAJm0OV9RqXBVrtD5bWT53X79";
		const _Route_object_LhMw = new Route(_path_string_HSpL)
		const __options_function_CMdU = await _Route_object_LhMw._options()
		const __options_function_YoPz = await _Route_object_LhMw._options()

		expect(JSON.parse(JSON.stringify(_Route_object_LhMw))).to.deep.equal({"path":"9rMwkSyzTAJm0OV9RqXBVrtD5bWT53X79","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_CMdU))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(__options_function_YoPz))).to.deep.equal([])

		try {
			const _method_function_KBmD = await _Route_object_LhMw.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_QqGN = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_QqGN))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_bhcZ = await _Route_object_QqGN.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_JOum = undefined;
		const _Route_object_VfZu = new Route(_path_undefined_JOum)

		expect(JSON.parse(JSON.stringify(_Route_object_VfZu))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_wJvW = await _Route_object_VfZu.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_TAWo = {
		
	}
		const _Route_object_tCsL = new Route(_path_object_TAWo)
		const _all_function_ozwT = await _Route_object_tCsL.all()

		expect(JSON.parse(JSON.stringify(_Route_object_tCsL))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_ozwT))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_TAWo))).to.deep.equal({})

		try {
			const _method_function_rvrF = await _Route_object_tCsL.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_sTOO = true;
		const _Route_object_vgnD = new Route(_path_boolean_sTOO)

		expect(JSON.parse(JSON.stringify(_Route_object_vgnD))).to.deep.equal({"path":true,"stack":[],"methods":{}})

		try {
			const _method_function_eGtI = await _Route_object_vgnD.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_JbVN = new Route()
		const _all_function_ehlw = await _Route_object_JbVN.all()

		expect(JSON.parse(JSON.stringify(_Route_object_JbVN))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_ehlw))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_ZJqr = await _Route_object_JbVN.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_DJOW = "9sVYlGRrzu2BCi2184nr727S";
		const _Route_object_ZPdF = new Route(_path_string_DJOW)

		expect(JSON.parse(JSON.stringify(_Route_object_ZPdF))).to.deep.equal({"path":"9sVYlGRrzu2BCi2184nr727S","stack":[],"methods":{}})

		try {
			const _method_function_FLjD = await _Route_object_ZPdF.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_YEBK = () => { };
		const _Route_object_YJoP = new Route(_path_function_YEBK)

		expect(JSON.parse(JSON.stringify(_Route_object_YJoP))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_omyD = await _Route_object_YJoP.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_RNcM = undefined;
		const _Route_object_yKZF = new Route(_path_undefined_RNcM)
		const __options_function_YDST = await _Route_object_yKZF._options()

		expect(JSON.parse(JSON.stringify(_Route_object_yKZF))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_YDST))).to.deep.equal([])

		try {
			const _method_function_fRwm = await _Route_object_yKZF.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_hAyc = {
		
	}
		const _Route_object_dYSC = new Route(_path_object_hAyc)

		expect(JSON.parse(JSON.stringify(_Route_object_dYSC))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_hAyc))).to.deep.equal({})

		try {
			const _method_function_kvFu = await _Route_object_dYSC.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_SQeN = {
		
	}
		const _Route_object_mQdm = new Route(_path_object_SQeN)

		expect(JSON.parse(JSON.stringify(_Route_object_mQdm))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_SQeN))).to.deep.equal({})

		try {
			const _method_function_bsGT = await _Route_object_mQdm.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_XJgh = undefined;
		const _Route_object_rqIs = new Route(_path_undefined_XJgh)

		expect(JSON.parse(JSON.stringify(_Route_object_rqIs))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_pFup = await _Route_object_rqIs.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_lSGw = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_lSGw))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_IjBT = await _Route_object_lSGw.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_pTPr = "RUOOPRyARrqe0nYNBzOpgj78mzqcYysF9vTg";
		const _Route_object_MtHb = new Route(_path_string_pTPr)

		expect(JSON.parse(JSON.stringify(_Route_object_MtHb))).to.deep.equal({"path":"RUOOPRyARrqe0nYNBzOpgj78mzqcYysF9vTg","stack":[],"methods":{}})

		try {
			const _method_function_hpPx = await _Route_object_MtHb.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_PNoL = []
		const _Route_object_kFCu = new Route(_path_array_PNoL)

		expect(JSON.parse(JSON.stringify(_Route_object_kFCu))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_PNoL))).to.deep.equal([])

		try {
			const _method_function_zTRz = await _Route_object_kFCu.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_UfCy = false;
		const _Route_object_YksH = new Route(_path_boolean_UfCy)
		const _method_string_lNgh = "qdTovra";
		const __handles_method_function_DiPK = await _Route_object_YksH._handles_method(_method_string_lNgh)
		const _all_function_omfw = await _Route_object_YksH.all()

		expect(JSON.parse(JSON.stringify(_Route_object_YksH))).to.deep.equal({"path":false,"stack":[],"methods":{}})
		expect(__handles_method_function_DiPK).to.equal(false)
		expect(JSON.parse(JSON.stringify(_all_function_omfw))).to.deep.equal({"path":false,"stack":[],"methods":{}})

		try {
			const _method_function_tZxa = await _Route_object_YksH.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_Xhsk = 0.6165848576937236;
		const _Route_object_aaWI = new Route(_path_numeric_Xhsk)

		expect(JSON.parse(JSON.stringify(_Route_object_aaWI))).to.deep.equal({"path":0.6165848576937236,"stack":[],"methods":{}})

		try {
			const _method_function_pdiQ = await _Route_object_aaWI.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_hOSv = false;
		const _Route_object_QgtG = new Route(_path_boolean_hOSv)

		expect(JSON.parse(JSON.stringify(_Route_object_QgtG))).to.deep.equal({"path":false,"stack":[],"methods":{}})

		try {
			const _method_function_GILB = await _Route_object_QgtG.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_lzJn = new Route()
		const __options_function_dSOL = await _Route_object_lzJn._options()
		const _all_function_bBXP = await _Route_object_lzJn.all()

		expect(JSON.parse(JSON.stringify(_Route_object_lzJn))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_dSOL))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_bBXP))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_cJnw = await _Route_object_lzJn.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_GjDJ = 1.7378449697640956;
		const _Route_object_TJOf = new Route(_path_numeric_GjDJ)
		const _all_function_QfaY = await _Route_object_TJOf.all()

		expect(JSON.parse(JSON.stringify(_Route_object_TJOf))).to.deep.equal({"path":1.7378449697640956,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_QfaY))).to.deep.equal({"path":1.7378449697640956,"stack":[],"methods":{}})

		try {
			const _method_function_scqs = await _Route_object_TJOf.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_Lymn = -9.580037950047824;
		const _Route_object_ZbNG = new Route(_path_numeric_Lymn)
		const _all_function_wIji = await _Route_object_ZbNG.all()
		const _method_string_Vagr = "KWZkaKX6GErmeiTFi2aitO3d9OLAB1OdJNOE0ERnDBWNodT0CjtoTXdHcqIGxq";
		const __handles_method_function_iErO = await _Route_object_ZbNG._handles_method(_method_string_Vagr)

		expect(JSON.parse(JSON.stringify(_Route_object_ZbNG))).to.deep.equal({"path":-9.580037950047824,"stack":[],"methods":{}})
		expect(__handles_method_function_iErO).to.equal(false)
		expect(JSON.parse(JSON.stringify(_all_function_wIji))).to.deep.equal({"path":-9.580037950047824,"stack":[],"methods":{}})

		try {
			const _method_function_hofw = await _Route_object_ZbNG.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_KThj = false;
		const _Route_object_iRTO = new Route(_path_boolean_KThj)

		expect(JSON.parse(JSON.stringify(_Route_object_iRTO))).to.deep.equal({"path":false,"stack":[],"methods":{}})

		try {
			const _method_function_qSiL = await _Route_object_iRTO.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_VIut = undefined;
		const _Route_object_RVqJ = new Route(_path_undefined_VIut)

		expect(JSON.parse(JSON.stringify(_Route_object_RVqJ))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_xPMK = await _Route_object_RVqJ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_FfLn = new Route()
		const _all_function_Mqvw = await _Route_object_FfLn.all()

		expect(JSON.parse(JSON.stringify(_Route_object_FfLn))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_Mqvw))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_GXvm = await _Route_object_FfLn.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_NzFp = () => { };
		const _Route_object_OqQJ = new Route(_path_function_NzFp)

		expect(JSON.parse(JSON.stringify(_Route_object_OqQJ))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_wpCp = await _Route_object_OqQJ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_jQwa = new Route()
		const __options_function_Xspe = await _Route_object_jQwa._options()

		expect(JSON.parse(JSON.stringify(_Route_object_jQwa))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_Xspe))).to.deep.equal([])

		try {
			const _method_function_urkv = await _Route_object_jQwa.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_BspM = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_BspM))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_fqkz = await _Route_object_BspM.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_lKCX = []
		const _Route_object_BIME = new Route(_path_array_lKCX)

		expect(JSON.parse(JSON.stringify(_Route_object_BIME))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_lKCX))).to.deep.equal([])

		try {
			const _method_function_kfgh = await _Route_object_BIME.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_Yaje = "uiekoUwTK287VLLjLF74z2lkPf";
		const _Route_object_wriB = new Route(_path_string_Yaje)
		const _all_function_OGeu = await _Route_object_wriB.all()
		const __options_function_uHCg = await _Route_object_wriB._options()

		expect(JSON.parse(JSON.stringify(_Route_object_wriB))).to.deep.equal({"path":"uiekoUwTK287VLLjLF74z2lkPf","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_uHCg))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_OGeu))).to.deep.equal({"path":"uiekoUwTK287VLLjLF74z2lkPf","stack":[],"methods":{}})

		try {
			const _method_function_zLla = await _Route_object_wriB.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_wjQC = new Route()
		const _all_function_DNfq = await _Route_object_wjQC.all()
		const _all_function_czyN = await _Route_object_wjQC.all()

		expect(JSON.parse(JSON.stringify(_Route_object_wjQC))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_DNfq))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_czyN))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_rXQw = await _Route_object_wjQC.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);
})