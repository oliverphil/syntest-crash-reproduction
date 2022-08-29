const run = async () => {const imp = await import('events');
console.log('events:eventNames');
var func = imp.default.eventNames || imp.default.prototype.eventNames;
const ctor = imp.default.constructor || imp.default.prototype.constructor;
const obj = createObject(ctor);
func = func.bind(obj);
const res = func();
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
