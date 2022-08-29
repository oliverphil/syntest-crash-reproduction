const run = async () => {const imp = await import('eslint/lib/linter/linter.js');
console.log('eslint/lib/linter/linter.js:getLinterInternalSlots');
var func = imp.default.getLinterInternalSlots || imp.default.prototype.getLinterInternalSlots;
const ctor = imp.default.constructor || imp.default.prototype.constructor;
const obj = createObject(ctor);
func = func.bind(obj);
const res = func(1.7976931348623157e+308);
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
