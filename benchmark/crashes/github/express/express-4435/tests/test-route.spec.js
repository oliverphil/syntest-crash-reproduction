const Route = require("../../benchmark/crashes/express/express-4435/node_modules/express/lib/router/route.js");
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('route', () => {
	it('test for route', async () => {
		const _Route_object_hgQR = new Route()
		const __options_function_rQAZ = await _Route_object_hgQR._options()
		const __options_function_bdta = await _Route_object_hgQR._options()
		const __options_function_aQlX = await _Route_object_hgQR._options()

		expect(JSON.parse(JSON.stringify(_Route_object_hgQR))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_aQlX))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(__options_function_bdta))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(__options_function_rQAZ))).to.deep.equal([])

		try {
			const _method_function_xkyl = await _Route_object_hgQR.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_SqyL = () => { };
		const _Route_object_BzqU = new Route(_path_function_SqyL)
		const _req_string_dDvy = "33HYu2VDqGI26EcriNDwGnW3vokpqaxtSgPovzGPnFiIZkNY4PhifVQztT397NE3OhLoVAxZ94rrm";
		const _res_string_ZXrh = "Q3FBUSzuC1sFdGHU4xvckyVUAoI5EKxSzWEnNLVBUryvyHfGlBc9DIQ";
		const _done_string_Evri = "k5MiwomPoCZgEt8Q6pJcSYm";

		expect(JSON.parse(JSON.stringify(_Route_object_BzqU))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _dispatch_function_EtPe = await _Route_object_BzqU.dispatch(_req_string_dDvy, _res_string_ZXrh, _done_string_Evri)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_xbLK = {
		
	}
		const _Route_object_Xpti = new Route(_path_object_xbLK)
		const _method_function_JyMC = () => { };

		expect(JSON.parse(JSON.stringify(_Route_object_Xpti))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_xbLK))).to.deep.equal({})

		try {
			const __handles_method_function_Bnff = await _Route_object_Xpti._handles_method(_method_function_JyMC)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_bSEt = new Route()
		const __options_function_Riod = await _Route_object_bSEt._options()

		expect(JSON.parse(JSON.stringify(_Route_object_bSEt))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_Riod))).to.deep.equal([])

		try {
			const __handles_method_function_BnQD = await _Route_object_bSEt._handles_method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_RgkC = {
		
	}
		const _Route_object_PTJG = new Route(_path_object_RgkC)

		expect(JSON.parse(JSON.stringify(_Route_object_PTJG))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_RgkC))).to.deep.equal({})

		try {
			const _method_function_DYSS = await _Route_object_PTJG.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_gCbP = null;
		const _Route_object_rOUg = new Route(_path_null_gCbP)

		expect(JSON.parse(JSON.stringify(_Route_object_rOUg))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_tDoL = await _Route_object_rOUg.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_TfNp = {
		
	}
		const _Route_object_VPGM = new Route(_path_object_TfNp)

		expect(JSON.parse(JSON.stringify(_Route_object_VPGM))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_TfNp))).to.deep.equal({})

		try {
			const _method_function_jmny = await _Route_object_VPGM.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_dZWP = undefined;
		const _Route_object_TZsa = new Route(_path_undefined_dZWP)
		const _all_function_Akyd = await _Route_object_TZsa.all()
		const __options_function_hbRG = await _Route_object_TZsa._options()

		expect(JSON.parse(JSON.stringify(_Route_object_TZsa))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_hbRG))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_Akyd))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_WVaq = await _Route_object_TZsa.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_WERb = new Route()
		const __options_function_AetP = await _Route_object_WERb._options()
		const __options_function_RKMu = await _Route_object_WERb._options()
		const _req_string_IlFb = "4paF9ZkUzoNDvoDT4lKFP4HMRTEBi4rJoNGmpwyUPccFtnRC7iXsH3MjeE6RqGxkKPywLqCOojnF";
		const _res_numeric_JTav = 6.779994881987221;
		const _done_function_xoPD = () => { };
		const _dispatch_function_wsne = await _Route_object_WERb.dispatch(_req_string_IlFb, _res_numeric_JTav, _done_function_xoPD)
		const _all_function_rPvS = await _Route_object_WERb.all()

		expect(JSON.parse(JSON.stringify(_Route_object_WERb))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_AetP))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(__options_function_RKMu))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_rPvS))).to.deep.equal({"stack":[],"methods":{}})
		expect(_dispatch_function_wsne).to.equal(undefined)

		try {
			const _method_function_XOSz = await _Route_object_WERb.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_gvvV = undefined;
		const _Route_object_vooY = new Route(_path_undefined_gvvV)
		const _all_function_JMZi = await _Route_object_vooY.all()
		const __options_function_EXNf = await _Route_object_vooY._options()

		expect(JSON.parse(JSON.stringify(_Route_object_vooY))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_EXNf))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_JMZi))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_UgnR = await _Route_object_vooY.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_iMsD = null;
		const _Route_object_MjTO = new Route(_path_null_iMsD)
		const __options_function_yEAS = await _Route_object_MjTO._options()
		const _all_function_zthX = await _Route_object_MjTO.all()

		expect(JSON.parse(JSON.stringify(_Route_object_MjTO))).to.deep.equal({"path":null,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_yEAS))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_zthX))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_MtwF = await _Route_object_MjTO.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_NnLW = undefined;
		const _Route_object_ZkDG = new Route(_path_undefined_NnLW)

		expect(JSON.parse(JSON.stringify(_Route_object_ZkDG))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_Qsav = await _Route_object_ZkDG.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_cJwy = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_cJwy))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_Cdla = await _Route_object_cJwy.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_hluL = "pqRYJ5XTNGzBqSRj6Jb1DVqUSzXxOe4PuY7nWkp33XII96jTkbR3BctIJ8xEUCWHUX6T03qN6tGkE3aXj75pL6lfPPk";
		const _Route_object_saoP = new Route(_path_string_hluL)

		expect(JSON.parse(JSON.stringify(_Route_object_saoP))).to.deep.equal({"path":"pqRYJ5XTNGzBqSRj6Jb1DVqUSzXxOe4PuY7nWkp33XII96jTkbR3BctIJ8xEUCWHUX6T03qN6tGkE3aXj75pL6lfPPk","stack":[],"methods":{}})

		try {
			const _method_function_ammh = await _Route_object_saoP.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_xqAx = "mvmGhAfEOstG9JiO";
		const _Route_object_yerO = new Route(_path_string_xqAx)
		const __options_function_XHXC = await _Route_object_yerO._options()
		const _all_function_QjfY = await _Route_object_yerO.all()

		expect(JSON.parse(JSON.stringify(_Route_object_yerO))).to.deep.equal({"path":"mvmGhAfEOstG9JiO","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_XHXC))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_QjfY))).to.deep.equal({"path":"mvmGhAfEOstG9JiO","stack":[],"methods":{}})

		try {
			const _method_function_WeIN = await _Route_object_yerO.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_hvhb = new Route()
		const __options_function_QcAK = await _Route_object_hvhb._options()
		const _all_function_Zwuo = await _Route_object_hvhb.all()
		const __options_function_jRLz = await _Route_object_hvhb._options()
		const _method_null_tnOD = null;

		expect(JSON.parse(JSON.stringify(_Route_object_hvhb))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_QcAK))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(__options_function_jRLz))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_Zwuo))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const __handles_method_function_hRXW = await _Route_object_hvhb._handles_method(_method_null_tnOD)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_wkcG = "BhAoa4cf69Ip6Y8AgLA5WJuzH70GGDI2fyqckMQfUzEeK7pTbQneV64db1qmSW2F3b9SRghXNoMHQ115";
		const _Route_object_mFyK = new Route(_path_string_wkcG)

		expect(JSON.parse(JSON.stringify(_Route_object_mFyK))).to.deep.equal({"path":"BhAoa4cf69Ip6Y8AgLA5WJuzH70GGDI2fyqckMQfUzEeK7pTbQneV64db1qmSW2F3b9SRghXNoMHQ115","stack":[],"methods":{}})

		try {
			const _method_function_brMn = await _Route_object_mFyK.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_OsXR = "rZgUePnk6GqNnePknllQW4YBk8SIKVy555mO5dhEXIFlvLUPgYicqHe4V8T2GXvbkDDQI3";
		const _Route_object_Zorl = new Route(_path_string_OsXR)

		expect(JSON.parse(JSON.stringify(_Route_object_Zorl))).to.deep.equal({"path":"rZgUePnk6GqNnePknllQW4YBk8SIKVy555mO5dhEXIFlvLUPgYicqHe4V8T2GXvbkDDQI3","stack":[],"methods":{}})

		try {
			const _method_function_DlnI = await _Route_object_Zorl.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_MeOD = {
		
	}
		const _Route_object_xSIE = new Route(_path_object_MeOD)

		expect(JSON.parse(JSON.stringify(_Route_object_xSIE))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_MeOD))).to.deep.equal({})

		try {
			const _method_function_tNZS = await _Route_object_xSIE.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_LRIa = null;
		const _Route_object_IGFT = new Route(_path_null_LRIa)

		expect(JSON.parse(JSON.stringify(_Route_object_IGFT))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_mFGg = await _Route_object_IGFT.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_HTtC = undefined;
		const _Route_object_bjIG = new Route(_path_undefined_HTtC)

		expect(JSON.parse(JSON.stringify(_Route_object_bjIG))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_OCRe = await _Route_object_bjIG.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_KFwq = false;
		const _Route_object_uVwQ = new Route(_path_boolean_KFwq)
		const _all_function_LYnF = await _Route_object_uVwQ.all()

		expect(JSON.parse(JSON.stringify(_Route_object_uVwQ))).to.deep.equal({"path":false,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_LYnF))).to.deep.equal({"path":false,"stack":[],"methods":{}})

		try {
			const _method_function_RZtw = await _Route_object_uVwQ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_HjPD = new Route()
		const __options_function_GdWd = await _Route_object_HjPD._options()

		expect(JSON.parse(JSON.stringify(_Route_object_HjPD))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_GdWd))).to.deep.equal([])

		try {
			const _method_function_sYeX = await _Route_object_HjPD.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_QiTr = []
		const _Route_object_rgTx = new Route(_path_array_QiTr)
		const _method_string_RTTO = "Sl6OVE64UJaykqYWvQYt6bb8Mb6zwqIpvDRHelObPOIOuuAb";
		const __handles_method_function_aTKK = await _Route_object_rgTx._handles_method(_method_string_RTTO)

		expect(JSON.parse(JSON.stringify(_Route_object_rgTx))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(__handles_method_function_aTKK).to.equal(false)
		expect(JSON.parse(JSON.stringify(_path_array_QiTr))).to.deep.equal([])

		try {
			const _method_function_LulN = await _Route_object_rgTx.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_WjNB = new Route()
		const _all_function_wMAH = await _Route_object_WjNB.all()

		expect(JSON.parse(JSON.stringify(_Route_object_WjNB))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_wMAH))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_Elid = await _Route_object_WjNB.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_CkEZ = false;
		const _Route_object_exCm = new Route(_path_boolean_CkEZ)

		expect(JSON.parse(JSON.stringify(_Route_object_exCm))).to.deep.equal({"path":false,"stack":[],"methods":{}})

		try {
			const _method_function_sUct = await _Route_object_exCm.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_NxJu = "zNgZquHf";
		const _Route_object_srIF = new Route(_path_string_NxJu)
		const _all_function_ecTP = await _Route_object_srIF.all()
		const __options_function_AsGX = await _Route_object_srIF._options()

		expect(JSON.parse(JSON.stringify(_Route_object_srIF))).to.deep.equal({"path":"zNgZquHf","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_AsGX))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_ecTP))).to.deep.equal({"path":"zNgZquHf","stack":[],"methods":{}})

		try {
			const _method_function_bhrb = await _Route_object_srIF.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_iwnt = 9.9181574414357;
		const _Route_object_RabX = new Route(_path_numeric_iwnt)

		expect(JSON.parse(JSON.stringify(_Route_object_RabX))).to.deep.equal({"path":9.9181574414357,"stack":[],"methods":{}})

		try {
			const _method_function_uEpG = await _Route_object_RabX.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_MgJf = "5tL1V4PYVLjpTUe5jTcFUdT5lIbHhHUR0eISkC8rtYfNbhHquaq1pPAslcAldgzj5";
		const _Route_object_lTYK = new Route(_path_string_MgJf)
		const _req_object_kKIO = {
		
	}
		const _res_null_EjNX = null;
		const _done_function_SrVr = () => { };
		const _dispatch_function_cdic = await _Route_object_lTYK.dispatch(_req_object_kKIO, _res_null_EjNX, _done_function_SrVr)
		const _all_function_NrVS = await _Route_object_lTYK.all()
		const __options_function_jfyy = await _Route_object_lTYK._options()
		const _all_function_floA = await _Route_object_lTYK.all()

		expect(JSON.parse(JSON.stringify(_Route_object_lTYK))).to.deep.equal({"path":"5tL1V4PYVLjpTUe5jTcFUdT5lIbHhHUR0eISkC8rtYfNbhHquaq1pPAslcAldgzj5","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_jfyy))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_NrVS))).to.deep.equal({"path":"5tL1V4PYVLjpTUe5jTcFUdT5lIbHhHUR0eISkC8rtYfNbhHquaq1pPAslcAldgzj5","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_floA))).to.deep.equal({"path":"5tL1V4PYVLjpTUe5jTcFUdT5lIbHhHUR0eISkC8rtYfNbhHquaq1pPAslcAldgzj5","stack":[],"methods":{}})
		expect(_dispatch_function_cdic).to.equal(undefined)
		expect(JSON.parse(JSON.stringify(_req_object_kKIO))).to.deep.equal({})

		try {
			const _method_function_DHtc = await _Route_object_lTYK.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_GiXf = undefined;
		const _Route_object_fqIw = new Route(_path_undefined_GiXf)
		const _all_function_rOeu = await _Route_object_fqIw.all()

		expect(JSON.parse(JSON.stringify(_Route_object_fqIw))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_rOeu))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_hZVg = await _Route_object_fqIw.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_UJZf = []
		const _Route_object_bvth = new Route(_path_array_UJZf)

		expect(JSON.parse(JSON.stringify(_Route_object_bvth))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_UJZf))).to.deep.equal([])

		try {
			const _method_function_cZfT = await _Route_object_bvth.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_PrdS = []
		const _Route_object_Ayko = new Route(_path_array_PrdS)

		expect(JSON.parse(JSON.stringify(_Route_object_Ayko))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_PrdS))).to.deep.equal([])

		try {
			const _method_function_nnlJ = await _Route_object_Ayko.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_ITTI = () => { };
		const _Route_object_ILDc = new Route(_path_function_ITTI)
		const _all_function_mSXQ = await _Route_object_ILDc.all()

		expect(JSON.parse(JSON.stringify(_Route_object_ILDc))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_mSXQ))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_JBGK = await _Route_object_ILDc.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_sypL = []
		const _Route_object_Eahq = new Route(_path_array_sypL)

		expect(JSON.parse(JSON.stringify(_Route_object_Eahq))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_sypL))).to.deep.equal([])

		try {
			const _method_function_xoJh = await _Route_object_Eahq.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_JkfD = () => { };
		const _Route_object_PPfR = new Route(_path_function_JkfD)

		expect(JSON.parse(JSON.stringify(_Route_object_PPfR))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_RSMN = await _Route_object_PPfR.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_RrWj = () => { };
		const _Route_object_mAAT = new Route(_path_function_RrWj)

		expect(JSON.parse(JSON.stringify(_Route_object_mAAT))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_EcCR = await _Route_object_mAAT.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_RRzy = "u6CuXkVPc1yrEo2UHwuvz9Yp28VOkgHnFBitDSRKtUf";
		const _Route_object_jjDw = new Route(_path_string_RRzy)
		const __options_function_KVNO = await _Route_object_jjDw._options()

		expect(JSON.parse(JSON.stringify(_Route_object_jjDw))).to.deep.equal({"path":"u6CuXkVPc1yrEo2UHwuvz9Yp28VOkgHnFBitDSRKtUf","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_KVNO))).to.deep.equal([])

		try {
			const _method_function_sdUi = await _Route_object_jjDw.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_WThY = {
		
	}
		const _Route_object_bZjn = new Route(_path_object_WThY)

		expect(JSON.parse(JSON.stringify(_Route_object_bZjn))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_WThY))).to.deep.equal({})

		try {
			const _method_function_gWOy = await _Route_object_bZjn.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_ydQg = undefined;
		const _Route_object_UEHS = new Route(_path_undefined_ydQg)
		const _all_function_TsRB = await _Route_object_UEHS.all()

		expect(JSON.parse(JSON.stringify(_Route_object_UEHS))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_TsRB))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_cdmU = await _Route_object_UEHS.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_YhHx = new Route()
		const _all_function_JoAP = await _Route_object_YhHx.all()

		expect(JSON.parse(JSON.stringify(_Route_object_YhHx))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_JoAP))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_XyXY = await _Route_object_YhHx.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_Btut = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_Btut))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_XSoQ = await _Route_object_Btut.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_UBCW = []
		const _Route_object_xwIy = new Route(_path_array_UBCW)
		const __options_function_HjHw = await _Route_object_xwIy._options()

		expect(JSON.parse(JSON.stringify(_Route_object_xwIy))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_HjHw))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_path_array_UBCW))).to.deep.equal([])

		try {
			const _method_function_JCeS = await _Route_object_xwIy.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_LCsS = 2.0922294918898956;
		const _Route_object_DYek = new Route(_path_numeric_LCsS)
		const _method_string_ZrzY = "Lks9gLG3JRe2NLVt2il6ADvvEthI";
		const __handles_method_function_cGoD = await _Route_object_DYek._handles_method(_method_string_ZrzY)
		const _req_function_GCMD = () => { };
		const _res_string_Vabb = "zmInfOEcshWGd7RSUZr";
		const _done_function_uCtE = () => { };
		const _dispatch_function_ndgq = await _Route_object_DYek.dispatch(_req_function_GCMD, _res_string_Vabb, _done_function_uCtE)

		expect(JSON.parse(JSON.stringify(_Route_object_DYek))).to.deep.equal({"path":2.0922294918898956,"stack":[],"methods":{}})
		expect(__handles_method_function_cGoD).to.equal(false)
		expect(_dispatch_function_ndgq).to.equal(undefined)

		try {
			const _method_function_VBYT = await _Route_object_DYek.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_FOAl = {
		
	}
		const _Route_object_GIYF = new Route(_path_object_FOAl)

		expect(JSON.parse(JSON.stringify(_Route_object_GIYF))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_FOAl))).to.deep.equal({})

		try {
			const _method_function_USiY = await _Route_object_GIYF.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_QBYx = -3.743093447708164;
		const _Route_object_ZOCU = new Route(_path_numeric_QBYx)

		expect(JSON.parse(JSON.stringify(_Route_object_ZOCU))).to.deep.equal({"path":-3.743093447708164,"stack":[],"methods":{}})

		try {
			const _method_function_rDaG = await _Route_object_ZOCU.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_IUSG = () => { };
		const _Route_object_WwyD = new Route(_path_function_IUSG)
		const __options_function_fThm = await _Route_object_WwyD._options()

		expect(JSON.parse(JSON.stringify(_Route_object_WwyD))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_fThm))).to.deep.equal([])

		try {
			const _method_function_xAcr = await _Route_object_WwyD.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_RJrg = null;
		const _Route_object_LSlm = new Route(_path_null_RJrg)

		expect(JSON.parse(JSON.stringify(_Route_object_LSlm))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_YGzg = await _Route_object_LSlm.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_UToj = "i2ibwBpA0B9yWg";
		const _Route_object_VROF = new Route(_path_string_UToj)
		const _all_function_MdGZ = await _Route_object_VROF.all()
		const __options_function_lJRL = await _Route_object_VROF._options()

		expect(JSON.parse(JSON.stringify(_Route_object_VROF))).to.deep.equal({"path":"i2ibwBpA0B9yWg","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_lJRL))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_MdGZ))).to.deep.equal({"path":"i2ibwBpA0B9yWg","stack":[],"methods":{}})

		try {
			const _method_function_RanZ = await _Route_object_VROF.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_MXzl = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_MXzl))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_OSqh = await _Route_object_MXzl.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_KDKU = undefined;
		const _Route_object_XRXq = new Route(_path_undefined_KDKU)
		const _all_function_ZWqu = await _Route_object_XRXq.all()

		expect(JSON.parse(JSON.stringify(_Route_object_XRXq))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_ZWqu))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_vzas = await _Route_object_XRXq.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_yAMp = {
		
	}
		const _Route_object_bqQd = new Route(_path_object_yAMp)

		expect(JSON.parse(JSON.stringify(_Route_object_bqQd))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_yAMp))).to.deep.equal({})

		try {
			const _method_function_MYAz = await _Route_object_bqQd.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_RkjM = []
		const _Route_object_JUzt = new Route(_path_array_RkjM)

		expect(JSON.parse(JSON.stringify(_Route_object_JUzt))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_RkjM))).to.deep.equal([])

		try {
			const _method_function_bYGj = await _Route_object_JUzt.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_ikaK = {
		
	}
		const _Route_object_YOxI = new Route(_path_object_ikaK)
		const __options_function_SCaB = await _Route_object_YOxI._options()

		expect(JSON.parse(JSON.stringify(_Route_object_YOxI))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_SCaB))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_path_object_ikaK))).to.deep.equal({})

		try {
			const _method_function_KEFf = await _Route_object_YOxI.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_efkK = false;
		const _Route_object_ZDUm = new Route(_path_boolean_efkK)

		expect(JSON.parse(JSON.stringify(_Route_object_ZDUm))).to.deep.equal({"path":false,"stack":[],"methods":{}})

		try {
			const _method_function_BBgK = await _Route_object_ZDUm.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_sPeW = new Route()
		const _method_string_NVzV = "9";
		const __handles_method_function_JnOL = await _Route_object_sPeW._handles_method(_method_string_NVzV)

		expect(JSON.parse(JSON.stringify(_Route_object_sPeW))).to.deep.equal({"stack":[],"methods":{}})
		expect(__handles_method_function_JnOL).to.equal(false)

		try {
			const _method_function_NiDZ = await _Route_object_sPeW.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_wbbI = true;
		const _Route_object_fuHi = new Route(_path_boolean_wbbI)
		const __options_function_NTUt = await _Route_object_fuHi._options()

		expect(JSON.parse(JSON.stringify(_Route_object_fuHi))).to.deep.equal({"path":true,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_NTUt))).to.deep.equal([])

		try {
			const _method_function_uila = await _Route_object_fuHi.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_mBax = -7.247924045766359;
		const _Route_object_TpUo = new Route(_path_numeric_mBax)

		expect(JSON.parse(JSON.stringify(_Route_object_TpUo))).to.deep.equal({"path":-7.247924045766359,"stack":[],"methods":{}})

		try {
			const _method_function_Kxvq = await _Route_object_TpUo.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_wTLk = () => { };
		const _Route_object_PpLX = new Route(_path_function_wTLk)

		expect(JSON.parse(JSON.stringify(_Route_object_PpLX))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_dnnr = await _Route_object_PpLX.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_gZVD = []
		const _Route_object_DhRp = new Route(_path_array_gZVD)
		const _all_function_vIiO = await _Route_object_DhRp.all()

		expect(JSON.parse(JSON.stringify(_Route_object_DhRp))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_vIiO))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_gZVD))).to.deep.equal([])

		try {
			const _method_function_adaU = await _Route_object_DhRp.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_gcHM = {
		
	}
		const _Route_object_sVay = new Route(_path_object_gcHM)
		const _all_function_YMXG = await _Route_object_sVay.all()

		expect(JSON.parse(JSON.stringify(_Route_object_sVay))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_YMXG))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_gcHM))).to.deep.equal({})

		try {
			const _method_function_TvTG = await _Route_object_sVay.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_wTNP = undefined;
		const _Route_object_coBb = new Route(_path_undefined_wTNP)
		const _all_function_FWOw = await _Route_object_coBb.all()
		const _all_function_yopB = await _Route_object_coBb.all()

		expect(JSON.parse(JSON.stringify(_Route_object_coBb))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_FWOw))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_yopB))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_kSAo = await _Route_object_coBb.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_aVbk = "FRxdTFSzkFGD4BLeMVQctAx1tLaM6d5H9YGoFZLf1ocTiNEzjz99hzGIFt3DuFORXMf7dtjWUtgE3YLmTOMslmLPF";
		const _Route_object_trup = new Route(_path_string_aVbk)

		expect(JSON.parse(JSON.stringify(_Route_object_trup))).to.deep.equal({"path":"FRxdTFSzkFGD4BLeMVQctAx1tLaM6d5H9YGoFZLf1ocTiNEzjz99hzGIFt3DuFORXMf7dtjWUtgE3YLmTOMslmLPF","stack":[],"methods":{}})

		try {
			const _method_function_MDEl = await _Route_object_trup.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_XvuD = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_XvuD))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_qsiS = await _Route_object_XvuD.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_BIWr = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_BIWr))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_KPRA = await _Route_object_BIWr.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_ZGVG = "t";
		const _Route_object_cCIr = new Route(_path_string_ZGVG)

		expect(JSON.parse(JSON.stringify(_Route_object_cCIr))).to.deep.equal({"path":"t","stack":[],"methods":{}})

		try {
			const _method_function_OEfO = await _Route_object_cCIr.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_KQFo = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_KQFo))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_WWMv = await _Route_object_KQFo.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_Uiro = {
		
	}
		const _Route_object_glfN = new Route(_path_object_Uiro)

		expect(JSON.parse(JSON.stringify(_Route_object_glfN))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_Uiro))).to.deep.equal({})

		try {
			const _method_function_uWPW = await _Route_object_glfN.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_wPvK = new Route()
		const __options_function_DkwX = await _Route_object_wPvK._options()
		const _all_function_GzVl = await _Route_object_wPvK.all()

		expect(JSON.parse(JSON.stringify(_Route_object_wPvK))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_DkwX))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_GzVl))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_bRJF = await _Route_object_wPvK.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_LsaK = undefined;
		const _Route_object_GZak = new Route(_path_undefined_LsaK)

		expect(JSON.parse(JSON.stringify(_Route_object_GZak))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_pZkv = await _Route_object_GZak.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_OWNx = () => { };
		const _Route_object_yrVB = new Route(_path_function_OWNx)
		const __options_function_QQbO = await _Route_object_yrVB._options()
		const _all_function_XbCJ = await _Route_object_yrVB.all()
		const _all_function_LkdG = await _Route_object_yrVB.all()

		expect(JSON.parse(JSON.stringify(_Route_object_yrVB))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_QQbO))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_LkdG))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_XbCJ))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_rekB = await _Route_object_yrVB.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_asmj = "RCTTZX4rl9TUbQXHbkXiUqi2RMHCw759eUIvvLXWumPgri0D";
		const _Route_object_RENK = new Route(_path_string_asmj)

		expect(JSON.parse(JSON.stringify(_Route_object_RENK))).to.deep.equal({"path":"RCTTZX4rl9TUbQXHbkXiUqi2RMHCw759eUIvvLXWumPgri0D","stack":[],"methods":{}})

		try {
			const _method_function_YJZJ = await _Route_object_RENK.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_tkIs = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_tkIs))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_azSo = await _Route_object_tkIs.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_ScaK = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_ScaK))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_VOwI = await _Route_object_ScaK.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_eqjR = []
		const _Route_object_jfUk = new Route(_path_array_eqjR)
		const __options_function_ABTI = await _Route_object_jfUk._options()
		const _all_function_QcKJ = await _Route_object_jfUk.all()

		expect(JSON.parse(JSON.stringify(_Route_object_jfUk))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_ABTI))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_QcKJ))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_eqjR))).to.deep.equal([])

		try {
			const _method_function_nSwK = await _Route_object_jfUk.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_VyFd = false;
		const _Route_object_oTEK = new Route(_path_boolean_VyFd)

		expect(JSON.parse(JSON.stringify(_Route_object_oTEK))).to.deep.equal({"path":false,"stack":[],"methods":{}})

		try {
			const _method_function_FXDr = await _Route_object_oTEK.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_fUmE = () => { };
		const _Route_object_CIcp = new Route(_path_function_fUmE)

		expect(JSON.parse(JSON.stringify(_Route_object_CIcp))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_NtGZ = await _Route_object_CIcp.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_bStu = () => { };
		const _Route_object_RSFz = new Route(_path_function_bStu)

		expect(JSON.parse(JSON.stringify(_Route_object_RSFz))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_ouya = await _Route_object_RSFz.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_UeXO = {
		
	}
		const _Route_object_Vfvr = new Route(_path_object_UeXO)

		expect(JSON.parse(JSON.stringify(_Route_object_Vfvr))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_UeXO))).to.deep.equal({})

		try {
			const _method_function_cCYD = await _Route_object_Vfvr.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_PkfX = undefined;
		const _Route_object_PSVw = new Route(_path_undefined_PkfX)

		expect(JSON.parse(JSON.stringify(_Route_object_PSVw))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_tqoV = await _Route_object_PSVw.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_suQp = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_suQp))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_YJhL = await _Route_object_suQp.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_uHmZ = []
		const _Route_object_hNOl = new Route(_path_array_uHmZ)

		expect(JSON.parse(JSON.stringify(_Route_object_hNOl))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_uHmZ))).to.deep.equal([])

		try {
			const _method_function_MFCb = await _Route_object_hNOl.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_NNzt = null;
		const _Route_object_jPck = new Route(_path_null_NNzt)

		expect(JSON.parse(JSON.stringify(_Route_object_jPck))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_BlXH = await _Route_object_jPck.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_JXhe = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_JXhe))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_apcW = await _Route_object_JXhe.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_NSvN = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_NSvN))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_tZwh = await _Route_object_NSvN.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_BXgJ = null;
		const _Route_object_esOx = new Route(_path_null_BXgJ)
		const _all_function_ibAF = await _Route_object_esOx.all()

		expect(JSON.parse(JSON.stringify(_Route_object_esOx))).to.deep.equal({"path":null,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_ibAF))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_GMxH = await _Route_object_esOx.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_onka = -0.8286546087208766;
		const _Route_object_VHAq = new Route(_path_numeric_onka)
		const __options_function_xHIN = await _Route_object_VHAq._options()

		expect(JSON.parse(JSON.stringify(_Route_object_VHAq))).to.deep.equal({"path":-0.8286546087208766,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_xHIN))).to.deep.equal([])

		try {
			const _method_function_iQjk = await _Route_object_VHAq.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_Vnfr = () => { };
		const _Route_object_QovJ = new Route(_path_function_Vnfr)

		expect(JSON.parse(JSON.stringify(_Route_object_QovJ))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_bIGf = await _Route_object_QovJ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_inea = () => { };
		const _Route_object_OxXt = new Route(_path_function_inea)

		expect(JSON.parse(JSON.stringify(_Route_object_OxXt))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_rBGJ = await _Route_object_OxXt.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_hvpu = []
		const _Route_object_pHnz = new Route(_path_array_hvpu)

		expect(JSON.parse(JSON.stringify(_Route_object_pHnz))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_hvpu))).to.deep.equal([])

		try {
			const _method_function_YBdl = await _Route_object_pHnz.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_GekI = new Route()
		const _all_function_Dixe = await _Route_object_GekI.all()
		const _req_function_ktEj = () => { };
		const _res_undefined_GBlX = undefined;
		const _done_function_BKOz = () => { };
		const _dispatch_function_pCHf = await _Route_object_GekI.dispatch(_req_function_ktEj, _res_undefined_GBlX, _done_function_BKOz)
		const __options_function_OYCG = await _Route_object_GekI._options()

		expect(JSON.parse(JSON.stringify(_Route_object_GekI))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_OYCG))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_Dixe))).to.deep.equal({"stack":[],"methods":{}})
		expect(_dispatch_function_pCHf).to.equal(undefined)

		try {
			const _method_function_HOjM = await _Route_object_GekI.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_OIPf = null;
		const _Route_object_mHOF = new Route(_path_null_OIPf)

		expect(JSON.parse(JSON.stringify(_Route_object_mHOF))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_zXUR = await _Route_object_mHOF.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_mrUk = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_mrUk))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_jmSS = await _Route_object_mrUk.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_Azpa = null;
		const _Route_object_mCzX = new Route(_path_null_Azpa)
		const __options_function_Fflu = await _Route_object_mCzX._options()
		const _all_function_ABuU = await _Route_object_mCzX.all()

		expect(JSON.parse(JSON.stringify(_Route_object_mCzX))).to.deep.equal({"path":null,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_Fflu))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_ABuU))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_QgDg = await _Route_object_mCzX.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_xtEX = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_xtEX))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_HGtW = await _Route_object_xtEX.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_JYnF = "UYkxVhbbbdtptS07L";
		const _Route_object_ReEI = new Route(_path_string_JYnF)

		expect(JSON.parse(JSON.stringify(_Route_object_ReEI))).to.deep.equal({"path":"UYkxVhbbbdtptS07L","stack":[],"methods":{}})

		try {
			const _method_function_jZtH = await _Route_object_ReEI.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_PqaD = new Route()
		const _all_function_YrLY = await _Route_object_PqaD.all()

		expect(JSON.parse(JSON.stringify(_Route_object_PqaD))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_YrLY))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_YSIU = await _Route_object_PqaD.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_PuZD = null;
		const _Route_object_GgNC = new Route(_path_null_PuZD)

		expect(JSON.parse(JSON.stringify(_Route_object_GgNC))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_xGPB = await _Route_object_GgNC.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_vype = new Route()
		const _all_function_Scyk = await _Route_object_vype.all()
		const __options_function_zizN = await _Route_object_vype._options()
		const _all_function_uujM = await _Route_object_vype.all()

		expect(JSON.parse(JSON.stringify(_Route_object_vype))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_zizN))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_Scyk))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_uujM))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_Parw = await _Route_object_vype.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_CbzX = {
		
	}
		const _Route_object_RUUJ = new Route(_path_object_CbzX)
		const __options_function_JcMG = await _Route_object_RUUJ._options()
		const __options_function_dyMN = await _Route_object_RUUJ._options()

		expect(JSON.parse(JSON.stringify(_Route_object_RUUJ))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_JcMG))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(__options_function_dyMN))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_path_object_CbzX))).to.deep.equal({})

		try {
			const _method_function_vItf = await _Route_object_RUUJ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_jsfk = null;
		const _Route_object_WhZd = new Route(_path_null_jsfk)

		expect(JSON.parse(JSON.stringify(_Route_object_WhZd))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_nmrX = await _Route_object_WhZd.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_PZpM = new Route()
		const __options_function_uWLo = await _Route_object_PZpM._options()
		const _all_function_ZlZq = await _Route_object_PZpM.all()

		expect(JSON.parse(JSON.stringify(_Route_object_PZpM))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_uWLo))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_ZlZq))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_YOjp = await _Route_object_PZpM.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_UCzM = new Route()
		const _method_string_ANcl = "me2UNHkpe8SVmhjXl3knxFECviznazLVw7l";
		const __handles_method_function_Cxiw = await _Route_object_UCzM._handles_method(_method_string_ANcl)

		expect(JSON.parse(JSON.stringify(_Route_object_UCzM))).to.deep.equal({"stack":[],"methods":{}})
		expect(__handles_method_function_Cxiw).to.equal(false)

		try {
			const _method_function_Xato = await _Route_object_UCzM.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_dIFz = {
		
	}
		const _Route_object_PEwA = new Route(_path_object_dIFz)

		expect(JSON.parse(JSON.stringify(_Route_object_PEwA))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_dIFz))).to.deep.equal({})

		try {
			const _method_function_Lknj = await _Route_object_PEwA.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_DkcA = false;
		const _Route_object_kFXo = new Route(_path_boolean_DkcA)
		const _all_function_Xgqz = await _Route_object_kFXo.all()
		const __options_function_Gboj = await _Route_object_kFXo._options()

		expect(JSON.parse(JSON.stringify(_Route_object_kFXo))).to.deep.equal({"path":false,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_Gboj))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_Xgqz))).to.deep.equal({"path":false,"stack":[],"methods":{}})

		try {
			const _method_function_jPdy = await _Route_object_kFXo.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_fXKs = {
		
	}
		const _Route_object_cAih = new Route(_path_object_fXKs)
		const _all_function_Ylhf = await _Route_object_cAih.all()

		expect(JSON.parse(JSON.stringify(_Route_object_cAih))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_Ylhf))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_fXKs))).to.deep.equal({})

		try {
			const _method_function_kuAe = await _Route_object_cAih.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_pTwP = []
		const _Route_object_mwTO = new Route(_path_array_pTwP)

		expect(JSON.parse(JSON.stringify(_Route_object_mwTO))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_pTwP))).to.deep.equal([])

		try {
			const _method_function_aBMX = await _Route_object_mwTO.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_XlRm = new Route()
		const __options_function_RevM = await _Route_object_XlRm._options()

		expect(JSON.parse(JSON.stringify(_Route_object_XlRm))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_RevM))).to.deep.equal([])

		try {
			const _method_function_FTmL = await _Route_object_XlRm.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_VmPB = "jz8EL1EGCfP7MPm7N2nsOMqgv7l7VGzxuXRCvE";
		const _Route_object_ycPw = new Route(_path_string_VmPB)

		expect(JSON.parse(JSON.stringify(_Route_object_ycPw))).to.deep.equal({"path":"jz8EL1EGCfP7MPm7N2nsOMqgv7l7VGzxuXRCvE","stack":[],"methods":{}})

		try {
			const _method_function_HAoG = await _Route_object_ycPw.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_qarc = "zQSiLI2tyf3Upgrb2YMDUDPGmiUPtYju8LP2BU95mPmGgQwzEPsj2MLHJH5rr";
		const _Route_object_gaMT = new Route(_path_string_qarc)

		expect(JSON.parse(JSON.stringify(_Route_object_gaMT))).to.deep.equal({"path":"zQSiLI2tyf3Upgrb2YMDUDPGmiUPtYju8LP2BU95mPmGgQwzEPsj2MLHJH5rr","stack":[],"methods":{}})

		try {
			const _method_function_gdXn = await _Route_object_gaMT.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_ODuy = "OrH8o09MBOT83hew";
		const _Route_object_GWkc = new Route(_path_string_ODuy)

		expect(JSON.parse(JSON.stringify(_Route_object_GWkc))).to.deep.equal({"path":"OrH8o09MBOT83hew","stack":[],"methods":{}})

		try {
			const _method_function_ogBx = await _Route_object_GWkc.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_QDWc = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_QDWc))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_JIdK = await _Route_object_QDWc.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_brQT = {
		
	}
		const _Route_object_TEMr = new Route(_path_object_brQT)

		expect(JSON.parse(JSON.stringify(_Route_object_TEMr))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_brQT))).to.deep.equal({})

		try {
			const _method_function_UsAG = await _Route_object_TEMr.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_VExM = false;
		const _Route_object_mfaL = new Route(_path_boolean_VExM)

		expect(JSON.parse(JSON.stringify(_Route_object_mfaL))).to.deep.equal({"path":false,"stack":[],"methods":{}})

		try {
			const _method_function_ADhv = await _Route_object_mfaL.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_LqpL = 0.3717911369298914;
		const _Route_object_TLSi = new Route(_path_numeric_LqpL)
		const _all_function_iRVA = await _Route_object_TLSi.all()

		expect(JSON.parse(JSON.stringify(_Route_object_TLSi))).to.deep.equal({"path":0.3717911369298914,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_iRVA))).to.deep.equal({"path":0.3717911369298914,"stack":[],"methods":{}})

		try {
			const _method_function_fdVn = await _Route_object_TLSi.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_iCTN = () => { };
		const _Route_object_ZWtC = new Route(_path_function_iCTN)

		expect(JSON.parse(JSON.stringify(_Route_object_ZWtC))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_fdGI = await _Route_object_ZWtC.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_kyVv = -5.684796622072867;
		const _Route_object_GyyS = new Route(_path_numeric_kyVv)

		expect(JSON.parse(JSON.stringify(_Route_object_GyyS))).to.deep.equal({"path":-5.684796622072867,"stack":[],"methods":{}})

		try {
			const _method_function_mmRs = await _Route_object_GyyS.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_Xcom = []
		const _Route_object_xmzl = new Route(_path_array_Xcom)
		const _method_string_zynh = "PwhbLJt0x9Bw6uuIRH9LuCTP4qfIPvI4PM5upiSeZg7xwOGE6SRvACxSFloDW4U3qGqmz";
		const __handles_method_function_VtIv = await _Route_object_xmzl._handles_method(_method_string_zynh)
		const _method_string_omXG = "UfOQIaVwcDgD2sS4qEzPWcE649SD39re0fGzhjsKS8HPWGVgaga9NR5R";
		const __handles_method_function_FWdX = await _Route_object_xmzl._handles_method(_method_string_omXG)

		expect(JSON.parse(JSON.stringify(_Route_object_xmzl))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(__handles_method_function_FWdX).to.equal(false)
		expect(__handles_method_function_VtIv).to.equal(false)
		expect(JSON.parse(JSON.stringify(_path_array_Xcom))).to.deep.equal([])

		try {
			const _method_function_gIPI = await _Route_object_xmzl.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_nekf = "jlHNgKcpBECgldzPVfe1xC5cJlpJuDE3TfBykJRW5dyLWkY3yexWoehhfyPYBBqv5Gb1eBlncjnFu9F";
		const _Route_object_dNDs = new Route(_path_string_nekf)

		expect(JSON.parse(JSON.stringify(_Route_object_dNDs))).to.deep.equal({"path":"jlHNgKcpBECgldzPVfe1xC5cJlpJuDE3TfBykJRW5dyLWkY3yexWoehhfyPYBBqv5Gb1eBlncjnFu9F","stack":[],"methods":{}})

		try {
			const _method_function_LNcN = await _Route_object_dNDs.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_ueaV = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_ueaV))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_UsrX = await _Route_object_ueaV.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_MroT = "RUJDI";
		const _Route_object_hGlS = new Route(_path_string_MroT)

		expect(JSON.parse(JSON.stringify(_Route_object_hGlS))).to.deep.equal({"path":"RUJDI","stack":[],"methods":{}})

		try {
			const _method_function_UAhL = await _Route_object_hGlS.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_oUty = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_oUty))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_baUM = await _Route_object_oUty.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_AFhH = {
		
	}
		const _Route_object_FrTn = new Route(_path_object_AFhH)
		const _all_function_fJdb = await _Route_object_FrTn.all()
		const __options_function_CeXK = await _Route_object_FrTn._options()

		expect(JSON.parse(JSON.stringify(_Route_object_FrTn))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_CeXK))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_fJdb))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_AFhH))).to.deep.equal({})

		try {
			const _method_function_bAjH = await _Route_object_FrTn.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_BYfi = {
		
	}
		const _Route_object_Evhf = new Route(_path_object_BYfi)

		expect(JSON.parse(JSON.stringify(_Route_object_Evhf))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_BYfi))).to.deep.equal({})

		try {
			const _method_function_dVXa = await _Route_object_Evhf.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_OSZr = "O4aDqbnQNYUkUgRTw";
		const _Route_object_sCGN = new Route(_path_string_OSZr)
		const _method_string_AYXR = "wQ1b2RKisRTcGrK6BwG5toYfMXgRcscdTc";
		const __handles_method_function_bejg = await _Route_object_sCGN._handles_method(_method_string_AYXR)
		const _all_function_mWEp = await _Route_object_sCGN.all()

		expect(JSON.parse(JSON.stringify(_Route_object_sCGN))).to.deep.equal({"path":"O4aDqbnQNYUkUgRTw","stack":[],"methods":{}})
		expect(__handles_method_function_bejg).to.equal(false)
		expect(JSON.parse(JSON.stringify(_all_function_mWEp))).to.deep.equal({"path":"O4aDqbnQNYUkUgRTw","stack":[],"methods":{}})

		try {
			const _method_function_fyMp = await _Route_object_sCGN.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_TrvE = undefined;
		const _Route_object_CmKP = new Route(_path_undefined_TrvE)
		const _all_function_khLW = await _Route_object_CmKP.all()

		expect(JSON.parse(JSON.stringify(_Route_object_CmKP))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_khLW))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_oRRJ = await _Route_object_CmKP.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_NBFo = undefined;
		const _Route_object_wpjw = new Route(_path_undefined_NBFo)
		const __options_function_aYYa = await _Route_object_wpjw._options()

		expect(JSON.parse(JSON.stringify(_Route_object_wpjw))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_aYYa))).to.deep.equal([])

		try {
			const _method_function_EelH = await _Route_object_wpjw.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_JQfR = []
		const _Route_object_sbxj = new Route(_path_array_JQfR)
		const __options_function_gKFI = await _Route_object_sbxj._options()
		const __options_function_Oeqn = await _Route_object_sbxj._options()

		expect(JSON.parse(JSON.stringify(_Route_object_sbxj))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_Oeqn))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(__options_function_gKFI))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_path_array_JQfR))).to.deep.equal([])

		try {
			const _method_function_Qzyt = await _Route_object_sbxj.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_QVjA = "EnqnGbJUEHcJSDOEFp5n9tV9roQN";
		const _Route_object_Exfj = new Route(_path_string_QVjA)

		expect(JSON.parse(JSON.stringify(_Route_object_Exfj))).to.deep.equal({"path":"EnqnGbJUEHcJSDOEFp5n9tV9roQN","stack":[],"methods":{}})

		try {
			const _method_function_VZDB = await _Route_object_Exfj.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_qmgY = "r3nZ3j3tkuK6p85g3dv2cxzl8ZYv16qxrDqB1xavFzkhnfFsPfVFqluT1MUxaUVkMr4Oj2HlWjzchlQafrdqUn54ZYP1GfJVxT";
		const _Route_object_LHDR = new Route(_path_string_qmgY)
		const _all_function_KNsw = await _Route_object_LHDR.all()

		expect(JSON.parse(JSON.stringify(_Route_object_LHDR))).to.deep.equal({"path":"r3nZ3j3tkuK6p85g3dv2cxzl8ZYv16qxrDqB1xavFzkhnfFsPfVFqluT1MUxaUVkMr4Oj2HlWjzchlQafrdqUn54ZYP1GfJVxT","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_KNsw))).to.deep.equal({"path":"r3nZ3j3tkuK6p85g3dv2cxzl8ZYv16qxrDqB1xavFzkhnfFsPfVFqluT1MUxaUVkMr4Oj2HlWjzchlQafrdqUn54ZYP1GfJVxT","stack":[],"methods":{}})

		try {
			const _method_function_lWhg = await _Route_object_LHDR.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_Rrgx = new Route()
		const __options_function_OaYb = await _Route_object_Rrgx._options()
		const __options_function_wVXY = await _Route_object_Rrgx._options()

		expect(JSON.parse(JSON.stringify(_Route_object_Rrgx))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_OaYb))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(__options_function_wVXY))).to.deep.equal([])

		try {
			const _method_function_LTgO = await _Route_object_Rrgx.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_oUZH = "8KhwImmRTv20Xl0d65CAvF8dBw6Epm1j2Hc1uDk94Y";
		const _Route_object_PKEC = new Route(_path_string_oUZH)

		expect(JSON.parse(JSON.stringify(_Route_object_PKEC))).to.deep.equal({"path":"8KhwImmRTv20Xl0d65CAvF8dBw6Epm1j2Hc1uDk94Y","stack":[],"methods":{}})

		try {
			const _method_function_lvQz = await _Route_object_PKEC.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_Udxb = {
		
	}
		const _Route_object_cgSY = new Route(_path_object_Udxb)

		expect(JSON.parse(JSON.stringify(_Route_object_cgSY))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_Udxb))).to.deep.equal({})

		try {
			const _method_function_bXod = await _Route_object_cgSY.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_eQvZ = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_eQvZ))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_feNo = await _Route_object_eQvZ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_oZTZ = 9.340101080461086;
		const _Route_object_OOLl = new Route(_path_numeric_oZTZ)
		const _all_function_bhad = await _Route_object_OOLl.all()

		expect(JSON.parse(JSON.stringify(_Route_object_OOLl))).to.deep.equal({"path":9.340101080461086,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_bhad))).to.deep.equal({"path":9.340101080461086,"stack":[],"methods":{}})

		try {
			const _method_function_kzfk = await _Route_object_OOLl.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_Oxpy = null;
		const _Route_object_THjl = new Route(_path_null_Oxpy)

		expect(JSON.parse(JSON.stringify(_Route_object_THjl))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_aFmj = await _Route_object_THjl.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_VPlC = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_VPlC))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_jKjP = await _Route_object_VPlC.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_Enva = () => { };
		const _Route_object_zULT = new Route(_path_function_Enva)

		expect(JSON.parse(JSON.stringify(_Route_object_zULT))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_nWbG = await _Route_object_zULT.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_DsyX = null;
		const _Route_object_CSKO = new Route(_path_null_DsyX)
		const __options_function_ecCr = await _Route_object_CSKO._options()

		expect(JSON.parse(JSON.stringify(_Route_object_CSKO))).to.deep.equal({"path":null,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_ecCr))).to.deep.equal([])

		try {
			const _method_function_odtM = await _Route_object_CSKO.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_xzVe = false;
		const _Route_object_PPWx = new Route(_path_boolean_xzVe)
		const _all_function_JcTR = await _Route_object_PPWx.all()
		const _method_string_FKML = "Jme4tvIdDumyQcP1hXds4aY5YTdQ0ftIEOTq4t93Ub2Jwd99RvRTnR";
		const __handles_method_function_bUSN = await _Route_object_PPWx._handles_method(_method_string_FKML)
		const _all_function_oeRJ = await _Route_object_PPWx.all()
		const _all_function_nHBN = await _Route_object_PPWx.all()

		expect(JSON.parse(JSON.stringify(_Route_object_PPWx))).to.deep.equal({"path":false,"stack":[],"methods":{}})
		expect(__handles_method_function_bUSN).to.equal(false)
		expect(JSON.parse(JSON.stringify(_all_function_JcTR))).to.deep.equal({"path":false,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_nHBN))).to.deep.equal({"path":false,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_oeRJ))).to.deep.equal({"path":false,"stack":[],"methods":{}})

		try {
			const _method_function_lgbc = await _Route_object_PPWx.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_BWUW = 9.19259582960381;
		const _Route_object_JeEo = new Route(_path_numeric_BWUW)

		expect(JSON.parse(JSON.stringify(_Route_object_JeEo))).to.deep.equal({"path":9.19259582960381,"stack":[],"methods":{}})

		try {
			const _method_function_wFbP = await _Route_object_JeEo.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_gjkM = undefined;
		const _Route_object_TpfK = new Route(_path_undefined_gjkM)
		const _all_function_birA = await _Route_object_TpfK.all()

		expect(JSON.parse(JSON.stringify(_Route_object_TpfK))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_birA))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_fBfE = await _Route_object_TpfK.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_CDmC = () => { };
		const _Route_object_JCmR = new Route(_path_function_CDmC)
		const __options_function_wAlv = await _Route_object_JCmR._options()

		expect(JSON.parse(JSON.stringify(_Route_object_JCmR))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_wAlv))).to.deep.equal([])

		try {
			const _method_function_Jcmt = await _Route_object_JCmR.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_gkiI = "UfPE0wu4tOsVEmClToxGCwk6pnT56sn239qTD8ecfIBZOWkv11Ct";
		const _Route_object_ogiO = new Route(_path_string_gkiI)

		expect(JSON.parse(JSON.stringify(_Route_object_ogiO))).to.deep.equal({"path":"UfPE0wu4tOsVEmClToxGCwk6pnT56sn239qTD8ecfIBZOWkv11Ct","stack":[],"methods":{}})

		try {
			const _method_function_gpgp = await _Route_object_ogiO.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_ZYJj = {
		
	}
		const _Route_object_vhJc = new Route(_path_object_ZYJj)

		expect(JSON.parse(JSON.stringify(_Route_object_vhJc))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_ZYJj))).to.deep.equal({})

		try {
			const _method_function_woaM = await _Route_object_vhJc.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_Ipgj = new Route()
		const _all_function_GlUC = await _Route_object_Ipgj.all()

		expect(JSON.parse(JSON.stringify(_Route_object_Ipgj))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_GlUC))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_nCVZ = await _Route_object_Ipgj.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_NBAU = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_NBAU))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_WLpG = await _Route_object_NBAU.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_hEva = null;
		const _Route_object_Nxkr = new Route(_path_null_hEva)

		expect(JSON.parse(JSON.stringify(_Route_object_Nxkr))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_WFTB = await _Route_object_Nxkr.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_PpXI = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_PpXI))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_PjkU = await _Route_object_PpXI.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_ssxR = () => { };
		const _Route_object_RPTv = new Route(_path_function_ssxR)

		expect(JSON.parse(JSON.stringify(_Route_object_RPTv))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_sDsj = await _Route_object_RPTv.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_jdes = []
		const _Route_object_lzbQ = new Route(_path_array_jdes)

		expect(JSON.parse(JSON.stringify(_Route_object_lzbQ))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_jdes))).to.deep.equal([])

		try {
			const _method_function_iXgp = await _Route_object_lzbQ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_Qjxh = new Route()
		const _req_undefined_XBTu = undefined;
		const _res_string_eQkC = "aOs1KcgysoWzih";
		const _done_function_mirf = () => { };
		const _dispatch_function_FcYr = await _Route_object_Qjxh.dispatch(_req_undefined_XBTu, _res_string_eQkC, _done_function_mirf)

		expect(JSON.parse(JSON.stringify(_Route_object_Qjxh))).to.deep.equal({"stack":[],"methods":{}})
		expect(_dispatch_function_FcYr).to.equal(undefined)

		try {
			const _method_function_MNOF = await _Route_object_Qjxh.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_ymBW = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_ymBW))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_XGom = await _Route_object_ymBW.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_LYMr = 5.765983106944697;
		const _Route_object_vNDS = new Route(_path_numeric_LYMr)

		expect(JSON.parse(JSON.stringify(_Route_object_vNDS))).to.deep.equal({"path":5.765983106944697,"stack":[],"methods":{}})

		try {
			const _method_function_liui = await _Route_object_vNDS.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_vBBI = {
		
	}
		const _Route_object_hCcq = new Route(_path_object_vBBI)
		const _all_function_Hszo = await _Route_object_hCcq.all()
		const __options_function_bjPz = await _Route_object_hCcq._options()

		expect(JSON.parse(JSON.stringify(_Route_object_hCcq))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_bjPz))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_Hszo))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_vBBI))).to.deep.equal({})

		try {
			const _method_function_ZiyA = await _Route_object_hCcq.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_eLvQ = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_eLvQ))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_iTXV = await _Route_object_eLvQ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_LsyM = {
		
	}
		const _Route_object_GPJp = new Route(_path_object_LsyM)
		const __options_function_aoVT = await _Route_object_GPJp._options()
		const _all_function_Einh = await _Route_object_GPJp.all()

		expect(JSON.parse(JSON.stringify(_Route_object_GPJp))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_aoVT))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_Einh))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_LsyM))).to.deep.equal({})

		try {
			const _method_function_Zkul = await _Route_object_GPJp.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_zUNa = 1.4168442645428687;
		const _Route_object_nkhD = new Route(_path_numeric_zUNa)
		const _all_function_POur = await _Route_object_nkhD.all()
		const _all_function_lWKi = await _Route_object_nkhD.all()

		expect(JSON.parse(JSON.stringify(_Route_object_nkhD))).to.deep.equal({"path":1.4168442645428687,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_POur))).to.deep.equal({"path":1.4168442645428687,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_lWKi))).to.deep.equal({"path":1.4168442645428687,"stack":[],"methods":{}})

		try {
			const _method_function_edZF = await _Route_object_nkhD.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_jFcj = null;
		const _Route_object_nZeU = new Route(_path_null_jFcj)

		expect(JSON.parse(JSON.stringify(_Route_object_nZeU))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_WKFn = await _Route_object_nZeU.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_pRna = 3.2096163164209948;
		const _Route_object_ptxl = new Route(_path_numeric_pRna)
		const __options_function_ksUw = await _Route_object_ptxl._options()

		expect(JSON.parse(JSON.stringify(_Route_object_ptxl))).to.deep.equal({"path":3.2096163164209948,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_ksUw))).to.deep.equal([])

		try {
			const _method_function_tdKX = await _Route_object_ptxl.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_KXBf = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_KXBf))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_qDwX = await _Route_object_KXBf.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_zOgC = []
		const _Route_object_dWFY = new Route(_path_array_zOgC)

		expect(JSON.parse(JSON.stringify(_Route_object_dWFY))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_zOgC))).to.deep.equal([])

		try {
			const _method_function_ryTE = await _Route_object_dWFY.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_Kjgb = () => { };
		const _Route_object_hgWd = new Route(_path_function_Kjgb)
		const _all_function_Utai = await _Route_object_hgWd.all()
		const __options_function_zzyy = await _Route_object_hgWd._options()

		expect(JSON.parse(JSON.stringify(_Route_object_hgWd))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_zzyy))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_Utai))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_irNS = await _Route_object_hgWd.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_dSth = {
		
	}
		const _Route_object_Axrh = new Route(_path_object_dSth)

		expect(JSON.parse(JSON.stringify(_Route_object_Axrh))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_dSth))).to.deep.equal({})

		try {
			const _method_function_DvyY = await _Route_object_Axrh.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_NdSk = {
		
	}
		const _Route_object_IWts = new Route(_path_object_NdSk)

		expect(JSON.parse(JSON.stringify(_Route_object_IWts))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_NdSk))).to.deep.equal({})

		try {
			const _method_function_sWju = await _Route_object_IWts.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_BZtg = null;
		const _Route_object_NDAm = new Route(_path_null_BZtg)

		expect(JSON.parse(JSON.stringify(_Route_object_NDAm))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_pYBj = await _Route_object_NDAm.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_iAOv = () => { };
		const _Route_object_Mcqt = new Route(_path_function_iAOv)

		expect(JSON.parse(JSON.stringify(_Route_object_Mcqt))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_dIxw = await _Route_object_Mcqt.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_gpCx = true;
		const _Route_object_IZRC = new Route(_path_boolean_gpCx)

		expect(JSON.parse(JSON.stringify(_Route_object_IZRC))).to.deep.equal({"path":true,"stack":[],"methods":{}})

		try {
			const _method_function_CJCw = await _Route_object_IZRC.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_tJQT = []
		const _Route_object_LEjO = new Route(_path_array_tJQT)
		const __options_function_EKlA = await _Route_object_LEjO._options()

		expect(JSON.parse(JSON.stringify(_Route_object_LEjO))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_EKlA))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_path_array_tJQT))).to.deep.equal([])

		try {
			const _method_function_vlwn = await _Route_object_LEjO.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_SLlP = "oCtDZQkabShCaf9vZAtRAEVkzrGXy58iXlabYa91MrwNPR";
		const _Route_object_NXEm = new Route(_path_string_SLlP)

		expect(JSON.parse(JSON.stringify(_Route_object_NXEm))).to.deep.equal({"path":"oCtDZQkabShCaf9vZAtRAEVkzrGXy58iXlabYa91MrwNPR","stack":[],"methods":{}})

		try {
			const _method_function_oEBs = await _Route_object_NXEm.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_RbJF = "iKBPrNpJHTFjuY9dWt6nbMUSdyiIT3VY";
		const _Route_object_mFBz = new Route(_path_string_RbJF)

		expect(JSON.parse(JSON.stringify(_Route_object_mFBz))).to.deep.equal({"path":"iKBPrNpJHTFjuY9dWt6nbMUSdyiIT3VY","stack":[],"methods":{}})

		try {
			const _method_function_RMum = await _Route_object_mFBz.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_SBEj = 8.548982254387251;
		const _Route_object_ewEC = new Route(_path_numeric_SBEj)

		expect(JSON.parse(JSON.stringify(_Route_object_ewEC))).to.deep.equal({"path":8.548982254387251,"stack":[],"methods":{}})

		try {
			const _method_function_CsnG = await _Route_object_ewEC.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_iMAj = "z1h5stvn2GB8Ralzoh4hx5jNa";
		const _Route_object_DwpO = new Route(_path_string_iMAj)

		expect(JSON.parse(JSON.stringify(_Route_object_DwpO))).to.deep.equal({"path":"z1h5stvn2GB8Ralzoh4hx5jNa","stack":[],"methods":{}})

		try {
			const _method_function_NhdL = await _Route_object_DwpO.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_mBEB = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_mBEB))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_KQvJ = await _Route_object_mBEB.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_VQoA = undefined;
		const _Route_object_qmhU = new Route(_path_undefined_VQoA)

		expect(JSON.parse(JSON.stringify(_Route_object_qmhU))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_AOWo = await _Route_object_qmhU.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_Lerx = {
		
	}
		const _Route_object_Yecu = new Route(_path_object_Lerx)

		expect(JSON.parse(JSON.stringify(_Route_object_Yecu))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_Lerx))).to.deep.equal({})

		try {
			const _method_function_xHrX = await _Route_object_Yecu.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_RFJX = "LCLHdC4bfqHVrySGDY8vh7u35csOcd7M7EYo6w6eN64SluVmdBGze";
		const _Route_object_odsl = new Route(_path_string_RFJX)

		expect(JSON.parse(JSON.stringify(_Route_object_odsl))).to.deep.equal({"path":"LCLHdC4bfqHVrySGDY8vh7u35csOcd7M7EYo6w6eN64SluVmdBGze","stack":[],"methods":{}})

		try {
			const _method_function_ayUa = await _Route_object_odsl.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_YLhL = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_YLhL))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_XkGe = await _Route_object_YLhL.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_aTym = []
		const _Route_object_pMgJ = new Route(_path_array_aTym)

		expect(JSON.parse(JSON.stringify(_Route_object_pMgJ))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_aTym))).to.deep.equal([])

		try {
			const _method_function_wjFM = await _Route_object_pMgJ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_Luxs = {
		
	}
		const _Route_object_kikE = new Route(_path_object_Luxs)

		expect(JSON.parse(JSON.stringify(_Route_object_kikE))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_Luxs))).to.deep.equal({})

		try {
			const _method_function_XmzU = await _Route_object_kikE.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_FSin = "Uh6HpA47ZjTHj";
		const _Route_object_AWzH = new Route(_path_string_FSin)

		expect(JSON.parse(JSON.stringify(_Route_object_AWzH))).to.deep.equal({"path":"Uh6HpA47ZjTHj","stack":[],"methods":{}})

		try {
			const _method_function_kIuR = await _Route_object_AWzH.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_cGdc = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_cGdc))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_unZt = await _Route_object_cGdc.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_QiuR = "l3zIhgLTebfWlAgQxuHB6rjGBCnv5fsj1E10YsB5crdzU9HwTzOC2oogO59kvFNSIUlhwrW3MgjiazfLGWhXB";
		const _Route_object_Yefl = new Route(_path_string_QiuR)

		expect(JSON.parse(JSON.stringify(_Route_object_Yefl))).to.deep.equal({"path":"l3zIhgLTebfWlAgQxuHB6rjGBCnv5fsj1E10YsB5crdzU9HwTzOC2oogO59kvFNSIUlhwrW3MgjiazfLGWhXB","stack":[],"methods":{}})

		try {
			const _method_function_pfcS = await _Route_object_Yefl.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_fgyd = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_fgyd))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_rFSh = await _Route_object_fgyd.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_zqvv = false;
		const _Route_object_ouin = new Route(_path_boolean_zqvv)

		expect(JSON.parse(JSON.stringify(_Route_object_ouin))).to.deep.equal({"path":false,"stack":[],"methods":{}})

		try {
			const _method_function_WHAz = await _Route_object_ouin.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_lkoX = {
		
	}
		const _Route_object_mLeo = new Route(_path_object_lkoX)
		const __options_function_oGlf = await _Route_object_mLeo._options()
		const __options_function_DOXG = await _Route_object_mLeo._options()

		expect(JSON.parse(JSON.stringify(_Route_object_mLeo))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_DOXG))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(__options_function_oGlf))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_path_object_lkoX))).to.deep.equal({})

		try {
			const _method_function_RXMG = await _Route_object_mLeo.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_gFmv = {
		
	}
		const _Route_object_iIah = new Route(_path_object_gFmv)

		expect(JSON.parse(JSON.stringify(_Route_object_iIah))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_gFmv))).to.deep.equal({})

		try {
			const _method_function_MNvP = await _Route_object_iIah.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_NyIV = []
		const _Route_object_wglL = new Route(_path_array_NyIV)

		expect(JSON.parse(JSON.stringify(_Route_object_wglL))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_NyIV))).to.deep.equal([])

		try {
			const _method_function_IvpQ = await _Route_object_wglL.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_RObw = "fWxrqPCCubhqb9fzcZEpfvH52XmwCvBJOLHuCWkueA1dOiZ2GwxTKO1O99TnNdfgyqlwm9MlsBFKCCEg7S3QJBJSjoLL";
		const _Route_object_WHVk = new Route(_path_string_RObw)

		expect(JSON.parse(JSON.stringify(_Route_object_WHVk))).to.deep.equal({"path":"fWxrqPCCubhqb9fzcZEpfvH52XmwCvBJOLHuCWkueA1dOiZ2GwxTKO1O99TnNdfgyqlwm9MlsBFKCCEg7S3QJBJSjoLL","stack":[],"methods":{}})

		try {
			const _method_function_WzUF = await _Route_object_WHVk.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_uDHa = 4.792958904896242;
		const _Route_object_JNjw = new Route(_path_numeric_uDHa)
		const __options_function_lTmX = await _Route_object_JNjw._options()

		expect(JSON.parse(JSON.stringify(_Route_object_JNjw))).to.deep.equal({"path":4.792958904896242,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_lTmX))).to.deep.equal([])

		try {
			const _method_function_AZzW = await _Route_object_JNjw.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_OTbS = () => { };
		const _Route_object_UDgc = new Route(_path_function_OTbS)

		expect(JSON.parse(JSON.stringify(_Route_object_UDgc))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_iCxi = await _Route_object_UDgc.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_xLes = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_xLes))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_lvvb = await _Route_object_xLes.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_JWJq = []
		const _Route_object_kcku = new Route(_path_array_JWJq)
		const __options_function_PbCw = await _Route_object_kcku._options()

		expect(JSON.parse(JSON.stringify(_Route_object_kcku))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_PbCw))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_path_array_JWJq))).to.deep.equal([])

		try {
			const _method_function_XZtf = await _Route_object_kcku.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_DhEx = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_DhEx))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_hiWM = await _Route_object_DhEx.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_JDVo = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_JDVo))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_HQOh = await _Route_object_JDVo.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_HohV = []
		const _Route_object_oqRR = new Route(_path_array_HohV)
		const __options_function_ooWh = await _Route_object_oqRR._options()
		const __options_function_upfn = await _Route_object_oqRR._options()

		expect(JSON.parse(JSON.stringify(_Route_object_oqRR))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_ooWh))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(__options_function_upfn))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_path_array_HohV))).to.deep.equal([])

		try {
			const _method_function_VuGO = await _Route_object_oqRR.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_fAII = "CmLfJS2LVsaFlnzslP8hAe58tmKlSbHzaBx1AUX69YOE5egtWJ15QKMb9hS8D9kBdh3cW5HbkKwNf";
		const _Route_object_lXKP = new Route(_path_string_fAII)

		expect(JSON.parse(JSON.stringify(_Route_object_lXKP))).to.deep.equal({"path":"CmLfJS2LVsaFlnzslP8hAe58tmKlSbHzaBx1AUX69YOE5egtWJ15QKMb9hS8D9kBdh3cW5HbkKwNf","stack":[],"methods":{}})

		try {
			const _method_function_eLdD = await _Route_object_lXKP.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_TICp = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_TICp))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_zMjz = await _Route_object_TICp.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_XBEO = "SQYBp9WumymVTdw7NlRjN5BHHnE4jXg5QwbqLSh8qUHaKh";
		const _Route_object_icZh = new Route(_path_string_XBEO)

		expect(JSON.parse(JSON.stringify(_Route_object_icZh))).to.deep.equal({"path":"SQYBp9WumymVTdw7NlRjN5BHHnE4jXg5QwbqLSh8qUHaKh","stack":[],"methods":{}})

		try {
			const _method_function_tcSS = await _Route_object_icZh.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_UiBW = {
		
	}
		const _Route_object_FhBT = new Route(_path_object_UiBW)
		const _all_function_WPQP = await _Route_object_FhBT.all()

		expect(JSON.parse(JSON.stringify(_Route_object_FhBT))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_WPQP))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_UiBW))).to.deep.equal({})

		try {
			const _method_function_irjO = await _Route_object_FhBT.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_mtel = () => { };
		const _Route_object_dGLj = new Route(_path_function_mtel)

		expect(JSON.parse(JSON.stringify(_Route_object_dGLj))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_avKc = await _Route_object_dGLj.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_VYpG = () => { };
		const _Route_object_iEBe = new Route(_path_function_VYpG)
		const __options_function_wgCi = await _Route_object_iEBe._options()
		const _all_function_GWZp = await _Route_object_iEBe.all()

		expect(JSON.parse(JSON.stringify(_Route_object_iEBe))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_wgCi))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_GWZp))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_wsHc = await _Route_object_iEBe.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_SETW = "DrQ6iMusGf3YGy3qrKy4cevsmtQp91WXxgM";
		const _Route_object_Lzey = new Route(_path_string_SETW)

		expect(JSON.parse(JSON.stringify(_Route_object_Lzey))).to.deep.equal({"path":"DrQ6iMusGf3YGy3qrKy4cevsmtQp91WXxgM","stack":[],"methods":{}})

		try {
			const _method_function_iGMi = await _Route_object_Lzey.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_LmMQ = null;
		const _Route_object_dpqG = new Route(_path_null_LmMQ)

		expect(JSON.parse(JSON.stringify(_Route_object_dpqG))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_EsgN = await _Route_object_dpqG.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_KyXl = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_KyXl))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_GscQ = await _Route_object_KyXl.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_numeric_sdiw = -6.403342290786175;
		const _Route_object_elEm = new Route(_path_numeric_sdiw)
		const _all_function_hfZX = await _Route_object_elEm.all()
		const _all_function_NRWn = await _Route_object_elEm.all()

		expect(JSON.parse(JSON.stringify(_Route_object_elEm))).to.deep.equal({"path":-6.403342290786175,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_NRWn))).to.deep.equal({"path":-6.403342290786175,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_hfZX))).to.deep.equal({"path":-6.403342290786175,"stack":[],"methods":{}})

		try {
			const _method_function_TCqG = await _Route_object_elEm.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_xxel = {
		
	}
		const _Route_object_aWXk = new Route(_path_object_xxel)

		expect(JSON.parse(JSON.stringify(_Route_object_aWXk))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_xxel))).to.deep.equal({})

		try {
			const _method_function_igiB = await _Route_object_aWXk.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_gDEN = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_gDEN))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_Ulfa = await _Route_object_gDEN.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_YZid = new Route()
		const _all_function_YwBp = await _Route_object_YZid.all()

		expect(JSON.parse(JSON.stringify(_Route_object_YZid))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_YwBp))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_WoPM = await _Route_object_YZid.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_NOHR = "ajAjGWE2BDv0BsCHtRHnu1wKl6ArIqs6fe07AbG1elMQ8gfg3EornTv7YzJoDnX2byYmQ29vtiNqYh9qj6o4cSPBNc";
		const _Route_object_HuNn = new Route(_path_string_NOHR)
		const __options_function_hsmw = await _Route_object_HuNn._options()
		const _all_function_JZDb = await _Route_object_HuNn.all()
		const __options_function_LRwi = await _Route_object_HuNn._options()

		expect(JSON.parse(JSON.stringify(_Route_object_HuNn))).to.deep.equal({"path":"ajAjGWE2BDv0BsCHtRHnu1wKl6ArIqs6fe07AbG1elMQ8gfg3EornTv7YzJoDnX2byYmQ29vtiNqYh9qj6o4cSPBNc","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_LRwi))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(__options_function_hsmw))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_JZDb))).to.deep.equal({"path":"ajAjGWE2BDv0BsCHtRHnu1wKl6ArIqs6fe07AbG1elMQ8gfg3EornTv7YzJoDnX2byYmQ29vtiNqYh9qj6o4cSPBNc","stack":[],"methods":{}})

		try {
			const _method_function_MErM = await _Route_object_HuNn.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_eAqc = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_eAqc))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_Npdy = await _Route_object_eAqc.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_vmOc = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_vmOc))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_xcSN = await _Route_object_vmOc.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_sRFC = "lXLzF5t3BxGZoCcTs";
		const _Route_object_JBdD = new Route(_path_string_sRFC)

		expect(JSON.parse(JSON.stringify(_Route_object_JBdD))).to.deep.equal({"path":"lXLzF5t3BxGZoCcTs","stack":[],"methods":{}})

		try {
			const _method_function_UvDX = await _Route_object_JBdD.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_YUVS = "4wWKRNAGtneQNfa5NPBuUDkGtZLXTzsTNHPYq9NLSr2mgSTUGzbn831Z1D0i1yimQVvYXisjpw7M9WM7JoYCSLAYGE7nz";
		const _Route_object_lSvd = new Route(_path_string_YUVS)
		const _all_function_NLPR = await _Route_object_lSvd.all()

		expect(JSON.parse(JSON.stringify(_Route_object_lSvd))).to.deep.equal({"path":"4wWKRNAGtneQNfa5NPBuUDkGtZLXTzsTNHPYq9NLSr2mgSTUGzbn831Z1D0i1yimQVvYXisjpw7M9WM7JoYCSLAYGE7nz","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_NLPR))).to.deep.equal({"path":"4wWKRNAGtneQNfa5NPBuUDkGtZLXTzsTNHPYq9NLSr2mgSTUGzbn831Z1D0i1yimQVvYXisjpw7M9WM7JoYCSLAYGE7nz","stack":[],"methods":{}})

		try {
			const _method_function_BGgX = await _Route_object_lSvd.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_asxC = null;
		const _Route_object_zzqg = new Route(_path_null_asxC)
		const _req_numeric_DSsy = -5.773485209220587;
		const _res_function_pcfe = () => { };
		const _done_function_iRkt = () => { };
		const _dispatch_function_Xqnw = await _Route_object_zzqg.dispatch(_req_numeric_DSsy, _res_function_pcfe, _done_function_iRkt)

		expect(JSON.parse(JSON.stringify(_Route_object_zzqg))).to.deep.equal({"path":null,"stack":[],"methods":{}})
		expect(_dispatch_function_Xqnw).to.equal(undefined)

		try {
			const _method_function_ugGm = await _Route_object_zzqg.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_xfTg = new Route()
		const __options_function_yvDG = await _Route_object_xfTg._options()
		const _all_function_UAdY = await _Route_object_xfTg.all()

		expect(JSON.parse(JSON.stringify(_Route_object_xfTg))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_yvDG))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_UAdY))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_wzdo = await _Route_object_xfTg.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_FcDJ = []
		const _Route_object_JQKx = new Route(_path_array_FcDJ)

		expect(JSON.parse(JSON.stringify(_Route_object_JQKx))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_FcDJ))).to.deep.equal([])

		try {
			const _method_function_tKwA = await _Route_object_JQKx.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_FzEf = null;
		const _Route_object_bUNs = new Route(_path_null_FzEf)
		const _all_function_NUex = await _Route_object_bUNs.all()

		expect(JSON.parse(JSON.stringify(_Route_object_bUNs))).to.deep.equal({"path":null,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_NUex))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_ZufU = await _Route_object_bUNs.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_JZUo = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_JZUo))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_oUlW = await _Route_object_JZUo.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_object_rVen = {
		
	}
		const _Route_object_FRJM = new Route(_path_object_rVen)

		expect(JSON.parse(JSON.stringify(_Route_object_FRJM))).to.deep.equal({"path":{},"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_object_rVen))).to.deep.equal({})

		try {
			const _method_function_DGhr = await _Route_object_FRJM.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_jExn = null;
		const _Route_object_uJsO = new Route(_path_null_jExn)
		const __options_function_jGRw = await _Route_object_uJsO._options()

		expect(JSON.parse(JSON.stringify(_Route_object_uJsO))).to.deep.equal({"path":null,"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_jGRw))).to.deep.equal([])

		try {
			const _method_function_PDKS = await _Route_object_uJsO.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_null_qVQw = null;
		const _Route_object_sWdz = new Route(_path_null_qVQw)

		expect(JSON.parse(JSON.stringify(_Route_object_sWdz))).to.deep.equal({"path":null,"stack":[],"methods":{}})

		try {
			const _method_function_biZe = await _Route_object_sWdz.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_mlkk = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_mlkk))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_wefz = await _Route_object_mlkk.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_rETo = undefined;
		const _Route_object_ojsZ = new Route(_path_undefined_rETo)
		const __options_function_iCuV = await _Route_object_ojsZ._options()

		expect(JSON.parse(JSON.stringify(_Route_object_ojsZ))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_iCuV))).to.deep.equal([])

		try {
			const _method_function_kIbG = await _Route_object_ojsZ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_FBvg = new Route()
		const _req_numeric_IpyR = 6.568992863029571;
		const _res_string_woPo = "9hia4byz2dk44NMn3T4TRCIPOuuMMD5kwNo3a5WgXXUYKuZdSojyFN9gIO";
		const _done_function_Avbd = () => { };
		const _dispatch_function_XxaI = await _Route_object_FBvg.dispatch(_req_numeric_IpyR, _res_string_woPo, _done_function_Avbd)

		expect(JSON.parse(JSON.stringify(_Route_object_FBvg))).to.deep.equal({"stack":[],"methods":{}})
		expect(_dispatch_function_XxaI).to.equal(undefined)

		try {
			const _method_function_UMAv = await _Route_object_FBvg.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_MQit = "C";
		const _Route_object_lVSu = new Route(_path_string_MQit)
		const _all_function_jnkT = await _Route_object_lVSu.all()
		const __options_function_KKGn = await _Route_object_lVSu._options()

		expect(JSON.parse(JSON.stringify(_Route_object_lVSu))).to.deep.equal({"path":"C","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_KKGn))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_all_function_jnkT))).to.deep.equal({"path":"C","stack":[],"methods":{}})

		try {
			const _method_function_dIUc = await _Route_object_lVSu.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_UDce = () => { };
		const _Route_object_MlZT = new Route(_path_function_UDce)
		const _all_function_JTQx = await _Route_object_MlZT.all()

		expect(JSON.parse(JSON.stringify(_Route_object_MlZT))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_JTQx))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_gUCd = await _Route_object_MlZT.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_twjE = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_twjE))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_jvYt = await _Route_object_twjE.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_IWRg = false;
		const _Route_object_LQzs = new Route(_path_boolean_IWRg)

		expect(JSON.parse(JSON.stringify(_Route_object_LQzs))).to.deep.equal({"path":false,"stack":[],"methods":{}})

		try {
			const _method_function_aDGQ = await _Route_object_LQzs.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_array_drgB = []
		const _Route_object_jchU = new Route(_path_array_drgB)

		expect(JSON.parse(JSON.stringify(_Route_object_jchU))).to.deep.equal({"path":[],"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_path_array_drgB))).to.deep.equal([])

		try {
			const _method_function_LxXL = await _Route_object_jchU.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_CSsp = undefined;
		const _Route_object_WCYn = new Route(_path_undefined_CSsp)
		const _all_function_PGmn = await _Route_object_WCYn.all()

		expect(JSON.parse(JSON.stringify(_Route_object_WCYn))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_PGmn))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_dyVx = await _Route_object_WCYn.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_uVQO = new Route()
		const _all_function_odGY = await _Route_object_uVQO.all()

		expect(JSON.parse(JSON.stringify(_Route_object_uVQO))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(_all_function_odGY))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_vtUC = await _Route_object_uVQO.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_function_dgiv = () => { };
		const _Route_object_nuGO = new Route(_path_function_dgiv)

		expect(JSON.parse(JSON.stringify(_Route_object_nuGO))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_vdjz = await _Route_object_nuGO.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_string_jMYM = "oaY390u2LFRpWDHy1yNmmHG4voa2yijinvbnU5SO5P7FdHjIeQ2fAnXcQkEG7G7H2ce4M6VdR11NpxWy6DN6ebyrFItv0EjJBO";
		const _Route_object_YOSy = new Route(_path_string_jMYM)
		const __options_function_uUiK = await _Route_object_YOSy._options()

		expect(JSON.parse(JSON.stringify(_Route_object_YOSy))).to.deep.equal({"path":"oaY390u2LFRpWDHy1yNmmHG4voa2yijinvbnU5SO5P7FdHjIeQ2fAnXcQkEG7G7H2ce4M6VdR11NpxWy6DN6ebyrFItv0EjJBO","stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_uUiK))).to.deep.equal([])

		try {
			const _method_function_ZirN = await _Route_object_YOSy.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_undefined_AzHY = undefined;
		const _Route_object_LRgC = new Route(_path_undefined_AzHY)
		const __options_function_sUfX = await _Route_object_LRgC._options()

		expect(JSON.parse(JSON.stringify(_Route_object_LRgC))).to.deep.equal({"stack":[],"methods":{}})
		expect(JSON.parse(JSON.stringify(__options_function_sUfX))).to.deep.equal([])

		try {
			const _method_function_RVqO = await _Route_object_LRgC.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _path_boolean_bcmm = false;
		const _Route_object_iTWZ = new Route(_path_boolean_bcmm)

		expect(JSON.parse(JSON.stringify(_Route_object_iTWZ))).to.deep.equal({"path":false,"stack":[],"methods":{}})

		try {
			const _method_function_sJFi = await _Route_object_iTWZ.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _Route_object_Fqlp = new Route()

		expect(JSON.parse(JSON.stringify(_Route_object_Fqlp))).to.deep.equal({"stack":[],"methods":{}})

		try {
			const _method_function_IhZP = await _Route_object_Fqlp.method()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);
})