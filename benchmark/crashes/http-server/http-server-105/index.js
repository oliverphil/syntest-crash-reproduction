const run = async () => {const imp = await import('module');
console.log('module:_compile');
var func = imp.default._compile || imp.default.prototype._compile;
const ctor = imp.default.constructor || imp.default.prototype.constructor;
const obj = createObject(ctor);
func = func.bind(obj);
const res = func(5e-324, -5);
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
