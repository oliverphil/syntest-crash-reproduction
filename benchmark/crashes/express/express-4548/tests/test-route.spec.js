const Route = require("../../benchmark/crashes/express/express-4548/node_modules/express/lib/router/route.js");
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('route', () => {
	it('test for route', async () => {
		const _Route_object_yAMd = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_yAMd))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const __handles_method_function_XXjJ = await _Route_object_yAMd._handles_method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_nemL = false;
		const _Route_object_uXaB = new Route(_path_boolean_nemL)

		expect(JSON.parse(JSON.stringify(_Route_object_uXaB))).to.deep.equal({"path":false,"stack":[],"methods":{}})

		try {
			const _method_function_sfmb = await _Route_object_uXaB.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_wOnL = null;
		const _Route_object_RHnf = new Route(_path_null_wOnL)
		const __options_function_Wjig = await _Route_object_RHnf._options()
		const _req_object_dWMM = {
		
	}
		const _res_null_InQX = null;
		const _done_undefined_pASc = undefined;

		expect(JSON.parse(JSON.stringify(_Route_object_RHnf))).to.deep.equal({"path":null,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_Wjig))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_req_object_dWMM))).to.deep.equal({})

		try {
			const _dispatch_function_VPOB = await _Route_object_RHnf.dispatch(_req_object_dWMM, _res_null_InQX, _done_undefined_pASc)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_GQFy = []
		const _Route_object_pDZw = new Route(_path_array_GQFy)
		const __options_function_nHcM = await _Route_object_pDZw._options()

		expect(JSON.parse(JSON.stringify(_Route_object_pDZw))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_nHcM))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_path_array_GQFy))).to.deep.equal([])

		try {
			const _method_function_qqSS = await _Route_object_pDZw.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_myut = new Route()
		const __options_function_iVvu = await _Route_object_myut._options()
		const __options_function_qgum = await _Route_object_myut._options()
		const _method_null_AmKj = null;

		expect(JSON.parse(JSON.stringify(_Route_object_myut))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_iVvu))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(__options_function_qgum))).to.deep.equal([])

		try {
			const __handles_method_function_EVnX = await _Route_object_myut._handles_method(_method_null_AmKj)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_AFOo = -5.422770979967158;
		const _Route_object_Bapw = new Route(_path_numeric_AFOo)
		const _all_function_QEnR = await _Route_object_Bapw.all()

		expect(JSON.parse(JSON.stringify(_Route_object_Bapw))).to.deep.equal({"path":-5.422770979967158,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_QEnR))).to.deep.equal({"path":-5.422770979967158,"stack":[],"methods":{}})

		try {
			const _method_function_vpaS = await _Route_object_Bapw.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_MLsy = null;
		const _Route_object_UyHw = new Route(_path_null_MLsy)

		expect(JSON.parse(JSON.stringify(_Route_object_UyHw))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_EOxE = await _Route_object_UyHw.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_cHcn = true;
		const _Route_object_dHfx = new Route(_path_boolean_cHcn)
		const _method_object_wpeM = {
		
	}

		expect(JSON.parse(JSON.stringify(_Route_object_dHfx))).to.deep.equal({"path":true,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_method_object_wpeM))).to.deep.equal({})

		try {
			const __handles_method_function_akwC = await _Route_object_dHfx._handles_method(_method_object_wpeM)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_KJkC = "kOWNqnO6dnIOxCjEsZlxsaeGPdrsVbmI27Ltlyox9rNSt1wgC65gxY0rHX9brakPUcZsIh7LYavu";
		const _Route_object_ixWy = new Route(_path_string_KJkC)

		expect(JSON.parse(JSON.stringify(_Route_object_ixWy))).to.deep.equal({"path":"kOWNqnO6dnIOxCjEsZlxsaeGPdrsVbmI27Ltlyox9rNSt1wgC65gxY0rHX9brakPUcZsIh7LYavu","stack":[],"methods":{}})

		try {
			const _method_function_RCYe = await _Route_object_ixWy.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_GGMX = () => { };
		const _Route_object_EBwJ = new Route(_path_function_GGMX)
		const _method_string_wLUI = "UiUus7QWQPUpaBiLRFs64omcxjHvNRFMb6pgVu4zrpjBuU57KTtkzR3BaooxgfnxEL4Tkyy";
		const __handles_method_function_Bjlo = await _Route_object_EBwJ._handles_method(_method_string_wLUI)

		expect(JSON.parse(JSON.stringify(_Route_object_EBwJ))).to.deep.equal({"stack":[],"methods":{}})
		expect(__handles_method_function_Bjlo).to.equal(false)

		try {
			const _method_function_xiEd = await _Route_object_EBwJ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_esQy = new Route()
		const _all_function_XFee = await _Route_object_esQy.all()
		const _all_function_uyIH = await _Route_object_esQy.all()

		expect(JSON.parse(JSON.stringify(_Route_object_esQy))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_XFee))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_uyIH))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_NvCU = await _Route_object_esQy.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_tfyT = {
		
	}
		const _Route_object_Sdpe = new Route(_path_object_tfyT)
		const __options_function_zIKc = await _Route_object_Sdpe._options()

		expect(JSON.parse(JSON.stringify(_Route_object_Sdpe))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_zIKc))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_path_object_tfyT))).to.deep.equal({})

		try {
			const _method_function_tAuP = await _Route_object_Sdpe.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_dVNz = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_dVNz))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_sOIB = await _Route_object_dVNz.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_CqQP = "Po2evim";
		const _Route_object_GCmT = new Route(_path_string_CqQP)

		expect(JSON.parse(JSON.stringify(_Route_object_GCmT))).to.deep.equal({"path":"Po2evim","stack":[],"methods":{}})

		try {
			const _method_function_fiUx = await _Route_object_GCmT.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_xtqy = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_xtqy))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_HjMG = await _Route_object_xtqy.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_sHSP = () => { };
		const _Route_object_TWuy = new Route(_path_function_sHSP)

		expect(JSON.parse(JSON.stringify(_Route_object_TWuy))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_mSFj = await _Route_object_TWuy.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_kZqK = {
		
	}
		const _Route_object_IOIQ = new Route(_path_object_kZqK)

		expect(JSON.parse(JSON.stringify(_Route_object_IOIQ))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_kZqK))).to.deep.equal({})

		try {
			const _method_function_lLeW = await _Route_object_IOIQ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_zAfj = undefined;
		const _Route_object_jowZ = new Route(_path_undefined_zAfj)

		expect(JSON.parse(JSON.stringify(_Route_object_jowZ))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_lgXk = await _Route_object_jowZ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_Etff = new Route()
		const _all_function_YsVQ = await _Route_object_Etff.all()
		const __options_function_JFUF = await _Route_object_Etff._options()

		expect(JSON.parse(JSON.stringify(_Route_object_Etff))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_JFUF))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_YsVQ))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_goGH = await _Route_object_Etff.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_LGAB = {
		
	}
		const _Route_object_KlpJ = new Route(_path_object_LGAB)

		expect(JSON.parse(JSON.stringify(_Route_object_KlpJ))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_LGAB))).to.deep.equal({})

		try {
			const _method_function_xwBI = await _Route_object_KlpJ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_asXc = () => { };
		const _Route_object_DnnS = new Route(_path_function_asXc)
		const __options_function_JIfA = await _Route_object_DnnS._options()

		expect(JSON.parse(JSON.stringify(_Route_object_DnnS))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_JIfA))).to.deep.equal([])

		try {
			const _method_function_jqtW = await _Route_object_DnnS.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_nVMJ = "fByEzv49vtvngvwFzKj3B9PxD5mapXVYgyDDjMf2wPPlU6lHfepml8jVN4g";
		const _Route_object_jOgm = new Route(_path_string_nVMJ)
		const _all_function_xqzN = await _Route_object_jOgm.all()
		const __options_function_MyXR = await _Route_object_jOgm._options()

		expect(JSON.parse(JSON.stringify(_Route_object_jOgm))).to.deep.equal({"path":"fByEzv49vtvngvwFzKj3B9PxD5mapXVYgyDDjMf2wPPlU6lHfepml8jVN4g","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_MyXR))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_xqzN))).to.deep.equal({"path":"fByEzv49vtvngvwFzKj3B9PxD5mapXVYgyDDjMf2wPPlU6lHfepml8jVN4g","stack":[],"methods":{}})

		try {
			const _method_function_DVok = await _Route_object_jOgm.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_fRUR = "XxXDBS8auewRQhUUf7QxTnjZXUluqQ22szTr";
		const _Route_object_YfIT = new Route(_path_string_fRUR)
		const _all_function_NFwX = await _Route_object_YfIT.all()
		const _all_function_JvFc = await _Route_object_YfIT.all()
		const __options_function_jZtJ = await _Route_object_YfIT._options()

		expect(JSON.parse(JSON.stringify(_Route_object_YfIT))).to.deep.equal({"path":"XxXDBS8auewRQhUUf7QxTnjZXUluqQ22szTr","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_jZtJ))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_JvFc))).to.deep.equal({"path":"XxXDBS8auewRQhUUf7QxTnjZXUluqQ22szTr","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_NFwX))).to.deep.equal({"path":"XxXDBS8auewRQhUUf7QxTnjZXUluqQ22szTr","stack":[],"methods":{}})

		try {
			const _method_function_WVnQ = await _Route_object_YfIT.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_hTbW = null;
		const _Route_object_uNwd = new Route(_path_null_hTbW)
		const _method_string_qCaO = "pAwn5ck3okFgVlbtSryyjFXQr4r5xnR";
		const __handles_method_function_OGyC = await _Route_object_uNwd._handles_method(_method_string_qCaO)

		expect(JSON.parse(JSON.stringify(_Route_object_uNwd))).to.deep.equal({"path":null,"stack":[],"methods":{}})
		expect(__handles_method_function_OGyC).to.equal(false)

		try {
			const _method_function_iQsS = await _Route_object_uNwd.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_IgbP = new Route()
		const __options_function_QGEe = await _Route_object_IgbP._options()

		expect(JSON.parse(JSON.stringify(_Route_object_IgbP))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_QGEe))).to.deep.equal([])

		try {
			const _method_function_mmJg = await _Route_object_IgbP.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_aTmq = []
		const _Route_object_xoPa = new Route(_path_array_aTmq)

		expect(JSON.parse(JSON.stringify(_Route_object_xoPa))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_aTmq))).to.deep.equal([])

		try {
			const _method_function_krRA = await _Route_object_xoPa.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_hdqv = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_hdqv))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_BrDQ = await _Route_object_hdqv.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_NIOR = null;
		const _Route_object_Pkkb = new Route(_path_null_NIOR)
		const _all_function_dOqW = await _Route_object_Pkkb.all()

		expect(JSON.parse(JSON.stringify(_Route_object_Pkkb))).to.deep.equal({"path":null,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_dOqW))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_SujA = await _Route_object_Pkkb.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_KWRv = {
		
	}
		const _Route_object_hcWa = new Route(_path_object_KWRv)

		expect(JSON.parse(JSON.stringify(_Route_object_hcWa))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_KWRv))).to.deep.equal({})

		try {
			const _method_function_hIlS = await _Route_object_hcWa.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_NqWS = -7.922137824587557;
		const _Route_object_SeKZ = new Route(_path_numeric_NqWS)
		const __options_function_RgZp = await _Route_object_SeKZ._options()

		expect(JSON.parse(JSON.stringify(_Route_object_SeKZ))).to.deep.equal({"path":-7.922137824587557,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_RgZp))).to.deep.equal([])

		try {
			const _method_function_dsiJ = await _Route_object_SeKZ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_sFiv = []
		const _Route_object_JIVq = new Route(_path_array_sFiv)

		expect(JSON.parse(JSON.stringify(_Route_object_JIVq))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_sFiv))).to.deep.equal([])

		try {
			const _method_function_Fqfn = await _Route_object_JIVq.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_xbpc = new Route()
		const _method_string_mfgC = "CmHyqX3eMj";
		const __handles_method_function_gGfL = await _Route_object_xbpc._handles_method(_method_string_mfgC)

		expect(JSON.parse(JSON.stringify(_Route_object_xbpc))).to.deep.equal({"stack":[],"methods":{}})
		expect(__handles_method_function_gGfL).to.equal(false)

		try {
			const _method_function_tDAL = await _Route_object_xbpc.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_YFPE = undefined;
		const _Route_object_LsnD = new Route(_path_undefined_YFPE)

		expect(JSON.parse(JSON.stringify(_Route_object_LsnD))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_QyhX = await _Route_object_LsnD.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_GXfA = () => { };
		const _Route_object_jfdy = new Route(_path_function_GXfA)
		const _all_function_lJNQ = await _Route_object_jfdy.all()

		expect(JSON.parse(JSON.stringify(_Route_object_jfdy))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_lJNQ))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_DKLs = await _Route_object_jfdy.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_QqNh = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_QqNh))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_yCJw = await _Route_object_QqNh.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_EluW = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_EluW))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_jcns = await _Route_object_EluW.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_xaPT = undefined;
		const _Route_object_ruHd = new Route(_path_undefined_xaPT)
		const __options_function_OZdu = await _Route_object_ruHd._options()
		const __options_function_FnYt = await _Route_object_ruHd._options()

		expect(JSON.parse(JSON.stringify(_Route_object_ruHd))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_FnYt))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(__options_function_OZdu))).to.deep.equal([])

		try {
			const _method_function_fBNg = await _Route_object_ruHd.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_HyXE = false;
		const _Route_object_QksQ = new Route(_path_boolean_HyXE)

		expect(JSON.parse(JSON.stringify(_Route_object_QksQ))).to.deep.equal({"path":false,"stack":[],"methods":{}})

		try {
			const _method_function_Ojom = await _Route_object_QksQ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_VZJU = new Route()
		const __options_function_oeZK = await _Route_object_VZJU._options()
		const __options_function_gAXM = await _Route_object_VZJU._options()

		expect(JSON.parse(JSON.stringify(_Route_object_VZJU))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_gAXM))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(__options_function_oeZK))).to.deep.equal([])

		try {
			const _method_function_wrof = await _Route_object_VZJU.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_ZKGV = new Route()
		const _all_function_pKHS = await _Route_object_ZKGV.all()
		const __options_function_eRHt = await _Route_object_ZKGV._options()

		expect(JSON.parse(JSON.stringify(_Route_object_ZKGV))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_eRHt))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_pKHS))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_RQQi = await _Route_object_ZKGV.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_HFFw = 6.050666308389992;
		const _Route_object_rQbJ = new Route(_path_numeric_HFFw)

		expect(JSON.parse(JSON.stringify(_Route_object_rQbJ))).to.deep.equal({"path":6.050666308389992,"stack":[],"methods":{}})

		try {
			const _method_function_Fvwm = await _Route_object_rQbJ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_Hjhb = "pNYscX3SFy";
		const _Route_object_rUBy = new Route(_path_string_Hjhb)

		expect(JSON.parse(JSON.stringify(_Route_object_rUBy))).to.deep.equal({"path":"pNYscX3SFy","stack":[],"methods":{}})

		try {
			const _method_function_lzeO = await _Route_object_rUBy.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_gUPa = new Route()
		const __options_function_HOUT = await _Route_object_gUPa._options()

		expect(JSON.parse(JSON.stringify(_Route_object_gUPa))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_HOUT))).to.deep.equal([])

		try {
			const _method_function_bgkD = await _Route_object_gUPa.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_EbcL = () => { };
		const _Route_object_umHJ = new Route(_path_function_EbcL)

		expect(JSON.parse(JSON.stringify(_Route_object_umHJ))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_Jvxl = await _Route_object_umHJ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_paNv = true;
		const _Route_object_QBKP = new Route(_path_boolean_paNv)
		const __options_function_ZaQN = await _Route_object_QBKP._options()
		const _method_string_AKTq = "fI97waz28wNA7lhlL6rarUJ2FHul9dSk5pCRrbOktuG2eeiyV3CVUzjAgP6axVLzkle7KHlDFAGtckV0NmG9kYtzW5Ngprzh1";
		const __handles_method_function_jvkf = await _Route_object_QBKP._handles_method(_method_string_AKTq)
		const _all_function_qOeH = await _Route_object_QBKP.all()

		expect(JSON.parse(JSON.stringify(_Route_object_QBKP))).to.deep.equal({"path":true,"stack":[],"methods":{}})
		expect(__handles_method_function_jvkf).to.equal(false)
		expect(JSON.parse(JSON.stringify(__options_function_ZaQN))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_qOeH))).to.deep.equal({"path":true,"stack":[],"methods":{}})

		try {
			const _method_function_epQF = await _Route_object_QBKP.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_umJh = true;
		const _Route_object_PyJP = new Route(_path_boolean_umJh)
		const _all_function_jLUC = await _Route_object_PyJP.all()
		const __options_function_MXFR = await _Route_object_PyJP._options()

		expect(JSON.parse(JSON.stringify(_Route_object_PyJP))).to.deep.equal({"path":true,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_MXFR))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_jLUC))).to.deep.equal({"path":true,"stack":[],"methods":{}})

		try {
			const _method_function_QeQK = await _Route_object_PyJP.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_bdbJ = new Route()
		const __options_function_xPBV = await _Route_object_bdbJ._options()
		const __options_function_DJyK = await _Route_object_bdbJ._options()

		expect(JSON.parse(JSON.stringify(_Route_object_bdbJ))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_DJyK))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(__options_function_xPBV))).to.deep.equal([])

		try {
			const _method_function_sZxT = await _Route_object_bdbJ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_lrwM = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_lrwM))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_ifdS = await _Route_object_lrwM.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_IzEW = undefined;
		const _Route_object_EwZG = new Route(_path_undefined_IzEW)
		const _all_function_SFzb = await _Route_object_EwZG.all()

		expect(JSON.parse(JSON.stringify(_Route_object_EwZG))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_SFzb))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_VMEJ = await _Route_object_EwZG.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_gKch = []
		const _Route_object_aKXl = new Route(_path_array_gKch)

		expect(JSON.parse(JSON.stringify(_Route_object_aKXl))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_gKch))).to.deep.equal([])

		try {
			const _method_function_Zvow = await _Route_object_aKXl.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_tcxW = 8.612093934978756;
		const _Route_object_gGhp = new Route(_path_numeric_tcxW)

		expect(JSON.parse(JSON.stringify(_Route_object_gGhp))).to.deep.equal({"path":8.612093934978756,"stack":[],"methods":{}})

		try {
			const _method_function_nTmt = await _Route_object_gGhp.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_fWHI = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_fWHI))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_YkDp = await _Route_object_fWHI.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_sYCO = false;
		const _Route_object_Aodz = new Route(_path_boolean_sYCO)
		const __options_function_JnMd = await _Route_object_Aodz._options()
		const _method_string_urLK = "vdtmCYSuIoFBx8xCUL0Q";
		const __handles_method_function_VsHH = await _Route_object_Aodz._handles_method(_method_string_urLK)

		expect(JSON.parse(JSON.stringify(_Route_object_Aodz))).to.deep.equal({"path":false,"stack":[],"methods":{}})
		expect(__handles_method_function_VsHH).to.equal(false)
		expect(JSON.parse(JSON.stringify(__options_function_JnMd))).to.deep.equal([])

		try {
			const _method_function_Plpb = await _Route_object_Aodz.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_DzdB = new Route()
		const __options_function_hndO = await _Route_object_DzdB._options()
		const __options_function_OJdH = await _Route_object_DzdB._options()

		expect(JSON.parse(JSON.stringify(_Route_object_DzdB))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_OJdH))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(__options_function_hndO))).to.deep.equal([])

		try {
			const _method_function_Hpei = await _Route_object_DzdB.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_Tnkc = "hV5RmrpgKLF8RbnbqLO9SSVKx8fP26cHujVFZwqBeI0N7K";
		const _Route_object_YrtW = new Route(_path_string_Tnkc)
		const _all_function_sddH = await _Route_object_YrtW.all()

		expect(JSON.parse(JSON.stringify(_Route_object_YrtW))).to.deep.equal({"path":"hV5RmrpgKLF8RbnbqLO9SSVKx8fP26cHujVFZwqBeI0N7K","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_sddH))).to.deep.equal({"path":"hV5RmrpgKLF8RbnbqLO9SSVKx8fP26cHujVFZwqBeI0N7K","stack":[],"methods":{}})

		try {
			const _method_function_pzTO = await _Route_object_YrtW.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_jRAn = []
		const _Route_object_oNYj = new Route(_path_array_jRAn)

		expect(JSON.parse(JSON.stringify(_Route_object_oNYj))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_jRAn))).to.deep.equal([])

		try {
			const _method_function_BdIA = await _Route_object_oNYj.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_YNxX = null;
		const _Route_object_GIVF = new Route(_path_null_YNxX)
		const _all_function_OjTX = await _Route_object_GIVF.all()
		const _all_function_JWOP = await _Route_object_GIVF.all()

		expect(JSON.parse(JSON.stringify(_Route_object_GIVF))).to.deep.equal({"path":null,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_JWOP))).to.deep.equal({"path":null,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_OjTX))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_mjxD = await _Route_object_GIVF.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_ECTE = 6.770870559268836;
		const _Route_object_fTNT = new Route(_path_numeric_ECTE)
		const __options_function_Lwqf = await _Route_object_fTNT._options()
		const __options_function_fWzk = await _Route_object_fTNT._options()

		expect(JSON.parse(JSON.stringify(_Route_object_fTNT))).to.deep.equal({"path":6.770870559268836,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_Lwqf))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(__options_function_fWzk))).to.deep.equal([])

		try {
			const _method_function_MCOX = await _Route_object_fTNT.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_MfEo = "RoECr79Xq59CbrEeGQ3eRGESIl4yACNhIBtFRAsdAzrPIDwpHr84YKE6WgwE3Oz1qbdVs";
		const _Route_object_ykQH = new Route(_path_string_MfEo)

		expect(JSON.parse(JSON.stringify(_Route_object_ykQH))).to.deep.equal({"path":"RoECr79Xq59CbrEeGQ3eRGESIl4yACNhIBtFRAsdAzrPIDwpHr84YKE6WgwE3Oz1qbdVs","stack":[],"methods":{}})

		try {
			const _method_function_KZWW = await _Route_object_ykQH.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_ypCB = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_ypCB))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_tMUY = await _Route_object_ypCB.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_XfRT = null;
		const _Route_object_xdJW = new Route(_path_null_XfRT)
		const __options_function_IYWB = await _Route_object_xdJW._options()

		expect(JSON.parse(JSON.stringify(_Route_object_xdJW))).to.deep.equal({"path":null,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_IYWB))).to.deep.equal([])

		try {
			const _method_function_FSIF = await _Route_object_xdJW.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_GMmy = null;
		const _Route_object_WWXh = new Route(_path_null_GMmy)
		const _method_string_bYTd = "4RIVHv4gybihZDEceezYTUfSbLBISOXMvQ6WIETHnm8vwQiD4MDHtKe";
		const __handles_method_function_MtOQ = await _Route_object_WWXh._handles_method(_method_string_bYTd)

		expect(JSON.parse(JSON.stringify(_Route_object_WWXh))).to.deep.equal({"path":null,"stack":[],"methods":{}})
		expect(__handles_method_function_MtOQ).to.equal(false)

		try {
			const _method_function_uiEP = await _Route_object_WWXh.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_FFrs = -0.6444631125072089;
		const _Route_object_xIvL = new Route(_path_numeric_FFrs)

		expect(JSON.parse(JSON.stringify(_Route_object_xIvL))).to.deep.equal({"path":-0.6444631125072089,"stack":[],"methods":{}})

		try {
			const _method_function_QYpE = await _Route_object_xIvL.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_dmmU = {
		
	}
		const _Route_object_pGpL = new Route(_path_object_dmmU)

		expect(JSON.parse(JSON.stringify(_Route_object_pGpL))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_dmmU))).to.deep.equal({})

		try {
			const _method_function_IytT = await _Route_object_pGpL.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_rurN = "utN9tyx7LnyXYvG1LJMWn4mvx5CoeGvz7skEgu2vHmTB6bzPUL8kwDDL6wX5JL2wFoztqRby";
		const _Route_object_TbiJ = new Route(_path_string_rurN)

		expect(JSON.parse(JSON.stringify(_Route_object_TbiJ))).to.deep.equal({"path":"utN9tyx7LnyXYvG1LJMWn4mvx5CoeGvz7skEgu2vHmTB6bzPUL8kwDDL6wX5JL2wFoztqRby","stack":[],"methods":{}})

		try {
			const _method_function_IyGL = await _Route_object_TbiJ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_SVhp = new Route()
		const _all_function_Rxvp = await _Route_object_SVhp.all()
		const _all_function_aLtL = await _Route_object_SVhp.all()

		expect(JSON.parse(JSON.stringify(_Route_object_SVhp))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_Rxvp))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_aLtL))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_VzQH = await _Route_object_SVhp.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_xGVE = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_xGVE))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_Kphh = await _Route_object_xGVE.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_WaKY = true;
		const _Route_object_KEbd = new Route(_path_boolean_WaKY)
		const _all_function_dnan = await _Route_object_KEbd.all()

		expect(JSON.parse(JSON.stringify(_Route_object_KEbd))).to.deep.equal({"path":true,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_dnan))).to.deep.equal({"path":true,"stack":[],"methods":{}})

		try {
			const _method_function_sIBQ = await _Route_object_KEbd.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_aDGG = {
		
	}
		const _Route_object_kfAE = new Route(_path_object_aDGG)
		const __options_function_mCSO = await _Route_object_kfAE._options()

		expect(JSON.parse(JSON.stringify(_Route_object_kfAE))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_mCSO))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_path_object_aDGG))).to.deep.equal({})

		try {
			const _method_function_WFTJ = await _Route_object_kfAE.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_YjCR = true;
		const _Route_object_dYHC = new Route(_path_boolean_YjCR)

		expect(JSON.parse(JSON.stringify(_Route_object_dYHC))).to.deep.equal({"path":true,"stack":[],"methods":{}})

		try {
			const _method_function_kaDg = await _Route_object_dYHC.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_OLBr = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_OLBr))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_AAKa = await _Route_object_OLBr.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_QJAl = false;
		const _Route_object_OkKH = new Route(_path_boolean_QJAl)
		const _all_function_QoyN = await _Route_object_OkKH.all()
		const __options_function_uKkY = await _Route_object_OkKH._options()
		const __options_function_fVps = await _Route_object_OkKH._options()

		expect(JSON.parse(JSON.stringify(_Route_object_OkKH))).to.deep.equal({"path":false,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_fVps))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(__options_function_uKkY))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_QoyN))).to.deep.equal({"path":false,"stack":[],"methods":{}})

		try {
			const _method_function_oQuI = await _Route_object_OkKH.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_NCCu = "rT4p7kdRsOf4oLWK8OYnbiFDdLL0D3QBA6j8LRoDmzkQMHnxJKrip3CCRWvXwr3x6IFyg2z57tVqIRlI5CGg3ewmSEi2TB";
		const _Route_object_adgU = new Route(_path_string_NCCu)

		expect(JSON.parse(JSON.stringify(_Route_object_adgU))).to.deep.equal({"path":"rT4p7kdRsOf4oLWK8OYnbiFDdLL0D3QBA6j8LRoDmzkQMHnxJKrip3CCRWvXwr3x6IFyg2z57tVqIRlI5CGg3ewmSEi2TB","stack":[],"methods":{}})

		try {
			const _method_function_Pwla = await _Route_object_adgU.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_iUjY = undefined;
		const _Route_object_mXXw = new Route(_path_undefined_iUjY)

		expect(JSON.parse(JSON.stringify(_Route_object_mXXw))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_oVoK = await _Route_object_mXXw.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_wTgT = new Route()
		const __options_function_wrDI = await _Route_object_wTgT._options()

		expect(JSON.parse(JSON.stringify(_Route_object_wTgT))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_wrDI))).to.deep.equal([])

		try {
			const _method_function_bxip = await _Route_object_wTgT.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_MFbI = -0.2290889126336424;
		const _Route_object_NWwj = new Route(_path_numeric_MFbI)

		expect(JSON.parse(JSON.stringify(_Route_object_NWwj))).to.deep.equal({"path":-0.2290889126336424,"stack":[],"methods":{}})

		try {
			const _method_function_KKJQ = await _Route_object_NWwj.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_CRNk = new Route()
		const _req_array_DOof = []
		const _res_object_Ouer = {
		
	}
		const _done_function_YIvT = () => { };
		const _dispatch_function_toXb = await _Route_object_CRNk.dispatch(_req_array_DOof, _res_object_Ouer, _done_function_YIvT)

		expect(JSON.parse(JSON.stringify(_Route_object_CRNk))).to.deep.equal({"stack":[],"methods":{}})
		expect(_dispatch_function_toXb).to.equal(undefined)
		expect(JSON.parse(JSON.stringify(_req_array_DOof))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_res_object_Ouer))).to.deep.equal({})

		try {
			const _method_function_uWAm = await _Route_object_CRNk.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_Urrx = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_Urrx))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_uLiN = await _Route_object_Urrx.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_phaN = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_phaN))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_vbYU = await _Route_object_phaN.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_bqmM = new Route()
		const _req_string_utrL = "16bbc38jZQMbCwTAsvIQl7flKLfkfCDC7aFqXThgsIQayaXIsFSWAYA9";
		const _res_string_LMRq = "3FNAXC30Z95Ml8uFsvF9MOix3gGe";
		const _done_function_hoLP = () => { };
		const _dispatch_function_RfAh = await _Route_object_bqmM.dispatch(_req_string_utrL, _res_string_LMRq, _done_function_hoLP)

		expect(JSON.parse(JSON.stringify(_Route_object_bqmM))).to.deep.equal({"stack":[],"methods":{}})
		expect(_dispatch_function_RfAh).to.equal(undefined)

		try {
			const _method_function_KjNp = await _Route_object_bqmM.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_onjQ = "fFHpeaRvDBBNFfHRYvr6";
		const _Route_object_dCHG = new Route(_path_string_onjQ)
		const _all_function_ZZpE = await _Route_object_dCHG.all()

		expect(JSON.parse(JSON.stringify(_Route_object_dCHG))).to.deep.equal({"path":"fFHpeaRvDBBNFfHRYvr6","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_ZZpE))).to.deep.equal({"path":"fFHpeaRvDBBNFfHRYvr6","stack":[],"methods":{}})

		try {
			const _method_function_gpeT = await _Route_object_dCHG.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_VWHS = null;
		const _Route_object_eDoQ = new Route(_path_null_VWHS)

		expect(JSON.parse(JSON.stringify(_Route_object_eDoQ))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_gUJV = await _Route_object_eDoQ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_WRCD = "FuWYkeeUSJHdT818";
		const _Route_object_pXwD = new Route(_path_string_WRCD)

		expect(JSON.parse(JSON.stringify(_Route_object_pXwD))).to.deep.equal({"path":"FuWYkeeUSJHdT818","stack":[],"methods":{}})

		try {
			const _method_function_OMmu = await _Route_object_pXwD.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_AnKm = "rLtX39YU2gC6IKKAItRw8NKZnQBwvVoYa1ISf49f2ilQf9sE5T1HKlQ4Fw4zaBCkgrIPILPYsQfz";
		const _Route_object_mrri = new Route(_path_string_AnKm)

		expect(JSON.parse(JSON.stringify(_Route_object_mrri))).to.deep.equal({"path":"rLtX39YU2gC6IKKAItRw8NKZnQBwvVoYa1ISf49f2ilQf9sE5T1HKlQ4Fw4zaBCkgrIPILPYsQfz","stack":[],"methods":{}})

		try {
			const _method_function_qXsF = await _Route_object_mrri.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_avws = "i3v";
		const _Route_object_qKRo = new Route(_path_string_avws)

		expect(JSON.parse(JSON.stringify(_Route_object_qKRo))).to.deep.equal({"path":"i3v","stack":[],"methods":{}})

		try {
			const _method_function_rjDH = await _Route_object_qKRo.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_hNRI = "s5dv3SfxMykUKmEEskrsmjgEwdWVNWHUFtD89";
		const _Route_object_jYeL = new Route(_path_string_hNRI)
		const __options_function_MCyR = await _Route_object_jYeL._options()

		expect(JSON.parse(JSON.stringify(_Route_object_jYeL))).to.deep.equal({"path":"s5dv3SfxMykUKmEEskrsmjgEwdWVNWHUFtD89","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_MCyR))).to.deep.equal([])

		try {
			const _method_function_bVLT = await _Route_object_jYeL.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_PWcx = new Route()
		const __options_function_cmLC = await _Route_object_PWcx._options()

		expect(JSON.parse(JSON.stringify(_Route_object_PWcx))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_cmLC))).to.deep.equal([])

		try {
			const _method_function_PtAI = await _Route_object_PWcx.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_nmYu = null;
		const _Route_object_KIbw = new Route(_path_null_nmYu)

		expect(JSON.parse(JSON.stringify(_Route_object_KIbw))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_rvwM = await _Route_object_KIbw.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_sMVX = new Route()
		const _all_function_tuMI = await _Route_object_sMVX.all()

		expect(JSON.parse(JSON.stringify(_Route_object_sMVX))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_tuMI))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_Sgxe = await _Route_object_sMVX.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_WIGW = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_WIGW))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_VdUL = await _Route_object_WIGW.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_uXFB = true;
		const _Route_object_wljc = new Route(_path_boolean_uXFB)

		expect(JSON.parse(JSON.stringify(_Route_object_wljc))).to.deep.equal({"path":true,"stack":[],"methods":{}})

		try {
			const _method_function_zcnJ = await _Route_object_wljc.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_DaRx = "H";
		const _Route_object_OjFM = new Route(_path_string_DaRx)

		expect(JSON.parse(JSON.stringify(_Route_object_OjFM))).to.deep.equal({"path":"H","stack":[],"methods":{}})

		try {
			const _method_function_yMOb = await _Route_object_OjFM.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_RAZj = true;
		const _Route_object_wtGE = new Route(_path_boolean_RAZj)
		const _method_string_JbUO = "j3cpLKvoCPH7IDS975HNQYLMN2muAAIo98a4gxP40hTRz59FEA3qQrSFFx4rzLaJYy6";
		const __handles_method_function_QSuL = await _Route_object_wtGE._handles_method(_method_string_JbUO)

		expect(JSON.parse(JSON.stringify(_Route_object_wtGE))).to.deep.equal({"path":true,"stack":[],"methods":{}})
		expect(__handles_method_function_QSuL).to.equal(false)

		try {
			const _method_function_FQAX = await _Route_object_wtGE.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_tcSP = {
		
	}
		const _Route_object_Ixvv = new Route(_path_object_tcSP)
		const _all_function_RTPx = await _Route_object_Ixvv.all()
		const _all_function_laiZ = await _Route_object_Ixvv.all()
		const __options_function_LhIn = await _Route_object_Ixvv._options()

		expect(JSON.parse(JSON.stringify(_Route_object_Ixvv))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_LhIn))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_RTPx))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_laiZ))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_tcSP))).to.deep.equal({})

		try {
			const _method_function_NiLe = await _Route_object_Ixvv.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_CzEV = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_CzEV))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_Huji = await _Route_object_CzEV.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_VDdq = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_VDdq))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_zQVj = await _Route_object_VDdq.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_KxZX = () => { };
		const _Route_object_VRYq = new Route(_path_function_KxZX)
		const _all_function_ubmu = await _Route_object_VRYq.all()

		expect(JSON.parse(JSON.stringify(_Route_object_VRYq))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_ubmu))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_RAKc = await _Route_object_VRYq.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_pXOn = new Route()
		const __options_function_ZMIZ = await _Route_object_pXOn._options()

		expect(JSON.parse(JSON.stringify(_Route_object_pXOn))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_ZMIZ))).to.deep.equal([])

		try {
			const _method_function_KPYT = await _Route_object_pXOn.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_WRyN = {
		
	}
		const _Route_object_IKyK = new Route(_path_object_WRyN)

		expect(JSON.parse(JSON.stringify(_Route_object_IKyK))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_WRyN))).to.deep.equal({})

		try {
			const _method_function_igpz = await _Route_object_IKyK.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_zyft = {
		
	}
		const _Route_object_eqji = new Route(_path_object_zyft)

		expect(JSON.parse(JSON.stringify(_Route_object_eqji))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_zyft))).to.deep.equal({})

		try {
			const _method_function_FFnX = await _Route_object_eqji.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_iVZp = []
		const _Route_object_AMps = new Route(_path_array_iVZp)

		expect(JSON.parse(JSON.stringify(_Route_object_AMps))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_iVZp))).to.deep.equal([])

		try {
			const _method_function_UoOP = await _Route_object_AMps.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_KTGs = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_KTGs))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_Jvxw = await _Route_object_KTGs.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_JONL = false;
		const _Route_object_fdxA = new Route(_path_boolean_JONL)

		expect(JSON.parse(JSON.stringify(_Route_object_fdxA))).to.deep.equal({"path":false,"stack":[],"methods":{}})

		try {
			const _method_function_bTMu = await _Route_object_fdxA.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_Pawx = null;
		const _Route_object_aSTz = new Route(_path_null_Pawx)

		expect(JSON.parse(JSON.stringify(_Route_object_aSTz))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_Ougl = await _Route_object_aSTz.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_mHIk = []
		const _Route_object_MLLg = new Route(_path_array_mHIk)

		expect(JSON.parse(JSON.stringify(_Route_object_MLLg))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_mHIk))).to.deep.equal([])

		try {
			const _method_function_ufUA = await _Route_object_MLLg.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_UViM = null;
		const _Route_object_RiZX = new Route(_path_null_UViM)

		expect(JSON.parse(JSON.stringify(_Route_object_RiZX))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_JmQF = await _Route_object_RiZX.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_aRXS = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_aRXS))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_DuCU = await _Route_object_aRXS.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_rmpf = new Route()
		const __options_function_izvL = await _Route_object_rmpf._options()

		expect(JSON.parse(JSON.stringify(_Route_object_rmpf))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_izvL))).to.deep.equal([])

		try {
			const _method_function_PoDD = await _Route_object_rmpf.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_QPcl = true;
		const _Route_object_diEv = new Route(_path_boolean_QPcl)

		expect(JSON.parse(JSON.stringify(_Route_object_diEv))).to.deep.equal({"path":true,"stack":[],"methods":{}})

		try {
			const _method_function_SNeD = await _Route_object_diEv.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_pzmZ = 9.045009748295282;
		const _Route_object_wvGC = new Route(_path_numeric_pzmZ)

		expect(JSON.parse(JSON.stringify(_Route_object_wvGC))).to.deep.equal({"path":9.045009748295282,"stack":[],"methods":{}})

		try {
			const _method_function_wJBq = await _Route_object_wvGC.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_PiEB = 6.258486957406291;
		const _Route_object_aqyw = new Route(_path_numeric_PiEB)
		const __options_function_gIUF = await _Route_object_aqyw._options()

		expect(JSON.parse(JSON.stringify(_Route_object_aqyw))).to.deep.equal({"path":6.258486957406291,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_gIUF))).to.deep.equal([])

		try {
			const _method_function_MbGa = await _Route_object_aqyw.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_cYZn = new Route()
		const __options_function_dtzb = await _Route_object_cYZn._options()
		const __options_function_aqrI = await _Route_object_cYZn._options()

		expect(JSON.parse(JSON.stringify(_Route_object_cYZn))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_aqrI))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(__options_function_dtzb))).to.deep.equal([])

		try {
			const _method_function_gDDm = await _Route_object_cYZn.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_iAyO = -2.089721694683222;
		const _Route_object_nqzg = new Route(_path_numeric_iAyO)

		expect(JSON.parse(JSON.stringify(_Route_object_nqzg))).to.deep.equal({"path":-2.089721694683222,"stack":[],"methods":{}})

		try {
			const _method_function_aJDC = await _Route_object_nqzg.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_vexg = new Route()
		const __options_function_oSzb = await _Route_object_vexg._options()
		const _method_string_ThvL = "LVJea9aPXkQ2g7nQNSLQk";
		const __handles_method_function_sslN = await _Route_object_vexg._handles_method(_method_string_ThvL)

		expect(JSON.parse(JSON.stringify(_Route_object_vexg))).to.deep.equal({"stack":[],"methods":{}})
		expect(__handles_method_function_sslN).to.equal(false)
		expect(JSON.parse(JSON.stringify(__options_function_oSzb))).to.deep.equal([])

		try {
			const _method_function_tNFn = await _Route_object_vexg.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_GvNm = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_GvNm))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_Uumr = await _Route_object_GvNm.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_lHMr = null;
		const _Route_object_Zbms = new Route(_path_null_lHMr)

		expect(JSON.parse(JSON.stringify(_Route_object_Zbms))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_VQpb = await _Route_object_Zbms.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_DwKZ = null;
		const _Route_object_hsqI = new Route(_path_null_DwKZ)
		const __options_function_zvGR = await _Route_object_hsqI._options()
		const __options_function_kHIP = await _Route_object_hsqI._options()

		expect(JSON.parse(JSON.stringify(_Route_object_hsqI))).to.deep.equal({"path":null,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_kHIP))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(__options_function_zvGR))).to.deep.equal([])

		try {
			const _method_function_dKaI = await _Route_object_hsqI.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_RWrj = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_RWrj))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_ZMYj = await _Route_object_RWrj.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_FNLy = new Route()
		const _req_array_cnAJ = []
		const _res_function_yEYR = () => { };
		const _done_function_mSPo = () => { };
		const _dispatch_function_Kkeo = await _Route_object_FNLy.dispatch(_req_array_cnAJ, _res_function_yEYR, _done_function_mSPo)
		const __options_function_SgEh = await _Route_object_FNLy._options()

		expect(JSON.parse(JSON.stringify(_Route_object_FNLy))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_SgEh))).to.deep.equal([])
		expect(_dispatch_function_Kkeo).to.equal(undefined)
		expect(JSON.parse(JSON.stringify(_req_array_cnAJ))).to.deep.equal([])

		try {
			const _method_function_AWNH = await _Route_object_FNLy.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_puSh = null;
		const _Route_object_cpuW = new Route(_path_null_puSh)
		const _all_function_GIXT = await _Route_object_cpuW.all()
		const _all_function_BaAc = await _Route_object_cpuW.all()
		const _all_function_dfoA = await _Route_object_cpuW.all()

		expect(JSON.parse(JSON.stringify(_Route_object_cpuW))).to.deep.equal({"path":null,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_BaAc))).to.deep.equal({"path":null,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_GIXT))).to.deep.equal({"path":null,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_dfoA))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_Xcmo = await _Route_object_cpuW.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_iXDa = "tBfS8mijumFCQ4SgzMPEIOzBoC86JM";
		const _Route_object_krQT = new Route(_path_string_iXDa)

		expect(JSON.parse(JSON.stringify(_Route_object_krQT))).to.deep.equal({"path":"tBfS8mijumFCQ4SgzMPEIOzBoC86JM","stack":[],"methods":{}})

		try {
			const _method_function_oXjl = await _Route_object_krQT.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_iSDM = []
		const _Route_object_SAWi = new Route(_path_array_iSDM)

		expect(JSON.parse(JSON.stringify(_Route_object_SAWi))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_iSDM))).to.deep.equal([])

		try {
			const _method_function_Sozf = await _Route_object_SAWi.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_PvwQ = new Route()
		const _all_function_WhbG = await _Route_object_PvwQ.all()
		const _all_function_QzBh = await _Route_object_PvwQ.all()
		const _all_function_pZEc = await _Route_object_PvwQ.all()

		expect(JSON.parse(JSON.stringify(_Route_object_PvwQ))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_QzBh))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_WhbG))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_pZEc))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_TNfM = await _Route_object_PvwQ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_kSXN = []
		const _Route_object_wxPV = new Route(_path_array_kSXN)
		const _all_function_phGI = await _Route_object_wxPV.all()

		expect(JSON.parse(JSON.stringify(_Route_object_wxPV))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_phGI))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_kSXN))).to.deep.equal([])

		try {
			const _method_function_owwj = await _Route_object_wxPV.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_EIRP = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_EIRP))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_hIcJ = await _Route_object_EIRP.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_oeNH = true;
		const _Route_object_TnYy = new Route(_path_boolean_oeNH)
		const _all_function_hTuP = await _Route_object_TnYy.all()

		expect(JSON.parse(JSON.stringify(_Route_object_TnYy))).to.deep.equal({"path":true,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_hTuP))).to.deep.equal({"path":true,"stack":[],"methods":{}})

		try {
			const _method_function_voHM = await _Route_object_TnYy.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_qrQy = []
		const _Route_object_Emyl = new Route(_path_array_qrQy)
		const _req_numeric_Qavq = -5.9937565288944965;
		const _res_undefined_ByUZ = undefined;
		const _done_function_QQUs = () => { };
		const _dispatch_function_JTqs = await _Route_object_Emyl.dispatch(_req_numeric_Qavq, _res_undefined_ByUZ, _done_function_QQUs)

		expect(JSON.parse(JSON.stringify(_Route_object_Emyl))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(_dispatch_function_JTqs).to.equal(undefined)
		expect(JSON.parse(JSON.stringify(_path_array_qrQy))).to.deep.equal([])

		try {
			const _method_function_vhKb = await _Route_object_Emyl.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_GUFv = new Route()
		const __options_function_IjKa = await _Route_object_GUFv._options()

		expect(JSON.parse(JSON.stringify(_Route_object_GUFv))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_IjKa))).to.deep.equal([])

		try {
			const _method_function_kYZU = await _Route_object_GUFv.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_Uxlk = undefined;
		const _Route_object_kqLq = new Route(_path_undefined_Uxlk)
		const _all_function_AAAW = await _Route_object_kqLq.all()
		const _all_function_WbVg = await _Route_object_kqLq.all()

		expect(JSON.parse(JSON.stringify(_Route_object_kqLq))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_AAAW))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_WbVg))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_VIcM = await _Route_object_kqLq.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_GVVx = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_GVVx))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_Kxzh = await _Route_object_GVVx.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_AWQx = 1.6319111583599106;
		const _Route_object_ALyd = new Route(_path_numeric_AWQx)
		const _all_function_BrNU = await _Route_object_ALyd.all()

		expect(JSON.parse(JSON.stringify(_Route_object_ALyd))).to.deep.equal({"path":1.6319111583599106,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_BrNU))).to.deep.equal({"path":1.6319111583599106,"stack":[],"methods":{}})

		try {
			const _method_function_fAbw = await _Route_object_ALyd.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_sXrq = undefined;
		const _Route_object_oSLa = new Route(_path_undefined_sXrq)

		expect(JSON.parse(JSON.stringify(_Route_object_oSLa))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_eIpF = await _Route_object_oSLa.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_bGJZ = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_bGJZ))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_PJOD = await _Route_object_bGJZ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_UAgA = null;
		const _Route_object_TjTn = new Route(_path_null_UAgA)
		const _req_numeric_VGIn = 7.745427859227888;
		const _res_null_qNYu = null;
		const _done_function_qaMa = () => { };
		const _dispatch_function_eZMi = await _Route_object_TjTn.dispatch(_req_numeric_VGIn, _res_null_qNYu, _done_function_qaMa)

		expect(JSON.parse(JSON.stringify(_Route_object_TjTn))).to.deep.equal({"path":null,"stack":[],"methods":{}})
		expect(_dispatch_function_eZMi).to.equal(undefined)

		try {
			const _method_function_YJWC = await _Route_object_TjTn.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_SFpW = "vHkhhG2ei4rcvWSKLLlXTRafGXbTRme7RsY2REAfIqang";
		const _Route_object_XRAU = new Route(_path_string_SFpW)
		const __options_function_ODFs = await _Route_object_XRAU._options()

		expect(JSON.parse(JSON.stringify(_Route_object_XRAU))).to.deep.equal({"path":"vHkhhG2ei4rcvWSKLLlXTRafGXbTRme7RsY2REAfIqang","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_ODFs))).to.deep.equal([])

		try {
			const _method_function_RvTs = await _Route_object_XRAU.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_ieJa = {
		
	}
		const _Route_object_AegJ = new Route(_path_object_ieJa)

		expect(JSON.parse(JSON.stringify(_Route_object_AegJ))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_ieJa))).to.deep.equal({})

		try {
			const _method_function_fRNS = await _Route_object_AegJ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_SIvg = "34NwbqMexdyt";
		const _Route_object_VzTG = new Route(_path_string_SIvg)

		expect(JSON.parse(JSON.stringify(_Route_object_VzTG))).to.deep.equal({"path":"34NwbqMexdyt","stack":[],"methods":{}})

		try {
			const _method_function_CBHL = await _Route_object_VzTG.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_THiU = "gsOYhwyH5GpOtrszwd86qTV6sRiGRYBkW3jK0eE5r";
		const _Route_object_Vnuc = new Route(_path_string_THiU)

		expect(JSON.parse(JSON.stringify(_Route_object_Vnuc))).to.deep.equal({"path":"gsOYhwyH5GpOtrszwd86qTV6sRiGRYBkW3jK0eE5r","stack":[],"methods":{}})

		try {
			const _method_function_CGjK = await _Route_object_Vnuc.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_EPcr = false;
		const _Route_object_oVGT = new Route(_path_boolean_EPcr)

		expect(JSON.parse(JSON.stringify(_Route_object_oVGT))).to.deep.equal({"path":false,"stack":[],"methods":{}})

		try {
			const _method_function_bhUr = await _Route_object_oVGT.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_LkBv = -8.936348673428613;
		const _Route_object_okad = new Route(_path_numeric_LkBv)
		const _all_function_IZAR = await _Route_object_okad.all()
		const _all_function_JxYI = await _Route_object_okad.all()

		expect(JSON.parse(JSON.stringify(_Route_object_okad))).to.deep.equal({"path":-8.936348673428613,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_IZAR))).to.deep.equal({"path":-8.936348673428613,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_JxYI))).to.deep.equal({"path":-8.936348673428613,"stack":[],"methods":{}})

		try {
			const _method_function_PTHC = await _Route_object_okad.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_bHab = () => { };
		const _Route_object_AGXe = new Route(_path_function_bHab)

		expect(JSON.parse(JSON.stringify(_Route_object_AGXe))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_yykU = await _Route_object_AGXe.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_sgiI = () => { };
		const _Route_object_TrdQ = new Route(_path_function_sgiI)
		const _method_string_UaQv = "sDM4RTowufpn7UjCkWkvuOCXd3pNHve00CyJyAXXLXG";
		const __handles_method_function_OxUH = await _Route_object_TrdQ._handles_method(_method_string_UaQv)
		const _all_function_SPPO = await _Route_object_TrdQ.all()

		expect(JSON.parse(JSON.stringify(_Route_object_TrdQ))).to.deep.equal({"stack":[],"methods":{}})
		expect(__handles_method_function_OxUH).to.equal(false)
		expect(JSON.parse(JSON.stringify(_all_function_SPPO))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_tfaS = await _Route_object_TrdQ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_VhfD = 1.026405963098231;
		const _Route_object_Bqze = new Route(_path_numeric_VhfD)

		expect(JSON.parse(JSON.stringify(_Route_object_Bqze))).to.deep.equal({"path":1.026405963098231,"stack":[],"methods":{}})

		try {
			const _method_function_mSGC = await _Route_object_Bqze.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_Sodi = "qmnoi5iUw6EEXL4FbL9g4gYucLg3HtiE8fiSl2lZsf4kYrEiaCbZjMid3LfLuzii6PS2KXXL01AuHhktQVL1G62kQr8sxqTF";
		const _Route_object_uvtC = new Route(_path_string_Sodi)
		const _all_function_DqsV = await _Route_object_uvtC.all()

		expect(JSON.parse(JSON.stringify(_Route_object_uvtC))).to.deep.equal({"path":"qmnoi5iUw6EEXL4FbL9g4gYucLg3HtiE8fiSl2lZsf4kYrEiaCbZjMid3LfLuzii6PS2KXXL01AuHhktQVL1G62kQr8sxqTF","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_DqsV))).to.deep.equal({"path":"qmnoi5iUw6EEXL4FbL9g4gYucLg3HtiE8fiSl2lZsf4kYrEiaCbZjMid3LfLuzii6PS2KXXL01AuHhktQVL1G62kQr8sxqTF","stack":[],"methods":{}})

		try {
			const _method_function_RXdB = await _Route_object_uvtC.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_mtwW = undefined;
		const _Route_object_PocC = new Route(_path_undefined_mtwW)

		expect(JSON.parse(JSON.stringify(_Route_object_PocC))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_bSbS = await _Route_object_PocC.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_duwB = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_duwB))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_TizM = await _Route_object_duwB.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_xYpG = -8.444714101126525;
		const _Route_object_mFMS = new Route(_path_numeric_xYpG)

		expect(JSON.parse(JSON.stringify(_Route_object_mFMS))).to.deep.equal({"path":-8.444714101126525,"stack":[],"methods":{}})

		try {
			const _method_function_tXen = await _Route_object_mFMS.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_UbEl = null;
		const _Route_object_fSOF = new Route(_path_null_UbEl)
		const _all_function_ksYd = await _Route_object_fSOF.all()

		expect(JSON.parse(JSON.stringify(_Route_object_fSOF))).to.deep.equal({"path":null,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_ksYd))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_mYTJ = await _Route_object_fSOF.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_aujv = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_aujv))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_NPEG = await _Route_object_aujv.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_twDi = "OsB4SeNii7yQLglE3TdwFVtllrXfJOGTnGUvv3lUaH89kqOe3dtOWua5FPzAnPr";
		const _Route_object_fwNf = new Route(_path_string_twDi)
		const _req_object_VBsF = {
		
	}
		const _res_string_LhPi = "B";
		const _done_function_hEjk = () => { };
		const _dispatch_function_dSZk = await _Route_object_fwNf.dispatch(_req_object_VBsF, _res_string_LhPi, _done_function_hEjk)

		expect(JSON.parse(JSON.stringify(_Route_object_fwNf))).to.deep.equal({"path":"OsB4SeNii7yQLglE3TdwFVtllrXfJOGTnGUvv3lUaH89kqOe3dtOWua5FPzAnPr","stack":[],"methods":{}})
		expect(_dispatch_function_dSZk).to.equal(undefined)
		expect(JSON.parse(JSON.stringify(_req_object_VBsF))).to.deep.equal({})

		try {
			const _method_function_aAbu = await _Route_object_fwNf.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_cPng = 6.797762715226277;
		const _Route_object_ZwWZ = new Route(_path_numeric_cPng)

		expect(JSON.parse(JSON.stringify(_Route_object_ZwWZ))).to.deep.equal({"path":6.797762715226277,"stack":[],"methods":{}})

		try {
			const _method_function_bcEa = await _Route_object_ZwWZ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_ehjV = () => { };
		const _Route_object_cwsJ = new Route(_path_function_ehjV)

		expect(JSON.parse(JSON.stringify(_Route_object_cwsJ))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_XqWO = await _Route_object_cwsJ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_AMJW = new Route()
		const _all_function_GUup = await _Route_object_AMJW.all()
		const _all_function_fMEc = await _Route_object_AMJW.all()

		expect(JSON.parse(JSON.stringify(_Route_object_AMJW))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_GUup))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_fMEc))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_zXbp = await _Route_object_AMJW.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_IGQW = "2HtbXnRfe36Q0kBXdfCMvGdBLjI";
		const _Route_object_aayk = new Route(_path_string_IGQW)
		const __options_function_JpuK = await _Route_object_aayk._options()

		expect(JSON.parse(JSON.stringify(_Route_object_aayk))).to.deep.equal({"path":"2HtbXnRfe36Q0kBXdfCMvGdBLjI","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_JpuK))).to.deep.equal([])

		try {
			const _method_function_DrrZ = await _Route_object_aayk.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_DTFu = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_DTFu))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_sfOI = await _Route_object_DTFu.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_RwVz = new Route()
		const __options_function_SQNh = await _Route_object_RwVz._options()

		expect(JSON.parse(JSON.stringify(_Route_object_RwVz))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_SQNh))).to.deep.equal([])

		try {
			const _method_function_Sflo = await _Route_object_RwVz.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_XcqY = null;
		const _Route_object_sDvT = new Route(_path_null_XcqY)
		const __options_function_phCd = await _Route_object_sDvT._options()

		expect(JSON.parse(JSON.stringify(_Route_object_sDvT))).to.deep.equal({"path":null,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_phCd))).to.deep.equal([])

		try {
			const _method_function_gvZc = await _Route_object_sDvT.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_oiIo = () => { };
		const _Route_object_nFIG = new Route(_path_function_oiIo)
		const _all_function_kVVF = await _Route_object_nFIG.all()

		expect(JSON.parse(JSON.stringify(_Route_object_nFIG))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_kVVF))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_afos = await _Route_object_nFIG.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_Rbis = -8.869047174040956;
		const _Route_object_aPSb = new Route(_path_numeric_Rbis)
		const _all_function_TVsM = await _Route_object_aPSb.all()
		const _all_function_LdbY = await _Route_object_aPSb.all()

		expect(JSON.parse(JSON.stringify(_Route_object_aPSb))).to.deep.equal({"path":-8.869047174040956,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_LdbY))).to.deep.equal({"path":-8.869047174040956,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_TVsM))).to.deep.equal({"path":-8.869047174040956,"stack":[],"methods":{}})

		try {
			const _method_function_fDUO = await _Route_object_aPSb.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_BCcA = () => { };
		const _Route_object_GUkm = new Route(_path_function_BCcA)

		expect(JSON.parse(JSON.stringify(_Route_object_GUkm))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_rimE = await _Route_object_GUkm.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_poYi = false;
		const _Route_object_DdAe = new Route(_path_boolean_poYi)

		expect(JSON.parse(JSON.stringify(_Route_object_DdAe))).to.deep.equal({"path":false,"stack":[],"methods":{}})

		try {
			const _method_function_SlFU = await _Route_object_DdAe.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_mPkc = {
		
	}
		const _Route_object_roRN = new Route(_path_object_mPkc)
		const _all_function_NZPp = await _Route_object_roRN.all()
		const __options_function_KkmS = await _Route_object_roRN._options()

		expect(JSON.parse(JSON.stringify(_Route_object_roRN))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_KkmS))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_NZPp))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_mPkc))).to.deep.equal({})

		try {
			const _method_function_WnQa = await _Route_object_roRN.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_RlmO = true;
		const _Route_object_CKxQ = new Route(_path_boolean_RlmO)
		const _all_function_LqfU = await _Route_object_CKxQ.all()

		expect(JSON.parse(JSON.stringify(_Route_object_CKxQ))).to.deep.equal({"path":true,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_LqfU))).to.deep.equal({"path":true,"stack":[],"methods":{}})

		try {
			const _method_function_Lqwu = await _Route_object_CKxQ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_AQDO = null;
		const _Route_object_AGLq = new Route(_path_null_AQDO)
		const _all_function_oHdZ = await _Route_object_AGLq.all()

		expect(JSON.parse(JSON.stringify(_Route_object_AGLq))).to.deep.equal({"path":null,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_oHdZ))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_fdSQ = await _Route_object_AGLq.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_efiX = new Route()
		const _all_function_Llsy = await _Route_object_efiX.all()

		expect(JSON.parse(JSON.stringify(_Route_object_efiX))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_Llsy))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_SiID = await _Route_object_efiX.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_IrXB = "FyUs";
		const _Route_object_tCDW = new Route(_path_string_IrXB)

		expect(JSON.parse(JSON.stringify(_Route_object_tCDW))).to.deep.equal({"path":"FyUs","stack":[],"methods":{}})

		try {
			const _method_function_qfsT = await _Route_object_tCDW.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_PMPK = undefined;
		const _Route_object_vyHX = new Route(_path_undefined_PMPK)
		const _req_string_CPJy = "GAX8wics9j1MutsKveYtePGvrWv5DsPa54J4WcTUrHJkCqZT8rxFqKmAwwp6B8lb";
		const _res_function_fpru = () => { };
		const _done_function_NwMf = () => { };
		const _dispatch_function_LsIP = await _Route_object_vyHX.dispatch(_req_string_CPJy, _res_function_fpru, _done_function_NwMf)

		expect(JSON.parse(JSON.stringify(_Route_object_vyHX))).to.deep.equal({"stack":[],"methods":{}})
		expect(_dispatch_function_LsIP).to.equal(undefined)

		try {
			const _method_function_Cdzl = await _Route_object_vyHX.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_pvgV = null;
		const _Route_object_ICiY = new Route(_path_null_pvgV)

		expect(JSON.parse(JSON.stringify(_Route_object_ICiY))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_pDCQ = await _Route_object_ICiY.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_OrRb = null;
		const _Route_object_jigU = new Route(_path_null_OrRb)

		expect(JSON.parse(JSON.stringify(_Route_object_jigU))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_NCFC = await _Route_object_jigU.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_FxrG = undefined;
		const _Route_object_HDuY = new Route(_path_undefined_FxrG)
		const _req_boolean_ltxX = false;
		const _res_string_hsMM = "ToNaxhUc";
		const _done_function_uJnW = () => { };
		const _dispatch_function_NLVB = await _Route_object_HDuY.dispatch(_req_boolean_ltxX, _res_string_hsMM, _done_function_uJnW)
		const _req_string_OlXT = "pO2MUu20ccLeMm59I3RDFUi4QFFs6TgBxgRkVNVfG9ugMwCqbzxNfGmJMz7jbAWEVHD37QCA3Df7drSk2O5EGGF3x9bmjxv7xH";
		const _res_function_qPVa = () => { };
		const _done_function_Bojf = () => { };
		const _dispatch_function_EnaJ = await _Route_object_HDuY.dispatch(_req_string_OlXT, _res_function_qPVa, _done_function_Bojf)

		expect(JSON.parse(JSON.stringify(_Route_object_HDuY))).to.deep.equal({"stack":[],"methods":{}})
		expect(_dispatch_function_EnaJ).to.equal(undefined)
		expect(_dispatch_function_NLVB).to.equal(undefined)

		try {
			const _method_function_Besu = await _Route_object_HDuY.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_KuSl = "sEr7FW99XNyXdMnsX9hZq7pQlUvDQERc2";
		const _Route_object_ZQtK = new Route(_path_string_KuSl)
		const _all_function_gBGP = await _Route_object_ZQtK.all()

		expect(JSON.parse(JSON.stringify(_Route_object_ZQtK))).to.deep.equal({"path":"sEr7FW99XNyXdMnsX9hZq7pQlUvDQERc2","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_gBGP))).to.deep.equal({"path":"sEr7FW99XNyXdMnsX9hZq7pQlUvDQERc2","stack":[],"methods":{}})

		try {
			const _method_function_yMhh = await _Route_object_ZQtK.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_anZo = new Route()
		const _all_function_PFLz = await _Route_object_anZo.all()

		expect(JSON.parse(JSON.stringify(_Route_object_anZo))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_PFLz))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_AgNo = await _Route_object_anZo.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_Mxit = {
		
	}
		const _Route_object_KZVV = new Route(_path_object_Mxit)
		const __options_function_axKn = await _Route_object_KZVV._options()

		expect(JSON.parse(JSON.stringify(_Route_object_KZVV))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_axKn))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_path_object_Mxit))).to.deep.equal({})

		try {
			const _method_function_TfGE = await _Route_object_KZVV.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_dXry = {
		
	}
		const _Route_object_wVpn = new Route(_path_object_dXry)

		expect(JSON.parse(JSON.stringify(_Route_object_wVpn))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_dXry))).to.deep.equal({})

		try {
			const _method_function_rOcp = await _Route_object_wVpn.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_NIRL = []
		const _Route_object_OYUm = new Route(_path_array_NIRL)
		const __options_function_CiEZ = await _Route_object_OYUm._options()
		const __options_function_YuGh = await _Route_object_OYUm._options()

		expect(JSON.parse(JSON.stringify(_Route_object_OYUm))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_CiEZ))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(__options_function_YuGh))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_path_array_NIRL))).to.deep.equal([])

		try {
			const _method_function_EvRh = await _Route_object_OYUm.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_tJTd = "UoOqDqvdbctsHvaoCrwe9LOVlzR4Zf5nyu4u";
		const _Route_object_xPpO = new Route(_path_string_tJTd)
		const __options_function_Ajeu = await _Route_object_xPpO._options()
		const _all_function_JMBp = await _Route_object_xPpO.all()
		const _all_function_GoOz = await _Route_object_xPpO.all()
		const __options_function_jmCr = await _Route_object_xPpO._options()

		expect(JSON.parse(JSON.stringify(_Route_object_xPpO))).to.deep.equal({"path":"UoOqDqvdbctsHvaoCrwe9LOVlzR4Zf5nyu4u","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_Ajeu))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(__options_function_jmCr))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_GoOz))).to.deep.equal({"path":"UoOqDqvdbctsHvaoCrwe9LOVlzR4Zf5nyu4u","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_JMBp))).to.deep.equal({"path":"UoOqDqvdbctsHvaoCrwe9LOVlzR4Zf5nyu4u","stack":[],"methods":{}})

		try {
			const _method_function_gvsQ = await _Route_object_xPpO.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_MgKW = -3.861826849358793;
		const _Route_object_QjSm = new Route(_path_numeric_MgKW)

		expect(JSON.parse(JSON.stringify(_Route_object_QjSm))).to.deep.equal({"path":-3.861826849358793,"stack":[],"methods":{}})

		try {
			const _method_function_JxYa = await _Route_object_QjSm.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_WMUX = -7.861411173987121;
		const _Route_object_WaaB = new Route(_path_numeric_WMUX)
		const __options_function_DTAj = await _Route_object_WaaB._options()

		expect(JSON.parse(JSON.stringify(_Route_object_WaaB))).to.deep.equal({"path":-7.861411173987121,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_DTAj))).to.deep.equal([])

		try {
			const _method_function_QlPa = await _Route_object_WaaB.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_Zhsl = []
		const _Route_object_gODW = new Route(_path_array_Zhsl)

		expect(JSON.parse(JSON.stringify(_Route_object_gODW))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_Zhsl))).to.deep.equal([])

		try {
			const _method_function_tMFq = await _Route_object_gODW.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_tdzg = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_tdzg))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_jUoV = await _Route_object_tdzg.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_JxiI = "rmkp5dzYbKVlUbRFZ2rvEw6BpRKS5Vj1Pj7mnHfcIK2TVjGNifH585GNrcfKKhLs6cUzjRBdTd6QOqN1mrVrKJH";
		const _Route_object_sYBJ = new Route(_path_string_JxiI)
		const __options_function_BDEI = await _Route_object_sYBJ._options()

		expect(JSON.parse(JSON.stringify(_Route_object_sYBJ))).to.deep.equal({"path":"rmkp5dzYbKVlUbRFZ2rvEw6BpRKS5Vj1Pj7mnHfcIK2TVjGNifH585GNrcfKKhLs6cUzjRBdTd6QOqN1mrVrKJH","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_BDEI))).to.deep.equal([])

		try {
			const _method_function_yxjV = await _Route_object_sYBJ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_JXZG = "dpS61cPQlgfhDMJ9F5A2iY8uw7Dm0HICADM1EsP6fqT14B3";
		const _Route_object_OLXw = new Route(_path_string_JXZG)

		expect(JSON.parse(JSON.stringify(_Route_object_OLXw))).to.deep.equal({"path":"dpS61cPQlgfhDMJ9F5A2iY8uw7Dm0HICADM1EsP6fqT14B3","stack":[],"methods":{}})

		try {
			const _method_function_Faxl = await _Route_object_OLXw.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_JXje = true;
		const _Route_object_nnNw = new Route(_path_boolean_JXje)

		expect(JSON.parse(JSON.stringify(_Route_object_nnNw))).to.deep.equal({"path":true,"stack":[],"methods":{}})

		try {
			const _method_function_cqKx = await _Route_object_nnNw.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_mCwD = () => { };
		const _Route_object_rTwS = new Route(_path_function_mCwD)
		const __options_function_ZncQ = await _Route_object_rTwS._options()
		const _all_function_rEiS = await _Route_object_rTwS.all()

		expect(JSON.parse(JSON.stringify(_Route_object_rTwS))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_ZncQ))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_rEiS))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_cIAc = await _Route_object_rTwS.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_dDbf = () => { };
		const _Route_object_Bmpb = new Route(_path_function_dDbf)
		const _all_function_BMhs = await _Route_object_Bmpb.all()

		expect(JSON.parse(JSON.stringify(_Route_object_Bmpb))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_BMhs))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_QXob = await _Route_object_Bmpb.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_uxfH = () => { };
		const _Route_object_RNab = new Route(_path_function_uxfH)

		expect(JSON.parse(JSON.stringify(_Route_object_RNab))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_jefL = await _Route_object_RNab.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_sXqI = null;
		const _Route_object_PfNu = new Route(_path_null_sXqI)
		const __options_function_Riss = await _Route_object_PfNu._options()

		expect(JSON.parse(JSON.stringify(_Route_object_PfNu))).to.deep.equal({"path":null,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_Riss))).to.deep.equal([])

		try {
			const _method_function_Kptf = await _Route_object_PfNu.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_hYyQ = false;
		const _Route_object_dFFt = new Route(_path_boolean_hYyQ)

		expect(JSON.parse(JSON.stringify(_Route_object_dFFt))).to.deep.equal({"path":false,"stack":[],"methods":{}})

		try {
			const _method_function_qfmM = await _Route_object_dFFt.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_kkhj = -7.57066140620303;
		const _Route_object_pjFg = new Route(_path_numeric_kkhj)
		const _req_string_TRow = "TZ6dDMkmwgbdbaBY2Y6zCeRlbMxGQvNqmAAM3DlweZ6GwdlI0";
		const _res_string_TpTM = "0oHFMe6VuJ2Y6c5QWqgCMvPXPbu0wlwKB3RedcDmim33p89EcjO2dXFM9MXFKDjAKa7Gp3Zpr6eDztERVvf";
		const _done_function_NYrw = () => { };
		const _dispatch_function_Yxzl = await _Route_object_pjFg.dispatch(_req_string_TRow, _res_string_TpTM, _done_function_NYrw)

		expect(JSON.parse(JSON.stringify(_Route_object_pjFg))).to.deep.equal({"path":-7.57066140620303,"stack":[],"methods":{}})
		expect(_dispatch_function_Yxzl).to.equal(undefined)

		try {
			const _method_function_vXXQ = await _Route_object_pjFg.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_BWKN = new Route()
		const _all_function_TpBW = await _Route_object_BWKN.all()
		const _all_function_pfDq = await _Route_object_BWKN.all()

		expect(JSON.parse(JSON.stringify(_Route_object_BWKN))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_TpBW))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_pfDq))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_aVPZ = await _Route_object_BWKN.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_IBpp = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_IBpp))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_TAbw = await _Route_object_IBpp.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_GcBH = {
		
	}
		const _Route_object_uoHg = new Route(_path_object_GcBH)

		expect(JSON.parse(JSON.stringify(_Route_object_uoHg))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_GcBH))).to.deep.equal({})

		try {
			const _method_function_HZph = await _Route_object_uoHg.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_pkmn = {
		
	}
		const _Route_object_pAZe = new Route(_path_object_pkmn)

		expect(JSON.parse(JSON.stringify(_Route_object_pAZe))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_pkmn))).to.deep.equal({})

		try {
			const _method_function_TsLT = await _Route_object_pAZe.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_ysMA = "O7OUVepjkHgnFOciLtyL7JgKj31IsXoSxAIV4nN0b7uIXw2Fy8hpKbGfdU6jVpklpV7c2jpOJmGVs62ttyrh4z";
		const _Route_object_rxIK = new Route(_path_string_ysMA)

		expect(JSON.parse(JSON.stringify(_Route_object_rxIK))).to.deep.equal({"path":"O7OUVepjkHgnFOciLtyL7JgKj31IsXoSxAIV4nN0b7uIXw2Fy8hpKbGfdU6jVpklpV7c2jpOJmGVs62ttyrh4z","stack":[],"methods":{}})

		try {
			const _method_function_vGrJ = await _Route_object_rxIK.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_DwcD = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_DwcD))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_MFOl = await _Route_object_DwcD.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_VyOq = () => { };
		const _Route_object_eCfr = new Route(_path_function_VyOq)

		expect(JSON.parse(JSON.stringify(_Route_object_eCfr))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_awJG = await _Route_object_eCfr.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_qrgU = () => { };
		const _Route_object_bJni = new Route(_path_function_qrgU)

		expect(JSON.parse(JSON.stringify(_Route_object_bJni))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_oEtJ = await _Route_object_bJni.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_BPbg = "GjJM8I20HDyTSwMlYOBEB6GG3CyMNI4oRzynplqLT6XNRriPbDJCU4vPjjY4b8UVqQvCFXrFaj";
		const _Route_object_pqMg = new Route(_path_string_BPbg)
		const _all_function_Akpd = await _Route_object_pqMg.all()

		expect(JSON.parse(JSON.stringify(_Route_object_pqMg))).to.deep.equal({"path":"GjJM8I20HDyTSwMlYOBEB6GG3CyMNI4oRzynplqLT6XNRriPbDJCU4vPjjY4b8UVqQvCFXrFaj","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_Akpd))).to.deep.equal({"path":"GjJM8I20HDyTSwMlYOBEB6GG3CyMNI4oRzynplqLT6XNRriPbDJCU4vPjjY4b8UVqQvCFXrFaj","stack":[],"methods":{}})

		try {
			const _method_function_gSFJ = await _Route_object_pqMg.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_gqcY = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_gqcY))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_LvBy = await _Route_object_gqcY.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_uUze = "imMItPv2gbboaVbK2eZYIPHDA3LehwQSU1BcwcoiilYhOpHQEpNDyy8eaMq3pi6wdZUWgPYqbOoCEdbfsN8XZr";
		const _Route_object_DZmx = new Route(_path_string_uUze)
		const __options_function_gzZF = await _Route_object_DZmx._options()
		const _all_function_EwRG = await _Route_object_DZmx.all()
		const _all_function_cYRW = await _Route_object_DZmx.all()

		expect(JSON.parse(JSON.stringify(_Route_object_DZmx))).to.deep.equal({"path":"imMItPv2gbboaVbK2eZYIPHDA3LehwQSU1BcwcoiilYhOpHQEpNDyy8eaMq3pi6wdZUWgPYqbOoCEdbfsN8XZr","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_gzZF))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_EwRG))).to.deep.equal({"path":"imMItPv2gbboaVbK2eZYIPHDA3LehwQSU1BcwcoiilYhOpHQEpNDyy8eaMq3pi6wdZUWgPYqbOoCEdbfsN8XZr","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_cYRW))).to.deep.equal({"path":"imMItPv2gbboaVbK2eZYIPHDA3LehwQSU1BcwcoiilYhOpHQEpNDyy8eaMq3pi6wdZUWgPYqbOoCEdbfsN8XZr","stack":[],"methods":{}})

		try {
			const _method_function_oaux = await _Route_object_DZmx.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_LTPp = "ySo3";
		const _Route_object_LadS = new Route(_path_string_LTPp)
		const _all_function_aELv = await _Route_object_LadS.all()

		expect(JSON.parse(JSON.stringify(_Route_object_LadS))).to.deep.equal({"path":"ySo3","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_aELv))).to.deep.equal({"path":"ySo3","stack":[],"methods":{}})

		try {
			const _method_function_vNTm = await _Route_object_LadS.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_ZKhO = []
		const _Route_object_PpXJ = new Route(_path_array_ZKhO)
		const _all_function_bHSe = await _Route_object_PpXJ.all()

		expect(JSON.parse(JSON.stringify(_Route_object_PpXJ))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_bHSe))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_ZKhO))).to.deep.equal([])

		try {
			const _method_function_qGFG = await _Route_object_PpXJ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_WPhj = false;
		const _Route_object_WMCG = new Route(_path_boolean_WPhj)

		expect(JSON.parse(JSON.stringify(_Route_object_WMCG))).to.deep.equal({"path":false,"stack":[],"methods":{}})

		try {
			const _method_function_LTbl = await _Route_object_WMCG.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_XPlb = undefined;
		const _Route_object_WNuT = new Route(_path_undefined_XPlb)
		const __options_function_HDAN = await _Route_object_WNuT._options()
		const _all_function_aYoh = await _Route_object_WNuT.all()

		expect(JSON.parse(JSON.stringify(_Route_object_WNuT))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_HDAN))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_aYoh))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_QbIn = await _Route_object_WNuT.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_nKzL = () => { };
		const _Route_object_hTkx = new Route(_path_function_nKzL)

		expect(JSON.parse(JSON.stringify(_Route_object_hTkx))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_dndJ = await _Route_object_hTkx.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_ivsE = null;
		const _Route_object_fDFC = new Route(_path_null_ivsE)
		const __options_function_pwPL = await _Route_object_fDFC._options()
		const _req_null_hbeM = null;
		const _res_array_dfwZ = []
		const _done_function_uyYZ = () => { };
		const _dispatch_function_grIu = await _Route_object_fDFC.dispatch(_req_null_hbeM, _res_array_dfwZ, _done_function_uyYZ)

		expect(JSON.parse(JSON.stringify(_Route_object_fDFC))).to.deep.equal({"path":null,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_pwPL))).to.deep.equal([])
		expect(_dispatch_function_grIu).to.equal(undefined)
		expect(JSON.parse(JSON.stringify(_res_array_dfwZ))).to.deep.equal([])

		try {
			const _method_function_MACx = await _Route_object_fDFC.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_pKfg = undefined;
		const _Route_object_kZFV = new Route(_path_undefined_pKfg)
		const _all_function_gPdq = await _Route_object_kZFV.all()
		const __options_function_zpuK = await _Route_object_kZFV._options()

		expect(JSON.parse(JSON.stringify(_Route_object_kZFV))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_zpuK))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_gPdq))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_nZHy = await _Route_object_kZFV.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_ywGS = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_ywGS))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_ZDHd = await _Route_object_ywGS.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_eKOp = null;
		const _Route_object_ifKO = new Route(_path_null_eKOp)

		expect(JSON.parse(JSON.stringify(_Route_object_ifKO))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_WYzT = await _Route_object_ifKO.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_Fafn = undefined;
		const _Route_object_cJaU = new Route(_path_undefined_Fafn)

		expect(JSON.parse(JSON.stringify(_Route_object_cJaU))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_tFvY = await _Route_object_cJaU.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_bgXf = []
		const _Route_object_xyGO = new Route(_path_array_bgXf)
		const __options_function_lsNT = await _Route_object_xyGO._options()

		expect(JSON.parse(JSON.stringify(_Route_object_xyGO))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_lsNT))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_path_array_bgXf))).to.deep.equal([])

		try {
			const _method_function_DqvC = await _Route_object_xyGO.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_Vvop = () => { };
		const _Route_object_yFDq = new Route(_path_function_Vvop)
		const __options_function_ZhLH = await _Route_object_yFDq._options()

		expect(JSON.parse(JSON.stringify(_Route_object_yFDq))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_ZhLH))).to.deep.equal([])

		try {
			const _method_function_xJSP = await _Route_object_yFDq.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_SjEP = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_SjEP))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_MljA = await _Route_object_SjEP.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_Mayv = {
		
	}
		const _Route_object_uoza = new Route(_path_object_Mayv)

		expect(JSON.parse(JSON.stringify(_Route_object_uoza))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_Mayv))).to.deep.equal({})

		try {
			const _method_function_zmup = await _Route_object_uoza.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_JIyN = {
		
	}
		const _Route_object_xtiF = new Route(_path_object_JIyN)

		expect(JSON.parse(JSON.stringify(_Route_object_xtiF))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_JIyN))).to.deep.equal({})

		try {
			const _method_function_qKAL = await _Route_object_xtiF.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_FXpJ = new Route()
		const _all_function_XITS = await _Route_object_FXpJ.all()

		expect(JSON.parse(JSON.stringify(_Route_object_FXpJ))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_XITS))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_FbKa = await _Route_object_FXpJ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_oxrc = -0.545592017411682;
		const _Route_object_WfBP = new Route(_path_numeric_oxrc)
		const __options_function_MIVO = await _Route_object_WfBP._options()

		expect(JSON.parse(JSON.stringify(_Route_object_WfBP))).to.deep.equal({"path":-0.545592017411682,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_MIVO))).to.deep.equal([])

		try {
			const _method_function_bDBW = await _Route_object_WfBP.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_bnXG = "sScUXcTJrlQnvuDhjFp8oRoOfVGyCNdJ378SAAEA";
		const _Route_object_pYvk = new Route(_path_string_bnXG)
		const __options_function_CCaJ = await _Route_object_pYvk._options()

		expect(JSON.parse(JSON.stringify(_Route_object_pYvk))).to.deep.equal({"path":"sScUXcTJrlQnvuDhjFp8oRoOfVGyCNdJ378SAAEA","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_CCaJ))).to.deep.equal([])

		try {
			const _method_function_KUuL = await _Route_object_pYvk.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_JtYa = 4.900203031861858;
		const _Route_object_WMtW = new Route(_path_numeric_JtYa)

		expect(JSON.parse(JSON.stringify(_Route_object_WMtW))).to.deep.equal({"path":4.900203031861858,"stack":[],"methods":{}})

		try {
			const _method_function_TcFI = await _Route_object_WMtW.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_nOLz = new Route()
		const __options_function_kfXn = await _Route_object_nOLz._options()

		expect(JSON.parse(JSON.stringify(_Route_object_nOLz))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_kfXn))).to.deep.equal([])

		try {
			const _method_function_cabj = await _Route_object_nOLz.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_uEmr = "Uw8TnJTKzh8e";
		const _Route_object_kSPR = new Route(_path_string_uEmr)
		const _all_function_sbvY = await _Route_object_kSPR.all()

		expect(JSON.parse(JSON.stringify(_Route_object_kSPR))).to.deep.equal({"path":"Uw8TnJTKzh8e","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_sbvY))).to.deep.equal({"path":"Uw8TnJTKzh8e","stack":[],"methods":{}})

		try {
			const _method_function_xhbM = await _Route_object_kSPR.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_QHiz = "bwqHHi7RVA2W05S4msH1vsXh10qSiNCNMpEdjL7eQgPc1pXETPFEv82KxQcysSgR8MFjv3DqSIJk720YzQnmndaIDcJjgXMYXh3";
		const _Route_object_TmWQ = new Route(_path_string_QHiz)

		expect(JSON.parse(JSON.stringify(_Route_object_TmWQ))).to.deep.equal({"path":"bwqHHi7RVA2W05S4msH1vsXh10qSiNCNMpEdjL7eQgPc1pXETPFEv82KxQcysSgR8MFjv3DqSIJk720YzQnmndaIDcJjgXMYXh3","stack":[],"methods":{}})

		try {
			const _method_function_MnVU = await _Route_object_TmWQ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_Pegd = {
		
	}
		const _Route_object_USuz = new Route(_path_object_Pegd)
		const __options_function_EMil = await _Route_object_USuz._options()

		expect(JSON.parse(JSON.stringify(_Route_object_USuz))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_EMil))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_path_object_Pegd))).to.deep.equal({})

		try {
			const _method_function_uWVr = await _Route_object_USuz.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_kXtf = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_kXtf))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_wzJv = await _Route_object_kXtf.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_rJjG = []
		const _Route_object_Esna = new Route(_path_array_rJjG)
		const __options_function_xHXq = await _Route_object_Esna._options()

		expect(JSON.parse(JSON.stringify(_Route_object_Esna))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_xHXq))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_path_array_rJjG))).to.deep.equal([])

		try {
			const _method_function_alAz = await _Route_object_Esna.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_sMdd = "Qa8vt5NtTihuQDoJPirc84sB1xXAqTtYQPHH2MhZU12SjbnYMJd0XY2sssuXVpk4fTXu9iq7jM2vR7VRoG";
		const _Route_object_QXsg = new Route(_path_string_sMdd)

		expect(JSON.parse(JSON.stringify(_Route_object_QXsg))).to.deep.equal({"path":"Qa8vt5NtTihuQDoJPirc84sB1xXAqTtYQPHH2MhZU12SjbnYMJd0XY2sssuXVpk4fTXu9iq7jM2vR7VRoG","stack":[],"methods":{}})

		try {
			const _method_function_Szwn = await _Route_object_QXsg.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_oezf = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_oezf))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_FRwb = await _Route_object_oezf.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_Lnuk = []
		const _Route_object_zVoH = new Route(_path_array_Lnuk)

		expect(JSON.parse(JSON.stringify(_Route_object_zVoH))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_Lnuk))).to.deep.equal([])

		try {
			const _method_function_aWUy = await _Route_object_zVoH.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_Tkpl = null;
		const _Route_object_aZKZ = new Route(_path_null_Tkpl)

		expect(JSON.parse(JSON.stringify(_Route_object_aZKZ))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_XtLo = await _Route_object_aZKZ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_CQcv = "tAoTTVoIQIOLYAiLeCQTV6pA1kh9XOuqzS9I1V5";
		const _Route_object_DIuU = new Route(_path_string_CQcv)
		const __options_function_MINR = await _Route_object_DIuU._options()

		expect(JSON.parse(JSON.stringify(_Route_object_DIuU))).to.deep.equal({"path":"tAoTTVoIQIOLYAiLeCQTV6pA1kh9XOuqzS9I1V5","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_MINR))).to.deep.equal([])

		try {
			const _method_function_IzxE = await _Route_object_DIuU.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_VmWD = "hLjccoP47ZBU0K0tLtaHM5Q";
		const _Route_object_efwj = new Route(_path_string_VmWD)
		const _all_function_LEVn = await _Route_object_efwj.all()
		const _all_function_lqix = await _Route_object_efwj.all()
		const _all_function_xiMH = await _Route_object_efwj.all()
		const _req_function_QprG = () => { };
		const _res_string_gUqN = "d2NhsVVnCSpJRiDm4yXxPMuPJOOFjixGAzFoC7";
		const _done_function_uQWN = () => { };
		const _dispatch_function_Meyz = await _Route_object_efwj.dispatch(_req_function_QprG, _res_string_gUqN, _done_function_uQWN)

		expect(JSON.parse(JSON.stringify(_Route_object_efwj))).to.deep.equal({"path":"hLjccoP47ZBU0K0tLtaHM5Q","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_LEVn))).to.deep.equal({"path":"hLjccoP47ZBU0K0tLtaHM5Q","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_lqix))).to.deep.equal({"path":"hLjccoP47ZBU0K0tLtaHM5Q","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_xiMH))).to.deep.equal({"path":"hLjccoP47ZBU0K0tLtaHM5Q","stack":[],"methods":{}})
		expect(_dispatch_function_Meyz).to.equal(undefined)

		try {
			const _method_function_yPJE = await _Route_object_efwj.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_xXjY = undefined;
		const _Route_object_YvwI = new Route(_path_undefined_xXjY)
		const _method_string_tRbM = "gohbsEyNUEmnw2hAIaUdEL4Q";
		const __handles_method_function_GGIC = await _Route_object_YvwI._handles_method(_method_string_tRbM)

		expect(JSON.parse(JSON.stringify(_Route_object_YvwI))).to.deep.equal({"stack":[],"methods":{}})
		expect(__handles_method_function_GGIC).to.equal(false)

		try {
			const _method_function_FhSp = await _Route_object_YvwI.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_uVsx = -1.220286424027;
		const _Route_object_PDAF = new Route(_path_numeric_uVsx)

		expect(JSON.parse(JSON.stringify(_Route_object_PDAF))).to.deep.equal({"path":-1.220286424027,"stack":[],"methods":{}})

		try {
			const _method_function_VLEu = await _Route_object_PDAF.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_TLmh = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_TLmh))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_ePKS = await _Route_object_TLmh.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_ESGG = true;
		const _Route_object_HXjj = new Route(_path_boolean_ESGG)

		expect(JSON.parse(JSON.stringify(_Route_object_HXjj))).to.deep.equal({"path":true,"stack":[],"methods":{}})

		try {
			const _method_function_gBFy = await _Route_object_HXjj.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_hhLm = () => { };
		const _Route_object_kdwc = new Route(_path_function_hhLm)

		expect(JSON.parse(JSON.stringify(_Route_object_kdwc))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_YkHV = await _Route_object_kdwc.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);
})