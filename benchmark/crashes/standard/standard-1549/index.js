const run = async () => {const imp = await import('eslint/lib/linter/code-path-analysis/code-path-analyzer.js');
console.log('eslint/lib/linter/code-path-analysis/code-path-analyzer.js:onLooped');
var func = imp.default.onLooped || imp.default.prototype.onLooped;
const ctor = imp.default.constructor || imp.default.prototype.constructor;
const obj = createObject(ctor);
func = func.bind(obj);
const res = func(1.7976931348623157e+308, -6);
console.log(res);
};
run().then(() => process.exit(0));
function createObject(ctor) {
  var obj, newObj;

  function fakeCtor() {}
  fakeCtor.prototype = ctor.prototype;
  obj = new fakeCtor();
  obj.constructor = ctor;
  newObj = ctor.apply(obj);
  if (newObj && (typeof newObj === 'object' || typeof newObj === 'function')) {
    return newObj;
  }
  return obj;
}
